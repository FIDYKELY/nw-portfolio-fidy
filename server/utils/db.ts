import Database from 'better-sqlite3'
import { join } from 'path'

const dbPath = join(process.cwd(), 'data.db')
const db = new Database(dbPath)

// Créer la table si elle n'existe pas
db.exec(`
  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_path TEXT UNIQUE,
    view_count INTEGER DEFAULT 0
  )
`)

export default db 