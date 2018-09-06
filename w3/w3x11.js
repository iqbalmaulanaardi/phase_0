function tentukanDeretAritmatika(arr) {
    var selisih = 0;
    selisih = arr[1] - arr[0]
    for (var index = 0; index < arr.length - 1; index++) {
        if ((arr[index + 1] - arr[index]) != selisih) {
            return false
        }
    }
    return true
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false