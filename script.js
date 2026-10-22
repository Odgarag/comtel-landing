// COMTEL landing page interactions
const menuToggle = document.querySelector('.menu-toggle')
const mainNav = document.querySelector('.main-nav')

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open')
    menuToggle.setAttribute('aria-expanded', String(isOpen))
    menuToggle.setAttribute('aria-label', isOpen ? 'Цэс хаах' : 'Цэс нээх')
  })

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.setAttribute('aria-label', 'Цэс нээх')
    })
  })
}

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

// Back-to-top button and footer year.
const backToTop = document.querySelector('.back-to-top')
const updateBackToTop = () => {
  if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 500)
}
window.addEventListener('scroll', updateBackToTop, { passive: true })
updateBackToTop()

const year = document.getElementById('year')
if (year) year.textContent = new Date().getFullYear()
