let navbar = document.querySelector('.navbar-custom')
let cards = document.querySelectorAll('.card')

window.addEventListener('scroll', event => {
  navbarChange(window.scrollY)
  cardGrow(window.scrollY)
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
      console.log('io')
    })
  } else {
    cards.forEach((card) => {
      card.classList.remove('card-grow')
    })
  }
}
