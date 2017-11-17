
class Fabrika {
  constructor(shirina, visina) {
    this.shirina = shirina
    this.visina = visina
    this.daljihPolozaja = 20
    this.daljiOfset = 2
    this.blizihPolozaja = 16
    this.bliziOfset = 3
  }

  pravi(Klasa) {
    const neprijatelji = []
    for (let i = this.daljiOfset; i < this.daljihPolozaja - this.daljiOfset; i++) {
      const rand = Math.random() * 100 - 50
      const neprijatelj = new Klasa(i * this.shirina / this.daljihPolozaja + rand, this.visina / 6)
      neprijatelj.z = 1.5
      neprijatelji.push(neprijatelj)
    }

    for (let i = this.bliziOfset; i < this.blizihPolozaja - this.bliziOfset; i++) {
      const rand = Math.random() * 100 - 50
      neprijatelji.push(new Klasa(i * this.shirina / this.blizihPolozaja + rand, this.visina / 3))
    }
    return neprijatelji
  }

  mapiraj(Klasa, pozicije) {
    return pozicije.map(p => new Klasa(p.x, p.y, p.z))
  }
}
