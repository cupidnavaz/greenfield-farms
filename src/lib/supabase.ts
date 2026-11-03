import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit', storageKey: 'farm-admin-auth', storage: { getItem: (key: string) => Promise.resolve(localStorage.getItem(key)), setItem: (key: string, value: string) => { localStorage.setItem(key, value); return Promise.resolve(); }, removeItem: (key: string) => { localStorage.removeItem(key); return Promise.resolve(); } } } });
