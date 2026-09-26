<template>
  <section id="hero" class="hero section-pad" @mousemove="onMouseMove">
    <!-- full-bleed 3D field: spans the whole hero, not just the portrait -->
    <canvas ref="heroCanvasEl" class="hero__three-bg" aria-hidden="true" />
    <div class="hero__grain" aria-hidden="true" />
    <div class="hero__glow" :style="glowStyle" aria-hidden="true" />

    <div class="container-narrow hero__grid">
      <div class="hero__copy">
        <p class="hero__label mono reveal">
          <span class="hero__pulse" aria-hidden="true" />
          Disponible pour de nouvelles opportunités
        </p>

        <h1 class="hero__title reveal" style="transition-delay: 0.08s">
          <span class="hero__line hero__line--accent">FIDINIAINA</span>
          <span class="hero__line">RATSIMANOHATRA</span>
        </h1>

        <p class="hero__role reveal" style="transition-delay: 0.16s">
          <span>Développeur Web</span>
          <span class="hero__amp">&</span>
          <span class="hero__role-accent">Automatisation</span>
        </p>

        <p class="hero__pitch text-muted reveal" style="transition-delay: 0.22s">
          Je conçois des expériences web modernes, des plateformes WordPress et des flux de travail numériques automatisés —
          de l'interface utilisateur à l'orchestration avec n8n et les APIs.
        </p>

        <div class="hero__actions reveal" style="transition-delay: 0.28s">
          <a href="#work" class="btn-primary">
            Voir quelques projets
            <span class="hero__cta-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" class="btn-ghost">Me contacter</a>
        </div>

        <div class="hero__social reveal" style="transition-delay: 0.34s">
          <a
            v-for="s in socialLinks"
            :key="s.link"
            :href="s.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hero__social-link"
            :aria-label="s.label"
          >
            <v-icon size="22">{{ s.icon }}</v-icon>
          </a>
        </div>
      </div>

      <div class="hero__visual reveal" style="transition-delay: 0.12s">
        <div class="hero__frame">
          <span class="hero__corner hero__corner--tl" aria-hidden="true" />
          <span class="hero__corner hero__corner--tr" aria-hidden="true" />
          <span class="hero__corner hero__corner--bl" aria-hidden="true" />
          <span class="hero__corner hero__corner--br" aria-hidden="true" />

          <div class="hero__coords mono" aria-hidden="true">
            <span></span>
            <span class="hero__coords-sep"></span>
            <span></span>
          </div>

          <div class="hero__photo-wrap" :style="photoTiltStyle">
            <SmartImage
              src="/images/graduate.jpeg"
              alt="Fidiniaina Ratsimanohatra — Web Developer"
              eager
            />
          </div>

          <div
            v-for="(badge, i) in heroBadges"
            :key="badge.label"
            class="hero__badge mono"
            :style="badgeStyle(i, badge.delay)"
          >
            <img
              v-if="badge.type === 'image'"
              :src="badge.icon"
              :alt="badge.label"
              class="hero__badge-img"
            />
            <i v-else :class="badge.icon" class="hero__badge-icon" />
            <span>{{ badge.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__scroll mono" aria-hidden="true">
      <span class="hero__scroll-line" />
      scroll
    </div>
  </section>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { heroBadges, socialLinks } from '~/data/portfolio'

const pointer = ref({ x: 0, y: 0 })

const glowStyle = computed(() => ({
  transform: `translate(${pointer.value.x * 12}px, ${pointer.value.y * 8}px)`,
}))

// subtle mouse-parallax tilt on the portrait — same pointer data as the glow
const photoTiltStyle = computed(() => ({
  transform: `rotateY(${pointer.value.x * 6}deg) rotateX(${-pointer.value.y * 6}deg)`,
}))

function onMouseMove(e: MouseEvent) {
  const w = window.innerWidth
  const h = window.innerHeight
  pointer.value = {
    x: (e.clientX / w - 0.5) * 2,
    y: (e.clientY / h - 0.5) * 2,
  }
}

function badgeStyle(index: number, delay: number) {
  const positions = [
    { top: '8%', left: '-8%' },
    { top: '22%', right: '-6%' },
    { bottom: '38%', left: '-12%' },
    { bottom: '18%', right: '-4%' },
    { top: '48%', right: '-14%' },
    { bottom: '8%', left: '4%' },
    { top: '62%', left: '-6%' },
  ]
  const pos = positions[index % positions.length]
  return {
    ...pos,
    animationDelay: `${delay}s`,
  }
}

/* ---------- 3D halo (three.js) ---------- */
const heroCanvasEl = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer | undefined
let scene: THREE.Scene | undefined
let camera: THREE.PerspectiveCamera | undefined
let wireMeshLeft: THREE.LineSegments | undefined
let wireMeshRight: THREE.LineSegments | undefined
let particles: THREE.Points | undefined
let frameId: number | undefined
let resizeObserver: ResizeObserver | undefined
const clock = new THREE.Clock()

function initThree() {
  const canvas = heroCanvasEl.value
  const parent = canvas?.parentElement // the <section class="hero">
  if (!canvas || !parent) return
  // skip on small screens: same breakpoint as the other decorative elements,
  // and cheaper on mobile GPUs/battery
  if (window.innerWidth < 1024) return

  try {
    const w = parent.clientWidth
    const h = parent.clientHeight

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(w, h, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
    camera.position.z = 9

    // visible world size at z=0, so nothing spawns off past the edges of the section
    const worldH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360)
    const worldW = worldH * camera.aspect

    // a subtle, larger wireframe drifting behind the copy (left/center)
    const geoLeft = new THREE.IcosahedronGeometry(worldH * 0.32, 1)
    wireMeshLeft = new THREE.LineSegments(
      new THREE.EdgesGeometry(geoLeft),
      new THREE.LineBasicMaterial({ color: 0x4fd8c4, transparent: true, opacity: 0.14 }),
    )
    wireMeshLeft.position.set(-worldW * 0.2, worldH * 0.06, -2)
    scene.add(wireMeshLeft)

    // the brighter wireframe halo, roughly where the portrait sits
    const geoRight = new THREE.IcosahedronGeometry(worldH * 0.22, 1)
    wireMeshRight = new THREE.LineSegments(
      new THREE.EdgesGeometry(geoRight),
      new THREE.LineBasicMaterial({ color: 0x4fd8c4, transparent: true, opacity: 0.4 }),
    )
    wireMeshRight.position.set(worldW * 0.27, 0, 0)
    scene.add(wireMeshRight)

    // particle field spread across the FULL width/height of the section,
    // not just clustered around one object — this is what was reading as "tronqué"
    const count = 180
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * worldW * 0.96
      positions[i * 3 + 1] = (Math.random() - 0.5) * worldH * 0.9
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0xf2a93b, size: 0.045, transparent: true, opacity: 0.55 }),
    )
    scene.add(particles)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const renderOnce = () => {
      if (renderer && scene && camera) renderer.render(scene, camera)
    }

    if (reduceMotion) {
      renderOnce()
    } else {
      const animate = () => {
        frameId = requestAnimationFrame(animate)
        const t = clock.getElapsedTime()
        if (wireMeshRight) {
          wireMeshRight.rotation.y = t * 0.12
          wireMeshRight.rotation.x = t * 0.05
        }
        if (wireMeshLeft) {
          wireMeshLeft.rotation.y = -t * 0.06
          wireMeshLeft.rotation.x = t * 0.03
        }
        if (particles) particles.rotation.y = -t * 0.04
        renderOnce()
      }
      animate()
    }

    resizeObserver = new ResizeObserver(() => {
      if (!renderer || !camera) return
      const w2 = parent.clientWidth
      const h2 = parent.clientHeight
      renderer.setSize(w2, h2, false)
      camera.aspect = w2 / h2
      camera.updateProjectionMatrix()
      if (reduceMotion) renderOnce()
    })
    resizeObserver.observe(parent)
  } catch (err) {
    // fails safely on old GPUs / no WebGL — the CSS rings/glow already carry the visual
    console.warn('Hero 3D indisponible:', err)
  }
}

