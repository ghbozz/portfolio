let navbar = document.querySelector('.navbar-custom')
let cards = document.querySelectorAll('.card')
let skills = document.querySelector('.skills')
let banner = document.querySelector('.banner')
let bannerContent = document.querySelector('.banner-content')

const btnAbout = document.getElementById('about')
const about = document.querySelector('.about')

btnAbout.addEventListener('mouseenter', event => {
  about.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
  window.scrollBy(0, -100)
})

window.addEventListener('scroll', event => {
  navbarChange(window.scrollY)
  cardGrow(window.scrollY)
  skillsUp(window.scrollY)
  bannerSkew(window.scrollY)
})

const bannerSkew = function(e) {
  if (e > 100) {
    banner.classList.add('banner-skew')
    bannerContent.classList.add('banner-content-skew')
  } else {
    banner.classList.remove('banner-skew')
    bannerContent.classList.remove('banner-content-skew')
  }
}

const navbarChange = function(e) {
  if(e > 550) {
    navbar.classList.add('navbar-black')
  } else {
    navbar.classList.remove('navbar-black')
  }
}

const cardGrow = function(e) {
  if(e > 700) {
    cards.forEach((card) => {
      card.classList.add('card-grow')
    })
  } else {
    cards.forEach((card) => {
      card.classList.remove('card-grow')
    })
  }
}


const skillsUp = function(e) {
  if(e > 2200) {
    skills.classList.remove('skills-up')
  } else {
    skills.classList.add('skills-up')
  }
}
