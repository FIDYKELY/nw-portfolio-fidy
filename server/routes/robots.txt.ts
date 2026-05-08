export default defineEventHandler((event) => {
  const robots = `User-agent: *
Allow: /
Disallow: 

Sitemap: https://nw-portfolio-fidy.vercel.app/sitemap.xml`;

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');
  
  return robots;
});
