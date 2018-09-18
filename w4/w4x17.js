function totalDigitRekursif(angka) {
    var angkaStr = angka.toString();
    if (angka < 10) {
        return Number(angkaStr[0])
    } else {
        var tmp = Number(angkaStr[0])
        var tmp2 = '';
        //542
        for (var i = 0; i < angkaStr.length; i++) {
            if (i !== 0) {
                tmp2 += angkaStr[i]
            }
        }
        return tmp + totalDigitRekursif(Number(tmp2))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5