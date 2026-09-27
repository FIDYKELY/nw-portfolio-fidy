<template>
  <section
    id="services"
    ref="sectionRef"
    class="services section-pad"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="container-narrow">
      <!-- ============================================================ -->
      <!-- En-tête éditorial                                           -->
      <!-- ============================================================ -->
      <p class="section-label reveal">Services</p>

      <h2 class="services__title reveal">
        <span class="services__title-line">
          Ce que je
        </span>
        <span class="services__title-hero">construis</span>
        <span class="services__title-line">
          et ce que j'<em class="services__title-accent">automatise</em>.
        </span>
      </h2>

      <p class="services__lead text-muted reveal">
        Des systèmes pensés pour durer :
        web, e-commerce et automatisation orchestrée de bout en bout.
      </p>

      <!-- ============================================================ -->
      <!-- SERVICES PRINCIPAUX                                         -->
      <!-- ============================================================ -->
      <div class="services__main reveal">
        <!-- ---- 01 · Web & Applications ---- -->
        <article class="svc svc--wide" :style="{ '--i': 0 }">
          <div class="svc__body">
            <header class="svc__head">
              <span class="svc__num mono">01</span>
              <span class="svc__kicker mono">Web & Applications</span>
            </header>
            <h3 class="svc__title">Applications web sur mesure</h3>
            <p class="svc__desc text-muted">
              Frontend Vue.js / Nuxt rapide, moderne et SEO-friendly, connecté à vos APIs
              et à vos systèmes métier.
            </p>
            <ul class="svc__tags">
              <li>Vue.js</li>
              <li>Nuxt</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div class="svc__visual" aria-hidden="true">
            <svg viewBox="0 0 280 240" class="illu illu--web">
              <defs>
                <linearGradient id="webFrame" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.12)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.02)" />
                </linearGradient>
                <linearGradient id="webChrome" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.14)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.04)" />
                </linearGradient>
                <linearGradient id="webLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.55)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.15)" />
                </linearGradient>
                <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Particules flottantes arrière-plan -->
              <g class="illu__particles illu__particles--back">
                <circle cx="30" cy="60" r="1.2" />
                <circle cx="250" cy="90" r="1" />
                <circle cx="40" cy="200" r="1.4" />
                <circle cx="230" cy="210" r="1.1" />
              </g>

              <!-- Fenêtre avec parallaxe -->
              <g class="illu__layer-1" data-depth="0.6">
                <rect x="35" y="30" width="210" height="140" rx="12"
                      fill="url(#webFrame)" stroke="rgba(79, 216, 196, 0.35)"
                      stroke-width="1.4" filter="url(#glowSoft)" />
                <rect x="35" y="30" width="210" height="24" rx="12"
                      fill="url(#webChrome)" />
                <circle cx="52" cy="42" r="3" fill="#ff5f57" opacity="0.7" />
                <circle cx="64" cy="42" r="3" fill="#febc2e" opacity="0.7" />
                <circle cx="76" cy="42" r="3" fill="#28c840" opacity="0.7" />

                <text x="140" y="96" text-anchor="middle"
                      class="illu__code illu__code--tag">&lt;App /&gt;</text>
                <text x="140" y="122" text-anchor="middle"
                      class="illu__code illu__code--stack">Vue · Nuxt</text>
                <rect x="70" y="140" width="140" height="4" rx="2"
                      class="illu__bar" />
              </g>

              <!-- Ligne + API avec parallaxe inverse -->
              <g class="illu__layer-2" data-depth="1.2">
                <path d="M140 174 V206" stroke="url(#webLine)" stroke-width="1.6"
                      fill="none" stroke-linecap="round" />
                <path d="M134 200 L140 208 L146 200" class="illu__arrow" />

                <circle r="3.5" fill="#4FD8C4" filter="url(#glowStrong)">
                  <animateMotion dur="2.4s" repeatCount="indefinite"
                    path="M140 174 V206" />
                </circle>

                <rect x="98" y="210" width="84" height="26" rx="9"
                      fill="rgba(79, 216, 196, 0.12)"
                      stroke="rgba(79, 216, 196, 0.6)" stroke-width="1.3"
                      filter="url(#glowSoft)" />
                <text x="140" y="227" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--accent">API</text>
              </g>
            </svg>
          </div>
        </article>

        <!-- ---- 02 · WordPress & E-commerce ---- -->
        <article class="svc" :style="{ '--i': 1 }">
          <div class="svc__body">
            <header class="svc__head">
              <span class="svc__num mono">02</span>
              <span class="svc__kicker mono">CMS & E-commerce</span>
            </header>
            <h3 class="svc__title">WordPress & boutiques</h3>
            <p class="svc__desc text-muted">
              Sites éditables sans dépendre d'un dev, et boutiques qui convertissent.
            </p>
            <ul class="svc__tags">
              <li>WordPress</li>
              <li>Elementor</li>
              <li>WooCommerce</li>
              <li>Magento 2</li>
            </ul>
          </div>

          <div class="svc__visual" aria-hidden="true">
            <svg viewBox="0 0 240 220" class="illu illu--cms">
              <defs>
                <linearGradient id="layerTop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.22)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.06)" />
                </linearGradient>
                <linearGradient id="layerMid" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.12)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.03)" />
                </linearGradient>
                <linearGradient id="cartGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(242, 169, 59, 0.35)" />
                  <stop offset="100%" stop-color="rgba(242, 169, 59, 0.08)" />
                </linearGradient>
                <filter id="cmsGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g class="illu__particles illu__particles--back">
                <circle cx="20" cy="40" r="1.2" />
                <circle cx="220" cy="70" r="1" />
                <circle cx="30" cy="180" r="1.3" />
              </g>

              <!-- Stack avec parallaxe -->
              <g class="illu__layer-1" data-depth="0.5">
                <g class="illu__stack illu__stack--1">
                  <rect x="55" y="35" width="130" height="34" rx="10"
                        fill="url(#layerTop)" stroke="rgba(79, 216, 196, 0.5)"
                        stroke-width="1.4" filter="url(#cmsGlow)" />
                  <text x="120" y="57" text-anchor="middle"
                        class="illu__layer-label">WP</text>
                </g>
              </g>

              <g class="illu__layer-1" data-depth="0.7">
                <g class="illu__stack illu__stack--2">
                  <rect x="55" y="80" width="130" height="34" rx="10"
                        fill="url(#layerMid)" stroke="rgba(79, 216, 196, 0.3)"
                        stroke-width="1.3" />
                  <text x="120" y="102" text-anchor="middle"
                        class="illu__layer-label">Woo</text>
                </g>
              </g>

              <g class="illu__layer-1" data-depth="0.9">
                <g class="illu__stack illu__stack--3">
                  <rect x="55" y="125" width="130" height="34" rx="10"
                        fill="rgba(11, 14, 19, 0.85)" stroke="var(--line)"
                        stroke-width="1.2" />
                  <text x="120" y="147" text-anchor="middle"
                        class="illu__layer-label">Magento</text>
                </g>
              </g>

              <!-- Panier flottant + parallaxe inverse -->
              <g class="illu__layer-2" data-depth="1.4">
                <g class="illu__cart">
                  <circle cx="195" cy="110" r="20"
                          fill="url(#cartGrad)" stroke="rgba(242, 169, 59, 0.7)"
                          stroke-width="1.3" filter="url(#cmsGlow)" />
                  <path d="M186 104 H189 L192 116 H200 L203 107 H187"
                        fill="none" stroke="#F2A93B" stroke-width="1.7"
                        stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="193" cy="119" r="1.8" fill="#F2A93B" />
                  <circle cx="199" cy="119" r="1.8" fill="#F2A93B" />
                </g>
              </g>
            </svg>
          </div>
        </article>

        <!-- ---- 03 · Automatisation & Intégrations ---- -->
        <article class="svc" :style="{ '--i': 2 }">
          <div class="svc__body">
            <header class="svc__head">
              <span class="svc__num mono">03</span>
              <span class="svc__kicker mono">Automatisation</span>
            </header>
            <h3 class="svc__title">Automatisation & Intégrations</h3>
            <p class="svc__desc text-muted">
              Je connecte vos outils en flux orchestrés qui tournent 24h/24.
            </p>
            <ul class="svc__tags">
              <li>n8n</li>
              <li>Webhooks</li>
              <li>IA</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div class="svc__visual" aria-hidden="true">
            <svg viewBox="0 0 240 250" class="illu illu--flow">
              <defs>
                <linearGradient id="n8nFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(79, 216, 196, 0.28)" />
                  <stop offset="100%" stop-color="rgba(79, 216, 196, 0.08)" />
                </linearGradient>
                <linearGradient id="emailFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(242, 169, 59, 0.25)" />
                  <stop offset="100%" stop-color="rgba(242, 169, 59, 0.06)" />
                </linearGradient>
                <filter id="flowGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="flowGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g class="illu__particles illu__particles--back">
                <circle cx="25" cy="50" r="1.2" />
                <circle cx="215" cy="80" r="1" />
                <circle cx="35" cy="200" r="1.4" />
                <circle cx="205" cy="220" r="1.1" />
              </g>

              <g class="illu__layer-1" data-depth="0.4">
                <!-- Entrée WEBHOOK -->
                <rect x="75" y="12" width="90" height="28" rx="9"
                      fill="rgba(11, 14, 19, 0.85)" stroke="var(--line)"
                      stroke-width="1.3" />
                <text x="120" y="30" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--sm">WEBHOOK</text>

                <path d="M120 40 V66" class="illu__line" />
                <circle r="3.5" fill="#4FD8C4" filter="url(#flowGlowStrong)">
                  <animateMotion dur="2.6s" repeatCount="indefinite"
                    path="M120 40 V66" />
                </circle>

                <!-- n8n -->
                <rect x="70" y="66" width="100" height="40" rx="12"
                      fill="url(#n8nFill)" stroke="#4FD8C4" stroke-width="1.5"
                      filter="url(#flowGlow)" />
                <text x="120" y="92" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--accent">n8n</text>
              </g>

              <g class="illu__layer-2" data-depth="0.9">
                <!-- Branches -->
                <path d="M120 106 V128 M120 128 H62 M120 128 H178"
                      class="illu__line" />
                <path d="M62 128 V154 M178 128 V154" class="illu__line" />

                <circle r="3.5" fill="#4FD8C4" filter="url(#flowGlowStrong)">
                  <animateMotion dur="2.6s" begin="0.6s" repeatCount="indefinite"
                    path="M120 106 V128 H62 V154" />
                </circle>
                <circle r="3.5" fill="#4FD8C4" filter="url(#flowGlowStrong)">
                  <animateMotion dur="2.6s" begin="0.6s" repeatCount="indefinite"
                    path="M120 106 V128 H178 V154" />
                </circle>

                <!-- CRM / IA -->
                <rect x="34" y="154" width="56" height="28" rx="9"
                      fill="rgba(11, 14, 19, 0.85)" stroke="var(--line)"
                      stroke-width="1.3" />
                <text x="62" y="172" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--sm">CRM</text>

                <rect x="150" y="154" width="56" height="28" rx="9"
                      fill="rgba(11, 14, 19, 0.85)" stroke="var(--line)"
                      stroke-width="1.3" />
                <text x="178" y="172" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--sm">IA</text>
              </g>

              <g class="illu__layer-1" data-depth="0.6">
                <!-- Convergence EMAIL -->
                <path d="M62 182 V200 M178 182 V200 M62 200 H178 M120 200 V218"
                      class="illu__line" />
                <circle r="3.5" fill="#F2A93B" filter="url(#flowGlowStrong)">
                  <animateMotion dur="2.6s" begin="1.4s" repeatCount="indefinite"
                    path="M62 182 V200 H120 V218" />
                </circle>

                <rect x="82" y="218" width="76" height="26" rx="9"
                      fill="url(#emailFill)" stroke="rgba(242, 169, 59, 0.7)"
                      stroke-width="1.3" filter="url(#flowGlow)" />
                <text x="120" y="235" text-anchor="middle"
                      class="illu__chip-label illu__chip-label--sm">EMAIL</text>
              </g>
            </svg>
          </div>
        </article>
      </div>

      <!-- ============================================================ -->
      <!-- EXPERTISES COMPLÉMENTAIRES                                  -->
      <!-- ============================================================ -->
      <p class="services__sub reveal">
        <span class="mono">/</span> Expertises complémentaires
      </p>

      <div class="services__minor reveal">
        <article
          v-for="(ex, i) in expertise"
          :key="ex.title"
          class="expertise"
          :style="{ '--i': i }"
        >
          <div class="expertise__icon">
            <v-icon size="20">{{ ex.mdi }}</v-icon>
          </div>
          <div class="expertise__body">
            <h4 class="expertise__title">{{ ex.title }}</h4>
            <p class="expertise__desc text-muted">{{ ex.description }}</p>
          </div>
        </article>
      </div>

      <!-- ============================================================ -->
      <!-- PROCESSUS                                                    -->
      <!-- ============================================================ -->
      <div class="services__process reveal">
        <p class="section-label">Méthode</p>
        <h3 class="services__process-title">
          Du besoin métier à la mise en production
        </h3>

        <ol class="process">
          <li
            v-for="(step, i) in processSteps"
            :key="step.title"
            class="process__step"
            :style="{ '--i': i }"
          >
            <div class="process__marker">
              <span class="process__dot" />
              <span class="process__num mono">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="process__body">
              <span class="process__label mono">{{ step.label }}</span>
              <h4 class="process__title">{{ step.title }}</h4>
              <p class="process__desc text-muted">{{ step.description }}</p>
            </div>
          </li>
          <span class="process__pulse" aria-hidden="true" />
        </ol>
      </div>

      <!-- ============================================================ -->
      <!-- CTA                                                          -->
      <!-- ============================================================ -->
      <div class="services__cta reveal">
        <div>
          <p class="services__cta-text">Un système à construire&nbsp;?</p>
          <p class="services__cta-sub text-muted">
            Décrivez-moi votre besoin — je vous réponds sous 24h.
          </p>
        </div>
        <a href="#contact" class="btn-primary services__cta-btn">
          Démarrer un projet
          <v-icon size="16">mdi-arrow-right</v-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* ============================================================ */
