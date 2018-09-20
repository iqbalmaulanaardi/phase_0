/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.

Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']

- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
  
Aturan coding:
  DILARANG menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

function arrayMerge(firstData, secondData) {
    // Code disini cara 1
    // var objOutput = {}
    // var arrOutput = []
    // if (firstData.length === 0 && secondData.length === 0) {
    //     return arrOutput;
    // } else {
    //     for (var i = 0; i < firstData.length; i++) {
    //         objOutput[firstData[i]] = '';
    //         //objOutput = {king: 'asdf'}
    //     }
    //     for (var j = 0; j < secondData.length; j++) {
    //         objOutput[secondData[j]] = '';
    //         //objOutput = {king: 'qwerty'}
    //     }
    //     // return objOutput
    //     return Object.keys(objOutput);
    // }
    //cara 2---------------------
    // var arrOutput = []
    // for (var i = 0; i < firstData.length; i++) {
    //     var status = false;
    //     //cek
    //     for (var j = 0; j < arrOutput.length; j++) {
    //         if (firstData[i] === arrOutput[j]) {
    //             status = true
    //         }
    //     }
    //     if (status === false) {
    //         arrOutput.push(firstData[i])
    //     }
    // }
    // for (var k = 0; k < secondData.length; k++) {
    //     var status = false;
    //     //cek
    //     for (var j = 0; j < arrOutput.length; j++) {
    //         if (secondData[k] === arrOutput[j]) {
    //             status = true
    //         }
    //     }
    //     if (status === false) {
    //         arrOutput.push(secondData[k])
    //     }
    // }
    // return arrOutput;
    //cara 3---------------------
    for (var i = 0; i < secondData.length; i++) {
        var isFind = false;
        for (var j = 0; j < firstData.length; j++) {
            if (secondData[i] === firstData[j]) {
                isFind = true;
                break;
            }
        }
        if (isFind === false) {
            firstData.push(secondData[i]);
        }
    }
    return firstData;
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

console.log(arrayMerge([], []));
// // []