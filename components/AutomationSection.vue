<template>
  <section id="automation" class="auto section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Différenciateur</p>
      <h2 class="section-title reveal">Web + Automatisation</h2>
      <p class="auto__lead text-muted reveal">
        Du développement web à l’intégration de services, je connecte applications, APIs, webhooks et outils d’automatisation pour construire des solutions fluides, évolutives et adaptées à vos besoins.
      </p>

      <!-- ============================================================ -->
      <!-- DIAGRAMME : nœuds + connecteurs animés                       -->
      <!-- ============================================================ -->
      <div class="auto__canvas panel reveal">
        <div class="auto__sweep" aria-hidden="true" />

        <div class="auto__flow">
          <!-- Node d'entrée rotatif -->
          <div class="auto__node auto__node--entry">
            <div class="auto__node-head">
              <Transition name="node-fade" mode="out-in">
                <div :key="currentEntry.label" class="auto__node-head-inner">
                  <i v-if="currentEntry.icon" :class="currentEntry.icon" />
                  <v-icon v-else size="22">{{ currentEntry.mdi }}</v-icon>
                </div>
              </Transition>
            </div>
            <Transition name="node-fade" mode="out-in">
              <span :key="currentEntry.label" class="auto__node-label mono">
                {{ currentEntry.label }}
              </span>
            </Transition>
            <span class="auto__node-sub">Point d'entrée</span>
            <div class="auto__node-dots" role="tablist" aria-label="Points d'entrée possibles">
              <button
                v-for="(src, si) in entrySources"
                :key="src.label"
                type="button"
                class="auto__node-dot"
                :class="{ 'is-active': si === entryIndex }"
                :aria-label="src.label"
                @click="setEntry(si)"
              />
            </div>
          </div>

          <!-- Nodes + connecteurs intercalés -->
          <template v-for="(node, i) in nodes" :key="node.label">
            <div class="auto__connector" :style="{ '--d': `${i * 0.55}s` }" aria-hidden="true">
              <span class="auto__connector-pulse" />
            </div>

            <div class="auto__node" :style="{ '--i': i + 1 }">
              <div class="auto__node-head">
                <img v-if="node.image" :src="node.image" :alt="node.label" />
                <i v-else-if="node.icon" :class="node.icon" />
                <v-icon v-else size="22">{{ node.mdi }}</v-icon>
              </div>
              <span class="auto__node-label mono">{{ node.label }}</span>
              <span v-if="node.sub" class="auto__node-sub">{{ node.sub }}</span>
            </div>
          </template>
        </div>

        <p class="auto__hint mono">
          <span class="auto__hint-dot" aria-hidden="true" />
          Flux orchestré · déclenché, traité, distribué
        </p>
      </div>

      <!-- ============================================================ -->
      <!-- ILLUSTRATION ANIMÉE : pipeline d'automatisation              -->
      <!-- ============================================================ -->
      <div class="auto__example reveal">
        <div class="auto__example-head">
          <span class="auto__example-badge mono">Exemple concret</span>
          <p class="auto__example-caption text-muted">
            Un formulaire soumis déclenche toute la chaîne sans intervention manuelle.
          </p>
        </div>

        <div
          class="pipe"
          :style="{ '--n': demoSteps.length, '--travel-duration': travelDuration }"
          role="img"
          :aria-label="`Automatisation : ${demoSteps.map(s => s.label).join(' → ')}`"
        >
          <!-- Rail + packet -->
          <div class="pipe__rail" aria-hidden="true">
            <span class="pipe__rail-fill" :style="{ transform: `scaleX(${railProgress})` }" />
            <span class="pipe__packet" :style="{ left: packetPos + '%' }">
              <span class="pipe__packet-core" />
              <span class="pipe__packet-glow" />
            </span>
          </div>

          <!-- Stations -->
          <ol class="pipe__stations">
            <li
              v-for="(step, i) in demoSteps"
              :key="step.label"
              class="pipe__station"
              :class="{ 'is-active': i === activeStep, 'is-done': i < activeStep }"
            >
              <span class="pipe__node">
                <span class="pipe__node-ring" />
                <v-icon size="20" class="pipe__node-icon">{{ step.mdi }}</v-icon>
                <span class="pipe__node-check">
                  <v-icon size="11">mdi-check</v-icon>
                </span>
              </span>
              <span class="pipe__text">
                <span class="pipe__label mono">{{ step.label }}</span>
                <span class="pipe__sub">{{ step.sub }}</span>
              </span>
            </li>
          </ol>
        </div>

        <div class="auto__example-foot mono">
          <span class="auto__example-foot-dot" aria-hidden="true" />
          ~2 secondes · 0 intervention manuelle
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'

