let swiper = null

const aplicarFiltro = () => {
  console.log('Aplicando filtro...')
  const filtroCarne = document.getElementById('filtroCarne').value
  const filtroIngredientes = Array.from(
    document.getElementById('filtroIngredientes').selectedOptions
  ).map((opt) => opt.value)

  const hamburguesasFiltradas = hamburguesasOriginales.filter((hamburguesa) => {
    const cumpleFiltroCarne =
      filtroCarne === '' || hamburguesa.carne === filtroCarne
    const cumpleFiltroIngredientes =
      filtroIngredientes.length === 0 ||
      hamburguesa.ingredientes.some((ingrediente) =>
        filtroIngredientes.includes(ingrediente)
      )

    return cumpleFiltroCarne && cumpleFiltroIngredientes
  })

  const divHamburguesas = document.getElementById('hamburguesas')
  const divMensaje = document.getElementById('mensajeNoResultados')

  if (hamburguesasFiltradas.length === 0) {
    divMensaje.textContent = 'No se han encontrado resultados!.'
    divHamburguesas.innerHTML = ''
  } else {
    divMensaje.textContent = ''
    imprimirHamburguesas(hamburguesasFiltradas)
    if (swiper) {
      swiper.destroy()
      swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        on: {
          setTransition: function (transition) {
            const slides = this.slides
            slides.forEach((slide) => {
              slide.style.transition = transition + 's'
            })
          }
        }
      })
    }
  }
}

window.aplicarFiltro = aplicarFiltro

const resetFiltro = () => {
  const divHamburguesas = document.getElementById('hamburguesas')
  divHamburguesas.innerHTML = ''
  divMensaje.textContent = ''

  imprimirHamburguesas(hamburguesasOriginales)

  if (swiper) {
    swiper.destroy()
    swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      on: {
        setTransition: function (transition) {
          const slides = this.slides
          slides.forEach((slide) => {
            slide.style.transition = transition + 's'
          })
        }
      }
    })
  }

  document.getElementById('filtroCarne').value = ''
  const filtroIngredientes = document.getElementById('filtroIngredientes')
  Array.from(filtroIngredientes.options).forEach((option) => {
    option.selected = false
  })
}
window.resetFiltro = resetFiltro

const hamburguesasOriginales = [
  {
    id: 1,
    nombre: 'Clásica',
    carne: 'Ternera',
    ingredientes: ['Lechuga', 'Tomate', 'Queso', 'Salsa', 'Cebolla'],
    precio: 5.99,
    img: '/hamburguesas (1).png'
  },
  {
    id: 2,
    nombre: 'Hawaiana',
    carne: 'Ternera',
    ingredientes: [
      'Cebolla caramelizada',
      'Queso cheddar',
      'Salsa',
      'Pan Brioche'
    ],
    precio: 6.99,
    img: '/hamburguesas (2).png'
  },
  {
    id: 3,
    nombre: 'Vegana',
    carne: 'Vegetal',
    ingredientes: ['Lechuga', 'Tomate', 'Queso', 'Salsa vegana', 'Pepinillos'],
    precio: 7.99,
    img: '/hamburguesas (3).png'
  },
  {
    id: 4,
    nombre: 'BBWQ Crispy',
    carne: 'Ternera',
    ingredientes: ['Lechuga', 'Bacon', 'Queso', 'Salsa BBQ', 'Cebolla Crispy'],
    precio: 8.99,
    img: '/hamburguesas (4).png'
  },
  {
    id: 5,
    nombre: 'Steakhouse',
    carne: 'Ternera',
    ingredientes: ['Queso', 'Lechuga', 'Tomate', 'Mayonesa', 'Pepinillos'],
    precio: 9.99,
    img: '/hamburguesas (5).png'
  },
  {
    id: 6,
    nombre: 'Picante',
    carne: 'Pollo',
    ingredientes: [
      'Chiles jalapeños',
      'Bacon',
      'Queso picante',
      'Salsa picante'
    ],
    precio: 7.99,
    img: '/hamburguesas (6).png'
  },
  {
    id: 7,
    nombre: 'Pollos',
    carne: 'Pollo',
    ingredientes: ['Lechuga', 'Tomate', 'Salsa tártara'],
    precio: 10.99,
    img: '/hamburguesas (7).png'
  },
  {
    id: 8,
    nombre: 'Deluxe',
    carne: 'Pollo',
    ingredientes: [
      'Aguacate',
      'Bacon',
      'Queso cheddar',
      'Salsa ranch',
      'Lechuga',
      'Tomate'
    ],
    precio: 11.99,
    img: '/hamburguesas (8).png'
  },
  {
    id: 9,
    nombre: 'California',
    carne: 'Pollo',
    ingredientes: [
      'Cebolla Frita',
      'Bacon',
      'Queso cheddar',
      'Salsa ranch',
      'Lechuga',
      'Tomate'
    ],
    precio: 8.99,
    img: '/hamburguesas (9).png'
  },
  {
    id: 10,
    nombre: 'De la Casa',
    carne: 'Pollo',
    ingredientes: [
      'Lechuga',
      'Tomate',
      'Cebolla caramelizada',
      'Salsa especial'
    ],
    precio: 12.99,
    img: '/hamburguesas (10).png'
  }
]

