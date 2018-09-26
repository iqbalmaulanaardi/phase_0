/*

Diberikan sebuah function tukar besar kecil yang akan
mengembalikan nilai yang terbalik dari a sampai z

example:
1. input : 'Halo'
   output : 'hALO'

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function tukarBesarKecil
- Dilarang mengubah tipe data parameter
- Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

*/

function tukarBesarKecil(kalimat) {
    // your code here
    if (kalimat.length === 0) {
        return ''
    } else {
        if (kalimat[0] == kalimat[0].toUpperCase()) {
            return kalimat[0].toLowerCase() + tukarBesarKecil(kalimat.slice(1))
        } else if (kalimat[0] == kalimat[0].toLowerCase()) {
            return kalimat[0].toUpperCase() + tukarBesarKecil(kalimat.slice(1))
        }
    }
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"