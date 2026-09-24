<template>
  <v-app class="portfolio-app">
    <div class="portfolio-shell">
      <AppNav :active-section="activeSection" />
      <v-main class="portfolio-main">
        <slot />
      </v-main>
      <SiteFooter />
    </div>
  </v-app>
</template>

<script setup lang="ts">
const activeSection = inject<Ref<string>>('activeSection', ref('hero'))

const route = useRoute()
watch(
  () => route.hash,
  (hash) => {
    if (hash) {
      const id = hash.replace('#', '')
      if (id) activeSection.value = id
    }
  },
  { immediate: true }
)
</script>

<style>
.portfolio-app {
  background: var(--bg) !important;
  color: var(--text);
}

.portfolio-app .v-application__wrap {
  min-height: 100vh;
}

.portfolio-main {
  padding: 0 !important;
  background: transparent !important;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--line);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
</style>
