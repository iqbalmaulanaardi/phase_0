function targetTerdekat(arr) {
    var counter_spasi = 0
    var status_x = false;
    //cek ada 'x' atau tidak
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] === 'x') {
            status_x = true
            break
        }
    }
    if (status_x == true) {
        for (var index = 0; index < arr.length; index++) {
            if (arr[index] === 'o') {
                var j = index
                while (arr[j] !== 'x' && typeof arr[j + 1] !== 'undefined') {
                    if (arr[j] === ' ' || arr[j] === 'x') {
                        counter_spasi += 1;
                    }
                    j++;
                }
                counter_spasi += 1;
            }
        }
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