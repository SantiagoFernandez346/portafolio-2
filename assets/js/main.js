// ===== Traducciones =====
// El español está escrito en el HTML; acá solo va el inglés.
// Al cargar se guarda el texto original de cada elemento para poder volver a español.
const EN = {
  skip: 'Skip to content',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.contact': 'Contact',
  'hero.available': 'Open to work',
  'hero.hello': "Hi, I'm",
  'hero.role': 'Junior Frontend Developer',
  'hero.intro': 'I build clear, fast and accessible interfaces with React and TypeScript, and I also like understanding what happens on the server side.',
  'hero.cta': 'View projects',
  'cv.download': 'Download résumé',
  'about.title': 'About me',
  'about.p1': "I've been coding since 2021. I started by building the frontend of a company website and haven't stopped since: today I'm studying for an Associate Degree in Programming at UNAHUR and I keep building projects to learn new things.",
  'about.p2': "I work mainly with React, TypeScript and JavaScript, and I have a backend foundation in Node.js, REST APIs and SQL databases. I'm looking for my next frontend role on a team where I can contribute from day one and keep growing.",
  'about.location': 'Location',
  'about.studies': 'Studies',
  'about.studiesValue': 'Associate Degree in Programming · UNAHUR',
  'about.languages': 'Languages',
  'about.languagesValue': 'Spanish (native) · English (B2)',
  'about.coding': 'Coding since',
  'projects.title': 'Projects',
  'projects.latest': 'Latest project',
  'projects.demo': 'Live demo',
  'projects.code': 'Code',
  'p1.title': 'Expense Dashboard',
  'p1.desc': 'Personal finance app: log income and expenses, see charts for the last months, set budgets per category and export everything to CSV.',
  'p1.b1': 'Supabase authentication and a PostgreSQL database with Row Level Security.',
  'p1.b2': 'Recharts charts, dark mode and a responsive layout.',
  'p1.b3': 'Business logic separated from the UI and covered by Vitest tests.',
  'p2.desc': 'Full-stack gaming hardware store: filterable catalog, search, cart, checkout, user accounts and CPU/motherboard compatibility. Custom API with JWT authentication and stock control.',
  'p3.desc': "Guide to the season's airing anime with a countdown to each premiere, search, genre filter, favorites and light/dark mode, powered by an external API.",
  'skills.title': 'Skills',
  'skills.backend': 'Backend & data',
  'skills.tools': 'Tools',
  'skills.ai': 'AI coding assistants',
  'exp.title': 'Experience & education',
  'exp.work': 'Work experience',
  'exp.job': 'Frontend Developer',
  'exp.j1': 'Built and maintained the frontend of the company website using HTML5, CSS and JavaScript.',
  'exp.j2': 'Implemented features to showcase and promote products, increasing catalog visibility.',
  'exp.j3': "Turned customer feedback into concrete improvements to the site's interface.",
  'exp.education': 'Education',
  'exp.present': 'Present',
  'exp.e1': 'Associate Degree in Programming',
  'exp.e2': 'MySQL Course',
  'exp.e3': 'Full-Stack Development Course',
  'contact.title': "Let's talk",
  'contact.text': "I'm looking for my next role as a frontend developer. If you have an opportunity or want to chat about a project, send me a message.",
  'footer.made': 'Handcrafted with HTML, CSS and JavaScript.',
}

const CV = {
  es: 'assets/files/cv-santiago-fernandez-es.pdf',
  en: 'assets/files/cv-santiago-fernandez-en.pdf',
}

const TITULOS = {
  es: 'Santiago Fernandez · Desarrollador Frontend',
  en: 'Santiago Fernandez · Frontend Developer',
}

const textos = document.querySelectorAll('[data-i18n]')
const ES = {}
textos.forEach((el) => { ES[el.dataset.i18n] = el.textContent })

function guardar(clave, valor) {
  try { localStorage.setItem(clave, valor) } catch (e) { /* sin localStorage: no se recuerda */ }
}
function leer(clave) {
  try { return localStorage.getItem(clave) } catch (e) { return null }
}

function aplicarIdioma(lang) {
  const dic = lang === 'en' ? EN : ES
  textos.forEach((el) => {
    const texto = dic[el.dataset.i18n]
    if (texto) el.textContent = texto
  })
  document.documentElement.lang = lang
  document.title = TITULOS[lang]
  document.querySelectorAll('[data-cv]').forEach((a) => { a.href = CV[lang] })
  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang))
  })
  guardar('idioma', lang)
}

document.querySelectorAll('[data-lang]').forEach((boton) => {
  boton.addEventListener('click', () => aplicarIdioma(boton.dataset.lang))
})

const idiomaGuardado = leer('idioma')
const idiomaNavegador = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'
aplicarIdioma(idiomaGuardado || idiomaNavegador)

// ===== Tema claro / oscuro =====
document.getElementById('tema').addEventListener('click', () => {
  const oscuro = document.documentElement.classList.toggle('dark')
  guardar('tema', oscuro ? 'oscuro' : 'claro')
})

// ===== Menú en celular =====
const menu = document.getElementById('menu')
const botonMenu = document.getElementById('abrir-menu')
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto')
  botonMenu.setAttribute('aria-expanded', String(abierto))
})
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  menu.classList.remove('abierto')
  botonMenu.setAttribute('aria-expanded', 'false')
}))

// ===== Link activo según la sección visible =====
const links = [...menu.querySelectorAll('a')]
const secciones = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean)
if ('IntersectionObserver' in window) {
  const observadorSecciones = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return
      links.forEach((a) => a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id))
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  secciones.forEach((s) => observadorSecciones.observe(s))

  // Aparición suave de las secciones al hacer scroll
  const animables = document.querySelectorAll('.seccion, .proyecto')
  const observadorAparecer = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observadorAparecer.unobserve(e.target)
      }
    })
  }, { threshold: 0.08 })
  animables.forEach((el) => { el.classList.add('aparecer'); observadorAparecer.observe(el) })
}

document.getElementById('anio').textContent = new Date().getFullYear()
