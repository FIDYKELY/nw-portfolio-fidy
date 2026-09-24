<template>
  <section id="stack" class="stack section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Boîte à outils</p>
      <h2 class="section-title reveal">Technologies</h2>

      <div class="stack__grid">
        <div
          v-for="cat in techCategories"
          :key="cat.title"
          class="stack__cat panel reveal"
        >
          <h3 class="stack__cat-title mono">{{ cat.title }}</h3>
          <ul class="stack__list">
            <li v-for="item in cat.items" :key="item.name">
              <img
                v-if="item.type === 'image'"
                :src="item.icon"
                :alt="item.name"
                class="stack__img"
              />
              <i v-else-if="item.icon.startsWith('mdi-')" class="stack__mdi">
                <v-icon size="28">{{ item.icon }}</v-icon>
              </i>
              <i v-else :class="item.icon" class="stack__icon" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { techCategories } from '~/data/portfolio'
</script>

<style scoped>
.stack__grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 640px) {
  .stack__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stack__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .stack__cat:last-child:nth-child(3n + 1) {
    grid-column: span 1;
  }
}

.stack__cat {
  padding: 1.35rem 1.25rem;
}

.stack__cat-title {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1rem;
}

.stack__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.stack__list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.92rem;
  color: var(--text-muted);
  transition: color 0.2s, transform 0.25s var(--ease-out);
}

.stack__list li:hover {
  color: var(--text);
  transform: translateX(4px);
}

.stack__icon {
  font-size: 1.75rem;
  line-height: 1;
  width: 2rem;
  text-align: center;
}

.stack__img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.stack__mdi {
  width: 2rem;
  display: flex;
  justify-content: center;
  color: var(--accent-2);
}
</style>
