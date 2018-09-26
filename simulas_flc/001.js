/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!

*/
/* Algoritma
1. Buat variabel 'biasa' untuk menampung huruf biasa dan buat variabel 'bi' untuk menampung huruf H8BI. Buat variabel 'output' untuk menampung tipe data string untuk output fungsi
2. Lakukan step 2a mulai dari i=0 sebanyak panjang 'input',
    2a. Buat variabel indexTmp untuk menampung index dari input pada variabel 'biasa'
    2b. Jika input index i sama dengan ' ' (spasi) maka append variabel 'output' dengan ' ' (spasi), jika tidak maka lakukan step 3a
    3a. buat variabel statusSimbol (boolean) untuk menyatakan bahwa input index ke i ada di variabel 'biasa'. 
    3b.Lakukan step 4a mulai dari j=0 sebanyak panjang 'biasa',
      4a. jika input index i sama dengan biasa index j atau index i sama dengan bi index maka lakukan step 5a.
        5a. append 'indexTmp' dengan j dan append statusSimbol dengan true
      4b. Jika statusSimbol sama dengan false maka append output dengan input index ke i, jika tidak lakukan 4c
      4c. append output dengan bi index ke indexTmp
6. Kembalikan nilai 'output'      
*/
function encrypt(input) {
    // your code here
    var biasa = 'abcdefghijklmnopqrstuvwxyz'
    var bi = '!@#$%^&*()-+1234567890[]{}'
    var output = ''
    for (var i = 0; i < input.length; i++) {
        //cari indexOf
        var indexTmp = 0;
        if (input[i] === ' ') {
            output += ' '
        } else {
            var statusSimbol = false
            for (var j = 0; j < biasa.length; j++) {
                if (input[i] === biasa[j] || input[i] === bi[j]) {
                    indexTmp = j;
                    statusSimbol = true
                }
            }
            if (statusSimbol === false) {
                output += input[i]
            } else {
                output += bi[indexTmp]
            }
        }
    }
    return output;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2