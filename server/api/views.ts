import { defineEventHandler, getQuery } from 'h3'
import db from '../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const query = getQuery(event)
  const pagePath = query.path as string || '/'

  if (method === 'GET') {
    const stmt = db.prepare('SELECT view_count FROM page_views WHERE page_path = ?')
    const result = stmt.get(pagePath)
    return { views: result ? result.view_count : 0 }
  } else if (method === 'POST') {
    const stmt = db.prepare(`
      INSERT INTO page_views (page_path, view_count) 
      VALUES (?, 1) 
      ON CONFLICT(page_path) 
      DO UPDATE SET view_count = view_count + 1
    `)
    stmt.run(pagePath)
    
    // Récupérer le nouveau nombre de vues
    const getStmt = db.prepare('SELECT view_count FROM page_views WHERE page_path = ?')
    const result = getStmt.get(pagePath)
    return { views: result.view_count }
  }

  return { error: 'Method not allowed' }
}) 