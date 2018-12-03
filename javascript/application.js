let navbar = document.querySelector('.navbar-custom')
let cards = document.querySelectorAll('.card')
let skills = document.querySelector('.skills')

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
  if(e > 600) {
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
  if(e > 1650) {
    skills.classList.remove('skills-up')
  } else {
    skills.classList.add('skills-up')
  }
}
