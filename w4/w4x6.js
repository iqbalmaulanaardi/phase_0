//ini belum
function hitungHuruf(kata) {
    //ubah dulu kata ke array, split manual live coding kata mba icha
    var arr = []
    var kataTmp = ""
    var counter = 1 //variabel untuk menghitung kata yang sama dalam 1 kalimat
    var tes = []
    var output = []
    var strTmp = ""
    for (var x = 0; x < kata.length; x++) {

        if (kata[x] !== " ") {
            kataTmp += kata[x]
        } else {
            arr.push(kataTmp)
            kataTmp = ""
        }
    }
    arr.push(kataTmp)
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        tes = new Array
        var arrTmp = [] //array untuk menampung huruf yang sudah diproses
            //bandingkan huruf satu sama lain
        for (var j = 0; j < arr[i].length; j++) {
            counter = 1
            arrTmp.push(arr[i][j])
            console.log(arrTmp)

            //cari kata dengan perulangan
            for (var k = 0; k < arr[i].length; k++) {
                if (j !== k) {
                    if (arr[i][j] === arr[i][k]) {
                        counter += 1
                    }
                }
            }
            tes.push(counter)
        }
        // tes.push(counter)
        //pisah dulu
        output.push(tes)
    }
    return output
}

// TEST CASES
// console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('adalah')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau