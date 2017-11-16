const tabela = document.getElementById('tabela')

const igrac = {
  init() {
    this.ziv = true
    this.poeni = 0
    this.energija = 100
  },

  osteti(x) {
    this.energija -= x
    if (this.energija > 0) return
    this.energija = 0
    this.ziv = false
    return
  },

  render() {
    tabela.innerHTML = `
      <div>Poeni: ${this.poeni}</div>
      <div>Energija: ${parseInt(this.energija)}</div>
    `
  }
}
