const navBtns = () => {
  const btns = document.querySelectorAll('.navbar-item-custom')
  btns.forEach((btn) => {
    btn.classList.remove('has-text-light')
    btn.style.color = 'black'
  })
}

if (!document.getElementById('banner')) {
  navBtns();
}
