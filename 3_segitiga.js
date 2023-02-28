const segitiga = tinggi => {
    let hasil = '';
    for (let i = 0; i < tinggi; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
} 


console.log(segitiga(2));