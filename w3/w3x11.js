function tentukanDeretAritmatika(arr) {
    var arrHasilSelisih = [];
    var selisih = '';
    // 1,2,3
    for (var index = 0; index < arr.length /*3*/ ; index++) {
        if ((index + 1) < arr.length) {
            selisih = arr[index + 1] - arr[index] //2-1,3-2,
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
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false