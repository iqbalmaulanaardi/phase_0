function digitPerkalianMinimum(angka) {
    var arrOutput = []

    //buat array dengan isi faktor-faktor untuk angka
    var arrTmp = []
    for (var i = 1; i <= angka; i++) {
        var str = ""
        if (angka % i === 0) {
            str = (i + "*" + (angka / i))
            arrTmp.push(str)
        }
    }
    for (var j = 0; j < arrTmp.length; j++) {
        //buat variable counter untuk menghitung digitPerkalian
        //perhitungan digit angka dikurang 1 karna ada "*"
        var counter = arrTmp[j].length - 1
        arrOutput.push(counter)
    }
    //ambil nilai terkecil dengan sort ascending
    arrOutput.sort(function(value1, value2) {
        return value1 > value2
    })
    return arrOutput[0]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2