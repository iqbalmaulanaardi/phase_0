function medaliAsianGames(data) {
    var output = []
    var obj = {}
    for (var i = 0; i < data.length; i++) {
        var negara = data[i][0] //idn
        var medali = data[i][1] //emas
            // return medali
            // console.log(obj[negara[i]]) // Undefined
        if (obj[negara] === undefined) {
            obj[negara] = {
                negara: negara,
                emas: 0,
                perak: 0,
                perunggu: 0
            }
        }
        obj[negara][medali] += 1
            // return obj[negara]
            // console.log(obj)
            // return Object.values[obj]
    }
    return obj
}
console.log(medaliAsianGames([
    ['Indonesia', 'emas'],
    ['India', 'perak'],
    ['Korea Selatan', 'emas'],
    ['India', 'perak'],
    ['India', 'emas'],
    ['Indonesia', 'perak'],
    ['Indonesia', 'emas'],
]));