<template>
  <footer class="footer">
    <div class="container-narrow footer__inner">
      <span class="footer__brand mono">&lt;FA/&gt;</span>
      <p class="footer__copy text-muted">
        © {{ year }} Fidiniaina Ratsimanohatra. Fait avec Nuxt & Vue.
      </p>
      <div class="footer__links">
        <a href="#work">Projets</a>
        <a href="#stack">Compétences</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line-soft);
  padding: 2rem 0 2.5rem;
  margin-top: 2rem;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__brand {
  color: var(--accent);
  font-weight: 600;
}

.footer__copy {
  margin: 0;
  font-size: 0.85rem;
}

.footer__links {
  display: flex;
  gap: 1.25rem;
}

.footer__links a {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
}

.footer__links a:hover {
  color: var(--text);
}
</style>
