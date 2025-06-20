// /api/views.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function handler(req, res) {
  let path = req.method === 'POST' ? req.body?.path : req.query.path

  // Si POST, parser le body si besoin
  if (req.method === 'POST' && !path) {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      path = body?.path
    } catch (e) {
      // ignore
    }
  }

  if (!path) return res.status(400).json({ error: 'Missing path' })

  if (req.method === 'POST') {
    // Upsert pour créer la ligne si elle n'existe pas
    await supabase
      .from('views')
      .upsert({ path, count: 1 }, { onConflict: ['path'], ignoreDuplicates: false })
    // Incrémente le compteur
    await supabase.rpc('increment_view', { page_path: path })
  }

  // Récupère le nombre de vues
  const { data, error } = await supabase
    .from('views')
    .select('count')
    .eq('path', path)
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json({ views: data?.count ?? 0 })
}