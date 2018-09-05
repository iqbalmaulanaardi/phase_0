'use strict'

function palindrome(input) {
    var output = '';
    for (var index = input.length; index >= 1; index--) {
        output += input[index - 1]
    }
    if (input === output) {
        return true
    } else {
        return false
    }
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false