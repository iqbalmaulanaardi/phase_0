function sorting(arrNumber) {
    // code di sini
    // arrNumber.sort(function(value1, value2) {
    //     return value1 > value2

    // })
    var tmp = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        //ascending
        for (var j = arrNumber.length - 1; j >= 0; j--) {
            if (arrNumber[j] < arrNumber[j - 1]) {
                tmp = arrNumber[j]
                arrNumber[j] = arrNumber[j - 1]
                arrNumber[j - 1] = tmp
            }
        }
        // descending
        // for (var j = 0; j < arrNumber.length; j++) {
        //     if (arrNumber[j] < arrNumber[j + 1]) {
        //         tmp = arrNumber[j]
        //         arrNumber[j] = arrNumber[j + 1]
        //         arrNumber[j + 1] = tmp
        //     }
        // }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini

    //menghitung berapa kali muncul tiap angka
    var total = []
    for (var i = 0; i < arrNumber.length; i++) {
        total[i] = 0;
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[i] == arrNumber[j]) {
                total[i]++;
            }
        }
    }
    //menentukan nilai yang paling sering muncul
    var k = 1
    for (var i = 0; i < total.length; i++) {
        if (total[i] > k) {
            k = total[i]
        }
    }
    console.log(total)
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return listSort;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''