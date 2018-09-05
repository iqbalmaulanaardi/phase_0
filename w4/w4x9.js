function tukarBesarKecil(kalimat) {
    var arrStr = []
    for (var i = 0; i < kalimat.length; i++) {
        arrStr.push(kalimat[i])
    }
    for (var j = 0; j < arrStr.length; j++) {
        if (arrStr[j] == arrStr[j].toUpperCase()) {
            arrStr[j] = arrStr[j].toLowerCase()
        } else if (arrStr[j] == arrStr[j].toLowerCase()) {
            arrStr[j] = arrStr[j].toUpperCase()
        }
    }
    return arrStr.toString().replace(/,/g, "")
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"