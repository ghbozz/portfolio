let navbar = document.querySelector('.navbar-custom')
let cards = document.querySelectorAll('.card')
let skills = document.querySelector('.skills')

const btnAbout = document.getElementById('about')
const about = document.querySelector('.about')

btnAbout.addEventListener('mouseenter', event => {
  about.scrollIntoView({behavior: "smooth", block: "start"});
  window.scrollBy(0, -100)
})

window.addEventListener('scroll', event => {
  navbarChange(window.scrollY)
  cardGrow(window.scrollY)
  skillsUp(window.scrollY)
})

const navbarChange = function(e) {
  if(e > 650) {
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
  if(e > 2000) {
    skills.classList.remove('skills-up')
  } else {
    skills.classList.add('skills-up')
  }
}
