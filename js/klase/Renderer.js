class Renderer {
  constructor(shirina, visina) {
    this.element = document.getElementById('platno') || document.createElement('canvas')
    this.podloga = this.element.getContext('2d')
    if (!document.getElementById('platno')) document.body.appendChild(this.element)
    this.element.height = visina  // mora prvo visina
    this.element.width = shirina
    this.element.style.backgroundColor = 'lightgray'
    this.element.focus()
  }

  render(predmet) {
    const r = Math.round
    this.podloga.drawImage(predmet.element, r(predmet.x), r(predmet.y), r(predmet.sirina), r(predmet.visina))
  }
}
