<template>
  <section id="contact" class="contact section-pad">
    <div class="container-narrow contact__wrap">
      <div class="contact__intro reveal">
        <p class="section-label">Contact</p>
        <h2 class="contact__title">
          Vous avez un projet<br />
          en tête ?<br />
          <span class="contact__accent">Réalisons-le.</span>
        </h2>
        <p class="text-muted">
          Disponible pour de nouveaux projets — Antananarivo, Madagascar.
        </p>
        <a href="mailto:fidy.ratsimanohatra@gmail.com" class="contact__email mono">
          fidy.ratsimanohatra@gmail.com
        </a>
        <div class="contact__social">
          <a
            v-for="s in socialLinks"
            :key="s.link"
            :href="s.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
          >
            <v-icon>{{ s.icon }}</v-icon>
          </a>
        </div>
      </div>

      <form class="contact__form panel reveal" @submit.prevent="submitForm">
        <div class="contact__fields">
          <label>
            <span class="mono">Nom</span>
            <input v-model="formData.name" type="text" required autocomplete="name" />
          </label>
          <label>
            <span class="mono">Email</span>
            <input v-model="formData.email" type="email" required autocomplete="email" />
          </label>
          <label class="contact__full">
            <span class="mono">Sujet</span>
            <input v-model="formData.subject" type="text" required />
          </label>
          <label class="contact__full">
            <span class="mono">Message</span>
            <textarea v-model="formData.message" rows="4" required />
          </label>
        </div>
        <button type="submit" class="btn-primary contact__submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer le message' }}
        </button>
        <p v-if="feedback" class="contact__feedback" :class="feedbackType">{{ feedback }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/portfolio'

const FORMSPREE_URL = 'https://formspree.io/f/xovwkdkk'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const feedback = ref('')
const feedbackType = ref<'ok' | 'err'>('ok')

async function submitForm() {
  isSubmitting.value = true
  feedback.value = ''

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _subject: `[Portfolio] Nouveau message de ${formData.value.name}`,
        'Nom Complet': formData.value.name,
        'Adresse Email': formData.value.email,
        Sujet: formData.value.subject,
        Message: formData.value.message,
        Source: 'Portfolio - Section Contact',
      }),
    })

    const result = await response.json()
    if (response.ok) {
      formData.value = { name: '', email: '', subject: '', message: '' }
      feedback.value = 'Message envoyé avec succès.'
      feedbackType.value = 'ok'
    } else {
      feedback.value = result?.error || 'Une erreur est survenue.'
      feedbackType.value = 'err'
    }
  } catch {
    feedback.value = 'Une erreur est survenue. Veuillez réessayer.'
    feedbackType.value = 'err'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact__wrap {
  display: grid;
  gap: 3rem;
}

@media (min-width: 900px) {
  .contact__wrap {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 4rem;
  }
}

.contact__title {
  font-size: clamp(2.2rem, 5vw, 3.25rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
}

.contact__accent {
  color: var(--accent);
}

.contact__email {
  display: inline-block;
  margin: 1.25rem 0;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.85rem;
  word-break: break-all;
}

.contact__email:hover {
  text-decoration: underline;
}

.contact__social {
  display: flex;
  gap: 0.5rem;
}

.contact__social a {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text-muted);
  transition: color 0.2s, border-color 0.2s;
}

.contact__social a:hover {
  color: var(--accent);
  border-color: rgba(79, 216, 196, 0.35);
}

.contact__form {
  padding: 1.5rem;
}

.contact__fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.contact__full {
  grid-column: 1 / -1;
}

.contact__fields label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact__fields span {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.contact__fields input,
.contact__fields textarea {
  width: 100%;
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}

.contact__fields input:focus-visible,
.contact__fields textarea:focus-visible {
  outline: none;
  border-color: var(--accent);
}

.contact__submit {
  width: 100%;
  justify-content: center;
  border: none;
}

.contact__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact__feedback {
  margin: 1rem 0 0;
  font-size: 0.9rem;
}

.contact__feedback.ok {
  color: var(--accent);
}

.contact__feedback.err {
  color: #f87171;
}
</style>
