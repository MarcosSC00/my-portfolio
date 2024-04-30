const navigation = document.getElementById('navigation')
const sobre = document.getElementById('about')
const projetos = document.getElementById('project')
const contato = document.getElementById('contact')
const backBtn = document.querySelector('.backToTop')
const hamburguer = document.querySelector('.hamburguer-menu')
const myText = document.getElementById('typing-text').innerHTML
var i = 0
var typedText = ''
var speed = 70

typeWriter()

function typeWriter(){
  if(i < myText.length){
    if(myText.charAt(i) === 'M' && myText.substring(i, i + 6) === 'Marcos'){
      typedText += '<span>' + myText.substring(i, i + 6) + '</span>,'
      i += 6
    }else{
      typedText += myText.charAt(i)
    }
    document.getElementById('typing-text').innerHTML = typedText
    i++
    setTimeout(typeWriter, speed)
  }
}

window.addEventListener('scroll', onScroll)

function onScroll() {
  sectionUderline()
  showNavOnScroll()
  showBackOnScroll()
}

function sectionUderline() {
  if (scrollY >= 800 && scrollY < 1701) {
    projetos.classList.add('underlineSection')
    contato.classList.remove('underlineSection')
    sobre.classList.remove('underlineSection')
  } else if (scrollY >= 0 && scrollY < 800) {
    sobre.classList.add('underlineSection')
    projetos.classList.remove('underlineSection')
    contato.classList.remove('underlineSection')
  } else if (scrollY >= 1701) {
    contato.classList.add('underlineSection')
    sobre.classList.remove('underlineSection')
    projetos.classList.remove('underlineSection')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500
}).reveal(
  '#sobre-mim, #header h1, #header p, #projetos header, #projetos .content-cards'
)

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function changeMenu() {
  hamburguer.classList.toggle('change')
}

function showBackOnScroll() {
  if (scrollY > 800) {
    backBtn.classList.add('show')
  } else {
    backBtn.classList.remove('show')
  }
}

function toggleMenu() {
  changeMenu()
  document.body.classList.toggle('menu-expanded')
}
function closeMenu() {
  changeMenu()
  document.body.classList.remove('menu-expanded')
}
document.addEventListener('DOMContentLoaded', function () {
  const slidersArray = [
    { index: 1, cont: 0 },
    { index: 2, cont: 0 },
    { index: 3, cont: 0 },
    { index: 4, cont: 0 }
  ]
  function createSlider(slidersArray) {
    const sliderContainer = document.querySelector(
      `#projetos .wrapper .content-cards .card:nth-child(${slidersArray.index})`
    )
    const slider = sliderContainer.querySelector('.slide-list')
    const prevBtn = sliderContainer.querySelector('.prev-btn')
    const proxBtn = sliderContainer.querySelector('.prox-btn')

    function updateSlider() {
      slider.style.left = `${-slidersArray.cont * 100}%`
    }

    function nextSlide() {
      if (slidersArray.cont < 2) {
        slidersArray.cont++
      } else {
        slidersArray.cont = 0
      }
      updateSlider()
    }

    function prevSlide() {
      if (slidersArray.cont > 0) {
        slidersArray.cont--
      } else {
        slidersArray.cont = 2
      }
      updateSlider()
    }

    prevBtn.addEventListener('click', prevSlide)
    proxBtn.addEventListener('click', nextSlide)
  }
  slidersArray.forEach(createSlider)
})