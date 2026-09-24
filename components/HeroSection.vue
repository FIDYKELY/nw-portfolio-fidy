<template>
  <section id="hero" class="hero section-pad" @mousemove="onMouseMove">
    <div class="hero__glow" :style="glowStyle" aria-hidden="true" />
    <div class="container-narrow hero__grid">
      <div class="hero__copy">
        <p class="hero__label mono reveal">
          <span class="hero__pulse" aria-hidden="true" />
          Disponible pour de nouvelles opportunités
        </p>

        <h1 class="hero__title reveal" style="transition-delay: 0.08s">
          <span class="hero__line hero__line--accent">FIDINIAINA</span>
          <span class="hero__line">RATSIMANOHATRA</span>
        </h1>

        <p class="hero__role reveal" style="transition-delay: 0.16s">
          <span>Développeur Web</span>
          <span class="hero__amp">&</span>
          <span class="hero__role-accent">Automatisation</span>
        </p>

        <p class="hero__pitch text-muted reveal" style="transition-delay: 0.22s">
          Je conçois des expériences web modernes, des plateformes WordPress et des flux de travail numériques automatisés —
          de l'interface utilisateur à l'orchestration avec n8n et les APIs.
        </p>

        <div class="hero__actions reveal" style="transition-delay: 0.28s">
          <a href="#work" class="btn-primary">Voir quelques projets</a>
          <a href="#contact" class="btn-ghost">Me contacter</a>
        </div>

        <div class="hero__social reveal" style="transition-delay: 0.34s">
          <a
            v-for="s in socialLinks"
            :key="s.link"
            :href="s.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social-link"
            :aria-label="s.label"
          >
            <v-icon size="22">{{ s.icon }}</v-icon>
          </a>
        </div>
      </div>

      <div class="hero__visual reveal" style="transition-delay: 0.12s">
        <div class="hero__frame">
          <div class="hero__coords mono" aria-hidden="true"></div>
          <div class="hero__ring hero__ring--1" aria-hidden="true" />
          <div class="hero__ring hero__ring--2" aria-hidden="true" />
          <div class="hero__photo-wrap">
            <SmartImage
              src="/images/graduate.jpeg"
              alt="Fidiniaina Ratsimanohatra — Web Developer"
              eager
            />
          </div>
          <div
            v-for="(badge, i) in heroBadges"
            :key="badge.label"
            class="hero__badge mono"
            :style="badgeStyle(i, badge.delay)"
          >
            <img
              v-if="badge.type === 'image'"
              :src="badge.icon"
              :alt="badge.label"
              class="hero__badge-img"
            />
            <i v-else :class="badge.icon" class="hero__badge-icon" />
            <span>{{ badge.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroBadges, socialLinks } from '~/data/portfolio'

const pointer = ref({ x: 0, y: 0 })

const glowStyle = computed(() => ({
  transform: `translate(${pointer.value.x * 12}px, ${pointer.value.y * 8}px)`,
}))

function onMouseMove(e: MouseEvent) {
  const w = window.innerWidth
  const h = window.innerHeight
  pointer.value = {
    x: (e.clientX / w - 0.5) * 2,
    y: (e.clientY / h - 0.5) * 2,
  }
}

function badgeStyle(index: number, delay: number) {
  const positions = [
    { top: '8%', left: '-8%' },
    { top: '22%', right: '-6%' },
    { bottom: '38%', left: '-12%' },
    { bottom: '18%', right: '-4%' },
    { top: '48%', right: '-14%' },
    { bottom: '8%', left: '4%' },
    { top: '62%', left: '-6%' },
  ]
  const pos = positions[index % positions.length]
  return {
    ...pos,
    animationDelay: `${delay}s`,
  }
}

</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--nav-h) + 2rem);
  min-height: min(100vh, 920px);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: 10%;
  right: 5%;
  width: min(520px, 70vw);
  height: min(520px, 70vw);
  background: radial-gradient(circle, rgba(79, 216, 196, 0.14), transparent 65%);
  pointer-events: none;
  transition: transform 0.4s ease-out;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2rem;
  }
}

.hero__label {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  padding: 0.35rem 0.75rem 0.35rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(16, 20, 27, 0.6);
}

.hero__pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.5);
  animation: pulse 2.4s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.45);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(79, 216, 196, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 216, 196, 0);
  }
}

.hero__title {
  margin: 0 0 1rem;
  font-size: clamp(2.6rem, 8vw, 4.6rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.hero__line {
  display: block;
}

.hero__line--accent {
  color: var(--accent);
}

.hero__role {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.65rem;
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 2vw, 1rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  color: var(--text-muted);
}

.hero__amp {
  color: var(--accent-2);
}

.hero__role-accent {
  color: var(--text);
}

.hero__pitch {
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0 0 1.75rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.hero__social {
  display: flex;
  gap: 0.35rem;
}

.hero__social-link {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  color: var(--text-muted);
  transition:
    color 0.2s,
    border-color 0.2s,
    transform 0.25s var(--ease-out);
}

.hero__social-link:hover {
  color: var(--accent);
  border-color: rgba(79, 216, 196, 0.35);
  transform: translateY(-3px);
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.hero__frame {
  position: relative;
  width: min(380px, 88vw);
  aspect-ratio: 3 / 4;
}

.hero__coords {
  position: absolute;
  top: -0.5rem;
  right: 0;
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  z-index: 2;
}

.hero__ring {
  position: absolute;
  border: 1px solid var(--line);
  border-radius: 50%;
  pointer-events: none;
}

.hero__ring--1 {
  inset: -6%;
  border-color: rgba(79, 216, 196, 0.15);
}

.hero__ring--2 {
  inset: 8% 12% auto;
  width: 40%;
  height: 40%;
  border-style: dashed;
  opacity: 0.5;
}

.hero__photo-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(79, 216, 196, 0.08) inset;
}

.hero__photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11, 14, 19, 0.35), transparent 45%);
  pointer-events: none;
}

.hero__badge {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.65rem;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
  background: rgba(16, 20, 27, 0.92);
  border: 1px solid var(--line);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  animation: floatBadge 5s ease-in-out infinite;
  transition: transform 0.25s var(--ease-out);
}

.hero__badge:hover {
  transform: translateY(-4px) scale(1.03);
  border-color: rgba(79, 216, 196, 0.35);
}

.hero__badge-icon {
  font-size: 1rem;
  line-height: 1;
}

.hero__badge-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}

@media (max-width: 1023px) {
  .hero__badge {
    display: none;
  }

  .hero__badge:nth-child(-n + 4) {
    display: inline-flex;
    transform: scale(0.92);
  }
}
</style>