/* Parallaxe souris                                             */
/* ============================================================ */
const sectionRef = ref<HTMLElement | null>(null)

function onMouseMove(e: MouseEvent) {
  const el = sectionRef.value
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 → 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  el.style.setProperty('--mx', x.toFixed(3))
  el.style.setProperty('--my', y.toFixed(3))
}

function onMouseLeave() {
  const el = sectionRef.value
  if (!el) return
  el.style.setProperty('--mx', '0')
  el.style.setProperty('--my', '0')
}

/* ============================================================ */
/* Expertises complémentaires                                   */
/* ============================================================ */
const expertise = [
  {
    mdi: 'mdi-api',
    title: 'APIs & Backend',
    description: "Node.js, Express, PHP — API REST propres, documentées et testées.",
  },
  {
    mdi: 'mdi-robot-outline',
    title: 'Bots & Scraping',
    description: "Puppeteer pour automatiser la collecte, l'enrichissement et la veille.",
  },
  {
    mdi: 'mdi-speedometer',
    title: 'Performance & Maintenance',
    description: "Optimisation vitesse, SEO technique et suivi post-livraison.",
  },
]

/* ============================================================ */
/* Processus                                                    */
/* ============================================================ */
const processSteps = [
  {
    label: 'Discovery',
    title: 'Découverte',
    description: "On clarifie le besoin métier, les contraintes et les critères de succès.",
  },
  {
    label: 'Design',
    title: 'Architecture',
    description: "Choix de la stack, maquettes et schéma des flux d'automatisation.",
  },
  {
    label: 'Build',
    title: 'Développement',
    description: "Itérations courtes, points réguliers, vous voyez le progrès en continu.",
  },
  {
    label: 'Launch',
    title: 'Mise en production',
    description: "Déploiement, documentation, formation et suivi post-livraison.",
  },
]
</script>

