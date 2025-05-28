import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { useNuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#111827',
            surface: '#1F2937',
            primary: '#60A5FA',
            secondary: '#34D399',
            accent: '#F472B6',
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