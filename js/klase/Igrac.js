const tabela = document.getElementById('tabela')

class Igrac {
  constructor() {
    this.init()
  }

  init() {
    this.ziv = true
    this.poeni = 0
    this.energija = 100
  }

  steti(x) {
    this.energija -= x
    if (this.energija > 0) return
    this.energija = 0
    this.ziv = false
    return
  }

  nagradi(bul) {
    if (bul) this.poeni++
  }

  render() {
    tabela.innerHTML = `
      <div>Poeni: ${this.poeni}</div>
      <div>Energija: ${parseInt(this.energija)}</div>
    `
  }
}
