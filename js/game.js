/* global Fabrika, Renderer, Pozadina, ucitaj, Igrac */

let renderer, pozadina, neprijatelji, igrac
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
    n.update(igrac)
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
  igrac = new Igrac()
  neprijatelji = new Fabrika(shirina, visina).praviNeprijatelje()
  mainLoop()
}

/* EVENTS */

ucitaj(slike, init)

igrajOpet.addEventListener('click', init)

document.addEventListener('click', e =>
  neprijatelji.map(n => igrac.nagradi(n.proveriPogodak(e)))
)
