<template>
  <span class="tech-tag">
    <i v-if="devicon" :class="devicon" class="tech-tag__icon" />
    <img v-else-if="imgSrc" :src="imgSrc" :alt="name" class="tech-tag__img" />
    <span>{{ name }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()

const map: Record<string, string> = {
  'Vue.js': 'devicon-vuejs-plain colored',
  'Vue.js 3': 'devicon-vuejs-plain colored',
  'Nuxt.js': 'devicon-nuxtjs-plain colored',
  'Nuxt 3': 'devicon-nuxtjs-plain colored',
  'Node.js': 'devicon-nodejs-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  PHP: 'devicon-php-plain colored',
  WordPress: 'devicon-wordpress-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  Express: 'devicon-express-original colored',
  Puppeteer: 'devicon-puppeteer-plain colored',
  Elementor: '/images/elementor.svg',
  n8n: '/images/N8n-logo-new.svg',
  'OpenAI API': 'devicon-openai-plain colored',
  TailwindCSS: 'devicon-tailwindcss-plain colored',
  Stripe: 'devicon-stripe-plain colored',
  Sequelize: 'devicon-sequelize-plain colored',
  TypeScript: 'devicon-typescript-plain colored',
  'Vuetify 3': 'devicon-vuetify-plain colored',
  Magento: 'devicon-magento-plain colored',
}

const devicon = computed(() => {
  const v = map[props.name]
  return v && !v.startsWith('/') ? v : null
})

const imgSrc = computed(() => {
  const v = map[props.name]
  return v?.startsWith('/') ? v : null
})
</script>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.55rem;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: rgba(20, 25, 34, 0.8);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.tech-tag__icon {
  font-size: 0.95rem;
  line-height: 1;
}

.tech-tag__img {
  width: 14px;
  height: 14px;
  object-fit: contain;
}
</style>
