/* global Vreme */

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
    if (this.jelPogodjen(e)) this.padni()
    return this.jelPogodjen(e)
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

  pucaj(junak) {
    this.element.src = srcPuca
    junak.steti(0.01)
  }

  update(junak) {
    this.povremenoUstani()
    if (this.stoji) this.duzinaStajanja++
    if (this.duzinaStajanja > this.pripremaDoPucanja) this.pucaj(junak)
  }
}
