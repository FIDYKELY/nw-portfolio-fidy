<template>
  <section class="marquee-wrap" aria-label="Technologies">
    <div
      class="marquee"
      :class="{ 'marquee--paused': paused }"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
      @focusin="paused = true"
      @focusout="paused = false"
    >
      <div class="marquee__track">
        <div v-for="copy in 2" :key="copy" class="marquee__group" aria-hidden="copy !== 1">
          <span v-for="(item, i) in marqueeItems" :key="`${copy}-${i}`" class="marquee__item">
            <img
              v-if="item.type === 'image'"
              :src="item.icon"
              :alt="item.label"
              class="marquee__img"
            />
            <i v-else :class="item.icon" class="marquee__icon" />
            <span>{{ item.label }}</span>
            <span class="marquee__sep" aria-hidden="true">✦</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { marqueeItems } from '~/data/portfolio'

const paused = ref(false)
</script>

<style scoped>
.marquee-wrap {
  border-block: 1px solid var(--line-soft);
  background: rgba(16, 20, 27, 0.5);
  overflow: hidden;
  padding-block: 1rem;
}

.marquee {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: scroll 45s linear infinite;
}

.marquee--paused .marquee__track {
  animation-play-state: paused;
}

.marquee__group {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-right: 2.5rem;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}

.marquee__icon {
  font-size: 1.25rem;
}

.marquee__img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.marquee__sep {
  margin-left: 1.5rem;
  color: var(--accent-2);
  opacity: 0.7;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }

  .marquee__group {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
}
</style>
