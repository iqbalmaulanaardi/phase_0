function targetTerdekat(arr) {
    var counter_kiri = 1
    var counter_kanan = 1
    var index_o = 0;
    //cari index 'o' pada array
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] === 'o') {
            index_o = x
        }
    }
    //perulangan ke kiri
    var i = index_o
    while (arr[i] !== 'x' && typeof arr[i - 1] !== 'undefined') {
        if (arr[i] === ' ' || arr[i] === 'x') {
            counter_kiri += 1;
        }
        i--;
    }
    // console.log(counter_kiri);
    //perulangan ke kanan
    var j = index_o
    while (arr[j] !== 'x' && typeof arr[j + 1] !== 'undefined') {
        if (arr[j] === ' ' || arr[j] === 'x') {
            counter_kanan += 1;
        }
        j++;
    }
    // console.log(counter_kanan)
    if (counter_kanan > counter_kiri) {
        return (counter_kanan + " dari kanan")
    } else if (counter_kanan < counter_kiri) {
        return (counter_kiri + " dari kiri")
    } else if (counter_kanan === counter_kiri) {
        return ("Terkepung")
    }
}
console.log(targetTerdekat([" ", " ", "x", " ", "o", "x", "x"]))
console.log(targetTerdekat([" ", " ", "x", "o", " ", "x", " "]))
console.log(targetTerdekat([" ", " ", "x", "o", "x", "x", "x"]))