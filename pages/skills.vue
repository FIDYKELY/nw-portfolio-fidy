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
                      <v-icon
                        :icon="skill.icon"
                        size="large"
                        :color="isHovering ? 'white' : 'primary'"
                      ></v-icon>
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
                      <v-icon
                        :icon="skill.icon"
                        size="large"
                        :color="isHovering ? 'white' : 'secondary'"
                      ></v-icon>
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
                      <v-icon
                        :icon="skill.icon"
                        size="large"
                        :color="isHovering ? 'white' : 'accent'"
                      ></v-icon>
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
  { name: 'Vue.js', icon: 'mdi-vuejs' },
  { name: 'React', icon: 'mdi-react' },
  { name: 'HTML5', icon: 'mdi-language-html5' },
  { name: 'CSS3', icon: 'mdi-language-css3' },
  { name: 'JavaScript', icon: 'mdi-language-javascript' },
  { name: 'TypeScript', icon: 'mdi-language-typescript' },
  { name: 'Tailwind', icon: 'mdi-tailwind' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
]

const backendSkills = [
  { name: 'Node.js', icon: 'mdi-nodejs' },
  { name: 'PHP', icon: 'mdi-language-php' },
  { name: 'Python', icon: 'mdi-language-python' },
  { name: 'MySQL', icon: 'mdi-database' },
  { name: 'MongoDB', icon: 'mdi-database' },
  { name: 'Symfony', icon: 'mdi-symfony' },
  { name: 'Laravel', icon: 'mdi-laravel' },
  { name: 'Express', icon: 'mdi-express' },
]

const toolsSkills = [
  { name: 'Git', icon: 'mdi-git' },
  { name: 'Docker', icon: 'mdi-docker' },
  { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code' },
  { name: 'Figma', icon: 'mdi-figma' },
  { name: 'Jira', icon: 'mdi-jira' },
  { name: 'Postman', icon: 'mdi-postman' },
  { name: 'Webpack', icon: 'mdi-webpack' },
  { name: 'Vite', icon: 'mdi-vite' },
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