function tes(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var faktor = 0;
            if (arr[i][j] > 1) {
                for (var index = 1; index <= arr[i][j]; index++) {
                    if (arr[i][j] % index === 0) {
                        faktor += 1
                    }
                }
                if (faktor <= 2) {
                    arr[i][j] = '*';
                }
            } else {
                arr[i][j] = '*';
            }
        }
    }
    return arr;
}
console.log(tes([
    [1, 2, 3],
    [5, 4, 7],
    [2, 3, 6]
]));
//bintangi bil prima