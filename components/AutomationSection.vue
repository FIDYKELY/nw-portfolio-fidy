<template>
  <section id="automation" class="auto section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Différenciateur</p>
      <h2 class="section-title reveal">Web + Automatisation</h2>
      <p class="auto__lead text-muted reveal">
        De WordPress au CRM — Je connecte produits, webhooks et IA à travers des flux de travail orchestrés,
        pas de simples scripts ponctuels.
      </p>

      <div class="auto__canvas panel reveal">
        <svg class="auto__lines" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <path class="auto__path" d="M120,210 H280" />
          <path class="auto__path" d="M320,210 H480" />
          <path class="auto__path" d="M520,210 H680" />
          <path class="auto__path auto__path--branch" d="M400,210 V320 H680" />
          <circle class="auto__flow auto__flow--1" r="4" cx="0" cy="0">
            <animateMotion dur="3s" repeatCount="indefinite" path="M120,210 H280" />
          </circle>
          <circle class="auto__flow auto__flow--2" r="4" cx="0" cy="0">
            <animateMotion dur="3s" begin="0.6s" repeatCount="indefinite" path="M320,210 H480" />
          </circle>
          <circle class="auto__flow auto__flow--3" r="4" cx="0" cy="0">
            <animateMotion dur="3s" begin="1.2s" repeatCount="indefinite" path="M520,210 H680" />
          </circle>
        </svg>

        <div class="auto__nodes">
          <div
            v-for="(node, i) in nodes"
            :key="node.label"
            class="auto__node"
            :style="{ '--i': i }"
          >
            <div class="auto__node-head">
              <img v-if="node.image" :src="node.image" :alt="node.label" />
              <i v-else-if="node.icon" :class="node.icon" />
              <v-icon v-else size="22">{{ node.mdi }}</v-icon>
            </div>
            <span class="auto__node-label mono">{{ node.label }}</span>
            <span v-if="node.sub" class="auto__node-sub">{{ node.sub }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const nodes = [
  { label: 'WordPress', icon: 'devicon-wordpress-plain colored' },
  { label: 'Webhook', mdi: 'mdi-webhook', sub: 'Déclencheur' },
  { label: 'n8n', image: '/images/N8n-logo-new.svg' },
  { label: 'API / IA', mdi: 'mdi-brain' },
  { label: 'CRM / Email / BDD', mdi: 'mdi-database-outline', sub: 'Sorties' },
]
</script>

<style scoped>
.auto__lead {
  max-width: 36rem;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

.auto__canvas {
  position: relative;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  min-height: 360px;
  overflow: hidden;
}

.auto__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  pointer-events: none;
}

.auto__path {
  fill: none;
  stroke: var(--line);
  stroke-width: 2;
}

.auto__path--branch {
  stroke-dasharray: 6 6;
  opacity: 0.6;
}

.auto__flow {
  fill: var(--accent);
  filter: drop-shadow(0 0 6px rgba(79, 216, 196, 0.8));
}

.auto__nodes {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .auto__nodes {
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    gap: 0.75rem;
  }
}

.auto__node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background: rgba(11, 14, 19, 0.65);
  transition:
    border-color 0.25s,
    transform 0.25s var(--ease-out);
  animation: nodeIn 0.6s var(--ease-out) both;
  animation-delay: calc(var(--i) * 0.08s);
}

.auto__node:hover {
  border-color: rgba(79, 216, 196, 0.35);
  transform: translateY(-4px);
}

.auto__node-head {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--accent-dim);
  margin-bottom: 0.65rem;
  font-size: 1.5rem;
}

.auto__node-head img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.auto__node-label {
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
}

.auto__node-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

@keyframes nodeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .auto__flow {
    display: none;
  }

  .auto__node {
    animation: none;
  }
}
</style>
