function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(input)

    //format tanggal dd-mm-YYYY
    switch (input[3].split("/")[1]) {
        case '01':
            console.log('Januari')
            break;
        case '02':
            console.log('Februari')
            break;
        case '03':
            console.log('Maret')
            break;
        case '04':
            console.log('April')
            break;
        case '05':
            console.log('Mei')
            break;
        case '06':
            console.log('Juni')
            break;
        case '07':
            console.log('Juli')
            break;
        case '08':
            console.log('Agustus')
            break;
        case '09':
            console.log('September')
            break;
        case '10':
            console.log('Oktober')
            break;
        case '11':
            console.log('Nopember')
            break;
        case '12':
            console.log('Desember')
            break;
        default:
            break;
    }
    //sorting descending
    var arrHasilSplit = input[3].split("/");
    //konversi array of string ke array of integer
    for (var index = 0; index < arrHasilSplit.length; index++) {
        arrHasilSplit[index] = parseInt(arrHasilSplit[index])
    }
    arrHasilSplit.sort(function(value1, value2) {
        return value1 < value2
    });
    //balikan ke number lagi
    for (var index = 0; index < arrHasilSplit.length; index++) {
        if (arrHasilSplit[index] <= 9) {
            arrHasilSplit[index] = "0" + String(arrHasilSplit[index])
        } else {
            arrHasilSplit[index] = String(arrHasilSplit[index])
        }
    }
    console.log(arrHasilSplit)

    //untuk join
    var arrHasilSplit2 = input[3].split("/");
    console.log(arrHasilSplit2.join('-'))

    //untuk slice
    var arrSlice = input[1]
    console.log(arrSlice.slice(0, 14))
}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);