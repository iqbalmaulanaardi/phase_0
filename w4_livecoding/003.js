/**

Reverse All

Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

*/

function reverseAll(arr) {
    // Code disini
    var arrTmp = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrTmp.push(arr[i])
    }
    for (var j = 0; j < arrTmp.length; j++) {
        var strTmp = ''
        for (var k = arrTmp[j].length - 1; k >= 0; k--) {
            strTmp += arrTmp[j][k]
        }
        arrTmp[j] = strTmp
    }
    return arrTmp
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []