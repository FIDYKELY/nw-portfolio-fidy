export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? 'hero')

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const onScroll = () => {
      const offset = window.scrollY + 120
      let current = sectionIds[0]

      for (const section of sections) {
        if (section.offsetTop <= offset) {
          current = section.id
        }
      }
      activeSection.value = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  })

  return { activeSection }
}
