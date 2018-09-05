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
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false