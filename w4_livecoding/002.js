/*
==================================
Array Mastery: Largest Number
==================================

[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999,
dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 5

[RULE]
- Wajib menuliskan algoritma. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built-in function .MAX dan .apply
*/

/* algoritma
1. buat variabel 'tmp' untuk menampung sebuah angka dari array 'numbers'
2. buat variabel 'i' diisi dengan 0
3. buat variabel 'j' diisi dengan 0
4. lakukan step 4a selama 'i' kurang dari panjang array 'numbers'
  4a. lakukan step 5a selama 'j' kurang dari panjan array 'numbers'
    5a. jika 'numbers' index ke 'j' kurang dari 'numbers' index ke 'i' maka lakukan 6a
      6a. isi 'tmp' dengan nilai array 'numbers' index ke 'j', lalu lakukan step 6b
      6b. isi 'numbers' index ke 'j' dengan nilai array 'numbers' index ke 'i', lalu lakukan step 6c
      6c. isi 'numbers' index ke 'i' dengan nilai 'tmp'
    5b. tambahkan nilai 'j' dengan 1, lalu kembali ke step 4a
  4b. tambahkan nilai 'i' dengan 1, lalu kembali ke step 4  
5. keluarkan nilai array 'numbers' index ke 0  

*/

function largestNumber(numbers) {
    // Code here
    var tmp = 0
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] < numbers[i]) {
                tmp = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = tmp;
            }
        }
    }
    return numbers[0]
}

// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321