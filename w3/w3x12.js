function tentukanDeretGeometri(arr) {
    var arrHasilSelisih = [];
    var selisih = '';
    for (var index = 0; index < arr.length /*3*/ ; index++) {
        if ((index + 1) < arr.length) {
            selisih = Math.round(arr[index + 1] / arr[index]) //2-1,3-2,
            arrHasilSelisih.push(selisih) //1,1
            selisih = '';

        }
    }
    var arrHasilSelisih2 = [];
    var selisih2 = '';
    // 1,2,3
    for (var index2 = 0; index2 < arrHasilSelisih.length /*3*/ ; index2++) {
        if ((index2 + 1) < arrHasilSelisih.length) {
            selisih2 = arrHasilSelisih[index2 + 1] - arrHasilSelisih[index2] //2-1,3-2,
            arrHasilSelisih2.push(selisih2) //1,1
            selisih2 = '';
        }
    }
    var output = false;
    for (var index3 = 0; index3 < arrHasilSelisih2.length; index3++) {
        if (arrHasilSelisih2[index3] !== 0) {
            output = false;
        } else {
            output = true;
        }
    }
    return output;
    return arrHasilSelisih;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false