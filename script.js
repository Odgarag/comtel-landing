const menuToggle = document.querySelector('.menu-toggle')
const mainNav = document.querySelector('.main-nav')
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open')
    menuToggle.setAttribute('aria-expanded', String(open))
    menuToggle.setAttribute('aria-label', open ? 'Цэс хаах' : 'Цэс нээх')
  })
  mainNav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
    }),
  )
}
const year = document.getElementById('year')
if (year) year.textContent = new Date().getFullYear()
const modal = document.getElementById('price-modal')
if (modal) {
  document.querySelectorAll('[data-open-prices]').forEach((button) =>
    button.addEventListener('click', () => {
      modal.classList.remove('hidden')
      modal.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }),
  )
  document.querySelectorAll('[data-close-prices]').forEach((button) =>
    button.addEventListener('click', () => {
      modal.classList.add('hidden')
      modal.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }),
  )
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
      modal.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden')
      modal.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }
  })
}
