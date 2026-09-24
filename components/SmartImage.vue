<template>
  <div class="smart-image" :class="{ 'smart-image--loaded': !usePlaceholder }">
    <img
      v-if="!usePlaceholder"
      :src="currentSrc"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :decoding="eager ? 'sync' : 'async'"
      :fetchpriority="eager ? 'high' : undefined"
      @error="onError"
    />
    <div v-else class="smart-image__placeholder" role="img" :aria-label="alt">
      <span class="mono">{{ placeholderLabel }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  placeholderLabel?: string
  fallbackSrc?: string
  eager?: boolean
}>()

const currentSrc = ref(props.src)
const usePlaceholder = ref(false)

const placeholderLabel = computed(
  () => props.placeholderLabel ?? props.alt.slice(0, 24)
)

function onError() {
  if (props.fallbackSrc && currentSrc.value !== props.fallbackSrc) {
    currentSrc.value = props.fallbackSrc
    return
  }
  usePlaceholder.value = true
}

watch(
  () => props.src,
  (v) => {
    currentSrc.value = v
    usePlaceholder.value = false
  }
)
</script>

<style scoped>
.smart-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
}

.smart-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.smart-image__placeholder {
  width: 100%;
  height: 100%;
  min-height: 220px;
  display: grid;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(79, 216, 196, 0.08), transparent 50%),
    repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.03) 0,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    var(--bg-panel-2);
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
}
</style>
