/* global Neprijatelj, Renderer, Pozadina, ucitaj, igrac */

const igrajOpet = document.getElementById('igraj-opet')
const shirina = window.innerWidth
const visina = window.innerHeight
const neprijatelji = []

const vojnikaDaljih = 20
const daljiOfset = 2
const vojnikaBlizih = 16
const bliziOfset = 3

const renderer = new Renderer()
const pozadina = new Pozadina(renderer.element)

const slike = [
  'slike/rov-prazan.gif',
  'slike/nemac-rov.gif',
  'slike/nemac-rov-puca.gif',
  'slike/pozadine/suva-trava.jpg'
]

/* FUNKCIJE */

function mainLoop() {
  renderer.render(pozadina)
  neprijatelji.map(n => {
    n.update()
    renderer.render(n)
  })
  igrac.render()
  if (igrac.ziv) window.requestAnimationFrame(mainLoop)
  igrajOpet.style.display = igrac.ziv ? 'none' : 'block'
}

function praviNeprijatelje() {
  neprijatelji.length = 0
  for (let i = daljiOfset; i < vojnikaDaljih - daljiOfset; i++) {
    const rand = Math.random() * 100 - 50
    const neprijatelj = new Neprijatelj(i * shirina / vojnikaDaljih + rand, visina / 6)
    neprijatelj.z = 1.5
    neprijatelji.push(neprijatelj)
  }

  for (let i = bliziOfset; i < vojnikaBlizih - bliziOfset; i++) {
    const rand = Math.random() * 100 - 50
    neprijatelji.push(new Neprijatelj(i * shirina / vojnikaBlizih + rand, visina / 3))
  }
}

function init() {
  igrac.init()
  praviNeprijatelje()
  mainLoop()
}

ucitaj(slike, init)

igrajOpet.addEventListener('click', init)