/* ---------- Diagramme : nœuds ---------- */
const nodes = [
  { label: 'Webhook',   mdi: 'mdi-webhook',          sub: 'Déclencheur' },
  { label: 'n8n',       image: '/images/N8n-logo-new.svg' },
  { label: 'API / IA',  mdi: 'mdi-brain' },
  { label: 'CRM · BDD', mdi: 'mdi-database-outline', sub: 'Sorties' },
]

const entrySources = [
  { label: 'WordPress',       icon: 'devicon-wordpress-plain colored' },
  { label: 'Node.js/Express', icon: 'devicon-nodejs-plain colored' },
  { label: 'API tierce',      mdi: 'mdi-api' },
]

const entryIndex = ref(0)
const currentEntry = computed(() => entrySources[entryIndex.value])
let entryTimer: ReturnType<typeof setInterval> | undefined

function setEntry(i: number) {
  entryIndex.value = i
  restartEntryTimer()
}

function restartEntryTimer() {
  if (entryTimer) clearInterval(entryTimer)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  entryTimer = setInterval(() => {
    entryIndex.value = (entryIndex.value + 1) % entrySources.length
  }, 2800)
}

/* ---------- Illustration animée : pipeline ---------- */
const demoSteps = [
  { label: 'Formulaire', sub: 'Soumis',       mdi: 'mdi-file-document-edit-outline' },
  { label: 'Webhook',    sub: 'Déclenché',    mdi: 'mdi-webhook' },
  { label: 'Traitement', sub: 'n8n + IA',     mdi: 'mdi-robot-happy-outline' },
  { label: 'CRM',        sub: 'Contact créé', mdi: 'mdi-account-plus-outline' },
  { label: 'Email',      sub: 'Envoyé',       mdi: 'mdi-email-fast-outline' },
]

const activeStep = ref(0)
const travelDuration = ref('0.9s')
let demoTimer: ReturnType<typeof setTimeout> | undefined

/** Position du packet en % de la largeur du pipe */
const packetPos = computed(
  () => ((activeStep.value + 0.5) / demoSteps.length) * 100
)

/** Remplissage du rail : 0 → 1 */
const railProgress = computed(() =>
  demoSteps.length > 1 ? activeStep.value / (demoSteps.length - 1) : 0
)

function scheduleDemo() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (activeStep.value >= demoSteps.length - 1) {
    // Pause sur la dernière étape, puis reset invisible
    demoTimer = setTimeout(() => {
      travelDuration.value = '0s'
      activeStep.value = 0
      nextTick(() => {
        requestAnimationFrame(() => {
          travelDuration.value = '0.9s'
          demoTimer = setTimeout(scheduleDemo, 900)
        })
      })
    }, 2200)
  } else {
    demoTimer = setTimeout(() => {
      activeStep.value++
      scheduleDemo()
    }, 1000)
  }
}

/* ---------- Cycle de vie ---------- */
onMounted(() => {
  restartEntryTimer()
  demoTimer = setTimeout(scheduleDemo, 700)
})

onUnmounted(() => {
  if (entryTimer) clearInterval(entryTimer)
  if (demoTimer) clearTimeout(demoTimer)
})
</script>

<style scoped>
/* ============================================================ */
/* SECTION : intro                                              */
/* ============================================================ */
.auto__lead {
  max-width: 36rem;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

/* ============================================================ */
/* DIAGRAMME                                                    */
/* ============================================================ */
.auto__canvas {
  position: relative;
  padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem);
  overflow: hidden;
}

.auto__sweep {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(100deg, transparent 42%, rgba(79, 216, 196, 0.07) 50%, transparent 58%);
  background-size: 260% 100%;
  animation: autoSweep 6s ease-in-out infinite;
}
@keyframes autoSweep {
  0%   { background-position: 120% 0; }
  100% { background-position: -20% 0; }
}

/* ---------- Flux (nœuds + connecteurs) ---------- */
.auto__flow {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  padding: 1rem 0;
}
@media (min-width: 900px) {
  .auto__flow {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* ---------- Nœuds ---------- */
.auto__node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0.75rem;
  min-width: 0;
  flex: 0 0 auto;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background: rgba(11, 14, 19, 0.72);
  transition: border-color 0.25s, transform 0.25s var(--ease-out);
  animation: nodeIn 0.6s var(--ease-out) both;
  animation-delay: calc(var(--i, 0) * 0.08s);
}
@media (min-width: 900px) {
  .auto__node { width: 140px; }
}

.auto__node:hover {
  border-color: rgba(79, 216, 196, 0.35);
  transform: translateY(-4px);
}

.auto__node--entry {
  border-color: rgba(79, 216, 196, 0.32);
  box-shadow: inset 0 0 0 1px rgba(79, 216, 196, 0.08);
}

.auto__node-head {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--accent-dim);
  margin-bottom: 0.65rem;
  font-size: 1.5rem;
  animation: nodePulse 3s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.55s);
}
.auto__node-head-inner { display: grid; place-items: center; }

