function cariModus(arr) {
    var obj = {
        nilai: 0,
        modus: 0,
        indexArr: 0
    }
    var objCek = {}
    for (var index = 0; index < arr.length; index++) {
        if (objCek[arr[index]] === undefined) {
            objCek[arr[index]] = 1
        } else {
            objCek[arr[index]] += 1
        }
    }
    if (Object.keys(objCek).length === 1 || Object.values(objCek).length === arr.length) {
        return -1
    } else {
        for (var i = 0; i < arr.length; i++) {
            var count = 0;
            for (var j = i; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                }
            }
            // return count
            if (count > obj.modus) {
                obj.nilai = arr[i]
                obj.modus = count
                obj.indexArr = i
            } else if (count === obj.modus) {
                if (i < obj.indexArr) {
                    obj.nilai = arr[i]
                    obj.modus = count
                    obj.indexArr = i
                }
            }
        }
        return obj.nilai
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 4, 5, 2, 4, 10]));