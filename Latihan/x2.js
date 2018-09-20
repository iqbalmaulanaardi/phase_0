/*
==================
PASSWORD GENERATOR
==================

Name :Iqbal

[INSTRUCTIONS]

passGen adalah sebuah function yang menerima tiga parameter berupa firstName, email, dan age.
Function akan mengambil bagian-bagian dari ketiga parameter menjadi satu kesatuan string baru,
dengan ketentuan:

output: [3 huruf pertama dari firstName][Semua huruf sebelum simbol @ di email][age]

Jika firstName dibawah 3 huruf, hentikan function dan kembalikan string berupa 'NAME IS INVALID!'

[CONSTRAINTS]
Dilarang menggunakan sintaks .split(), .slice(), .splice(), .join(), .push(), dan .concat().
Soal ini hanya membutuhkan operasi string (mengakses index dari string tentunya diperbolehkan)!
Dilarang menggunakan segala bentuk regex (match, test, dan lain-lain)


[EXAMPLE]
passGen('john', 'hello@john.com', 25)

proses:

- 3 huruf pertama dari firstName: 'joh'
- semua huruf sebelum simbol @ di email: 'hello'
- age: 25

output: 'johhello25'

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*
Algoritma:
1. Jika firstName.length kurang dari 3 maka lakukan step 1a, jika tidak lakukan step 2
    1a. Tampilkan nilai 'NAME IS INVALID'
2. Lakukan langkah 2a sebanyak 3 kali
    2a. Tambah variabel str dengan firstName ke index
3. Lakukan langkah 3a sebanyak panjang email
    3a. Jika email index ke-index sama dengan @, maka hentikan perulangan, jika tidak lakukan step 3b
    3b. Tambah variabel str dengan email index ke index, lanjutkan dengan step 4
4. Buat variabel ageStr untuk merubah tipe data age yaitu number menjadi tipe data string
5. Tambahkan variabel str dengan ageStr
6. Tampilkan str 

*/

function passGen(firstName, email, age) {
    var str = ''
    if (firstName.length < 3) {
        return 'NAME IS INVALID'
    } else {
        for (var index = 0; index < 3; index++) {
            str += firstName[index]
        }
        for (var index = 0; index < email.length; index++) {
            if (email[index] === '@') {
                break;
            } else {
                str += email[index];
            }
        }
        var ageStr = age.toString()
        str += ageStr
        return str
    }
}

console.log(passGen('john', 'hello@gmail.com', 15)); // 'johhello15' 
console.log(passGen('mickey', 'mike@gmail.com', 1)); // 'micmike1'
console.log(passGen('a', 'hello@gmail.com', 15)); // 'NAME IS INVALID!'
console.log(passGen('rudy', 'rud@rudy.co.id', 22)); // 'rudrud22'
console.log(passGen('bejo', 'zetta@bejo.gov', 50)); // 'bejzetta50'