@keyframes nodePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(79, 216, 196, 0); }
  50%      { box-shadow: 0 0 0 6px rgba(79, 216, 196, 0.12); }
}

.auto__node-head img { width: 28px; height: 28px; object-fit: contain; }

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

/* ---------- Connecteurs (flèches) ---------- */
.auto__connector {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
}
@media (min-width: 900px) {
  .auto__connector {
    height: 24px;
    width: auto;
    min-width: 32px;
  }
}

/* Ligne */
.auto__connector::before {
  content: '';
  position: absolute;
  background: linear-gradient(90deg, var(--line-soft), var(--line));
  transition: background 0.3s;
}

/* Tête de flèche */
.auto__connector::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  filter: drop-shadow(0 0 4px rgba(79, 216, 196, 0.25));
  transition: border-color 0.3s;
}

/* Desktop : flèche vers la droite */
@media (min-width: 900px) {
  .auto__connector::before {
    left: 4px;
    right: 14px;
    top: 50%;
    height: 2px;
    transform: translateY(-50%);
    border-radius: 2px;
  }
  .auto__connector::after {
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px 0 5px 9px;
    border-color: transparent transparent transparent var(--line);
  }
}

/* Mobile : flèche vers le bas */
@media (max-width: 899px) {
  .auto__connector::before {
    top: 4px;
    bottom: 14px;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, var(--line-soft), var(--line));
    border-radius: 2px;
  }
  .auto__connector::after {
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 9px 5px 0 5px;
    border-color: var(--line) transparent transparent transparent;
  }
}

/* Impulsion lumineuse qui parcourt le connecteur */
.auto__connector-pulse {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent), 0 0 20px rgba(79, 216, 196, 0.45);
  pointer-events: none;
}
@media (min-width: 900px) {
  .auto__connector-pulse {
    top: 50%;
    left: 4px;
    transform: translate(-50%, -50%);
    animation: pulseFlowX 3s var(--d, 0s) infinite;
  }
}
@media (max-width: 899px) {
  .auto__connector-pulse {
    left: 50%;
    top: 4px;
    transform: translate(-50%, -50%);
    animation: pulseFlowY 3s var(--d, 0s) infinite;
  }
}
@keyframes pulseFlowX {
  0%   { left: 4px;   opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { left: calc(100% - 14px); opacity: 0; }
}
@keyframes pulseFlowY {
  0%   { top: 4px;   opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { top: calc(100% - 14px); opacity: 0; }
}

/* ---------- Dots (sélecteur d'entrée) ---------- */
.auto__node-dots {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.6rem;
}
.auto__node-dot {
  width: 6px;
  height: 6px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--line-soft);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.auto__node-dot:hover     { background: rgba(79, 216, 196, 0.5); }
.auto__node-dot.is-active { background: var(--accent); transform: scale(1.25); }

/* ---------- Transitions du node d'entrée ---------- */
.node-fade-enter-active,
.node-fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.node-fade-enter-from   { opacity: 0; transform: translateY(4px); }
.node-fade-leave-to     { opacity: 0; transform: translateY(-4px); }

@keyframes nodeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---------- Hint sous le diagramme ---------- */
.auto__hint {
  position: relative;
  z-index: 1;
  margin-top: 1.25rem;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}
.auto__hint-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: nodePulse 2.4s ease-in-out infinite;
}

/* ============================================================ */
/* ILLUSTRATION : PIPELINE ANIMÉ                                */
/* ============================================================ */
.auto__example {
  margin-top: 2rem;
  padding: 1.75rem clamp(1rem, 3vw, 1.75rem) 0;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-md);
  background: rgba(11, 14, 19, 0.4);
  overflow: hidden;
}

.auto__example-head {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2.25rem;
}
.auto__example-badge {
  align-self: flex-start;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-2);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.3rem 0.65rem;
}
.auto__example-caption {
  font-size: 0.92rem;
  margin: 0;
  max-width: 42ch;
}

/* ---------- Pipe ---------- */
.pipe {
  --node-size: 56px;
  position: relative;
  margin-bottom: 1.75rem;
}

