import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  )

  return {
    supabase
  }
}

// Database types for registration table
export interface Registration {
  id?: number
  first_name: string
  last_name: string
  email: string
  phone: string
  experience: string
  goals?: string
  created_at?: string
}