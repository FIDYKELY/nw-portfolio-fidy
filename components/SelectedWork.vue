<template>
  <section id="work" class="work section-pad">
    <div class="container-narrow">
      <p class="section-label reveal">Portfolio</p>
      <h2 class="section-title reveal">Projets Sélectionnés</h2>

      <!-- Featured -->
      <article class="featured reveal panel">
        <div class="featured__media">
          <a href="#" class="featured__media-link" @click.prevent="onProjectClick(featured)">
            <SmartImage
              :src="featured.image"
              :alt="featured.name"
              :placeholder-label="featured.name"
            />
          </a>
        </div>
        <div class="featured__body">
          <p class="featured__eyebrow mono">Projet mis en avant · {{ featured.status }}</p>
          <h3 class="featured__title">{{ featured.name }}</h3>
          <p class="featured__desc text-muted">{{ featured.description }}</p>
          <div class="featured__tags">
            <TechTag v-for="tag in featured.tags.slice(0, 6)" :key="tag" :name="tag" />
          </div>
          <div class="featured__actions">
            <a href="#" class="btn-primary" @click.prevent="onProjectClick(featured)">Étude de cas →</a>
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

      <!-- Alternating rows -->
      <article
        v-for="(project, idx) in secondaryProjects"
        :key="project.slug"
        class="work-row reveal"
        :class="[
          project.layout === 'right' ? 'work-row--reverse' : '',
          idx % 2 === 1 ? 'work-row--offset' : '',
        ]"
      >
        <div class="work-row__media panel">
          <a href="#" @click.prevent="onProjectClick(project)">
            <SmartImage
              :src="project.image"
              :alt="project.name"
              :placeholder-label="project.name"
            />
          </a>
        </div>
        <div class="work-row__content">
          <p class="work-row__index mono">
            {{ String(project.index + 1).padStart(2, '0') }} / {{ project.category }}
          </p>
          <h3 class="work-row__title">{{ project.name }}</h3>
          <p class="work-row__desc text-muted">{{ project.description }}</p>
          <div class="work-row__tags">
            <TechTag v-for="tag in project.tags.slice(0, 5)" :key="tag" :name="tag" />
          </div>
          <p class="work-row__status mono">{{ project.status }}</p>
          <div class="work-row__links">
            <a href="#" class="work-row__cta" @click.prevent="onProjectClick(project)">
              Voir le projet →
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
      </article>

      <div class="work__more reveal">
        <a href="#" class="btn-ghost" @click.prevent="onArchiveClick">Voir tous les projets →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredProject, showcaseProjects, type ShowcaseProject } from '~/data/projects-showcase'

const emit = defineEmits<{
  'open-project': [index: number]
  'open-archive': []
}>()

const featured = featuredProject
const secondaryProjects = showcaseProjects.filter((p) => !p.featured).slice(0, 3)

function onProjectClick(project: ShowcaseProject) {
  emit('open-project', project.index)
}

function onArchiveClick() {
  emit('open-archive')
}
</script>

<style scoped>
.featured {
  display: grid;
  gap: 0;
  overflow: hidden;
  margin-bottom: clamp(3rem, 8vw, 5rem);
}

@media (min-width: 900px) {
  .featured {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.featured__media {
  min-height: 280px;
  aspect-ratio: 16 / 10;
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

.featured__body {
  padding: clamp(1.5rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured__eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin: 0 0 0.75rem;
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

.work-row {
  display: grid;
  gap: 2rem;
  align-items: center;
  margin-bottom: clamp(3rem, 7vw, 4.5rem);
}

@media (min-width: 900px) {
  .work-row {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .work-row--reverse {
    direction: rtl;
  }

  .work-row--reverse > * {
    direction: ltr;
  }

  .work-row--offset {
    margin-top: 1rem;
  }
}

.work-row__media {
  overflow: hidden;
  aspect-ratio: 16 / 11;
  transition:
    transform 0.4s var(--ease-out),
    box-shadow 0.4s;
}

.work-row__media:hover {
  transform: perspective(800px) rotateY(-2deg) translateY(-4px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.work-row__media :deep(img) {
  transition: transform 0.55s var(--ease-out);
}

.work-row__media:hover :deep(img) {
  transform: scale(1.04);
}

.work-row__index {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.75rem;
}

.work-row__title {
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.work-row__desc {
  line-height: 1.65;
  margin: 0 0 1rem;
}

.work-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 0.75rem;
}

.work-row__status {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1rem;
}

.work-row__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.work-row__cta {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
}

.work-row__cta:hover {
  text-decoration: underline;
}

.work-row__link-muted {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.work__more {
  text-align: center;
  margin-top: 2rem;
}
</style>
