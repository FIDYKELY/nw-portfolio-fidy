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
                    @click="openProjectDetails(project)"
                  >
                    <v-img
                      :src="project.image"
                      height="200"
                      cover
                      class="align-end"
                    >
                      <v-card-title class="text-black text-shadow">
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
                        @click.stop
                      >
                        Code
                      </v-btn>
                      <v-btn
                        v-if="project.demo"
                        :href="project.demo"
                        target="_blank"
                        variant="text"
                        prepend-icon="mdi-open-in-new"
                        @click.stop
                      >
                        Demo
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        variant="text"
                        prepend-icon="mdi-information"
                        @click.stop="openProjectDetails(project)"
                      >
                        Détails
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

  <!-- Project Details Modal -->
  <v-dialog
    v-model="showProjectDetails"
    max-width="900"
    scrollable
  >
    <v-card v-if="selectedProject">
      <v-card-title class="text-h5 pa-4">
        {{ selectedProject.name }}
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="showProjectDetails = false"
        ></v-btn>
      </v-card-title>

      <v-card-text class="pa-4">
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              :src="selectedProject.image"
              height="300"
              cover
              class="rounded-lg mb-4"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex flex-wrap gap-2 mb-4">
              <v-chip
                v-for="tag in selectedProject.tags"
                :key="tag"
                size="small"
                color="primary"
                variant="outlined"
              >
                {{ tag }}
              </v-chip>
            </div>
            <p class="text-body-1 mb-4">{{ selectedProject.description }}</p>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <div v-for="(detail, index) in selectedProject.details" :key="index" class="mb-6">
          <h3 class="text-h6 mb-4">{{ detail.title }}</h3>
          <v-row>
            <v-col cols="12" md="6">
              <p class="text-body-1">{{ detail.description }}</p>
              <v-list v-if="detail.features" class="bg-transparent">
                <v-list-item
                  v-for="(feature, fIndex) in detail.features"
                  :key="fIndex"
                  :title="feature"
                  prepend-icon="mdi-check-circle"
                  class="text-body-2"
                ></v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <div class="position-relative">
                <v-img
                  :src="detail.images ? detail.images[currentImageIndex[index]] : detail.image"
                  height="250"
                  cover
                  class="rounded-lg cursor-pointer"
                  @click="openFullscreenImage(
                    detail.images ? detail.images[currentImageIndex[index]] : detail.image,
                    detail.images || [detail.image],
                    currentImageIndex[index]
                  )"
                ></v-img>
                <div v-if="detail.images && detail.images.length > 1" class="d-flex justify-space-between position-absolute w-100" style="top: 50%; transform: translateY(-50%);">
                  <v-btn
                    icon="mdi-chevron-left"
                    variant="text"
                    color="white"
                    class="bg-black bg-opacity-50"
                    @click.stop="previousImage(index)"
                  ></v-btn>
                  <v-btn
                    icon="mdi-chevron-right"
                    variant="text"
                    color="white"
                    class="bg-black bg-opacity-50"
                    @click.stop="nextImage(index)"
                  ></v-btn>
                </div>
                <div v-if="detail.images && detail.images.length > 1" class="d-flex justify-center mt-2">
                  <v-btn
                    v-for="(img, imgIndex) in detail.images"
                    :key="imgIndex"
                    :icon="imgIndex === currentImageIndex[index] ? 'mdi-circle' : 'mdi-circle-outline'"
                    variant="text"
                    size="small"
                    color="primary"
                    @click.stop="currentImageIndex[index] = imgIndex"
                  ></v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          v-if="selectedProject.github"
          :href="selectedProject.github"
          target="_blank"
          color="primary"
          prepend-icon="mdi-github"
        >
          Voir le code
        </v-btn>
        <v-btn
          v-if="selectedProject.demo"
          :href="selectedProject.demo"
          target="_blank"
          color="primary"
          prepend-icon="mdi-open-in-new"
        >
          Voir la demo
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Fullscreen Image Viewer -->
  <v-dialog
    v-model="showFullscreenImage"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card class="bg-black">
      <v-toolbar dark color="black">
        <v-btn
          icon="mdi-close"
          @click="showFullscreenImage = false"
        ></v-btn>
        <v-toolbar-title>Vue détaillée</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="text-white">
          {{ currentFullscreenIndex + 1 }} / {{ fullscreenImages.length }}
        </div>
      </v-toolbar>

      <v-card-text class="d-flex align-center justify-center fill-height position-relative">
        <v-btn
          v-if="fullscreenImages.length > 1"
          icon="mdi-chevron-left"
          variant="text"
          color="white"
          class="bg-black bg-opacity-50 position-absolute left-0"
          style="z-index: 1;"
          @click="previousFullscreenImage"
        ></v-btn>

        <v-img
          :src="fullscreenImage"
          max-height="90vh"
          max-width="90vw"
          contain
          class="rounded-lg"
        ></v-img>

        <v-btn
          v-if="fullscreenImages.length > 1"
          icon="mdi-chevron-right"
          variant="text"
          color="white"
          class="bg-black bg-opacity-50 position-absolute right-0"
          style="z-index: 1;"
          @click="nextFullscreenImage"
        ></v-btn>

        <div v-if="fullscreenImages.length > 1" class="d-flex justify-center position-absolute bottom-0 w-100 mb-4">
          <v-btn
            v-for="(img, imgIndex) in fullscreenImages"
            :key="imgIndex"
            :icon="imgIndex === currentFullscreenIndex ? 'mdi-circle' : 'mdi-circle-outline'"
            variant="text"
            size="small"
            color="white"
            @click="currentFullscreenIndex = imgIndex; fullscreenImage = img"
          ></v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
