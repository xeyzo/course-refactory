const addToArray = (awal,akhir) => {
    const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

    stuff.unshift(awal)
    stuff.push(akhir)

    console.log(stuff)
}

addToArray("Handuk","Celana")