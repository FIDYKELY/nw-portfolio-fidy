// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://nw-portfolio-fidy.vercel.app'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['vuetify/styles', '@fortawesome/fontawesome-free/css/all.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [vuetify()],
  },
  app: {
    head: {
      title: 'Fidiniaina – Portfolio',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        }
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'mL53Meb8ZfFm43sHYA36eqaivvJJ84sH8KJbWMqHlhI'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'in-out' }
  }
})
