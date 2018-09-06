function targetTerdekat(arr) {
    var counter_spasi = 0
    var status_x = false
    var index_o = 0
        //cek ada 'x'  atau tidak & cari posisi 'o'    for (var x = 0; x < arr.length; x++) {
    if (arr[x] === 'x') {
        status_x = true
        break
    }
    if (arr[x] === 'o') {
        index_o = x
    }
}
if (status_x == true) {
    var j = index_o
        //perulangan untuk mencari batas x dari 0
    while (arr[j] !== 'x' && typeof arr[j + 1] !== 'undefined') {
        if (arr[j] === ' ' || arr[j] === 'x') {
            counter_spasi += 1;
        }
        j++;
    }
    counter_spasi += 1;
} else {
    return 0;
}
return counter_spasi
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2