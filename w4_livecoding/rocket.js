/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {

    var alfabet = 'ABCDEFGHIJKLMLNOPQRSTUVWXYZ';
    var arrTmp = [];
    var output = [
        [studentsArr[0][0]]
    ];
    var tmp = '';
    // Only Code Here
    //sorting dulu
    for (var i = 0; i < studentsArr.length; i++) {
        for (var j = 0; j < studentsArr.length; j++) {
            if (alfabet.indexOf(studentsArr[i][0]) > alfabet.indexOf(studentsArr[j][0])) {
                tmp = studentsArr[i];
                studentsArr[i] = studentsArr[j];
                studentsArr[j] = tmp;
            }
        }
    }
    // console.log(studentsArr);
    var tmpObj = {};

    //[J, Joni, Jono]
    //mas yoki
    for (var i = 0; i < studentsArr.length; i++) {
        tmpObj[studentsArr[i][0]] = 1
            // tmpObj[studentsArr[i]] = 1
    }
    var arrTmp = Object.keys(tmpObj);
    // console.log(arrTmp);
    var arrOutput = []
    for (var j = 0; j < arrTmp.length; j++) {
        arrOutput.push([arrTmp[j]])
        for (var k = 0; k < studentsArr.length; k++) {
            if (arrTmp[j] === studentsArr[k][0]) {
                arrOutput[j].push(studentsArr[k])
            }
        }
    }
    return arrOutput;
}
console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/