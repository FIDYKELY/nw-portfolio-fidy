// /api/views.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function handler(req, res) {
  const path = req.method === 'POST' ? req.body.path : req.query.path
  if (!path) return res.status(400).json({ error: 'Missing path' })

  // Incrémente le compteur si POST
  if (req.method === 'POST') {
    await supabase
      .from('views')
      .upsert({ path, count: 1 }, { onConflict: ['path'], ignoreDuplicates: false })
      .select()
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