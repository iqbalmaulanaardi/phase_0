function angkaPrima(angka) {
    var faktor = 0;
    if (angka > 1) {
        for (var index = 1; index <= angka; index++) {
            if (angka % index === 0) {
                faktor += 1
            }
        }
        if (faktor <= 2) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
    // var arrOutput = []
    // for (var y = 2; y <= angka; y++) {
    //     var status = true
    //     for (var x = 2; x < y; x++) {
    //         if (y % x === 0) {
    //             status = false
    //             break;
    //         }
    //     }
    //     if (status === true) {
    //         arrOutput.push(y)
    //     }
    // }
    // return arrOutput
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false