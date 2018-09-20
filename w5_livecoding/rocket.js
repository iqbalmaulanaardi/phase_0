/*
------------------------
Count Letter Recursively
------------------------
PROBLEM
========
Tersedia 2 input: suatu kata dan suatu huruf
Carilah berapa kali huruf muncul di dalam kata.
Gunakan rekursif untuk menyelesaikan soal ini.
Contoh
1) sentence = 'the quick brown fox', letter = 'o'    -->     2
RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function countLetterRecursive
- Dilarang menggunakan looping (while, for, do-while, dan lain-lain)
*/

function countLetterRecursive(sentence, letter) {
    // hanya code disini!
    if (sentence.length <= 1) {
        if (sentence === letter) {
            return 1
        } else {
            return 0
        }
    } else {
        if (sentence[0] === letter) {
            var baru = sentence.slice(1)
            return 1 + countLetterRecursive(baru, letter)
        } else {
            var baru = sentence.slice(1)
            return 0 + countLetterRecursive(baru, letter)
        }
    }
    // var counter = 0;
    // for (var i = 0; i < sentence.length; i++) {
    //     if (sentence[i] === letter) {
    //         counter++;
    //     }
    // }
    // return counter;
}

console.log(countLetterRecursive('12104123', '1')); // 3
console.log(countLetterRecursive('the quick brown fox', 'o')); // 2
console.log(countLetterRecursive('lorem ipsum', 'a')); // 0
console.log(countLetterRecursive('hahaha', 'h')); // 3
console.log(countLetterRecursive('', 'x')); // 0