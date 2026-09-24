import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { useNuxtApp } from '#app';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#0B0E13',
            surface: '#10141B',
            primary: '#4FD8C4',
            secondary: '#F2A93B',
            accent: '#4FD8C4',
            error: '#EF4444',
            info: '#3B82F6',
            success: '#10B981',
            warning: '#F59E0B',
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});