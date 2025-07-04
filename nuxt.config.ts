// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
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
      ]
    }
  }
})
