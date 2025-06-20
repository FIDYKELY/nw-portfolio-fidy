<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="text-h3 font-weight-bold mb-4">
          Mes Compétences
        </h1>
        <p class="text-h6 text-secondary">
          Technologies et outils que j'utilise au quotidien
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="0" color="surface">
          <v-card-title class="text-h5 mb-4">
            <v-icon icon="mdi-code-tags" class="mr-2"></v-icon>
            Frontend
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="skill in frontendSkills"
                :key="skill.name"
                cols="6"
                sm="4"
                md="3"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 4 : 0"
                    :color="isHovering ? 'primary' : 'surface'"
                    class="skill-card"
                  >
                    <v-card-text class="text-center">
                      <i
                        :class="skill.icon"
                        style="font-size: 32px;"
                        :style="{ color: isHovering ? 'white' : undefined }"
                      ></i>
                      <div
                        class="text-body-2 mt-2"
                        :class="{ 'text-white': isHovering }"
                      >
                        {{ skill.name }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mb-6" elevation="0" color="surface">
          <v-card-title class="text-h5 mb-4">
            <v-icon icon="mdi-server" class="mr-2"></v-icon>
            Backend
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="skill in backendSkills"
                :key="skill.name"
                cols="6"
                sm="4"
                md="3"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 4 : 0"
                    :color="isHovering ? 'secondary' : 'surface'"
                    class="skill-card"
                  >
                    <v-card-text class="text-center">
                      <!-- Remplacer le v-icon par un i pour Devicon -->
                      <i
                        :class="skill.icon"
                        style="font-size: 24px;"
                        :style="{ color: isHovering ? 'white' : undefined }"
                      ></i>
                      <div
                        class="text-body-2 mt-2"
                        :class="{ 'text-white': isHovering }"
                      >
                        {{ skill.name }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card elevation="0" color="surface">
          <v-card-title class="text-h5 mb-4">
            <v-icon icon="mdi-tools" class="mr-2"></v-icon>
            Outils & Méthodologies
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="skill in toolsSkills"
                :key="skill.name"
                cols="6"
                sm="4"
                md="3"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 4 : 0"
                    :color="isHovering ? 'accent' : 'surface'"
                    class="skill-card"
                  >
                    <v-card-text class="text-center">
                      <i
                        :class="skill.icon"
                        style="font-size: 32px;"
                        :style="{ color: isHovering ? 'white' : undefined }"
                      ></i>
                      <div
                        class="text-body-2 mt-2"
                        :class="{ 'text-white': isHovering }"
                      >
                        {{ skill.name }}
                      </div>
                    </v-card-text>
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
const frontendSkills = [
 { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Nuxt', icon: 'devicon-nuxtjs-plain colored' },
  { name: 'Vuetify', icon: 'devicon-vuetify-plain colored' }, // ⚠️ Vuetify n'existe pas dans devicon
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' }
]

const backendSkills = [
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  // { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Symfony', icon: 'devicon-symfony-plain colored' },
  // { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
]

const toolsSkills = [
  { name: 'Git', icon: 'devicon-git-plain colored' },
  // { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
  { name: 'Anaconda', icon: 'devicon-anaconda-plain colored' },
  { name: 'Webpack', icon: 'devicon-webpack-plain colored' },
  { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
  { name: 'Vercel', icon: 'devicon-vercel-original' }
]
</script>

<style scoped>
.skill-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-5px);
}
</style>