const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => nav.classList.toggle('show'))

let currentIndex = 0

function showSlide(index) {
  currentIndex = index
  updateSlideTransform()
}

function updateSlideTransform() {
  const container = document.querySelector('.carouselContainer')
  const itemWidth = document.querySelector('.carouselImg').clientWidth

  container.style.transform = `translateX(-${currentIndex * itemWidth}px)`
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + getTotalSlides()) % getTotalSlides()
  updateSlideTransform()
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % getTotalSlides()
  updateSlideTransform()
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % getTotalSlides()
  updateSlideTransform()
}

function startAutoSlide() {
  setInterval(autoSlide, 5000) // Muda automaticamente a cada 5 segundos (5000 milissegundos)
}

function getTotalSlides() {
  return document.querySelectorAll('.carouselImg').length
}

window.onload = startAutoSlide

const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  function showCardInfo() {
    var cards = document.querySelectorAll('.cardGrid')
    var screenWidth = window.innerWidth

    cards.forEach(function (card) {
      var title = card.querySelector('.title')

      if (screenWidth < 980) {
        card.classList.add('small-screen-visible')
      } else {
        card.classList.remove('small-screen-visible')
      }
    })
  }

  window.addEventListener('resize', showCardInfo)

  showCardInfo()
})

window.sr = ScrollReveal({ reset: true })

sr.reveal('.carousel', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

// ABOUT
sr.reveal('.about', {
  origin: 'left', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

// FINAL DO ABOUT

// ANIMANDO SERVICOS

// ELEMENTOS QUE VEM DA ESQUERDA
sr.reveal('.checkup-vascular', {
  origin: 'left', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.tratamento-diabetico', {
  origin: 'left', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

//ELEMENTOS QUE VEM DA DIREITA

sr.reveal('.tratamento-ulceras', {
  origin: 'right', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.doencas-arteriais', {
  origin: 'right', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

//ELEMENTOS QUE VEM DE CIMA E BAIXO

sr.reveal('.tratamento-venosas', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.ecografia-vascular', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

// TERMINANDO ANIMACAO DOS SERVICOS

// ANIMACAO DOS CARDS DA EQUIPE
sr.reveal('.doctor-andre', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.doctor-italo', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.doctor-luciana', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.doctor-vinicius', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('.doctor-ricardo', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

//TERMINANDO ANIMAÇÃO DOS CARDS DA EQUIPE

sr.reveal('#testimonials', {
  origin: 'left', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})

sr.reveal('#footer', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out', // Pode ajustar a curva de animação conforme necessário
  mobile: false // Desativa a animação em dispositivos móveis (se desejar)
})
