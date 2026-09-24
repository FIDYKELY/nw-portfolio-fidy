export function useReveal(threshold = 0.12) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      if (reducedMotion) {
        el.classList.add('is-visible')
      } else {
        observer?.observe(el)
      }
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
