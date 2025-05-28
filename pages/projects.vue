<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h3 font-weight-bold mb-4">
          Mes Projets
        </h1>
        <p class="text-h6 text-secondary">
          Découvrez mes réalisations et expériences professionnelles
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="0" color="surface">
          <v-card-title class="text-h5 mb-4">
            <v-icon icon="mdi-briefcase" class="mr-2"></v-icon>
            Expériences
          </v-card-title>
          <v-card-text>
            <v-tabs
              v-model="activeTab"
              color="primary"
              align-tabs="start"
              class="mb-4"
            >
              <v-tab
                v-for="(experience, index) in experiences"
                :key="index"
                :value="index"
              >
                {{ experience.company }}
              </v-tab>
            </v-tabs>

            <v-window v-model="activeTab">
              <v-window-item
                v-for="(experience, index) in experiences"
                :key="index"
                :value="index"
              >
                <div class="pa-4">
                  <h3 class="text-h6 mb-2">{{ experience.title }}</h3>
                  <div class="text-subtitle-2 text-medium-emphasis mb-4">
                    {{ experience.period }}
                  </div>
                  <v-list>
                    <v-list-item
                      v-for="(task, taskIndex) in experience.tasks"
                      :key="taskIndex"
                      :title="task"
                      prepend-icon="mdi-check-circle"
                      class="text-body-2"
                    ></v-list-item>
                  </v-list>
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="0" color="surface">
          <v-card-title class="text-h5 mb-4">
            <v-icon icon="mdi-folder" class="mr-2"></v-icon>
            Projets
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project.name"
                cols="12"
                sm="6"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 4 : 0"
                    class="project-card"
                  >
                    <v-img
                      :src="project.image"
                      height="200"
                      cover
                      class="align-end"
                    >
                      <v-card-title class="text-white text-shadow">
                        {{ project.name }}
                      </v-card-title>
                    </v-img>

                    <v-card-text>
                      <div class="d-flex flex-wrap gap-2 mb-4">
                        <v-chip
                          v-for="tag in project.tags"
                          :key="tag"
                          size="small"
                          color="primary"
                          variant="outlined"
                        >
                          {{ tag }}
                        </v-chip>
                      </div>
                      <p class="text-body-2">{{ project.description }}</p>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        v-if="project.github"
                        :href="project.github"
                        target="_blank"
                        variant="text"
                        prepend-icon="mdi-github"
                      >
                        Code
                      </v-btn>
                      <v-btn
                        v-if="project.demo"
                        :href="project.demo"
                        target="_blank"
                        variant="text"
                        prepend-icon="mdi-open-in-new"
                      >
                        Demo
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const activeTab = ref(0)

const experiences = [
  {
    company: 'Atout Service',
    title: 'Développeur Magento',
    period: '2024-2025',
    tasks: [
      'Développement de fonctionnalités e-commerce',
      'Intégration de modules Magento',
      'Optimisation des performances',
    ],
  },
  {
    company: 'Profily',
    title: 'Développeur JS',
    period: '2024',
    tasks: [
      'Développement frontend avec Vue.js',
      'Création d\'API REST avec Node.js',
      'Intégration de designs responsifs',
    ],
  },
]

const projects = [
  {
    name: 'Projet 1',
    image: '/images/project1.jpg',
    description: 'Description du projet 1',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1.demo',
  },
  {
    name: 'Projet 2',
    image: '/images/project2.jpg',
    description: 'Description du projet 2',
    tags: ['React', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/project2',
    demo: 'https://project2.demo',
  },
]
</script>

<style scoped>
.project-card {
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style> 