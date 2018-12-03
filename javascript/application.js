let navbar = document.querySelector('.navbar-custom')

window.addEventListener('scroll', event => {
  navbarChange(window.scrollY)
})

const navbarChange = function(e) {
  if(e > 650) {
    navbar.classList.add('navbar-black')
  } else {
    navbar.classList.remove('navbar-black')
  }
}
