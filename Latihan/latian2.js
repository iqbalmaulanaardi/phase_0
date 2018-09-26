function segitiga(num) {
    var arrTmp = [];
    //hitung kemunculan bintang
    var angka = 1;
    for (var i = 0; i < num; i++) {
        arrTmp.push(angka);
        angka += 2;
    }
    var star = ''
    for (var i = 0; i < num; i++) { //baris
        for (var j = 0; j < num - i - 1; j++) { //ngisi spasi ksamping
            star += ' '
        }
        for (var k = 0; k < arrTmp[i]; k++) {
            //bikin tengah bolong
            // if (i == num - 1) {
            //     star += '*';
            // } else {
            //     if (k == 0 || k == arrTmp[i] - 1) {
            //         star += '*'
            //     } else {
            //         star += ' '
            //     }

            // }
            //end
            //bikin tengah isi
            star += '*';

        }
        if (i < num - 1) {
            star += '\n'
        }
    }
    return star;
}
console.log(segitiga(6));
/*
    *
   ***
  *****
 *******
*********
kalau udah kerjain 
    *
   * *
  *   *
 *     *
*********         
*/