.pipe__rail {
  position: absolute;
  top: calc(var(--node-size) / 2);
  left: calc(50% / var(--n));
  right: calc(50% / var(--n));
  height: 2px;
  background: var(--line-soft);
  border-radius: 2px;
  z-index: 0;
  pointer-events: none;
}
.pipe__rail-fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%);
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform var(--travel-duration) cubic-bezier(0.65, 0, 0.35, 1);
  box-shadow: 0 0 12px rgba(79, 216, 196, 0.45);
}

.pipe__packet {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: left var(--travel-duration) cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: none;
  z-index: 3;
}
.pipe__packet-core {
  display: block;
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  box-shadow:
    0 0 8px var(--accent),
    0 0 18px rgba(79, 216, 196, 0.75),
    0 0 30px rgba(79, 216, 196, 0.45);
}
.pipe__packet-glow {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 216, 196, 0.55), transparent 70%);
  animation: packetPulse 1.6s ease-in-out infinite;
}
@keyframes packetPulse {
  0%, 100% { opacity: 0.55; transform: scale(0.9); }
  50%      { opacity: 1;    transform: scale(1.15); }
}

.pipe__stations {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(var(--n), 1fr);
  z-index: 1;
}
.pipe__station {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.6rem;
}

.pipe__node {
  position: relative;
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(11, 14, 19, 0.95);
  border: 1px solid var(--line);
  color: var(--text-muted);
  transition:
    border-color 0.4s ease,
    color 0.4s ease,
    background 0.4s ease,
    box-shadow 0.4s ease,
    transform 0.4s var(--ease-out);
}
.pipe__node-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1px solid transparent;
  pointer-events: none;
}
.pipe__node-icon { transition: transform 0.4s var(--ease-out); }
.pipe__node-check {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: #0b0e13;
  display: grid;
  place-items: center;
  transform: scale(0);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 0 3px rgba(11, 14, 19, 0.95);
  z-index: 2;
}

.pipe__station.is-active .pipe__node {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(79, 216, 196, 0.1);
  box-shadow:
    0 0 0 5px rgba(79, 216, 196, 0.08),
    0 0 22px rgba(79, 216, 196, 0.35);
  transform: scale(1.1);
}
.pipe__station.is-active .pipe__node-ring {
  border-color: rgba(79, 216, 196, 0.5);
  animation: nodeRingPulse 1.3s ease-out infinite;
}
.pipe__station.is-active .pipe__node-icon { transform: scale(1.15); }
.pipe__station.is-done .pipe__node {
  border-color: rgba(79, 216, 196, 0.45);
  color: var(--accent);
  background: rgba(79, 216, 196, 0.06);
}
.pipe__station.is-done .pipe__node-check { transform: scale(1); }

@keyframes nodeRingPulse {
  0%   { transform: scale(1);    opacity: 0.9; }
  100% { transform: scale(1.45); opacity: 0; }
}

.pipe__text { display: contents; }
.pipe__label {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
  transition: color 0.4s;
}
.pipe__station.is-active .pipe__label { color: var(--accent); }
.pipe__sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  line-height: 1.2;
}

.auto__example-foot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 1rem 0;
  border-top: 1px solid var(--line-soft);
}
.auto__example-foot-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: footPulse 2s ease-in-out infinite;
}
@keyframes footPulse {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

/* Mobile : liste verticale */
@media (max-width: 720px) {
  .pipe { --node-size: 44px; }
  .pipe__rail { display: none; }
  .pipe__stations {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .pipe__station {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 0.9rem;
    padding: 0.75rem 0.85rem;
    border-radius: 10px;
    border: 1px solid transparent;
    background: rgba(11, 14, 19, 0.4);
    transition: border-color 0.4s, background 0.4s, transform 0.4s;
  }
  .pipe__station.is-active {
    border-color: rgba(79, 216, 196, 0.35);
    background: rgba(79, 216, 196, 0.06);
    transform: translateX(3px);
  }
  .pipe__station.is-done { border-color: rgba(79, 216, 196, 0.15); }
  .pipe__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.1rem;
  }
  .pipe__node-check {
    width: 18px;
    height: 18px;
    top: -4px;
    right: -4px;
  }
}

/* ---------- Mouvement réduit ---------- */
@media (prefers-reduced-motion: reduce) {
  .auto__sweep,
  .auto__connector-pulse { display: none; }

  .auto__node,
  .auto__node-head,
  .auto__hint-dot,
  .pipe__packet-glow,
  .pipe__station.is-active .pipe__node-ring,
  .auto__example-foot-dot {
    animation: none !important;
  }

  .pipe__rail-fill,
  .pipe__packet {
    transition: none !important;
  }
}
</style>