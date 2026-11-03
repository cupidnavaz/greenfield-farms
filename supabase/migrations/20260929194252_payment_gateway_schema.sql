/*
# Payment Gateway Schema

## Overview
Adds payment settings table and new columns to the orders table to support
a multi-method payment gateway (bank transfer, card, PayPal, crypto) with
receipt uploads and admin confirmation workflow.
*/

CREATE TABLE IF NOT EXISTS payment_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bank_name text DEFAULT 'First National Bank',
  bank_account_name text DEFAULT 'Greenfield Farms LLC',
  bank_account_number text DEFAULT '0123456789',
  bank_routing_number text DEFAULT '021000021',
  bank_iban text,
  bank_swift_code text DEFAULT 'FNBAUS33',
  paypal_email text DEFAULT 'payments@greenfieldfarms.com',
  paypal_link text DEFAULT 'https://paypal.me/greenfieldfarms',
  crypto_wallets jsonb DEFAULT '{}'::jsonb,
  card_merchant_id text,
  card_publishable_key text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE payment_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_read_payment_settings" ON payment_settings;
CREATE POLICY "anon_read_payment_settings" ON payment_settings FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "auth_update_payment_settings" ON payment_settings;
CREATE POLICY "auth_update_payment_settings" ON payment_settings FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "auth_insert_payment_settings" ON payment_settings;
CREATE POLICY "auth_insert_payment_settings" ON payment_settings FOR INSERT TO authenticated WITH CHECK (true);
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_receipt_url text;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_crypto_coin text;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS invoice_sent boolean DEFAULT false;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS invoice_sent_at timestamptz;
INSERT INTO payment_settings (bank_name, bank_account_name, bank_account_number)
SELECT 'First National Bank', 'Greenfield Farms LLC', '0123456789'
WHERE NOT EXISTS (SELECT 1 FROM payment_settings);
