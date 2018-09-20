// input = 5(harus ganjil)
// #####
// #   #
// # * #
// #   #
// #####
function kotak(num) {
    var h = ''
    var tengah = Math.round(num / 2) - 1
    if (num % 2 !== 0) {
        for (var i = 0; i < num; i++) {
            for (var j = 0; j < num; j++) {
                if (i === 0 || i === num - 1) {
                    h += '#'
                } else {
                    if (j === 0 || j === num - 1) {
                        h += '#'
                    } else {
                        if (i === tengah && j === tengah) {
                            h += '*'
                        } else {
                            h += ' '
                        }
                    }
                }
            }
            h += '\n'
        }
        return h
    } else {
        return "Num harus ganjil"
    }
}
console.log(kotak(9));