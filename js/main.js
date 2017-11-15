/* global Neprijatelj, Renderer, Pozadina, ucitaj */

const shirina = window.innerWidth
const visina = window.innerHeight
const neprijatelji = []

const brojVojnika1 = 20
const ofset1 = 2
const brojVojnika2 = 16
const ofset2 = 3

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
  const ziviNeprijatelji = neprijatelji.filter(n => n.ziv)
  neprijatelji.map(n => {
    n.update()
    renderer.render(n)
  })
  window.requestAnimationFrame(mainLoop)
}

function init() {
  for (let i = ofset1; i < brojVojnika1 - ofset1; i++) {
    const rand = Math.random() * 100 - 50
    const neprijatelj = new Neprijatelj(i * shirina / brojVojnika1 + rand, visina / 6)
    neprijatelj.z = 1.5
    neprijatelji.push(neprijatelj)
  }

  for (let i = ofset2; i < brojVojnika2 - ofset2; i++) {
    const rand = Math.random() * 100 - 50
    neprijatelji.push(new Neprijatelj(i * shirina / brojVojnika2 + rand, visina / 3))
  }
  mainLoop()
}

ucitaj(slike, init)
