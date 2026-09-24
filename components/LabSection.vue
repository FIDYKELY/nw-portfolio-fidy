<template>
  <section id="lab" class="lab section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Terrain de jeu</p>
      <h2 class="section-title reveal">Labo</h2>
      <p class="lab__intro text-muted reveal">
        Petites expérimentations autour de l'automatisation, de l'UI et des APIs — où je teste des idées avant de les mettre en production.
      </p>

      <div class="lab__grid">
        <div v-for="item in labItems" :key="item.title" class="lab__card panel reveal">
          <span class="lab__dot" aria-hidden="true" />
          <h3 class="lab__title">{{ item.title }}</h3>
          <p class="lab__desc text-muted">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { labItems } from '~/data/portfolio'
</script>

<style scoped>
.lab__intro {
  max-width: 32rem;
  margin: -0.5rem 0 2rem;
  line-height: 1.6;
}

.lab__grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 640px) {
  .lab__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .lab__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.lab__card {
  padding: 1.25rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s var(--ease-out);
}

.lab__card:hover {
  transform: translateY(-4px);
}

.lab__dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  margin-bottom: 0.85rem;
}

.lab__title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.lab__desc {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
}
</style>
