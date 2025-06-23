<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h3 font-weight-bold mb-4">
          Contact
        </h1>
        <p class="text-h6 text-secondary">
          N'hésitez pas à me contacter pour discuter de vos projets
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="0" color="surface" class="h-100">
          <v-card-text>
            <h2 class="text-h5 mb-4">Informations de contact</h2>
            
            <v-list>
              <v-list-item
                prepend-icon="mdi-email"
                title="Email"
                subtitle="fidyfire@gmail.com"
                class="mb-4"
              ></v-list-item>

              <v-list-item
                prepend-icon="mdi-map-marker"
                title="Localisation"
                subtitle="Antananarivo, Madagascar, Lot 96-0 Ambohitrinimanga Anosy Avaratra"
                class="mb-4"
              ></v-list-item>

              <v-list-item
                prepend-icon="mdi-clock"
                title="Disponibilité"
                subtitle="Disponible pour de nouveaux projets"
                class="mb-4"
              ></v-list-item>
            </v-list>

            <div class="d-flex gap-4 mt-8">
              <v-btn
                v-for="social in socialLinks"
                :key="social.icon"
                :href="social.link"
                target="_blank"
                icon
                variant="text"
                size="large"
                class="social-btn"
              >
                <v-icon size="large">{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="0" color="surface">
          <v-card-text>
            <h2 class="text-h5 mb-4">Envoyez-moi un message</h2>
            
            <v-form
              ref="form"
              @submit.prevent="submitForm"
              v-model="isFormValid"
            >
              <v-text-field
                v-model="formData.name"
                label="Nom"
                :rules="[v => !!v || 'Le nom est requis']"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.email"
                label="Email"
                :rules="[
                  v => !!v || 'L\'email est requis',
                  v => /.+@.+\..+/.test(v) || 'L\'email doit être valide'
                ]"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.subject"
                label="Sujet"
                :rules="[v => !!v || 'Le sujet est requis']"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-textarea
                v-model="formData.message"
                label="Message"
                :rules="[v => !!v || 'Le message est requis']"
                required
                variant="outlined"
                rows="4"
                class="mb-4"
              ></v-textarea>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                :loading="isSubmitting"
                :disabled="!isFormValid"
              >
                Envoyer le message
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Notification -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
      
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar.show = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
const form = ref<HTMLFormElement | null>(null)
const isFormValid = ref(false)
const isSubmitting = ref(false)

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Notification state
const snackbar = ref({
  show: false,
  color: 'success',
  text: ''
})

const FORMSPREE_URL = 'https://formspree.io/f/xovwkdkk'

const socialLinks = [
  { icon: 'mdi-github', link: 'https://github.com/FIDYKELY' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/fidy-niaina-107273319/' },
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100004683916160' },
]

const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
  snackbar.value = {
    show: true,
    color: type,
    text: message
  }
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  // Réinitialise la validation
  form.value?.reset()
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: `[Portfolio] Nouveau message de ${formData.value.name}`,
        // _replyto: formData.value.email,
        "Nom Complet": formData.value.name,
        "Adresse Email": formData.value.email,
        "Sujet": formData.value.subject,
        "Message": formData.value.message,
        "Date d'envoi": new Date().toLocaleString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        "Source": "Portfolio - Page Contact"
      }),
    })

    const result = await response.json()
    if (response.ok) {
      resetForm()
      showNotification('Message envoyé avec succès !')
    } else {
      showNotification(result?.error || 'Une erreur est survenue. Veuillez réessayer.', 'error')
    }
  } catch (error) {
    showNotification('Une erreur est survenue. Veuillez réessayer.', 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.social-btn {
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
}
</style> 