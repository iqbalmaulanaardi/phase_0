function mengelompokkanAngka(arr) {
    var arrGenap = []
    var arrGanjil = []
    var arrKelipatanTiga = []
    var arrOutput = []
    var i = 0; //counter kelompok genap
    var j = 0; //counter kelompok ganjil
    var k = 0; //counter kelompok kelipatanTiga
    for (var index = 0; index < arr.length; index++) {
        //buat karakteristik kelompok untuk tiap nilai
        if (arr[index] % 3 === 0) {
            arrKelipatanTiga[k] = arr[index]
            k++
        } else if (arr[index] % 2 === 0) {
            arrGenap[i] = arr[index]
            i++
        } else if (arr[index] % 2 === 1) {
            arrGanjil[j] = arr[index]
            j++
        }

    }
    arrOutput.push(arrGenap)
    arrOutput.push(arrGanjil)
    arrOutput.push(arrKelipatanTiga)
    return arrOutput
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]