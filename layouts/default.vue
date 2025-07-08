<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      app
      elevation="0"
      color="background"
      class="px-4"
      height="70"
    >
      <v-container class="d-flex align-center">
        <v-app-bar-title class="text-h5 font-weight-bold">
          <span class="text-primary">Fidiniaina</span>
          <ViewCounter class="ml-2" />
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            variant="text"
            class="mx-2"
            :class="{ 'text-primary': $route.path === item.to }"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Mobile Navigation -->
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="item.title"
          @click="drawer = false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-0">
        <slot />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-background">
      <v-container>
        <div class="d-flex flex-column align-center">
          <div class="d-flex gap-4 mb-4">
            <v-btn
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.link"
              target="_blank"
              icon
              variant="text"
              size="small"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
          <div class="text-caption text-center">
            © {{ new Date().getFullYear() }} Fidiniaina. Tous droits réservés.
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false)

const navItems = [
  { title: 'Accueil', to: '/' },
  { title: 'Compétences', to: '/skills' },
  { title: 'Projets', to: '/projects' },
  { title: 'Contact', to: '/contact' },
]

const socialLinks = [
  { icon: 'mdi-github', link: 'https://github.com/FIDYKELY' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/fidy-niaina-107273319/' },
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100004683916160' },
]
</script>

<style>
.v-application {
  background: rgb(var(--v-theme-background)) !important;
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(var(--v-theme-background));
}

::-webkit-scrollbar-thumb {
  background: rgb(var(--v-theme-primary));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-secondary));
}
</style> 