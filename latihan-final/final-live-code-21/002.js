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
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/
/*
1. Jika panjang 'str' ganjil maka 'str' di append dengan 'str' index ke 0, agar memasangkan dengan angka pertama
2. Buat variabel numTmp untuk menampung hasil penjumlahan pasangan genap
3. Lakukan step 3a mulai dari i=0 hingga i=str.length - 1 dengan incremen i = i+2, agar perulangan berpasangan.
  3a. jika ('str' index ke i append 'str' index ke i+1) genap maka lakukan step 4a
    4a. append 'numTmp' dengan tipe Number dari ('str' index ke i append 'str' index ke i+1)
5. Kembalikan nilai numTmp
*/

function evenPairsSum(str) {

    if (str.length % 2 !== 0) {
        str += str[0]
    }
    var numTmp = 0
    for (var i = 0; i < str.length - 1; i = i + 2) {
        if (Number(str[i] + str[i + 1]) % 2 === 0) {
            numTmp += Number(str[i] + str[i + 1])
        }
    }
    return numTmp
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134