function disposeThree() {
  if (frameId) cancelAnimationFrame(frameId)
  resizeObserver?.disconnect()
  wireMeshLeft?.geometry.dispose()
  ;(wireMeshLeft?.material as THREE.Material | undefined)?.dispose()
  wireMeshRight?.geometry.dispose()
  ;(wireMeshRight?.material as THREE.Material | undefined)?.dispose()
  particles?.geometry.dispose()
  ;(particles?.material as THREE.Material | undefined)?.dispose()
  renderer?.dispose()
  renderer = undefined
  scene = undefined
  camera = undefined
}

onMounted(() => {
  initThree()
})
onUnmounted(() => {
  disposeThree()
})
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--nav-h) + 2rem);
  min-height: min(100vh, 920px);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__grain {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.045) 1px, transparent 0);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 40%, #000 40%, transparent 90%);
  mask-image: radial-gradient(ellipse 90% 70% at 50% 40%, #000 40%, transparent 90%);
}

.hero__glow {
  position: absolute;
  top: 10%;
  right: 5%;
  width: min(520px, 70vw);
  height: min(520px, 70vw);
  z-index: 0;
  background: radial-gradient(circle, rgba(79, 216, 196, 0.14), transparent 65%);
  pointer-events: none;
  transition: transform 0.4s ease-out;
}

