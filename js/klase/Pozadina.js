class Pozadina {
  constructor(canvas) {
    this.element = new Image()
    this.element.src = 'slike/pozadine/suva-trava.jpg'
    this.x = 0
    this.y = 0
    this.sirina = canvas.width
    this.visina = canvas.height
  }
}
