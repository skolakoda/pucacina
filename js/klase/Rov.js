class Rov {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.z = 1
    this.element = new Image()
    this.element.src = 'slike/rov-prazan.gif'
    this.shouldRender = true
  }

  get sirina() {
    return this.element.naturalWidth / this.z
  }

  get visina() {
    return this.element.naturalHeight / this.z
  }
}
