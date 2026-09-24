<template>
  <div class="home">
    <HeroSection />
    <TechMarquee />
    <SelectedWork
      @open-project="openProject"
      @open-archive="openArchive"
    />
    <AutomationSection />
    <AboutSection />
    <TechStackSection />
    <ExperienceSection />
    <LabSection />
    <ContactSection />

    <ProjectsModal
      v-model="showProjectsModal"
      :open-index="projectOpenIndex"
    />
  </div>
</template>

<script setup lang="ts">
useReveal()

const sectionIds = ['hero', 'work', 'about', 'stack', 'experience', 'contact']
const { activeSection } = useScrollSpy(sectionIds)

provide('activeSection', activeSection)

const showProjectsModal = ref(false)
const projectOpenIndex = ref<number | null>(null)

function openProject(index: number) {
  projectOpenIndex.value = index
  showProjectsModal.value = true
}

function openArchive() {
  projectOpenIndex.value = null
  showProjectsModal.value = true
}
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>
