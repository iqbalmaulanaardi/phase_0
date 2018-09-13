function cariModus(arr) {
    //cek apakah seluruh array isinya sama
    var cari = arr[0]
    var cari_sama = 0
    var output = 0
    for (var x = 0; x < arr.length; x++) {
        if (cari === arr[x]) { //7===4
            cari_sama = -1
        } else {
            cari_sama = 0
            break
        }
    }
    //jika isinya tidak sama(cari_sama = 0) lakukan pencarian modus
    if (cari_sama === 0) {
        //variabel untuk hitung banyaknya suatu bilangan pada array
        var counter = 1
        for (var i = 0; i < arr.length; i++) {
            counter = 1
            for (var j = 0; j < arr.length; j++) {
                if (j !== i) {
                    if (arr[i] === arr[j]) {
                        counter += 1;
                        //lakukan pengecekan nilai output yang paling kecil
                        if (output === 0) {
                            output = arr[i]
                        } else {
                            if (arr[i] < output) {
                                output = arr[i]
                            } else if (arr[i] >= output) {
                                output = output
                            }
                        }
                    }
                }

            }
        }
        //pengecekan kalau tiap isi array beda
        if (output === 0) {
            output = -1
        }
    } else { //else untuk cari_sama = -1
        output = -1
    }
    return output
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1