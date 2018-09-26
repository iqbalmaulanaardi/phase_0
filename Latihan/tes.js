// function rec(str) { //super-> repus
//     if (str.length === 1) {
//         return [str]
//     } else {
//         var hs = str.substr(0, str.length - 1)
//         var hb = str[str.length - 1]
//         var arr = [rec(hs)]
//         arr.push(hb)
//         return arr
//     }
// }
// console.log(rec('super'));
// function hitungJumlahKata(kalimat) {
//     // you can only write your code here!
//     if (kalimat.length === 0) {
//         return 1
//     } else {
//         var hs = kalimat.slice(1)
//             // return hs
//         if (kalimat[0] === ' ' && kalimat[1] !== ' ') {
//             return 1 + hitungJumlahKata(hs)
//         } else {
//             return 0 + hitungJumlahKata(hs)
//         }
//     }
// }

// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5
// function maximum(arr) {
//     if (arr.length === 1) {
//         return arr[0]
//     } else {
//         // if (arr[0] >= arr[1]) {
//         //     arr[1] = arr[0]
//         // }
//         // return maximum(arr.slice(1));
//         if (arr[0] > arr[arr.length - 1]) {
//             arr.pop()
//         } else if (arr[0] < arr[arr.length - 1]) {
//             arr.shift()
//         }
//         return maximum(arr)
//     }
// }
// console.log(maximum([80, 18, 2, 40, 1, 20, 30]));

// function ubahHuruf(kata) {
//     // you can only write your code here!
//     var alfabet = 'abcdefghijklmnopqrstuvwxyz'
//     if (kata.length === 0) {
//         return ''
//     } else {
//         var indexof = 0;
//         for (var i = 0; i < alfabet.length; i++) {
//             if (alfabet[i] === kata[0]) {
//                 indexof = i
//             }
//         }
//         if (indexof === 25) {
//             return alfabet[0] + ubahHuruf(kata.slice(1))
//         } else {
//             return alfabet[indexof + 1] + ubahHuruf(kata.slice(1))
//         }
//     }
// }

// // TEST CASES
// console.log(ubahHuruf('wow')); // xpx
// console.log(ubahHuruf('developer')); // efwfmpqfs
// console.log(ubahHuruf('javascript')); // kbwbtdsjqu
// console.log(ubahHuruf('keren')); // lfsfo
// console.log(ubahHuruf('semangat')); // tfnbohbu
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([7, 5, 2, 4, 3, 9])); //[2, 3, 4, 5, 7, 9]