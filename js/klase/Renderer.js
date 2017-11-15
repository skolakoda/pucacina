const r = Math.round

class Renderer {
  constructor() {
    this.element = document.getElementById('platno') || document.createElement('canvas')
    this.podloga = this.element.getContext('2d')
    if (!document.getElementById('platno')) document.body.appendChild(this.element)
    this.element.height = window.innerHeight || 600 // mora prvo visina
    this.element.width = document.body.clientWidth || 800
    this.element.style.backgroundColor = 'lightgray'
    this.element.focus()
  }

  render(predmet) {
    this.podloga.drawImage(predmet.element, r(predmet.x), r(predmet.y), r(predmet.sirina), r(predmet.visina))
  }
}
