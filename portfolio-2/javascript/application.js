
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

const initScrollBtns = () => {
  const aboutSection = document.querySelector('.header')
  document.getElementById('btn-about').addEventListener('click', (e) => {
    aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    window.scrollBy(0, -100)
  })
  const folioSection = document.querySelector('.work-container')
  document.getElementById('btn-portfolio').addEventListener('click', (e) => {
    folioSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
  const contactSection = document.querySelector('.contact-container')
  document.getElementById('btn-contact').addEventListener('click', (e) => {
    contactSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
}

initScrollBtns();
initAnime();
