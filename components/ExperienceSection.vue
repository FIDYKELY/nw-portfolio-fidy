<template>
  <section id="experience" class="exp section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Parcours</p>
      <h2 class="section-title reveal">Expérience</h2>

      <div class="exp__list">
        <article
          v-for="(item, i) in experiences"
          :key="item.company"
          class="exp__item reveal panel"
          :style="{ transitionDelay: `${i * 0.06}s` }"
        >
          <div class="exp__marker mono">{{ item.period }}</div>
          <div class="exp__body">
            <h3 class="exp__role">{{ item.title }}</h3>
            <p class="exp__company">{{ item.company }}</p>
            <p class="exp__desc text-muted">{{ item.description }}</p>
            <div class="exp__tech">
              <TechTag v-for="t in item.tech" :key="t" :name="t" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data/portfolio'
</script>

<style scoped>
.exp__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.exp__list::before {
  content: '';
  position: absolute;
  left: 1.1rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(var(--line), transparent);
  display: none;
}

@media (min-width: 768px) {
  .exp__list::before {
    display: block;
    left: 7.5rem;
  }
}

.exp__item {
  display: grid;
  gap: 0.75rem;
  padding: 1.35rem 1.25rem;
  transition: border-color 0.25s, transform 0.25s var(--ease-out);
}

@media (min-width: 768px) {
  .exp__item {
    grid-template-columns: 6.5rem 1fr;
    gap: 2rem;
    padding: 1.5rem 1.75rem;
  }
}

.exp__item:hover {
  border-color: rgba(79, 216, 196, 0.25);
  transform: translateX(4px);
}

.exp__marker {
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  color: var(--accent-2);
  line-height: 1.4;
}

.exp__role {
  margin: 0 0 0.25rem;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.exp__company {
  margin: 0 0 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.exp__desc {
  line-height: 1.6;
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
}

.exp__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
