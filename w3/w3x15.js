function groupAnimals(animals) {
    animals.sort()
    var cari = animals[0][0]
    var arrOutput = []
    var arrTmp = [];
    // console.log(animals)
    for (var i = 0; i < animals.length; i++) {
        if (cari === animals[i][0]) {
            arrTmp.push(animals[i])

        } else {
            arrOutput.push(arrTmp)
            arrTmp = new Array
            arrTmp.push(animals[i])
            cari = animals[i][0]
        }
    }
    if (arrTmp.length !== 0) {
        arrOutput.push(arrTmp)
    }
    // console.log(arrOutput)
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var tmp = ''
    for (var i = 0; i < arrOutput.length; i++) {
        arrOutput[i].sort(function(value1, value2) {
            return value1 < value2
        })
    }
    return arrOutput
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]