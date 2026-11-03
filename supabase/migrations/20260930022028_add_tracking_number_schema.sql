ALTER TABLE invoices ADD COLUMN IF NOT EXISTS tracking_number text UNIQUE;
ALTER TABLE invoices ADD COLUMN IF NOT EXISTS tracking_history jsonb DEFAULT '[]'::jsonb;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS cart_status text DEFAULT 'completed';
CREATE INDEX IF NOT EXISTS idx_invoices_tracking_number ON invoices(tracking_number) WHERE tracking_number IS NOT NULL;
