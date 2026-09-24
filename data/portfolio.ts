export const socialLinks = [
  { icon: 'mdi-github', label: 'GitHub', link: 'https://github.com/FIDYKELY' },
  { icon: 'mdi-linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/fidy-niaina-107273319/' },
  { icon: 'mdi-facebook', label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100004683916160' },
]

export const heroBadges = [
  { label: 'Vue.js', icon: 'devicon-vuejs-plain colored', delay: 0 },
  { label: 'Nuxt', icon: 'devicon-nuxtjs-plain colored', delay: 0.4 },
  { label: 'Node.js', icon: 'devicon-nodejs-plain colored', delay: 0.8 },
  { label: 'WordPress', icon: 'devicon-wordpress-plain colored', delay: 1.2 },
  { label: 'n8n', icon: '/images/N8n-logo-new.svg', type: 'image' as const, delay: 1.6 },
  { label: 'JavaScript', icon: 'devicon-javascript-plain colored', delay: 2 },
  { label: 'PHP', icon: 'devicon-php-plain colored', delay: 2.4 },
]

export const education = [
  {
    title: 'Master 2 M.I.A.G.E',
    period: '2024',
    description: 'E.S.M.I.A',
  },
  {
    title: 'Master 1 M.I.A.G.E',
    period: '2022-2023',
    description: 'E.S.M.I.A — Méthodes informatiques appliquées à la gestion des entreprises',
  },
  {
    title: 'Licence en Sciences et Technologies',
    period: '2018-2021',
    description: 'E.S.M.I.A — Parcours Informatique, Risques et Décision',
  },
]

export const experiences = [
  {
    company: 'SMART DEV',
    title: 'Développeur Web & Automatisation (09/2025 - 06/2026)',
    period: '09/2025 — 06/2026',
    description:
      'Refonte WordPress/Elementor, bots Puppeteer, agents d\'automatisation n8n et intégrations API.',
    tasks: [
      'Refonte de site WordPress/Elementor et personnalisation avancée (CPT, hooks, admin)',
      'Développement de robots Puppeteer pour l\'automatisation web et le scraping scalable',
      'Création et orchestration d\'agents d\'automatisation workflow via n8n (avec IA / OpenAI)',
      'Suivi de versions et déploiements avec Git / GitHub'
    ],
    tech: ['WordPress', 'Elementor', 'Puppeteer', 'n8n', 'PHP', 'JavaScript', 'Git', 'GitHub'],
  },
  {
    company: 'L\'Atout Service',
    title: 'Développeur Magento (12/2024 - 02/2025)',
    period: '12/2024 — 02/2025',
    description: 'Développement e-commerce Magento 2 (3 mois), intégration de modules et optimisation.',
    tasks: [
      'Développement et intégration de fonctionnalités e-commerce sur Magento 2',
      'Création et personnalisation de modules sur mesure',
      'Optimisation des performances et résolution de bugs back/front'
    ],
    tech: ['Magento 2', 'PHP', 'JavaScript', 'MySQL', 'E-commerce'],
  },
  {
    company: 'Profily',
    title: 'Développeur JS Vue/Node (01/2024 - 03/2024)',
    period: '01/2024 — 03/2024',
    description: 'Développement frontend Vue.js et API REST Node.js (3 mois).',
    tasks: [
      'Développement d\'interfaces utilisateur dynamiques et responsives avec Vue.js',
      'Conception et implémentation d\'API REST avec Node.js & Express',
      'Intégration de maquettes UI/UX et optimisation de l\'expérience utilisateur'
    ],
    tech: ['Vue.js', 'Node.js', 'Express', 'JavaScript', 'REST API'],
  },
  {
    company: 'Freelance',
    title: 'Data Annotator (06/2019 - 09/2021)',
    period: '06/2019 — 09/2021',
    description: 'Annotation de données 2D/3D et nuages de points LiDAR pour le développement d\'IA de conduite autonome.',
    tasks: [
      'Annotation et étiquetage de données 2D (images) et 3D (LiDAR / nuages de points)',
      'Contrôle qualité et vérification de la précision des données d\'entraînement pour modèles IA',
      'Collaboration sur des projets de vision par ordinateur appliqués aux véhicules autonomes'
    ],
    tech: ['Data Annotation', 'LiDAR 3D', 'Computer Vision', 'IA Data'],
  },
]

export const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'Nuxt', icon: 'devicon-nuxtjs-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'Vuetify', icon: 'devicon-vuetify-plain colored' },
      { name: 'Elementor', icon: '/images/elementor.svg', type: 'image' as const },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Symfony', icon: 'devicon-symfony-plain colored' },
    ],
  },
  {
    title: 'CMS',
    items: [
      { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },
      { name: 'WooCommerce', icon: 'devicon-woocommerce-plain colored' },
      { name: 'Magento', icon: 'devicon-magento-plain colored' },
    ],
  },
  {
    title: 'Automation',
    items: [
      { name: 'n8n', icon: '/images/N8n-logo-new.svg', type: 'image' as const },
      { name: 'Puppeteer', icon: 'devicon-puppeteer-plain colored' },
      { name: 'APIs', icon: 'mdi-api' },
      { name: 'Webhooks', icon: 'mdi-webhook' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    ],
  },
]

export const marqueeItems = [
  { label: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { label: 'Nuxt', icon: 'devicon-nuxtjs-plain colored' },
  { label: 'WordPress', icon: 'devicon-wordpress-plain colored' },
  { label: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { label: 'n8n', icon: '/images/N8n-logo-new.svg', type: 'image' as const },
  { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { label: 'PHP', icon: 'devicon-php-plain colored' },
  { label: 'WooCommerce', icon: 'devicon-woocommerce-plain colored' },
  { label: 'Puppeteer', icon: 'devicon-puppeteer-plain colored' },
]

export const labItems = [
  { title: 'Automatisation de flux', desc: 'Orchestration n8n & webhooks' },
  { title: 'Expérimentations UI', desc: 'Micro-interactions & layouts' },
  { title: 'Automatisation de navigateur', desc: 'Puppeteer & modèles de scraping' },
  { title: 'Intégrations API', desc: 'Connecteurs REST, OpenAI & CRM' },
]

export const stats = [
  { value: 6, suffix: '+', label: 'Projets', sub: 'Livrés & documentés' },
  { value: 4, suffix: '', label: 'Expériences', sub: 'Rôles web & automatisation' },
]
