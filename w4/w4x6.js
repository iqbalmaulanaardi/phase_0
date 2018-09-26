//ini belum
function hitungHuruf(kata) {
    var arr = []
    var kataTmp = ""

    var strTmp = "";
    //ubah dulu kata ke array, split manual live coding kata mba icha
    for (var x = 0; x < kata.length; x++) {
        if (kata[x] !== " ") {
            kataTmp += kata[x]
        } else {
            arr.push(kataTmp)
            kataTmp = ""
        }
    }
    arr.push(kataTmp);
    // console.log(arr);
    //variabel untuk menghitung karakter dalam 1 kalimat
    var counter = 1;
    //buat variabel  arrTmp array penampung untuk counter, tujuannya agar dipisahkan menjadi satu kata satu array
    var arrTmp = [];
    //buat variabel output untuk keluaran jumlah kemunculan tiap karakter dalam satu kalimat
    var output = [];
    //hitung kemunculan tiap karakter dalam 1 kalimat
    for (var i = 0; i < arr.length; i++) {
        //variabel untuk menampung array isi number(hitung perulangan)
        arrTmp = new Array
        for (var j = 0; j < arr[i].length; j++) {
            counter = 1;
            //cari kata dengan perulangan
            for (var k = 0; k < arr[i].length; k++) {
                if (j !== k) {
                    if (arr[i][j] === arr[i][k]) {
                        counter += 1
                    }
                }
            }
            arrTmp.push(counter)
        }
        output.push(arrTmp)
    }
    // return output;
    // console.log(output);
    //variabel untuk tampung,tujuannya agar dipisahkan menjadi satu kata satu array
    arrTmp = [];
    //variabel keluaran tiap kata, satu kata satu array
    var arrKata = [];
    //menyesuaikan dengan array "output" agar satu kata satu array
    for (var index = 0; index < arr.length; index++) {
        arrTmp.push(arr[index])
        arrKata.push(arrTmp)
        arrTmp = new Array

    }
    // console.log(arrKata);
    // return arrKata
    //bertujuan untuk mengurutkan array output
    for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < output[i].length; j++) {
            output[i].sort(function(value1, value2) {
                return value1 < value2
            })
        }
    }
    // return output
    // console.log(output);
    //buat variabel array untuk menampung angka terbesar dari tiap array di array output
    var counter_output = [];
    for (var j = 0; j < output.length; j++) {
        if (output[j][0] === 1) {
            counter_output[j] = 1
        } else {
            counter_output[j] = output[j][0]
        }

    }
    // return counter_output;
    // console.log(counter_output);
    //buat variabel itung untuk menampung jumlah karakter yang sama pada satu kata
    var itung = 0;
    //buat array smntr untuk menampung variabel itung
    var smntr = [];
    for (var i = 0; i < counter_output.length; i++) {
        itung = 0;
        if (counter_output[i] !== 1) {
            for (var y = 0; y < output[i].length; y++) {
                if (output[i][y] === counter_output[i]) {
                    itung++
                }
            }
            smntr.push(itung)
        } else {
            smntr.push(1)
        }
    }
    // return smntr;
    // console.log(smntr);
    //cari index angka terbesar dari array smntr dan cocokan dengan arr
    var index_angka = 0
    var tmp = 0
    for (var index = 0; index < smntr.length; index++) {
        if (smntr[index] > index_angka) {
            index_angka = smntr[index]
            tmp = index
        }
    }
    // return index_angka
    // console.log(index_angka)
    return arr[tmp]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate deveeeeeeeloper')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau