
const initAnimeSocial = () => {
  const socialLinks = document.querySelectorAll('.social-link')
  socialLinks.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      e.target.classList.add('pulse')
    })
    link.addEventListener('animationend', (e) => {
      e.target.classList.remove('pulse')
    })
  })
}

const initAnimeGh = () => {
  const ghLinks = document.querySelectorAll('.work-img')
  ghLinks.forEach((link) => {
    const toRepo = link.querySelector('.to-repo')
    link.addEventListener('mouseenter', (e) => {
      toRepo.classList.add('heartBeat')
    })
    link.addEventListener('mouseleave', (e) => {
      console.log('leave')
      toRepo.classList.remove('heartBeat')
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
initAnimeSocial();
initAnimeGh();
