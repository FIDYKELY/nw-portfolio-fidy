// /api/views.ts
import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, readBody, getQuery } from 'h3'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    // Incrémente le compteur global
    await supabase.rpc('increment_view')

    // Récupère le nombre de vues global
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('path', 'global')
      .single()

    if (error) return { error: error.message }
    return { views: data?.count ?? 0 }
  } else if (event.method === 'GET') {
    // Récupère le nombre de vues global
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('path', 'global')
      .single()

    if (error) return { error: error.message }
    return { views: data?.count ?? 0 }
  } else {
    return { error: 'Method not allowed' }
  }
})