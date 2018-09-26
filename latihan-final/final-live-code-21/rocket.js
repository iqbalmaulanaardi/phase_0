/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.
RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/

function fastestClimber(string) {
    // your code here
    var strTmp = ''
    var hasilSplit = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ',') {
            hasilSplit.push(strTmp)
            strTmp = ''
        } else if (i === string.length - 1) {
            strTmp += string[i]
            hasilSplit.push(strTmp)
        } else {
            strTmp += string[i]
        }
    }
    var tmp = ''
    var hasil = []
    for (var j = 0; j < hasilSplit.length; j++) {
        var arrTmp = []
        for (var k = 0; k < hasilSplit[j].length; k++) {
            if (hasilSplit[j][k] === ' ') {
                arrTmp.push(tmp);
                tmp = ''
            } else if (k === hasilSplit[j].length - 1) {
                tmp += hasilSplit[j][k]
                arrTmp.push(tmp);
                tmp = ''
            } else {
                tmp += hasilSplit[j][k]
            }
        }
        hasil.push(arrTmp)
    }
    var arrTime = []
    for (var x = 0; x < hasil.length; x++) {
        var jam = hasil[x][1];
        for (var y = 0; y < jam.length; y++) {
            if (jam[y] === 'j') {
                jam = jam.substr(0, y)
                break
            }
        }
        hasil[x][1] = Number(jam) * 60
        var menit = hasil[x][2]
        for (var y = 0; y < menit.length; y++) {
            if (menit[y] === 'm') {
                menit = menit.substr(0, y)
                break
            }
        }
        hasil[x][2] = Number(menit)
    }
    var tercepat = hasil[0][1] + hasil[0][2]
    var indexOutput = 0
    for (var index = 1; index < hasil.length; index++) {
        if ((hasil[index][1] + hasil[index][2]) < tercepat) {
            indexOutput = index;
            tercepat = (hasil[index][1] + hasil[index][2])
        }
    }
    return hasil[indexOutput][0].substr(0, (hasil[indexOutput][0]).length - 1)
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian