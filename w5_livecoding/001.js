/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/
function evenPairsSum(str) {
    // Code disini
    //Algoritma
    // 1. Tambahkan str index terakhir dengan index pertama, untuk mengatasi angka terakhir yang tidak memiliki pasangan. Lalu buat variabel arrTmp yang akan digunakan untuk menampung array yang berisi angka genap dari str
    str += str[0];
    var arrTmp = [];
    // 2. Lakukan perulangan untuk menambahkan angka genap ke variabel strTmp
    for (var i = 0; i < str.length - 1; i = i + 2) {
        //2a. Buat variabel strTmp untuk menampung pasangan angka genap    
        var strTmp = '';
        strTmp += str[i] + str[i + 1];
        //2b. Increment i lagi untuk membuat perulangan mengambil angka perpasangan
        //2c. Buat variabel numTmp untuk mengubah pasangan angka menjadi tipe number
        var numTmp = Number(strTmp)
            //2d. Jika numTmp habis dibagi 2 maka push ke arrTmp
        if (numTmp % 2 === 0) {
            arrTmp.push(numTmp);
        }
    }
    // 3. Buat variabel result untuk menampung penjumlahan tiap pasangan angka pada arrTmp
    var result = 0;
    //4. Lakukan perulangan sebanyak arrTmp.length untuk menjumlahkan masing-masing pasangan angka genap dan ditampung ke variabel result
    for (var j = 0; j < arrTmp.length; j++) {
        result += arrTmp[j]
    }
    //5. Kembalikan nilai result
    return result;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134