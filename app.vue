<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
    },
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.01ms;
  }

  .page-enter-from,
  .page-leave-to {
    transform: none;
  }
}
</style>
