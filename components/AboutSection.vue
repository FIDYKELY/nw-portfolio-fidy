<template>
  <section id="about" class="about section-pad">
    <div class="container-narrow about__grid">
      <div>
        <p class="section-label reveal">À propos</p>
        <h2 class="about__headline reveal">
          Je crée des sites web,<br />
          des applications et<br />
          <span class="about__accent">des processus automatisés.</span>
        </h2>
        <p class="about__text text-muted reveal">
          Développeur web passionné par la création de solutions innovantes et automatisées.
          Qualité du code, performance et outils fiables — adaptés aux besoins réels.
        </p>
        <ul class="about__tags reveal">
          <li v-for="tag in tags" :key="tag">{{ tag }}</li>
        </ul>
      </div>

      <div class="about__side reveal">
        <div class="about__stats">
          <StatCounter
            v-for="s in stats"
            :key="s.label"
            :value="s.value"
            :suffix="s.suffix"
            :label="s.label"
            :sub="s.sub"
          />
        </div>

        <div class="about__education panel">
          <h3 class="about__edu-title mono">Formation</h3>
          <div v-for="(edu, i) in education" :key="i" class="about__edu-item">
            <div class="about__edu-period">{{ edu.period }}</div>
            <div class="about__edu-title-text">{{ edu.title }}</div>
            <div class="about__edu-desc text-muted">{{ edu.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, stats } from '~/data/portfolio'

const tags = [
  'Madagascar',
  'Développement Web',
  'Automatisation',
  'WordPress',
  'JavaScript',
  'Vue / Nuxt',
]
</script>

<style scoped>
.about__grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: start;
  }
}

.about__headline {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem;
  font-weight: 700;
}

.about__accent {
  color: var(--accent);
}

.about__text {
  max-width: 32rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.about__tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.about__tags li {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text-muted);
}

.about__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.about__education {
  padding: 1.25rem 1.35rem;
}

.about__edu-title {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin: 0 0 1rem;
}

.about__edu-item + .about__edu-item {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line-soft);
}

.about__edu-period {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.about__edu-title-text {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.about__edu-desc {
  font-size: 0.88rem;
  line-height: 1.5;
}
</style>
