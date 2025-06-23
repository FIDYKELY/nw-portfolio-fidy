<template>
  <div>
    <!-- Hero Section -->
    <v-container class="hero-section fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <h1 class="text-h2 font-weight-bold mb-4">
            Bonjour, moi c'est
            <span class="text-primary">Fidiniaina</span>
          </h1>
          
          <v-slide-y-transition group>
            <div class="skills-container">
              <v-slide-y-transition group>
                <div v-for="(skill, index) in skills" :key="skill" v-show="currentSkill === index" class="skill-item">
                  <h2 class="text-h4 text-secondary mb-6">{{ skill }}</h2>
                </div>
              </v-slide-y-transition>
            </div>
          </v-slide-y-transition>

          <p class="text-body-1 mb-8">
            Passionné par la création de sites et d'applications web modernes, 
            je conçois des expériences numériques élégantes et performantes.
          </p>

          <div class="d-flex gap-4 justify-center justify-md-start">
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
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-img
            src="/images/graduate.png"
            max-width="400"
            class="profile-image"
            :class="{ 'animate-float': true }"
            style="background: transparent;"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <v-icon
        icon="mdi-chevron-down"
        size="large"
        class="animate-bounce"
        @click="scrollToSection('about')"
      ></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'Ingénieur en informatique',
  'Développeur frontend',
  'Développeur backend',
  'Développeur fullstack'
]

const currentSkill = ref(0)
const showSkill = ref(true)

onMounted(() => {
  setInterval(() => {
    showSkill.value = false
    setTimeout(() => {
      currentSkill.value = (currentSkill.value + 1) % skills.length
      showSkill.value = true
    }, 400)
  }, 2200)
})

const socialLinks = [
  { icon: 'mdi-github', link: 'https://github.com/FIDYKELY' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/fidy-niaina-107273319/' },
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100004683916160' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.profile-image {
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(96, 165, 250, 0.2);
  transition: transform 0.3s ease;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.social-btn {
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.skills-container {
  height: 48px;
  position: relative;
  overflow: hidden;
}

.skill-item {
  position: absolute;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.v-slide-y-transition-enter-active,
.v-slide-y-transition-leave-active {
  transition: transform 0.3s ease-in-out;
}

.v-slide-y-transition-enter-from {
  transform: translateY(100%);
}

.v-slide-y-transition-leave-to {
  transform: translateY(-100%);
}
</style>