interface ProjectDetail {
  title: string
  description: string
  image: string
  features: string[]
  images?: string[] // Array of additional images for carousel
}

interface Project {
  name: string
  image: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  details: ProjectDetail[]
}

const activeTab = ref(0)
const showProjectDetails = ref(false)
const selectedProject = ref<Project | null>(null)
const currentImageIndex = ref<Record<number, number>>({})
const showFullscreenImage = ref(false)
const fullscreenImage = ref('')
const fullscreenImages = ref<string[]>([])
const currentFullscreenIndex = ref(0)

const openProjectDetails = (project: Project) => {
  selectedProject.value = project
  showProjectDetails.value = true
  project.details.forEach((_, index) => {
    currentImageIndex.value[index] = 0
  })
}

const openFullscreenImage = (image: string, images: string[], currentIndex: number) => {
  fullscreenImage.value = image
  fullscreenImages.value = images
  currentFullscreenIndex.value = currentIndex
  showFullscreenImage.value = true
}

const nextFullscreenImage = () => {
  if (fullscreenImages.value.length === 0) return
  currentFullscreenIndex.value = (currentFullscreenIndex.value + 1) % fullscreenImages.value.length
  fullscreenImage.value = fullscreenImages.value[currentFullscreenIndex.value]
}

const previousFullscreenImage = () => {
  if (fullscreenImages.value.length === 0) return
  currentFullscreenIndex.value = (currentFullscreenIndex.value - 1 + fullscreenImages.value.length) % fullscreenImages.value.length
  fullscreenImage.value = fullscreenImages.value[currentFullscreenIndex.value]
}

const nextImage = (detailIndex: number) => {
  if (!selectedProject.value?.details[detailIndex].images) return
  const images = selectedProject.value.details[detailIndex].images!
  currentImageIndex.value[detailIndex] = (currentImageIndex.value[detailIndex] + 1) % images.length
}

const previousImage = (detailIndex: number) => {
  if (!selectedProject.value?.details[detailIndex].images) return
  const images = selectedProject.value.details[detailIndex].images!
  currentImageIndex.value[detailIndex] = (currentImageIndex.value[detailIndex] - 1 + images.length) % images.length
}

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
    name: 'Système E-commerce Complet',
    image: '/images/project1.jpg',
    description: 'Un système e-commerce complet comprenant un frontend client, un backoffice d\'administration et une API REST. Le frontend client est développé avec Vue.js et Nuxt.js, offrant un catalogue de produits, panier d\'achat, et intégration Stripe. Le backoffice permet la gestion des utilisateurs, produits, commandes et statistiques. Le backend Node.js/Express gère toute la logique métier avec une architecture modulaire et sécurisée.',
    tags: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express', 'Sequelize', 'TailwindCSS', 'Stripe'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1.demo',
    details: [
      {
        title: 'Frontend Client',
        description: 'Le frontend client est une application web moderne développée avec Vue.js et Nuxt.js, offrant une expérience utilisateur fluide et responsive.',
        image: '/images/project1-frontend.jpg',
        images: [
          '/images/project1-frontend.jpg',
          '/images/project1-frontend-2.jpg',
          '/images/project1-frontend-3.jpg',
          '/images/project1-frontend-4.jpg',
          '/images/project1-frontend-5.jpg',
          '/images/project1-frontend-6.jpg',
          '/images/project1-frontend-7.jpg',
          '/images/project1-frontend-8.jpg'
        ],
        features: [
          'Catalogue de produits dynamique',
          'Panier d\'achat interactif',
          'Gestion des favoris',
          'Intégration Stripe pour les paiements',
          'Interface responsive et moderne'
        ]
      },
      {
        title: 'Backoffice Administration',
        description: 'Un backoffice complet pour la gestion de la boutique en ligne, développé avec Vue.js et Tailwind CSS.',
        image: '/images/project1-backoffice.jpg',
        images: [
          '/images/project1-backoffice.jpg',
          '/images/project1-backoffice-2.jpg',
          '/images/project1-backoffice-3.jpg',
          '/images/project1-backoffice-4.jpg'
        ],
        features: [
          'Tableau de bord avec statistiques',
          'Gestion des utilisateurs et rôles',
          'Gestion des produits et catégories',
          'Suivi des commandes',
          'Gestion des promotions'
        ]
      },
      {
        title: 'Backend API',
        description: 'Une API REST robuste développée avec Node.js et Express, utilisant Sequelize comme ORM pour la gestion de la base de données.',
        image: '/images/project1-backend.jpg',
        features: [
          'Architecture modulaire et scalable',
          'Gestion des authentifications',
          'API RESTful complète',
          'Gestion des fichiers et images',
          'Système de cache et optimisation'
        ]
      }
    ]
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

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.bg-opacity-50 {
  opacity: 0.5;
}

.cursor-pointer {
  cursor: pointer;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}

.dialog-bottom-transition-enter-from,
.dialog-bottom-transition-leave-to {
  transform: translateY(100%);
}

.left-0 {
  left: 16px;
}

.right-0 {
  right: 16px;
}

.bottom-0 {
  bottom: 16px;
}
</style> 