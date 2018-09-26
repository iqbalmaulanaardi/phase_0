/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN

**/
/* Algoritma
1. buat variabel strOutput yang diisi string kosong untuk menampung output
2. lakukan step 3a sebanyak panjang str(str.length) mulai dari i=0 dengan incremen i = i+1
  3a. jika tipe number dari str index ke i (Number(str[i])) ganjil(modulus 2 sisa 1) maka lakukan step 4a.
    4a. append strOutput dengan str[i] (strOutput += str[i])
    4b. jika tipe number dari str index ke i+1 tidak sama dengan undefined dan tipe number dari str index ke i+1 (Number(str[i+1])) ganjil(modulus 2 sisa 1) maka lakukan step 5a.
      5a. append strOutput dengan string '-'
  3b. jika tidak maka append strOutput dengan str index ke i    
5. Keluar fungsi lalu kembalikan nilai strOutput  
*/
function tambahDash(str) {
    //your code here
    var strOutput = ''
    for (var i = 0; i < str.length; i++) {
        if (Number(str[i]) % 2 === 1) {
            strOutput += str[i]
            if (Number(str[i + 1]) !== undefined && Number(str[i + 1]) % 2 === 1) {
                strOutput += '-'
            }
        } else {
            strOutput += str[i]
        }
    }
    return strOutput
}

console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'