/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
    // your code here
    if (num < 3) {
        return 'Minimum parameter is 3'
    }
    //cari bil ganjil
    var arrTmp = [];
    //hitung kemunculan bintang
    var angka = 1;
    for (var i = 0; i < num; i++) {
        arrTmp.push(angka);
        angka += 2;
    }
    var star = ''
    for (var i = num; i > 0; i--) { //baris
        for (var j = num - i - 2; j >= 0; j--) { //ngisi spasi ksamping
            star += ' '
        }
        for (var k = arrTmp[i]; k > 0; k--) {
            star += '#';

        }
        if (i < num) {
            star += '\n'
        }
    }
    var tampung = star

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
            star += '#';

        }
        if (i < num - 1) {
            star += '\n'
        }
    }
    return tampung + star

}

console.log(hourglass(2)); //Minimum parameter is 3
console.log();
console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/
console.log();
console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/