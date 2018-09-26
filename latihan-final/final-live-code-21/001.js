/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.
Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan
Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/* 
Algoritma //bikin code
1.Buat variabel nyawa yang diisi dengan nilai 3.
2.Buat variabel villain yang diisi dengan nilai 0.
3.lakukan step 4a sebanyak karakter input(input.length-1) kali mulai dari i=0 dengan incremen i = i+1
    4a. jika input index ke i sama dengan '@' maka nyawa dikurang 1, jika tidak lakukan step 4b
    4b. jika input index ke i sama dengan 'Villain' maka villain ditambah 1, jika tidak lakukan step 4c
    4c. jika nyawa sama dengan 0 maka stop proses dan kembalikan nilai 'Ooops, you die. You got' di append dengan nilai villain lalu append kembali dengan ' villains'
5.kembalikan nilai 'Nice work, detective! You got all villains:' di append dengan nilai villain.
*/