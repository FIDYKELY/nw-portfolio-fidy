export default defineEventHandler(async (event) => {
  const { sitemap } = await import('#build/nitro/prerender.mjs').catch(() => ({}));
  
  // Récupérer les URLs depuis la configuration Nuxt
  const config = useRuntimeConfig();
  const baseURL = config.public.siteUrl || 'https://nw-portfolio-fidy.vercel.app';
  
  // URLs du sitemap
  const urls = [
    '',
    '/projects',
    '/skills',
    '/contact'
  ];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseURL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');
  
  return xml;
});
