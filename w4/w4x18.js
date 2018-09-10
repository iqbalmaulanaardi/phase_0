function kaliTerusRekursif(angka) {
    var angkaStr = angka.toString(); //654
    if (angka < 10) {
        return angka
    } else {
        var tmp = Number(angkaStr[0]); //6
        var tmp2 = '';
        //54
        for (var i = 0; i < angkaStr.length; i++) {
            if (i !== 0) {
                tmp2 += angkaStr[i]
            }

        }
        // tmp2 = 54
        var hasil = tmp * kaliTerusRekursif(Number(tmp2))
        if (hasil.toString().length !== 1) {
            return kaliTerusRekursif(Number(hasil))
        } else {
            return hasil
        }

    }
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6