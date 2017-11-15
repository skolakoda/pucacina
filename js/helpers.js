function ucitaj(slike, povratna) {
  let ucitaneSlike = 0
  slike.map(src => {
    const slika = new Image()
    slika.onload = () => {
      if (++ucitaneSlike == slike.length) povratna()
    }
    slika.src = src
  })
}
