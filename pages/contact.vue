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
                subtitle="votre-email@example.com"
                class="mb-4"
              ></v-list-item>

              <v-list-item
                prepend-icon="mdi-map-marker"
                title="Localisation"
                subtitle="Antananarivo, Madagascar"
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
            
            <v-form @submit.prevent="submitForm" v-model="isFormValid">
              <v-text-field
                v-model="form.name"
                label="Nom"
                :rules="[v => !!v || 'Le nom est requis']"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="form.email"
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
                v-model="form.subject"
                label="Sujet"
                :rules="[v => !!v || 'Le sujet est requis']"
                required
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-textarea
                v-model="form.message"
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
  </v-container>
</template>

<script setup lang="ts">
const isFormValid = ref(false)
const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const socialLinks = [
  { icon: 'mdi-github', link: 'https://github.com/FIDYKELY' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/fidy-niaina-107273319/' },
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100004683916160' },
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulation d'envoi
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    
    // Afficher un message de succès
    alert('Message envoyé avec succès !')
  } catch (error) {
    // Gérer les erreurs
    alert('Une erreur est survenue. Veuillez réessayer.')
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