// //latihan cari modus
// var x = 1;
// var n = 1;
// var k = 1;
// var bil = [5, 3, 3, 2, 2, 2, 2, 3, 12, 2, 3, 4, 5, 6, 2, 34, 21];
// var mod = [];
// var total = [];
// x = 0;
// //ascending
// for (var i = 0; i < bil.length; i++) {
//     for (var j = bil.length - 1; j >= 0; j--) {
//         if (bil[j] < bil[j - 1]) {
//             tmp = bil[j]
//             bil[j] = bil[j - 1]
//             bil[j - 1] = tmp
//         }
//     }
// }
// //menghitung berapa kali muncul tiap angka
// for (var c = 0; c < bil.length; c++) {
//     total[c] = 0
//     for (var i = 0; i < bil.length; i++) {
//         if (bil[c] == bil[i]) {
//             total[c]++;
//         }
//     }
// }
// console.log(total);
// //menentukan nilai yang paling sering muncul
// for (var c = 0; c < bil.length; c++) {
//     if (total[c] > k) {
//         k = total[c];
//     }
// }
// console.log(k);
// console.log(bil)
// console.log(total)
//     //jika modus lebih dari satu
// for (var c = 0; c < bil.length; c++) {
//     if (x === 0) {
//         mod[x] = 0
//     } else {
//         mod[x] = mod[x] - 1
//     }
//     if (total[c] == k) {
//         if (bil[c] !== mod[x]) {
//             mod[x] = bil[c]
//             x++
//         }
//     }
// }
// console.log(mod);
// //Jika Semua angka muncul sama banyak
// var z = 0
// for (var c = 0; c < bil.length; c++) {
//     if (total[c] == k) {
//         z++
//     }
// }
// if (z == n) {
//     x = 0;
// }
// if (x == 0) {
//     console.log("Tidak ada modus")
// } else {
//     for (var c = 0; c < x; c++) {
//         console.log(mod[c])
//     }
// }
// JFXFLb
var angkaStr = '1542';
var tmp = Number(angkaStr[0]);
// pengen 542
var tmp2 = ''
for (var i = 0; i < angkaStr.length; i++) {
    if (i !== 0) {
        tmp2 += angkaStr[i]
    }

}
console.log(tmp2)