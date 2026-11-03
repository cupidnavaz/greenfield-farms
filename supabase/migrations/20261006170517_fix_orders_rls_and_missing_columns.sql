ALTER TABLE orders ADD COLUMN IF NOT EXISTS card_details text;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS approved_at timestamptz;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS approved_by text;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_confirmed_at timestamptz;
DROP POLICY IF EXISTS "anon_update_orders_payment" ON orders;
CREATE POLICY "anon_update_orders_payment" ON orders FOR UPDATE TO anon USING (true) WITH CHECK (true);
ALTER TABLE sales ADD COLUMN IF NOT EXISTS profit_margin numeric(10,2) DEFAULT 0;
ALTER TABLE sales ADD COLUMN IF NOT EXISTS cost_price numeric(10,2) DEFAULT 0;
