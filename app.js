let handleMenu = false

const menu = document.querySelector('.header__burger')
const icono = document.getElementById('header__icono')
const menuMobile = document.getElementById('header__nav')
const divOpacidad = document.querySelectorAll('.opacidad')

menu.addEventListener('click', () => {
  handleMenu = !handleMenu

  if (handleMenu) {
    icono.classList.remove('fa-bars')
    icono.classList.add('fa-x')
    menuMobile.classList.remove('header__nav')
    menuMobile.classList.add('header__navMobile')
    divOpacidad.forEach(function (div) {
      div.classList.add('body')
    })
  } else {
    icono.classList.add('fa-bars')
    icono.classList.remove('fa-x')
    menuMobile.classList.add('header__nav')
    menuMobile.classList.remove('header__navMobile')
    divOpacidad.forEach(function (div) {
      div.classList.remove('body')
    })
  }
})
menuMobile.addEventListener('click', () => {
  icono.classList.add('fa-bars')
  icono.classList.remove('fa-x')
  menuMobile.classList.add('header__nav')
  menuMobile.classList.remove('header__navMobile')
  divOpacidad.forEach(function (div) {
    div.classList.remove('body')
  })
})