const imprimirHamburguesas = (hamburguesas) => {
  const divHamburguesas = document.getElementById('hamburguesas')
  divHamburguesas.innerHTML = ''

  const divSwiperWrapper = document.createElement('div')
  divSwiperWrapper.classList.add('swiper', 'mySwiper')

  const divSwiperSlideWrapper = document.createElement('div')
  divSwiperSlideWrapper.classList.add('swiper-wrapper')

  hamburguesas.forEach((hamburguesa) => {
    const divSwiperSlide = document.createElement('div')
    divSwiperSlide.classList.add('hamburguesa', 'swiper-slide')

    const divImg = document.createElement('div')
    const img = document.createElement('img')
    img.src = hamburguesa.img
    divImg.appendChild(img)

    const divNombrePrecio = document.createElement('div')
    divNombrePrecio.classList.add('nombre-precio')

    const nombre = document.createElement('h3')
    nombre.textContent = hamburguesa.nombre

    const precio = document.createElement('p')
    precio.textContent = `${hamburguesa.precio} €`

    divNombrePrecio.appendChild(nombre)
    divNombrePrecio.appendChild(precio)

    divSwiperSlide.appendChild(divImg)
    divSwiperSlide.appendChild(divNombrePrecio)

    divSwiperSlideWrapper.appendChild(divSwiperSlide)
  })

  divSwiperWrapper.appendChild(divSwiperSlideWrapper)
  divHamburguesas.appendChild(divSwiperWrapper)
}

const llenarOpcionesSelect = () => {
  const selectFiltroCarne = document.getElementById('filtroCarne')
  const selectFiltroIngredientes = document.getElementById('filtroIngredientes')

  const carnes = [...new Set(hamburguesasOriginales.map((h) => h.carne))]
  const ingredientes = [
    ...new Set(hamburguesasOriginales.flatMap((h) => h.ingredientes))
  ]

  carnes.forEach((carne) => {
    const option = document.createElement('option')
    option.value = carne
    option.text = carne
    selectFiltroCarne.add(option)
  })

  ingredientes.forEach((ingrediente) => {
    const option = document.createElement('option')
    option.value = ingrediente
    option.text = ingrediente
    selectFiltroIngredientes.add(option)
  })
}

llenarOpcionesSelect()
imprimirHamburguesas(hamburguesasOriginales)

document.addEventListener('DOMContentLoaded', () => {
  swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 500,
    centeredSlides: true,
    loop: true,
    on: {
      setTransition: function (transition) {
        const slides = this.slides
        slides.forEach((slide) => {
          slide.style.transition = transition + 's'
        })
      }
    }
  })

  function updateSwiper() {
    if (window.matchMedia('(max-width: 480px)').matches) {
      swiper.params.slidesPerView = 1
      swiper.params.spaceBetween = 500
    } else {
      swiper.params.slidesPerView = 3
      swiper.params.spaceBetween = 100
    }
    swiper.update()
  }

  updateSwiper()

  window.addEventListener('resize', updateSwiper)

  console.log('Swiper inicializado:', swiper)
})

document.getElementById('btnFiltro').addEventListener('click', () => {
  const filtroDesplegable = document.querySelector('.filtro-desplegable')

  console.log('Click en el botón de filtro')

  // Toggle the 'visible' class on the filtroDesplegable element
  filtroDesplegable.classList.toggle('visible')

  // Check if the filtroDesplegable is visible
  const esVisible = filtroDesplegable.classList.contains('visible')
  console.log('Visible:', esVisible)

  // Si es visible, muestra los filtros
  if (esVisible) {
    console.log('Mostrando filtros')
  } else {
    // Si no es visible, oculta los filtros
    console.log('Ocultando filtros')
  }
})

const divMensaje = document.createElement('h3')
divMensaje.id = 'mensajeNoResultados'
document.body.appendChild(divMensaje)