.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2rem;
  }
}

.hero__label {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  padding: 0.35rem 0.75rem 0.35rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(16, 20, 27, 0.6);
}

.hero__pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.5);
  animation: pulse 2.4s ease-out infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(79, 216, 196, 0.45); }
  70% { box-shadow: 0 0 0 10px rgba(79, 216, 196, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 216, 196, 0); }
}

.hero__title {
  margin: 0 0 1rem;
  font-size: clamp(2.6rem, 8vw, 4.6rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.hero__line {
  display: block;
}

.hero__line--accent {
  background: linear-gradient(120deg, var(--accent) 20%, var(--accent-2) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__role {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.65rem;
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 2vw, 1rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  color: var(--text-muted);
}

.hero__amp {
  color: var(--accent-2);
}

.hero__role-accent {
  color: var(--text);
}

.hero__pitch {
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0 0 1.75rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.hero__cta-arrow {
  display: inline-block;
  margin-left: 0.4rem;
  transition: transform 0.25s var(--ease-out);
}

.btn-primary:hover .hero__cta-arrow {
  transform: translateX(4px);
}

.hero__social {
  display: flex;
  gap: 0.35rem;
}

.hero__social-link {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  color: var(--text-muted);
  transition:
    color 0.2s,
    border-color 0.2s,
    transform 0.25s var(--ease-out);
}

.hero__social-link:hover {
  color: var(--accent);
  border-color: rgba(79, 216, 196, 0.35);
  transform: translateY(-3px);
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.hero__frame {
  position: relative;
  width: min(380px, 88vw);
  aspect-ratio: 3 / 4;
  perspective: 1200px;
}

.hero__corner {
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 3;
  opacity: 0.7;
}
.hero__corner--tl { top: -8px; left: -8px; border-top: 1px solid var(--accent); border-left: 1px solid var(--accent); }
.hero__corner--tr { top: -8px; right: -8px; border-top: 1px solid var(--accent); border-right: 1px solid var(--accent); }
.hero__corner--bl { bottom: -8px; left: -8px; border-bottom: 1px solid var(--accent); border-left: 1px solid var(--accent); }
.hero__corner--br { bottom: -8px; right: -8px; border-bottom: 1px solid var(--accent); border-right: 1px solid var(--accent); }

.hero__coords {
  position: absolute;
  top: -1.6rem;
  right: 0;
  z-index: 2;
  display: flex;
  gap: 0.4rem;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  white-space: nowrap;
}

.hero__coords-sep {
  color: var(--accent);
}

/* 3D field spans the whole hero section — not cropped to the portrait frame */
.hero__three-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: block;
}

.hero__photo-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--line);
  transform-style: preserve-3d;
  transition: transform 0.35s var(--ease-out);
  will-change: transform;
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(79, 216, 196, 0.08) inset;
}

.hero__photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11, 14, 19, 0.35), transparent 45%);
  pointer-events: none;
}

.hero__badge {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.65rem;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
  background: rgba(16, 20, 27, 0.78);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid var(--line);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  animation: floatBadge 5s ease-in-out infinite;
  transition: transform 0.25s var(--ease-out), border-color 0.25s;
}

.hero__badge:hover {
  transform: translateY(-4px) scale(1.03);
  border-color: rgba(79, 216, 196, 0.35);
}

.hero__badge-icon {
  font-size: 1rem;
  line-height: 1;
}

.hero__badge-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 1.75rem;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero__scroll-line {
  width: 1px;
  height: 28px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { transform: scaleY(1); opacity: 0.4; }
  50% { transform: scaleY(0.55); opacity: 1; }
}

@media (max-width: 1023px) {
  .hero__badge {
    display: none;
  }

  .hero__badge:nth-child(-n + 4) {
    display: inline-flex;
    transform: scale(0.92);
  }

  .hero__coords,
  .hero__corner,
  .hero__scroll,
  .hero__three-bg {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll-line,
  .hero__badge {
    animation: none;
  }
  .hero__photo-wrap {
    transition: none;
  }
}
</style>