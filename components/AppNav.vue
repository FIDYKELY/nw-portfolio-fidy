<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container-narrow">
      <NuxtLink to="/#hero" class="nav__brand mono" aria-label="Accueil">
        <span class="nav__brand-accent">&lt;FA/&gt;</span>
      </NuxtLink>

      <nav class="nav__links" aria-label="Navigation principale">
        <a
          v-for="item in items"
          :key="item.id"
          :href="item.href"
          class="nav__link"
          :class="{ 'nav__link--active': activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        type="button"
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="nav__toggle-bar" />
        <span class="nav__toggle-bar" />
      </button>
    </div>

    <Transition name="menu">
      <div v-if="menuOpen" id="mobile-menu" class="nav__mobile" @click.self="menuOpen = false">
        <nav class="nav__mobile-inner" aria-label="Navigation mobile">
          <a
            v-for="item in items"
            :key="item.id"
            :href="item.href"
            class="nav__mobile-link"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
          <a href="#contact" class="btn-primary nav__mobile-cta" @click="menuOpen = false">
            Contact
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
defineProps<{ activeSection: string }>()

const items = [
  { id: 'work', label: 'Projets', href: '#work' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'stack', label: 'Compétences', href: '#stack' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 24
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  transition:
    background 0.35s,
    border-color 0.35s,
    backdrop-filter 0.35s;
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: rgba(11, 14, 19, 0.82);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line-soft);
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.nav__brand {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
}

.nav__brand-accent {
  color: var(--accent);
}

.nav__links {
  margin-left: auto;
  display: none;
  gap: 0.25rem;
}

@media (min-width: 768px) {
  .nav__links {
    display: flex;
  }
}

.nav__link {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.nav__link:hover,
.nav__link--active {
  color: var(--text);
}

.nav__link--active::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 0.25rem;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
}

.nav__toggle {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .nav__toggle {
    display: none;
  }
}

.nav__toggle-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 1px;
}

.nav__mobile {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(11, 14, 19, 0.96);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.nav__mobile-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  max-width: 320px;
}

.nav__mobile-link {
  font-size: clamp(1.5rem, 6vw, 2rem);
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav__mobile-cta {
  margin-top: 1rem;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.35s var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
