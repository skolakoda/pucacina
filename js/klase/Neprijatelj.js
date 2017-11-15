const srcRov = 'slike/rov-prazan.gif'
const srcStoji = 'slike/nemac-rov.gif'
const srcPuca = 'slike/nemac-rov-puca.gif'
const PROCENAT_POJAVLJIVANJA = 0.003

class Neprijatelj {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.z = 1
    this.element = new Image()
    this.element.src = srcRov
    this.ziv = true
    this.stoji = false
    this.duzinaStajanja = 0
    this.pripremaDoPucanja = 100 * Math.random()
    this.dodajKlik()
  }

  get sirina() {
    return this.element.naturalWidth / this.z
  }

  get visina() {
    return this.element.naturalHeight / this.z
  }

  kolizija(mishX, mishY) {
    const {x, y, sirina, visina} = this
    return (mishX >= x && mishX <= x + sirina) && (mishY >= y && mishY <= y + visina)
  }

  dodajKlik() {
    document.addEventListener('click', e => {
      if(this.kolizija(e.clientX, e.clientY))
        this.padni()
    })
  }

  padni() {
    this.element.src = srcRov
    this.ziv = false
  }

  ustani() {
    this.element.src = srcStoji
    this.stoji = true
  }

  povremenoUstani() {
    if (!this.stoji && Math.random() < PROCENAT_POJAVLJIVANJA) this.ustani()
  }

  pucaj() {
    this.element.src = srcPuca
  }

  update() {
    if (!this.ziv) return
    this.povremenoUstani()
    if (this.stoji) this.duzinaStajanja++
    if (this.duzinaStajanja > this.pripremaDoPucanja) this.pucaj()
  }
}
