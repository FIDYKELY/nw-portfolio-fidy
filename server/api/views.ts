// /api/views.ts
import { createClient } from '@supabase/supabase-js'
import { defineEventHandler, readBody, getQuery } from 'h3'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const body = await readBody(event)
    const path = body?.path
    if (!path) return { error: 'Missing path' }

    // Upsert pour créer la ligne si elle n'existe pas
    await supabase
      .from('views')
      .upsert({ path, count: 1 }, { onConflict: 'path', ignoreDuplicates: false })
    // Incrémente le compteur
    await supabase.rpc('increment_view', { page_path: path })

    // Récupère le nombre de vues
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('path', path)
      .single()

    if (error) return { error: error.message }
    return { views: data?.count ?? 0 }
  } else if (event.method === 'GET') {
    const { path } = getQuery(event)
    if (!path) return { error: 'Missing path' }

    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('path', path)
      .single()

    if (error) return { error: error.message }
    return { views: data?.count ?? 0 }
  } else {
    return { error: 'Method not allowed' }
  }
})