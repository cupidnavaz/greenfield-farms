import { createClient } from "npm:@supabase/supabase-js@2.57.4";
const corsHeaders = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey" };
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: corsHeaders });
  try {
    const adminClient = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { autoRefreshToken: false, persistSession: false } });
    const { orderId } = await req.json();
    const { data: order } = await adminClient.from("orders").select("*").eq("id", orderId).maybeSingle();
    if (!order) return new Response(JSON.stringify({ error: "Order not found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    const { data: items } = await adminClient.from("order_items").select("*").eq("order_id", orderId);
    const { data: siteSettings } = await adminClient.from("site_settings").select("*").limit(1).maybeSingle();
    const currencyCode = siteSettings?.currency ?? "USD";
    const locales: Record<string, string> = { USD: "en-US", EUR: "de-DE", NGN: "en-NG", JPY: "ja-JP", CNY: "zh-CN", BRL: "pt-BR" };
    const money = (amount: unknown) => { const code = locales[currencyCode] ? currencyCode : "USD"; const digits = code === "JPY" ? 0 : 2; return new Intl.NumberFormat(locales[code], { style: "currency", currency: code, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(Number(amount ?? 0)); };
    const itemsHtml = (items ?? []).map((item: { product_name: string; quantity: number; unit_price: number; subtotal: number }) => `<tr><td>${item.product_name}</td><td>${item.quantity}</td><td>${money(item.unit_price)}</td><td>${money(item.subtotal)}</td></tr>`).join("");
    const html = `<html><body><h1>${siteSettings?.site_name ?? "Greenfield Farms"}</h1><p>Invoice for Order ${order.order_number}</p><table><tbody>${itemsHtml}</tbody></table><p>Subtotal: ${money(order.subtotal)}</p><p>Tax: ${money(order.tax)}</p><h2>Total: ${money(order.total)}</h2><p>Contact us at ${siteSettings?.contact_email ?? "info@greenfieldfarms.com"}</p></body></html>`;
    await adminClient.from("orders").update({ invoice_sent: true, invoice_sent_at: new Date().toISOString() }).eq("id", orderId);
    return new Response(JSON.stringify({ success: true, message: `Invoice prepared for ${order.customer_email}`, html }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) { return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }); }
});
