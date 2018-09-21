// function graduatesCount(array) {
//     if (array.length !== 0) {
//         if (array[0] >= 75) {
//             return 1 + graduatesCount(array.slice(1))
//         }
//         if (array[0] < 75) {
//             return 0 + graduatesCount(array.slice(1))
//         }
//     } else {
//         return 0
//     }
// }
// console.log(graduatesCount([70, 85, 65, 90]));
// console.log(graduatesCount([0, 65, 30, 74]));
// console.log(graduatesCount([90, 100, 76, 85]));
//--------------------------------------------------------
// function counterChar(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             if (obj[str[i]] === undefined) {
//                 obj[str[i]] = 1
//             } else {
//                 obj[str[i]] += 1
//             }
//         }
//     }
//     return obj
// }
// console.log(counterChar('yosephine mellyana'))
//--------------------------------------------------------
function palindrome(str) {
    var result = { palindrome: [], nonPalindrome: [] };
    // var array = str.split(' ');
    var kata = '';
    var array = [];
    //split manual by spasi
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            if (i === str.length - 1) {
                kata += str[i]
            }
            array.push(kata);
            kata = '';
        } else {
            kata += str[i]
        }
    }
    // return array
    for (var i = 0; i < array.length; i++) {
        var statusPalindrome = true;
        var indexAkhir = array[i].length - 1;
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j].toLowerCase() !== array[i][indexAkhir].toLowerCase()) {
                statusPalindrome = false;
                break;
            }
            indexAkhir--;
        }
        if (statusPalindrome) {
            result.palindrome.push(array[i])
        } else {
            result.nonPalindrome.push(array[i])
        }
    }
    return result
}
console.log(palindrome('katak dalam tempurung sedang berada di makam'));
console.log(palindrome('Wow honda civic ada di hacktiv8'));