<style scoped>
/* ============================================================ */
/* En-tête éditorial                                            */
/* ============================================================ */
.services__title {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  margin: 0.5rem 0 1.25rem;
  line-height: 0.95;
  letter-spacing: -0.035em;
  font-weight: 500;
}

.services__title-line {
  font-size: clamp(1.15rem, 2vw, 1.6rem);
  color: var(--text-muted);
  font-weight: 400;
  letter-spacing: -0.01em;
}

/* Le mot fort : énorme, serré, dense */
.services__title-hero {
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.9;
  color: var(--text);
  position: relative;
  display: inline-block;
  text-transform: lowercase;
  /* Petit halo subtil autour du mot */
  text-shadow: 0 0 60px rgba(79, 216, 196, 0.08);
}

/* Soulignement lumineux sous "construis" */
.services__title-hero::after {
  content: '';
  position: absolute;
  left: 0.1em;
  right: 0.1em;
  bottom: -0.08em;
  height: 2px;
  background: linear-gradient(90deg,
    rgba(79, 216, 196, 0.8),
    rgba(79, 216, 196, 0));
  border-radius: 2px;
}

/* "automatise" en accent */
.services__title-accent {
  font-style: italic;
  font-weight: 600;
  color: var(--accent);
  position: relative;
  padding-right: 0.05em;
}

