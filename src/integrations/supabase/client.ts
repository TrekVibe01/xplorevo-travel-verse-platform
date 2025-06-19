
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://aknrcumzwzouxzzyjvnp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbnJjdW16d3pvdXh6enlqdm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5Mjg4MjAsImV4cCI6MjA2NTUwNDgyMH0.2Ho7YZ7NoAVAxlmkiKq1hDgxLKieobp_TbkEL3WNwOg'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  }
})
