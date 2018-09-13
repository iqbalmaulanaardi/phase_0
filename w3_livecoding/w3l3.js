// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var max = 10; // isi dengan nilai max!
// buat variable penampung untuk bilangan ganjil
var tmp = "";
//perulangan dari max hingga ke 0
for (var index = max; index >= 0; index--) {
    //pengecekan bilangan ganjil
    if (index % 2 == 1) {
        tmp += index.toString()
    }
}
for (var i = 0; i < max; i++) {
    console.log(tmp)
}
//coba rubah