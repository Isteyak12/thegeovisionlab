import { createClient } from '@supabase/supabase-js';
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add the cn function
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}