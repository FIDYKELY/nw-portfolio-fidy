import { defineEventHandler, getQuery } from 'h3'

let viewCount = 0

export default defineEventHandler(async (event) => {
  const method = event.method
  const query = getQuery(event)

  if (method === 'GET') {
    return { views: viewCount }
  } else if (method === 'POST') {
    viewCount++
    return { views: viewCount }
  }

  return { error: 'Method not allowed' }
}) 