let navbar = document.querySelector('.navbar-custom')
let firstCard = document.getElementById('first-card')
let secondCard = document.getElementById('second-card')
let thirdCard = document.getElementById('third-card')
let skills = document.querySelector('.skills')
let banner = document.querySelector('.banner')
let bannerContent = document.querySelector('.banner-content')
let line = document.querySelector('.line')

const btnAbout = document.getElementById('about')
const about = document.querySelector('.about')

btnAbout.addEventListener('click', event => {
  about.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
  window.scrollBy(0, -100)
})

window.addEventListener('load', event => {
  bannerContentOpacity()
})

window.addEventListener('scroll', event => {
  console.log(window.scrollY)
  navbarChange(window.scrollY)
  firstCardGrow(window.scrollY)
  secondCardRise(window.scrollY)
  thirdCardGrow(window.scrollY)
  skillsUp(window.scrollY)
  bannerSkew(window.scrollY)
  lineFw(window.scrollY)
})

const bannerContentOpacity = function(e) {
  bannerContent.classList.add('banner-content-opacity')
}

const lineFw = (e) => {
  if (e > 2500) {
    line.classList.add('line-fw')
  } else {
    line.classList.remove('line-fw')
  }
}

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

const firstCardGrow = function(e) {
  if(e > 650) {
    firstCard.classList.add('card-grow')
  } else {
    firstCard.classList.remove('card-grow')
  }
}

const secondCardRise = function(e) {
  if(e > 1100) {
    secondCard.classList.add('card-rise')
  } else {
    secondCard.classList.remove('card-rise')
  }
}

const thirdCardGrow = function(e) {
  if(e > 1560) {
    thirdCard.classList.add('card-grow')
  } else {
    thirdCard.classList.remove('card-grow')
  }
}


const skillsUp = function(e) {
  if(e > 2100) {
    skills.classList.remove('skills-up')
  } else {
    skills.classList.add('skills-up')
  }
}
