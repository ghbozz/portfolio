const initNavFix = () => {
  nav = document.querySelector('.navbar')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 900) {
      nav.classList.add('nav-fix')
      document.querySelector('body').style.marginTop = '58px'
      nav.style.transform = "translate(0,0%)"
    } else if (window.scrollY > 58 && window.scrollY < 900) {
      nav.style.transform = "translate(0,-100%)"
    } else {
      nav.classList.remove('nav-fix')
      document.querySelector('body').style.marginTop = '0px'
      nav.style.transform = "translate(0,0%)"
    }
  })
}

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
      toRepo.classList.remove('heartBeat')
    })
  })
}

const initScrollBtns = () => {
  const aboutSection = document.querySelector('.header')
  document.getElementById('btn-about').addEventListener('click', (e) => {
    aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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

initNavFix();
initScrollBtns();
initAnimeSocial();
initAnimeGh();
