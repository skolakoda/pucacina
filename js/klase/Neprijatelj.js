/* global Vreme */

const LEZI = 1
const STOJI = 2
const PUCA = 3

const slikaStoji = 'slike/nemac-rov.gif'
const slikaPuca = 'slike/nemac-rov-puca.gif'
let ucestalostUstajanja = 0.0009 // ubrzava vremenom
const ubrzavanje = 0.000005

class Neprijatelj {
  constructor(x, y, z = 1) {
    this.x = x
    this.y = y
    this.z = z
    this.element = new Image()
    this.pripremaDoPucanja = 50 + 100 * Math.random()
    this.vreme = new Vreme()
    this.lezi()
    this.pucanj = new Audio('zvuci/rafal.mp3')
  }

  get sirina() {
    return this.element.naturalWidth / this.z
  }

  get visina() {
    return this.element.naturalHeight / this.z
  }

  kolizija(mishX, mishY) {
    const ofsetX = 20 / this.z
    const ofsetY = 50 / this.z
    const {x, y, sirina, visina} = this
    return (
      (mishX >= x + ofsetX && mishX <= x + sirina - ofsetX) &&
      (mishY >= y && mishY <= y + visina - ofsetY)
    )
  }

  jelPogodjen(e) {
    return this.kolizija(e.clientX, e.clientY)
  }

  proveriPogodak(e) {
    if (this.stanje == LEZI) return
    if (this.jelPogodjen(e)) this.lezi()
    return this.jelPogodjen(e)
  }

  lezi() {
    this.stanje = LEZI
    this.duzinaStajanja = 0
    this.shouldRender = false
  }

  ustaj() {
    this.stanje = STOJI
    this.element.src = slikaStoji
    this.shouldRender = true
    ucestalostUstajanja += ubrzavanje
  }

  pucaj(junak) {
    this.stanje = PUCA
    this.element.src = slikaPuca
    this.shouldRender = true
    junak.steti(0.01)
    if (this.pucanj.currentTime === 0) this.pucanj.play()
  }

  spremanDaUstane() {
    return (this.stanje == LEZI && Math.random() < ucestalostUstajanja)
  }

  spremanDaPuca() {
    return this.duzinaStajanja > this.pripremaDoPucanja
  }

  update(junak) {
    if (this.spremanDaUstane()) this.ustaj()
    if (this.stanje == STOJI) this.duzinaStajanja++
    if (this.spremanDaPuca()) this.pucaj(junak)
  }
}
