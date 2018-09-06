'use strict'

function palindrome(input) {
    //cara ke 1
    // var output = '';
    // for (var index = input.length; index >= 1; index--) {
    //     output += input[index - 1]
    // }
    // if (input === output) {
    //     return true
    // } else {
    //     return false
    // }
    //cara ke 2
    var i = 0
    var j = input.length - 1
    while (i <= j) {
        if (input[i] !== input[j]) {
            return false
        }
        i++;
        j--;
    }
    return true
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false