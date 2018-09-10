function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        var tumpangObj = {}
        tumpangObj.penumpang = arrPenumpang[i][0];
        tumpangObj.naikDari = arrPenumpang[i][1];
        tumpangObj.tujuan = arrPenumpang[i][2];
        //cari rute
        var counter_rute = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
        tumpangObj.bayar = counter_rute * 2000;
        arrOutput.push(tumpangObj);
    }
    return arrOutput;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])); //[]