.services__title-accent::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.05em;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(79, 216, 196, 0.6),
    transparent);
}

.services__lead {
  max-width: 42rem;
  line-height: 1.65;
  margin-bottom: 3rem;
}

/* ============================================================ */
/* SERVICES PRINCIPAUX                                          */
/* ============================================================ */
.services__main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3.5rem;
}

@media (min-width: 900px) {
  .services__main {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

/* Carte service */
.svc {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background:
    radial-gradient(120% 100% at 100% 0%, rgba(79, 216, 196, 0.04), transparent 50%),
    rgba(11, 14, 19, 0.65);
  overflow: hidden;
  transition:
    border-color 0.35s ease,
    transform 0.4s var(--ease-out),
    box-shadow 0.35s ease;
  animation: svcIn 0.7s var(--ease-out) both;
  animation-delay: calc(var(--i, 0) * 0.12s);
}

.svc::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(79, 216, 196, 0.06), transparent 40%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.svc:hover::before { opacity: 1; }

.svc:hover {
  border-color: rgba(79, 216, 196, 0.4);
  transform: translateY(-4px);
  box-shadow:
    0 20px 40px -20px rgba(79, 216, 196, 0.25),
    0 0 0 1px rgba(79, 216, 196, 0.06) inset;
}

@keyframes svcIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (min-width: 900px) {
  .svc--wide {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
  .svc--wide .svc__body { flex: 1 1 auto; max-width: 30rem; }
  .svc--wide .svc__visual { flex: 0 0 340px; }
}

.svc__body { position: relative; z-index: 1; display: flex; flex-direction: column; }

.svc__head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.svc__num {
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  color: var(--accent);
  border: 1px solid rgba(79, 216, 196, 0.3);
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  background: rgba(79, 216, 196, 0.06);
}

.svc__kicker {
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.svc__title {
  font-size: clamp(1.25rem, 2.2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 0.65rem;
  color: var(--text);
  line-height: 1.2;
}

.svc__desc {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1.25rem;
  max-width: 34rem;
}

.svc__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.svc__tags li {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  border: 1px solid var(--line-soft);
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  transition: border-color 0.25s, color 0.25s;
}
.svc:hover .svc__tags li {
  border-color: rgba(79, 216, 196, 0.2);
}

/* Visuel + parallaxe */
.svc__visual {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}
@media (min-width: 900px) {
  .svc:not(.svc--wide) .svc__visual {
    margin-top: 1.25rem;
    min-height: 220px;
  }
}

.illu {
  width: 100%;
  height: auto;
  max-width: 280px;
  overflow: visible;
  /* Profondeur 3D subtile au hover de la carte */
  transition: transform 0.6s var(--ease-out);
  transform: perspective(800px) rotateX(0deg) rotateY(0deg);
}
.svc:hover .illu {
  transform: perspective(800px) rotateX(2deg) rotateY(-2deg);
}

/* Parallaxe : les sous-groupes bougent selon la souris */
.illu__layer-1,
.illu__layer-2 {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
.illu__layer-1 {
  transform: translate(
    calc(var(--mx, 0) * 8px * var(--d, 0.6)),
    calc(var(--my, 0) * 8px * var(--d, 0.6))
  );
}
.illu__layer-2 {
  transform: translate(
    calc(var(--mx, 0) * -12px * var(--d, 1.2)),
    calc(var(--my, 0) * -12px * var(--d, 1.2))
  );
}

/* Particules flottantes */
.illu__particles--back circle {
  fill: var(--accent);
  opacity: 0.4;
}
.illu__particles--back circle:nth-child(1) {
  animation: particleFloat 5s ease-in-out infinite;
}
.illu__particles--back circle:nth-child(2) {
  animation: particleFloat 6.5s ease-in-out infinite 0.8s;
}
.illu__particles--back circle:nth-child(3) {
  animation: particleFloat 7s ease-in-out infinite 1.6s;
}
.illu__particles--back circle:nth-child(4) {
  animation: particleFloat 5.5s ease-in-out infinite 2.4s;
}
@keyframes particleFloat {
  0%, 100% { transform: translateY(0);    opacity: 0.25; }
  50%      { transform: translateY(-6px); opacity: 0.6; }
}

/* ============================================================ */
/* SVG — styles communs                                         */
/* ============================================================ */
.illu__line {
  fill: none;
  stroke: var(--line);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.illu__arrow {
  fill: none;
  stroke: rgba(79, 216, 196, 0.7);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.illu__code {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
}
.illu__code--tag {
  fill: var(--accent);
  font-weight: 600;
}
.illu__code--stack {
  fill: var(--text-muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.illu__bar {
  fill: rgba(79, 216, 196, 0.35);
}

.illu__chip-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  fill: var(--text-muted);
}
.illu__chip-label--sm { font-size: 9px; }
.illu__chip-label--accent {
  fill: var(--accent);
  font-weight: 700;
  font-size: 12px;
}

/* --- Illustration CMS --- */
.illu__stack {
  transform-box: fill-box;
  transform-origin: center;
  animation: layerIn 0.8s var(--ease-out) both;
}
.illu__stack--2 { animation-delay: 0.15s; }
.illu__stack--3 { animation-delay: 0.3s; }

@keyframes layerIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.illu__layer-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  fill: var(--text);
  pointer-events: none;
}

.illu__cart {
  animation: cartFloat 3.4s ease-in-out infinite;
  transform-origin: 195px 110px;
  transform-box: fill-box;
}
@keyframes cartFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}

/* ============================================================ */
/* EXPERTISES COMPLÉMENTAIRES                                   */
/* ============================================================ */
.services__sub {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.services__sub .mono {
  color: var(--accent);
  font-size: 1rem;
}

.services__minor {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 4rem;
}
@media (min-width: 640px) {
  .services__minor { grid-template-columns: repeat(3, 1fr); }
}

.expertise {
  display: flex;
  gap: 0.85rem;
  padding: 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background: rgba(11, 14, 19, 0.45);
  transition: border-color 0.3s ease, transform 0.3s var(--ease-out), background 0.3s;
  animation: svcIn 0.6s var(--ease-out) both;
  animation-delay: calc(var(--i, 0) * 0.08s + 0.3s);
}
.expertise:hover {
  border-color: rgba(79, 216, 196, 0.3);
  background: rgba(11, 14, 19, 0.7);
  transform: translateY(-3px);
}

.expertise__icon {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(79, 216, 196, 0.15);
}

.expertise__title {
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--text);
}
.expertise__desc {
  font-size: 0.78rem;
  line-height: 1.45;
  margin: 0;
}

/* ============================================================ */
/* PROCESSUS                                                    */
/* ============================================================ */
.services__process {
  margin-bottom: 4rem;
}
.services__process-title {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0.5rem 0 2rem;
  color: var(--text);
}

.process {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .process {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .process::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 5%;
    right: 5%;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      var(--line) 12%,
      var(--line) 88%,
      transparent 100%);
    z-index: 0;
  }
}

.process__pulse { display: none; }
@media (min-width: 768px) {
  .process__pulse {
    display: block;
    position: absolute;
    top: 9px;
    left: 5%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow:
      0 0 10px var(--accent),
      0 0 20px rgba(79, 216, 196, 0.5);
    animation: processFlow 6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
    pointer-events: none;
    z-index: 1;
  }
}
@keyframes processFlow {
  0%   { left: 5%;  opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 95%; opacity: 0; }
}

.process__step {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.25rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background: rgba(11, 14, 19, 0.55);
  transition: border-color 0.3s ease, transform 0.3s var(--ease-out);
  animation: svcIn 0.6s var(--ease-out) both;
  animation-delay: calc(var(--i, 0) * 0.1s + 0.4s);
}
.process__step:hover {
  border-color: rgba(79, 216, 196, 0.32);
  transform: translateY(-3px);
}

.process__marker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.process__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px rgba(79, 216, 196, 0.6);
  flex: none;
  position: relative;
}
.process__dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid rgba(79, 216, 196, 0.4);
  animation: dotPulse 2.4s ease-out infinite;
}
@keyframes dotPulse {
  0%   { transform: scale(1);   opacity: 0.9; }
  100% { transform: scale(1.8); opacity: 0; }
}

.process__num {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: var(--accent);
}

.process__label {
  font-size: 0.64rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.2rem;
}

.process__title {
  font-size: 0.92rem;
  font-weight: 600;
  margin: 0 0 0.35rem;
  color: var(--text);
}

.process__desc {
  font-size: 0.78rem;
  line-height: 1.5;
  margin: 0;
}

/* ============================================================ */
/* CTA                                                          */
/* ============================================================ */
.services__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.75rem clamp(1rem, 3vw, 2rem);
  border-radius: var(--radius-md);
  border: 1px solid rgba(79, 216, 196, 0.28);
  background:
    radial-gradient(120% 100% at 0% 0%, rgba(79, 216, 196, 0.08), transparent 55%),
    radial-gradient(80% 100% at 100% 100%, rgba(242, 169, 59, 0.05), transparent 55%),
    rgba(11, 14, 19, 0.6);
}

.services__cta-text {
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 0 0 0.2rem;
}
.services__cta-sub {
  font-size: 0.82rem;
  margin: 0;
}

.services__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: none;
}

/* ============================================================ */
/* Mouvement réduit                                             */
/* ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .svc,
  .expertise,
  .process__step,
  .illu__stack,
  .illu__cart,
  .illu__particles--back circle,
  .process__pulse,
  .process__dot::after {
    animation: none !important;
  }
  .svc:hover,
  .expertise:hover,
  .process__step:hover,
  .svc:hover .illu,
  .illu__layer-1,
  .illu__layer-2 {
    transform: none !important;
  }
}
</style>