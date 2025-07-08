<template>
  <div>
  <div>
    <!-- Hero Section -->
    <v-container class="hero-section fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <h1 class="text-h2 font-weight-bold mb-4">
            Ratsimanohatra
            <span class="text-primary">Fidiniaina</span>
          </h1>
          
          <div class="skills-container">
            <v-slide-y-transition group>
              <div v-for="(skill, index) in skills" 
                  :key="skill" 
                  v-show="currentSkill === index" 
                  class="skill-item">
                <h2 class="text-h4 text-secondary mb-6">{{ skill }}</h2>
              </div>
            </v-slide-y-transition>
          </div>

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
            src="/images/graduate.jpeg"
            max-width="400"
            class="profile-image"
            :class="[{ 'animate-float': true }, { 'profile-loaded': profileLoaded }]"
            style="background: transparent;"
            @load="profileLoaded = true"
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
  <!-- Section À propos (About) -->
  <div class="about-section" id="about">
      <!-- Partie supérieure avec fond blanc -->
      <div class="about-top">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center">
              <h1 class="text-h3 font-weight-bold mb-4">
                À propos
              </h1>
              <p class="text-h6 about-description">
                Développeur web passionné par la création d'applications innovantes.
                Curieux, rigoureux et toujours en quête de nouveaux défis, j’aime apprendre et partager mes connaissances.
                J’accorde une grande importance à la qualité du code, à l’expérience utilisateur et à la performance des applications.
                Mon objectif est de concevoir des solutions numériques qui ont un impact positif et durable.
                
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Partie inférieure avec fond coloré -->
      <div class="about-bottom">
        <v-container class="pb-16">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="about-card" elevation="0">
                <v-card-title class="text-h5 mb-4">
                  <v-icon icon="mdi-school" class="mr-2"></v-icon>
                  Formation
                </v-card-title>
                <v-card-text>
                  <v-timeline density="compact" align="start">
                    <v-timeline-item
                      v-for="(education, index) in education"
                      :key="index"
                      :dot-color="education.color"
                      size="small"
                    >
                      <div class="mb-4">
                        <div class="text-title">{{ education.title }}</div>
                        <div class="text-subtitle-2 text-medium-emphasis">{{ education.period }}</div>
                        <div class="text-body-2 mt-2">{{ education.description }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="about-card" elevation="0">
                <v-card-title class="text-h5 mb-4">
                  <v-icon icon="mdi-briefcase" class="mr-2"></v-icon>
                  Expérience Professionnelle
                </v-card-title>
                <v-card-text>
                  <v-timeline density="compact" align="start">
                    <v-timeline-item
                      v-for="(experience, index) in experiences"
                      :key="index"
                      :dot-color="experience.color"
                      size="small"
                    >
                      <div class="mb-4">
                        <div class="text-title">{{ experience.title }}</div>
                        <div class="text-subtitle-2 text-medium-emphasis">{{ experience.period }}</div>
                        <div class="text-body-2 mt-2">{{ experience.description }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
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
const profileLoaded = ref(false)

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

const education = [
  {
    title: 'Master 2 M.I.A.G.E',
    period: '2024',
    description: 'E.S.M.I.A',
    color: 'primary'
  },
  {
    title: 'Master 1 M.I.A.G.E',
    period: '2022-2023',
    description: 'E.S.M.I.A - Méthodes informatiques appliquées à la gestion des entreprises',
    color: 'secondary'
  },
  {
    title: 'Licence en Sciences et Technologies',
    period: '2018-2021',
    description: 'E.S.M.I.A - Parcours Informatique, Risques et Décision',
    color: 'accent'
  }
]

const experiences = [
  {
    title: 'Stage - Développeur Magento',
    period: '2024-2025',
    description: 'Trois mois au sein de l\'Atout Service',
    color: 'primary'
  },
  {
    title: 'Stage - Développeur JS',
    period: '2024',
    description: 'Trois mois au sein de Profily (Vue JS, Node JS)',
    color: 'secondary'
  }
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
  min-height: 65vh;
  position: relative;
  overflow: hidden;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.profile-image {
  border-radius: 200px;
  box-shadow: 0 24px 64px rgba(96, 165, 250, 0.2);
  transition: transform 0.3s ease, border 0.2s;
}
.profile-image.profile-loaded {
  border: 6px solid #fff;
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

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}

.about-section {
  background: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  /* Pour couvrir toute la largeur même dans un container */
  color: #1F2937;
  margin-top: 3rem;
  padding-bottom: 0;
}

.about-top {
  background: #fff;
  padding: 80px 0 40px;
}

.about-bottom {
  background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
  padding-top: 40px;
}

.about-description {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.about-card {
  background: #fff !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1) !important;
}

.about-section h1,
.about-section h5,
.about-section .text-h6 {
  color: #1F2937;
}
.text-title {
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 600;
}

.about-section .v-card {
  background: #1F2937 !important;
  color: #fff !important;
  box-shadow: 0 4px 24px rgba(31, 41, 55, 0.12);
  border-radius: 18px;
  border: none;
  margin-bottom: 2rem;
}

.about-section .v-icon {
  color: #60A5FA;
}
</style>