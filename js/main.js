/* global Fabrika, Renderer, Pozadina, ucitaj, igrac */

let renderer, pozadina, neprijatelji
const igrajOpet = document.getElementById('igraj-opet')

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

function init() {
  const shirina = document.body.clientWidth || 800
  const visina = window.innerHeight || 600
  renderer = new Renderer(shirina, visina)
  pozadina = new Pozadina(shirina, visina)
  igrac.init()
  neprijatelji = new Fabrika(shirina, visina).praviNeprijatelje()
  mainLoop()
}

/* EVENTS */

ucitaj(slike, init)

igrajOpet.addEventListener('click', init)
