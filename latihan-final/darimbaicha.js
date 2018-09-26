/**
  **************
  FAKTOR PRIMA
  **************

  Diberikan sebuah function faktorPrima dimana menerima sebuah parameter berupa number.
  Output dari function ini adalah faktor prima dari inputan angka parameter.

  Faktor Prima adalah angka yang habis dibagi oleh angka-angka dasar bilangan prima yaitu
  2, 3, 5 dan 7 (OIYA DAN TENTU SAJA DIRINYA SENDIRI!!)

  contoh 1:
  -----------
  input: 90
  output: [2, 3, 3, 5]
  penjelasan:
    90
    /\
  2   45
      /\
    3   15
        /\
      3   5


  contoh 2:
  ----------
  input: 168
  output: [2, 2, 2, 3, 7]
  penjelasan:
    168
    /\
  2  84
     /\
    2  42
       /\
      2  21
         /\
        3  7

  contoh 3:
  ----------
  input: 44
  output: [ 2, 2, 11 ]
  penjelasan:
     44
     /\
    2  22
       /\
      2  11


**/

function faktorPrima(num) {
    // your code here
    // var tmp = 0
    // var arrOutput = []
    // var status = true
    // while (status === true) {
    //     //cek udah prima atau belum
    //     var angka = num
    //     var faktor = 0;
    //     var statusPrima = false
    //     if (angka > 1) {
    //         for (var index = 1; index <= angka; index++) {
    //             if (angka % index === 0) {
    //                 faktor += 1
    //             }
    //         }
    //         if (faktor <= 2) {
    //             statusPrima = true
    //         } else {
    //             statusPrima = false
    //         }
    //     } else {
    //         statusPrima = false
    //     }
    //     //cek prima end
    //     var habisBagi = false
    //     var i = 1;
    //     // return statusPrima
    //     if (statusPrima === false) {
    //         while (habisBagi === false) {
    //             i++
    //             if (num % i === 0) {
    //                 habisBagi = true
    //             }
    //         }
    //     }

    //     // return i 5
    //     tmp = num / i;

    //     arrOutput.push(i);
    //     num = tmp;
    //     // i = 2, num = 45

    //     if (statusPrima === true) {
    //         arrOutput.push(tmp);
    //         status = false;
    //     }
    // }
    // return arrOutput

    // cara faishal
    // var angkaBiaasa = []
    // var prima = []
    // var output = []
    // var tampung = []

    // for (var i = 2; i <= num; i++) {
    //     if (num % i == 0) {
    //         tampung.push(i)
    //     }
    // }
    // // return tampung
    // while (num !== 1) {
    //     for (var i = 0; i < tampung.length; i++) {
    //         if (num % tampung[i] === 0) {
    //             num = num / tampung[i] //45 15 5 1
    //             output.push(tampung[i]) //2 3 3 5
    //             break;
    //         }
    //     }
    //     // 1
    // }
    // return output
    var result = []
    for (var i = 2; i <= num; i++) {
        // 2, 2, 3, 3, 3, 4, 5
        //kondisi pengecekan bilangan prima
        if (num % i === 0) {
            result.push(i) // 2, 3, 3, 5
            num = num / i // 45, 15, 5
                // i-- // 1, 2, 2
        }

    }
    return result
}

console.log(faktorPrima(90)); // [ 2, 3, 3, 5 ]
console.log(faktorPrima(168)); // [ 2, 2, 2, 3, 7 ]
console.log(faktorPrima(44)); // [ 2, 2, 11 ]
console.log(faktorPrima(55)); // [ 5, 11 ]
console.log(faktorPrima(26)); // [ 2, 13 ]