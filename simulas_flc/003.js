/*
================
findOutlier
================

[INSTRUCTIONS]

findOutlier adalah sebuah function yang menerima satu parameter berupa array yang berisi number.
function tersebut akan memeriksa angka mana saja yang berbeda dengan angka lain, perbedaannya dilihat dari ganjil atau genap.
dan function akan mereturn angka yang berbeda dengan angka lainnya.

jika tidak ada data pada array yang diinput, maka outpunya 'no number'

[EXAMPLE]

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
output: 11
karena hanya 11 yang ganjil, sisanya genap

findOutlier([160, 3, 1719, 19, 11, 13, 21])
output: 160
karena hanya 160 yang genap, sisanya ganjil

RULES:
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan Math.max, Math.min, .sort()
- Dilarang menggunakan spread syntax
- Dilarang menggunakan regex .match dan lainnya!
*/

function findOutlier(array) {
    // your code here
    if (!array.length) {
        return 'no number'
    } else {
        var obj = { genap: 0, ganjil: 0 }
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                obj.genap += 1
            } else {
                obj.ganjil += 1
            }
        }
        if (obj.genap === 1) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    return array[i]
                }
            }
        } else if (obj.ganjil === 1) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 1) {
                    return array[i]
                }
            }
        }
    }
}

console.log(findOutlier([2, 4, 6, 100, 4, 11, 8, 50])); // 11

console.log(findOutlier([160, 3, 1719, 19, 11, 13, 21])); // 160

console.log(findOutlier([])) // 'no number'