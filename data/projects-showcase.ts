export interface ShowcaseProject {
  slug: string
  name: string
  category: string
  image: string
  description: string
  tags: string[]
  github?: string | null
  demo?: string
  status: string
  featured?: boolean
  layout: 'left' | 'right' | 'full'
  index: number
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: 'visalog',
    name: 'Visalog — Assistant de Demande de Visa Schengen',
    category: 'Application Web · Automatisation',
    image: '/images/landing-page-visalog.png',
    description:
      'Plateforme web qui automatise les demandes de visa Schengen : formulaires WordPress, bots Puppeteer, orchestration n8n et génération de documents par IA.',
    tags: ['WordPress', 'Puppeteer', 'n8n', 'REST API', 'MySQL', 'PHP', 'JavaScript'],
    demo: 'https://visalog.dz/',
    status: 'En ligne',
    featured: true,
    layout: 'full',
    index: 0,
  },
  {
    slug: 'sunny-pool',
    name: 'Sunny Pool — Assistant Piscine Intelligent',
    category: 'Application Web · IA',
    image: '/images/accueuil-sunny.png',
    description:
      'Application web d’accompagnement piscine : analyse d’eau par IA, conseils personnalisés, météo et assistant virtuel intégré.',
    tags: ['WordPress', 'n8n', 'Elementor', 'OpenAI API', 'REST API', 'MySQL'],
    github: 'https://github.com/FIDYKELY/sunny-pool.git',
    demo: 'https://sunny.trouvezpourmoi.com/',
    status: 'En ligne',
    layout: 'left',
    index: 1,
  },
  {
    slug: 'scraphunter',
    name: 'scrapHunter — Prospection B2B',
    category: 'Plateforme · Données',
    image: '/images/scrape-landing.png',
    description:
      'Prospection B2B automatisée : scraping multi-sources, enrichissement, scoring IA et intégrations CRM.',
    tags: ['Node.js', 'Express', 'Puppeteer', 'PostgreSQL', 'Web Scraping', 'CRM'],
    github: 'https://github.com/FIDYKELY/scrapHunter.git',
    status: 'Open source',
    layout: 'right',
    index: 2,
  },
  {
    slug: 'ecommerce',
    name: 'Système E-commerce Complet',
    category: 'Fullstack',
    image: '/images/project1.jpg',
    description:
      'Frontend Nuxt/Vue, backoffice admin et API REST Node.js/Express avec paiement Stripe.',
    tags: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express', 'Sequelize', 'TailwindCSS', 'Stripe'],
    status: 'Académique / Personnel',
    layout: 'left',
    index: 3,
  },
  {
    slug: 'mnacom',
    name: 'MNACOM',
    category: 'WordPress · Vitrine',
    image: '/images/hero.png',
    description:
      'Site vitrine one-page Elementor sur WordPress, design personnalisé et back-office simplifié pour le client.',
    tags: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    status: 'Livré',
    layout: 'right',
    index: 4,
  },
  {
    slug: 'portfolio',
    name: 'Portfolio',
    category: 'Personnel',
    image: '/images/index.png',
    description:
      'Portfolio Nuxt 3 & Vue 3 : compétences, projets, contact Formspree et SEO.',
    tags: ['Vue.js 3', 'Nuxt 3', 'Vuetify 3', 'TypeScript', 'Formspree'],
    github: 'https://github.com/FIDYKELY/nw-portfolio-fidy.git',
    demo: 'https://nw-portfolio-fidy.vercel.app/',
    status: 'En ligne',
    layout: 'left',
    index: 5,
  },
]

export const featuredProject = showcaseProjects.find((p) => p.featured)!
