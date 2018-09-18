function cariModus(arr) {
    var objTmp = {};
    var arrTmp = [];
    for (var index = 0; index < arr.length; index++) {
        if (objTmp[arr[index]]) {
            objTmp[arr[index]] += 1;
        } else {
            objTmp[arr[index]] = 1;
        }
    }
    if (Object.keys(objTmp).length === 1 || Object.keys(objTmp).length === arr.length) {
        return -1;
    } else {
        var arrIndex = Object.values(objTmp);
        var angka = 0;
        var angkaIndex = 0;
        for (var index = 0; index < arrIndex.length; index++) {
            if (arrIndex[index] > angka) {
                angka = arrIndex[index];
                angkaIndex = index;
            }
        }
        return Object.keys(objTmp)[angkaIndex];
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1