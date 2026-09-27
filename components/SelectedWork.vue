<template>
  <section id="work" class="work section-pad">
    <div class="work__grain" aria-hidden="true" />

    <div class="container-narrow">
      <!-- ============================================================ -->
      <!-- En-tête                                                     -->
      <!-- ============================================================ -->
      <header class="work__header reveal">
        <div class="work__header-left">
          <p class="section-label">Portfolio</p>
          <h2 class="section-title">Projets Sélectionnés</h2>
        </div>
        <div class="work__counter mono">
          <span class="work__counter-num">{{ totalCount }}</span>
          <span class="work__counter-sep" aria-hidden="true" />
          <span class="work__counter-label">projets<br />sélectionnés</span>
        </div>
      </header>

      <!-- ============================================================ -->
      <!-- Featured                                                    -->
      <!-- ============================================================ -->
      <article class="featured reveal panel">
        <span class="featured__ghost mono" aria-hidden="true">01</span>

        <div
          class="featured__media"
          @mousemove="onMediaTilt"
          @mouseleave="onMediaLeave"
        >
          <span class="featured__corner featured__corner--tl" aria-hidden="true" />
          <span class="featured__corner featured__corner--tr" aria-hidden="true" />
          <span class="featured__corner featured__corner--bl" aria-hidden="true" />
          <span class="featured__corner featured__corner--br" aria-hidden="true" />
          <span class="featured__scan" aria-hidden="true" />

          <a
            href="#"
            class="featured__media-link"
            @click.prevent="onProjectClick(featured)"
          >
            <SmartImage
              :src="featured.image"
              :alt="featured.name"
              :placeholder-label="featured.name"
            />
          </a>

          <div class="featured__media-strip">
            <span class="featured__media-cat mono">{{ featured.category }}</span>
            <span class="featured__media-status mono">
              <span
                class="status-dot"
                :class="statusDotClass(featured.status)"
                aria-hidden="true"
              />
              {{ featured.status }}
            </span>
          </div>
        </div>

        <div class="featured__body">
          <div class="featured__meta">
            <span class="featured__badge mono">Projet mis en avant</span>
          </div>

          <h3 class="featured__title">{{ featured.name }}</h3>
          <p class="featured__desc text-muted">{{ featured.description }}</p>

          <div class="featured__tags">
            <TechTag v-for="tag in featured.tags.slice(0, 6)" :key="tag" :name="tag" />
          </div>

          <div class="featured__actions">
            <a
              href="#"
              class="btn-primary featured__cta"
              @click.prevent="onProjectClick(featured)"
            >
              Étude de cas
              <span class="cta-arrow" aria-hidden="true">→</span>
            </a>
            <a
              v-if="featured.demo"
              :href="featured.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
            >
              Démo en direct
            </a>
          </div>
        </div>
      </article>

      <!-- ============================================================ -->
      <!-- Rows alternées                                              -->
      <!-- ============================================================ -->
      <div class="work__list">
        <article
          v-for="(project, idx) in secondaryProjects"
          :key="project.slug"
          class="work-row reveal"
          :class="[
            project.layout === 'right' ? 'work-row--reverse' : '',
            idx % 2 === 1 ? 'work-row--offset' : '',
          ]"
        >
          <span class="work-row__ghost mono" aria-hidden="true">
            {{ String(project.index + 1).padStart(2, '0') }}
          </span>

          <div
            class="work-row__media panel"
            @mousemove="onMediaTilt"
            @mouseleave="onMediaLeave"
          >
            <a href="#" @click.prevent="onProjectClick(project)">
              <SmartImage
                :src="project.image"
                :alt="project.name"
                :placeholder-label="project.name"
              />
            </a>
            <span class="work-row__media-glow" aria-hidden="true" />
          </div>

          <div class="work-row__content">
            <p class="work-row__index mono">
              <span class="work-row__index-num">
                {{ String(project.index + 1).padStart(2, '0') }}
              </span>
              <span class="work-row__index-rule" aria-hidden="true">
                <span class="work-row__index-dot" />
              </span>
              <span class="work-row__index-cat">{{ project.category }}</span>
            </p>

            <h3 class="work-row__title">{{ project.name }}</h3>
            <p class="work-row__desc text-muted">{{ project.description }}</p>

            <div class="work-row__tags">
              <TechTag
                v-for="tag in project.tags.slice(0, 5)"
                :key="tag"
                :name="tag"
              />
            </div>

            <div class="work-row__foot">
              <span class="work-row__status mono">
                <span
                  class="status-dot"
                  :class="statusDotClass(project.status)"
                  aria-hidden="true"
                />
                {{ project.status }}
              </span>

              <div class="work-row__links">
                <a
                  href="#"
                  class="work-row__cta"
                  @click.prevent="onProjectClick(project)"
                >
                  Voir le projet
                  <span class="cta-arrow" aria-hidden="true">→</span>
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="work-row__link-muted"
                >
                  Démo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="work-row__link-muted"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- ============================================================ -->
      <!-- CTA archive                                                 -->
      <!-- ============================================================ -->
      <div class="work__archive reveal">
        <span class="work__archive-line" aria-hidden="true" />
        <a href="#" class="work__archive-btn" @click.prevent="onArchiveClick">
          <span class="work__archive-label">Voir tous les projets</span>
          <span class="work__archive-icon" aria-hidden="true">
            <span class="cta-arrow">→</span>
          </span>
        </a>
        <span class="work__archive-line" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  featuredProject,
  showcaseProjects,
  type ShowcaseProject,
} from '~/data/projects-showcase'

