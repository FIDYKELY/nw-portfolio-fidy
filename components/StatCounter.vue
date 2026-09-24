<template>
  <div ref="el" class="stat panel reveal">
    <div class="stat__value mono">
      <span>{{ displayValue }}</span>
      <span v-if="suffix" class="stat__suffix">{{ suffix }}</span>
    </div>
    <div class="stat__label">{{ label }}</div>
    <div class="stat__sub text-muted">{{ sub }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number
  suffix?: string
  label: string
  sub: string
}>()

const el = ref<HTMLElement | null>(null)
const displayValue = ref(0)
const started = ref(false)

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    displayValue.value = props.value
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started.value) {
        started.value = true
        animateCount()
        observer.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  if (el.value) observer.observe(el.value)
})

function animateCount() {
  const duration = 1200
  const start = performance.now()
  const target = props.value

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    displayValue.value = Math.round(target * eased)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
</script>

<style scoped>
.stat {
  padding: 1.5rem 1.25rem;
  text-align: left;
}

.stat__value {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat__suffix {
  color: var(--accent-2);
}

.stat__label {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.stat__sub {
  font-size: 0.85rem;
  line-height: 1.4;
}
</style>
