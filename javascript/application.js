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
  const educationSection = document.querySelector('.education-container')
  document.getElementById('btn-education').addEventListener('click', (e) => {
    educationSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
  const contactSection = document.querySelector('.contact-container')
  document.getElementById('btn-contact').addEventListener('click', (e) => {
    contactSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
}

const bulmaNav = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
}

const activeBtnOnScroll = () => {
  const btns = document.querySelectorAll('.nav-btn')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY < 900) {
      removeClass(btns, 'nav-btn-active')
      btns[0].classList.add('nav-btn-active')
    } else if (window.scrollY >= 900 && window.scrollY <= 2700) {
      removeClass(btns, 'nav-btn-active')
      btns[1].classList.add('nav-btn-active')
    } else if (window.scrollY >= 2700 && window.scrollY <= 3500) {
      removeClass(btns, 'nav-btn-active')
      btns[2].classList.add('nav-btn-active')
    } else {
      removeClass(btns, 'nav-btn-active')
      btns[3].classList.add('nav-btn-active')
    }
  })
}

const removeClass = (elems, className) => {
  elems.forEach((elem) => {
    elem.classList.remove(className)
  })
}

activeBtnOnScroll();
bulmaNav();
initNavFix();
initScrollBtns();
initAnimeSocial();
initAnimeGh();
