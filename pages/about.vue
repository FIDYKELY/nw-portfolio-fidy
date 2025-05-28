<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h3 font-weight-bold mb-4">
          Qui suis-je ?
        </h1>
        <p class="text-h6 text-secondary">
          Développeur web passionné par la création d'applications innovantes
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="0" color="surface">
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
                  <div class="text-h6">{{ education.title }}</div>
                  <div class="text-subtitle-2 text-medium-emphasis">{{ education.period }}</div>
                  <div class="text-body-2 mt-2">{{ education.description }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="0" color="surface">
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
                  <div class="text-h6">{{ experience.title }}</div>
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
</template>

<script setup lang="ts">
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
    title: 'Stage pré-embauche - Développeur Magento',
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
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style> 