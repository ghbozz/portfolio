
const initAnime = () => {
  const links = document.querySelectorAll('.social-link')
  links.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      e.target.classList.add('pulse')
    })
    link.addEventListener('animationend', (e) => {
      e.target.classList.remove('pulse')
    })
  })
}

initAnime();
