<template>
  <div class="view-counter">
    <span class="views">{{ views }} vues</span>
  </div>
</template>

<script setup lang="ts">
interface ViewsResponse {
  views: number;
  error?: string;
}

const route = useRoute()
const views = ref(0)

onMounted(async () => {
  // Incrémenter le compteur
  await $fetch<ViewsResponse>('/api/views', { 
    method: 'POST',
    body: { path: route.path }
  })
  // Récupérer le nombre total de vues
  const response = await $fetch<ViewsResponse>('/api/views', {
    params: { path: route.path }
  })
  views.value = response.views
})
</script>

<style scoped>
.view-counter {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  color: rgb(var(--v-theme-primary));
  opacity: 0.8;
}

.views {
  font-weight: 500;
}
</style> 