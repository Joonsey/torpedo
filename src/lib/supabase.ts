import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jiruzltzpvjwxuqekzwe.supabase.co'
export const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcnV6bHR6cHZqd3h1cWVrendlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTE5MDIyNSwiZXhwIjoyMDMwNzY2MjI1fQ.GI3r_Ke6hSuSRQw_VFz4kaRsrX7Vf9Kz7bmxiQOX948")
