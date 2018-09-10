function pasanganTerbesar(num) {
    var numStr = num.toString()
    var tmp = [];
    //pisahkan menjadi nilai 2 digit, lalu ditampung kedalam array tmp
    for (var index = 0; index < numStr.length; index++) {
        var pas1 = parseInt(numStr[index] + numStr[index + 1]);
        tmp.push(pas1);
    }
    //sorting descending
    tmp.sort(function(value1, value2) {
        return value1 < value2
    });
    //secara otomatis pasangan nilai 2 digit paling besar ada pada array index 0
    return tmp[0];

}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99