const emit = defineEmits<{
  'open-project': [index: number]
  'open-archive': []
}>()

const featured = featuredProject
const secondaryProjects = showcaseProjects.filter((p) => !p.featured).slice(0, 3)

const totalCount = computed(() => 1 + secondaryProjects.length)

function onProjectClick(project: ShowcaseProject) {
  emit('open-project', project.index)
}

function onArchiveClick() {
  emit('open-archive')
}

// live / in-progress / archived → a quick visual read before reading the label
function statusDotClass(status: string) {
  const s = status.toLowerCase()
  if (s.includes('ligne') || s.includes('line')) return 'is-live'
  if (s.includes('cours') || s.includes('progress')) return 'is-progress'
  return 'is-muted'
}

// shared mouse-tilt for featured + row media — same depth language as the hero portrait
function onMediaTilt(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.015)`
  el.style.setProperty('--mx', x.toFixed(3))
  el.style.setProperty('--my', y.toFixed(3))
}

function onMediaLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transform = ''
  el.style.setProperty('--mx', '0')
  el.style.setProperty('--my', '0')
}
</script>

<style scoped>
/* ============================================================ */
/* Section                                                      */
/* ============================================================ */
.work {
  position: relative;
}

.work__grain {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(255, 255, 255, 0.035) 1px,
    transparent 0
  );
  background-size: 26px 26px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 15%,
    #000 85%,
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 15%,
    #000 85%,
    transparent
  );
}

.container-narrow {
  position: relative;
  z-index: 1;
}

/* ============================================================ */
/* En-tête                                                      */
/* ============================================================ */
.work__header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.work__header-left .section-title {
  margin-bottom: 0;
}

.work__counter {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--line-soft);
  border-radius: 999px;
  background: rgba(11, 14, 19, 0.5);
}
.work__counter-num {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--accent);
  line-height: 1;
}
.work__counter-sep {
  width: 1px;
  height: 22px;
  background: var(--line);
}
.work__counter-label {
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  line-height: 1.3;
}

/* ============================================================ */
/* Shared                                                       */
/* ============================================================ */
.cta-arrow {
  display: inline-block;
  margin-left: 0.35rem;
  transition: transform 0.25s var(--ease-out);
}
.btn-primary:hover .cta-arrow,
.btn-ghost:hover .cta-arrow,
.work-row__cta:hover .cta-arrow,
.work__archive-btn:hover .cta-arrow {
  transform: translateX(4px);
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 0.4rem;
  background: var(--text-muted);
}
.status-dot.is-live {
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.5);
  animation: statusPulse 2.4s ease-out infinite;
}
.status-dot.is-progress {
  background: var(--accent-2);
}
@keyframes statusPulse {
  0%   { box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.45); }
  70%  { box-shadow: 0 0 0 7px rgba(79, 216, 196, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 216, 196, 0); }
}

/* ============================================================ */
/* Featured                                                     */
/* ============================================================ */
.featured {
  position: relative;
  display: grid;
  gap: 0;
  overflow: hidden;
  margin-bottom: clamp(3rem, 8vw, 5rem);
  isolation: isolate;
}

@media (min-width: 900px) {
  .featured {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

/* Numéro fantôme en fond */
.featured__ghost {
  position: absolute;
  top: -1.2rem;
  right: 1.5rem;
  z-index: 0;
  font-size: clamp(6rem, 14vw, 11rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;
  color: rgba(79, 216, 196, 0.055);
  pointer-events: none;
  user-select: none;
}

/* ---------- Media ---------- */
.featured__media {
  position: relative;
  min-height: 280px;
  aspect-ratio: 16 / 10;
  transition: transform 0.25s ease;
  will-change: transform;
  overflow: hidden;
}
@media (min-width: 900px) {
  .featured__media { aspect-ratio: auto; }
}

.featured__corner {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 3;
  opacity: 0.55;
  pointer-events: none;
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.featured__corner--tl { top: 12px; left: 12px; border-top: 1.5px solid var(--accent); border-left: 1.5px solid var(--accent); border-top-left-radius: 4px; }
.featured__corner--tr { top: 12px; right: 12px; border-top: 1.5px solid var(--accent); border-right: 1.5px solid var(--accent); border-top-right-radius: 4px; }
.featured__corner--bl { bottom: 12px; left: 12px; border-bottom: 1.5px solid var(--accent); border-left: 1.5px solid var(--accent); border-bottom-left-radius: 4px; }
.featured__corner--br { bottom: 12px; right: 12px; border-bottom: 1.5px solid var(--accent); border-right: 1.5px solid var(--accent); border-bottom-right-radius: 4px; }

.featured__media:hover .featured__corner { opacity: 1; }
.featured__media:hover .featured__corner--tl { transform: translate(-2px, -2px); }
.featured__media:hover .featured__corner--tr { transform: translate(2px, -2px); }
.featured__media:hover .featured__corner--bl { transform: translate(-2px, 2px); }
.featured__media:hover .featured__corner--br { transform: translate(2px, 2px); }

/* Scan-line qui balaye au hover */
.featured__scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  top: 0;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(79, 216, 196, 0.85),
    transparent
  );
  filter: drop-shadow(0 0 8px rgba(79, 216, 196, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.featured__media:hover .featured__scan {
  opacity: 1;
  animation: featuredScan 2.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes featuredScan {
  0%   { top: -2px; }
  100% { top: calc(100% + 2px); }
}

.featured__media-link {
  display: block;
  height: 100%;
  border-radius: inherit;
}

.featured__media :deep(.smart-image) {
  border-radius: 0;
  transition: transform 0.6s var(--ease-out);
}
.featured__media:hover :deep(img) {
  transform: scale(1.03);
}

/* Bandeau bas : catégorie / statut */
.featured__media-strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.1rem;
  background: linear-gradient(
    to top,
    rgba(11, 14, 19, 0.85),
    rgba(11, 14, 19, 0)
  );
  color: var(--text);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  pointer-events: none;
}
.featured__media-cat { color: var(--text); }
.featured__media-status {
  display: inline-flex;
  align-items: center;
  color: var(--text-muted);
}

/* ---------- Body ---------- */
.featured__body {
  position: relative;
  z-index: 1;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1rem;
}

.featured__badge {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-2);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.3rem 0.65rem;
  background: rgba(242, 169, 59, 0.05);
}

.featured__title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.15;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.featured__desc {
  line-height: 1.65;
  margin: 0 0 1.25rem;
}

.featured__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.featured__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

/* ============================================================ */
/* Rows                                                         */
/* ============================================================ */
.work__list {
  display: flex;
  flex-direction: column;
}

.work-row {
  position: relative;
  display: grid;
  gap: 2rem;
  align-items: center;
  padding-top: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  border-top: 1px solid var(--line);
}
@media (min-width: 900px) {
  .work-row {
    grid-template-columns: 1fr 1fr;
    gap: 3.5rem;
    padding-top: clamp(3rem, 7vw, 4.5rem);
  }
  .work-row--reverse { direction: rtl; }
  .work-row--reverse > * { direction: ltr; }
  .work-row--offset { margin-top: 1.5rem; }
}

/* Numéro fantôme en fond */
.work-row__ghost {
  position: absolute;
  top: 1.5rem;
  right: 0;
  z-index: 0;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;
  color: rgba(79, 216, 196, 0.045);
  pointer-events: none;
  user-select: none;
}
.work-row--reverse .work-row__ghost {
  right: auto;
  left: 0;
}

/* ---------- Media ---------- */
.work-row__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 11;
  transition: transform 0.25s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.work-row__media:hover {
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(79, 216, 196, 0.15) inset;
}

/* Halo subtil qui suit la souris */
.work-row__media-glow {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    400px circle at calc((var(--mx, 0) + 0.5) * 100%) calc((var(--my, 0) + 0.5) * 100%),
    rgba(79, 216, 196, 0.1),
    transparent 45%
  );
  transition: opacity 0.35s ease;
}
.work-row__media:hover .work-row__media-glow { opacity: 1; }

.work-row__media :deep(img) {
  transition: transform 0.55s var(--ease-out);
}
.work-row__media:hover :deep(img) {
  transform: scale(1.04);
}

/* ---------- Content ---------- */
.work-row__content {
  position: relative;
  z-index: 1;
}

.work-row__index {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1rem;
}
.work-row__index-num {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0;
}
.work-row__index-rule {
  position: relative;
  width: 32px;
  height: 1px;
  background: var(--line);
  overflow: visible;
}
.work-row__index-dot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px rgba(79, 216, 196, 0.7);
  transform: translateY(-50%);
  animation: indexDotFlow 3.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes indexDotFlow {
  0%   { left: 0; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}
.work-row__index-cat { color: var(--text-muted); }

.work-row__title {
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  margin: 0 0 0.85rem;
  letter-spacing: -0.02em;
}

.work-row__desc {
  line-height: 1.65;
  margin: 0 0 1.1rem;
}

.work-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.25rem;
}

/* Footer groupé : statut à gauche, liens à droite */
.work-row__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.85rem;
  border-top: 1px dashed var(--line-soft);
}

.work-row__status {
  display: inline-flex;
  align-items: center;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.work-row__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.work-row__cta {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
  position: relative;
}
.work-row__cta::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease-out);
}
.work-row__cta:hover::after { transform: scaleX(1); }

.work-row__link-muted {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.25s;
}
.work-row__link-muted:hover { color: var(--text); }

/* ============================================================ */
/* Archive CTA                                                  */
/* ============================================================ */
.work__archive {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: clamp(3rem, 6vw, 4.5rem);
}

.work__archive-line {
  flex: 1 1 auto;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--line) 40%,
    var(--line) 60%,
    transparent
  );
}

.work__archive-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.35rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(11, 14, 19, 0.5);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.35s ease,
    color 0.35s ease,
    box-shadow 0.35s ease;
}
.work__archive-btn:hover {
  border-color: rgba(79, 216, 196, 0.55);
  color: var(--accent);
  box-shadow: 0 0 30px -10px rgba(79, 216, 196, 0.4);
}
.work__archive-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 25%,
    rgba(79, 216, 196, 0.14) 50%,
    transparent 75%
  );
  transform: translateX(-120%);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}
.work__archive-btn:hover::before { transform: translateX(120%); }

.work__archive-icon {
  display: inline-flex;
  transition: transform 0.3s var(--ease-out);
}
.work__archive-btn:hover .work__archive-icon { transform: translateX(3px); }

/* ============================================================ */
/* Mouvement réduit                                             */
/* ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .status-dot.is-live,
  .featured__scan,
  .work-row__index-dot {
    animation: none !important;
  }
  .featured__media,
  .work-row__media {
    transition: none;
  }
  .featured__media:hover .featured__corner {
    transform: none;
  }
}
</style>