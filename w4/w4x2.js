function fpb(angka1, angka2) {
    var output = 0;
    if (angka1 > angka2) {
        var tmp = angka1
    } else {
        var tmp = angka2
    }
    for (var index = 1; index <= tmp; index++) {
        if (angka1 % index === 0 && angka2 % index === 0) {
            output = index
        }
    }
    return output

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1