/*
DOMINO CARD

Buatlah sebuah function bernama domino yang menerima satu parameter berupa number. function domino akan membuat sebuah kotak dengan simbol # dengan panjang dan tinggi sesuai number parameter. Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol # sepanjang sizenya dan setelah kotak terbagi dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.

NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)

Contoh untuk input 9:

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
Contoh untuk input 10:

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    2   #
#        #
##########
*/
function domino(size) {
    // your code here
    var h = ''
    if (size % 2 === 0) {
        var tengah = Math.round(size / 2)
        var tengah1 = Math.round(tengah / 2) - 1
        var tengah2 = tengah1 + (size / 2)
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (i === 0 || i === Math.round(size / 2) - 1 || i === size - 1 || i === tengah) {
                    h += '#'
                } else {
                    if (j === 0 || j === size - 1) {
                        h += '#'
                    } else {
                        if ((i === tengah1 && j === tengah) || (i === tengah2 && j === tengah)) {
                            h += String(Math.floor(Math.random() * 6) + 1);
                        } else {
                            h += ' '
                        }
                    }
                }
            }
            h += '\n'
        }
        console.log(h)
    } else {
        var tengah = Math.round(size / 2) - 1
        var tengah1 = tengah / 2
        var tengah2 = size - tengah1 - 1
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (i === 0 || i === Math.round(size / 2) - 1 || i === size - 1) {
                    h += '#'
                } else {
                    if (j === 0 || j === size - 1) {
                        h += '#'
                    } else {
                        if ((i === tengah1 && j === tengah) || (i === tengah2 && j === tengah)) {
                            h += String(Math.floor(Math.random() * 6) + 1);
                        } else {
                            h += ' '
                        }
                    }
                }
            }
            h += '\n'
        }
        console.log(h)
    }

}

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda
#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda
############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############
*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda
##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########
*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
*/