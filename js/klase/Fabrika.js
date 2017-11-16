/* global Neprijatelj */

class Fabrika {
  constructor(shirina, visina) {
    this.shirina = shirina
    this.visina = visina
    this.vojnikaDaljih = 20
    this.daljiOfset = 2
    this.vojnikaBlizih = 16
    this.bliziOfset = 3
  }

  praviNeprijatelje() {
    const neprijatelji = []
    for (let i = this.daljiOfset; i < this.vojnikaDaljih - this.daljiOfset; i++) {
      const rand = Math.random() * 100 - 50
      const neprijatelj = new Neprijatelj(i * this.shirina / this.vojnikaDaljih + rand, this.visina / 6)
      neprijatelj.z = 1.5
      neprijatelji.push(neprijatelj)
    }

    for (let i = this.bliziOfset; i < this.vojnikaBlizih - this.bliziOfset; i++) {
      const rand = Math.random() * 100 - 50
      neprijatelji.push(new Neprijatelj(i * this.shirina / this.vojnikaBlizih + rand, this.visina / 3))
    }
    return neprijatelji
  }
}
