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
// function palindrome(str) {
//     var result = { palindrome: [], nonPalindrome: [] };
//     // var array = str.split(' ');
//     var kata = '';
//     var array = [];
//     //split manual by spasi
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === ' ' || i === str.length - 1) {
//             if (i === str.length - 1) {
//                 kata += str[i]
//             }
//             array.push(kata);
//             kata = '';
//         } else {
//             kata += str[i]
//         }
//     }
//     // return array
//     for (var i = 0; i < array.length; i++) {
//         var statusPalindrome = true;
//         var indexAkhir = array[i].length - 1;
//         for (var j = 0; j < array[i].length; j++) {
//             if (array[i][j].toLowerCase() !== array[i][indexAkhir].toLowerCase()) {
//                 statusPalindrome = false;
//                 break;
//             }
//             indexAkhir--;
//         }
//         if (statusPalindrome) {
//             result.palindrome.push(array[i])
//         } else {
//             result.nonPalindrome.push(array[i])
//         }
//     }
//     return result
// }
// console.log(palindrome('katak dalam tempurung sedang berada di makam'));
// console.log(palindrome('Wow honda civic ada di hacktiv8'));
//--------------------------LATIHAN REKURSIF------------------------------
// function balikKata(str) {

//     if (str.length === 0) {
//         return '';
//     } else {
//         return str[str.length - 1] + balikKata(str.substr(0, (str.length - 1)))
//     }
// }
// console.log(balikKata('kaki ku rorombeheun'));
// function minimal(arr) {
//     // if (arr.length === 1) {
//     //     return arr[0]
//     // } else {
//     //     if (arr[0] <= arr[1]) {
//     //         arr[1] = arr[0]
//     //     }
//     //     return minimal(arr.slice(1))
//     // }
//     if (arr.length === 1) {
//         return arr[0]
//     } else {
//         if (arr[0] <= arr[arr.length - 1]) {
//             arr.pop()
//             return minimal(arr)
//         } else {
//             arr.shift()
//             return minimal(arr)
//         }
//     }

// }
// console.log(minimal([4, 3, 2, 5, 6]));
// function palindrome(kata) {
//     // you can only write your code here!
//     if (kata[0] !== kata[kata.length - 1]) {
//         return false
//     } else {
//         if (kata.length <= 1) {
//             return true
//         }
//         return palindrome(kata.substr(1, kata.length - 2))
//     }
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false
function angkaPalindrome(num) {
    // you can only write your code here!
    if (num < 9) {
        return num + 1
    } else if (num.toString().length === 1) {
        return angkaPalindrome(num + 1)
    } else if (num.toString().length === 2) {
        if (num.toString()[0] !== num.toString()[1]) {
            return angkaPalindrome(num + 1)
        } else {
            return num
        }
    } else {
        var status = true
        var length = num.toString().length - 1
        for (var i = 0; i < num.toString().length; i++) {
            if (num.toString()[i] !== num.toString()[length]) {
                status = false;
                break;
            }
            length--;
        }
        // return status
        if (status === false) {
            return angkaPalindrome(num + 1)
        } else {
            return num
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(9)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(121)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(9989887)); // 1001