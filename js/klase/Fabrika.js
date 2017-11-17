class Fabrika {
  constructor(shirina, visina) {
    this.shirina = shirina
    this.visina = visina
    this.daljihPolozaja = 20
    this.daljiOfset = 2
    this.daljiY = this.visina / 6
    this.blizihPolozaja = 16
    this.bliziOfset = 3
    this.bliziY = this.visina / 2
  }

  pravi(Klasa) {
    const neprijatelji = []
    for (let i = this.daljiOfset; i < this.daljihPolozaja - this.daljiOfset; i++) {
      const rand = Math.random() * 100 - 50
      const neprijatelj = new Klasa(i * this.shirina / this.daljihPolozaja + rand, this.daljiY)
      neprijatelj.z = 1.5
      neprijatelji.push(neprijatelj)
    }

    for (let i = this.bliziOfset; i < this.blizihPolozaja - this.bliziOfset; i++) {
      const rand = Math.random() * 100 - 50
      neprijatelji.push(new Klasa(i * this.shirina / this.blizihPolozaja + rand, this.bliziY))
    }
    return neprijatelji
  }

  mapiraj(Klasa, pozicije) {
    return pozicije.map(p => new Klasa(p.x, p.y, p.z))
  }
}
