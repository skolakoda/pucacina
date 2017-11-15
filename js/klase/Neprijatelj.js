/* global Vreme, igrac */

const srcRov = 'slike/rov-prazan.gif'
const srcStoji = 'slike/nemac-rov.gif'
const srcPuca = 'slike/nemac-rov-puca.gif'
const procenatPojavljivanja = 0.0009 // ubrzavati vremenom

class Neprijatelj {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.z = 1
    this.element = new Image()
    this.element.src = srcRov
    this.stoji = false
    this.duzinaStajanja = 0
    this.pripremaDoPucanja = 50 + 100 * Math.random()
    this.vreme = new Vreme()
    document.addEventListener('click', this.proveriPogodak.bind(this))
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

  proveriPogodak(e) {
    if(!this.kolizija(e.clientX, e.clientY)) return
    igrac.poeni++
    this.padni()
  }

  padni() {
    this.element.src = srcRov
    this.stoji = false
    this.duzinaStajanja = 0
  }

  ustani() {
    this.element.src = srcStoji
    this.stoji = true
  }

  povremenoUstani() {
    if (!this.stoji && Math.random() < procenatPojavljivanja) this.ustani()
  }

  pucaj() {
    this.element.src = srcPuca
    igrac.osteti(0.01)
  }

  update() {
    this.povremenoUstani()
    if (this.stoji) this.duzinaStajanja++
    if (this.duzinaStajanja > this.pripremaDoPucanja) this.pucaj()
  }
}
