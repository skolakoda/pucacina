class Pozadina {
  constructor(sirina, visina) {
    this.element = new Image()
    this.element.src = 'slike/suva-trava.jpg'
    this.x = 0
    this.y = 0
    this.sirina = sirina
    this.visina = visina
    this.shouldRender = true
  }
}
