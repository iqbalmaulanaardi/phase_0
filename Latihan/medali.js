function medali(arr) {
    var arrOutput = [];
    var objTmp = {}
    for (var index = 0; index < arr.length; index++) {
        objTmp[arr[index][0]] = {}
    }
    for (var i = 0; i < arr.length; i++) {
        var obj = {}
        var emas = 0;
        var perak = 0;
        var perunggu = 0;
        obj['negara'] = arr[i][0];
        for (var j = 0; j < arr.length; j++) {
            if (arr[j][0] === arr[i][0] && arr[j][1] === 'emas') {
                emas += 1;
            } else if (arr[j][0] === arr[i][0] && arr[j][1] === 'perak') {
                perak += 1;
            } else if (arr[j][0] === arr[i][0] && arr[j][1] === 'perunggu') {
                perunggu += 1;
            }
        }
        obj['emas'] = emas;
        obj['perak'] = perak;
        obj['perunggu'] = perunggu;
        objTmp[arr[i][0]] = obj
    }
    return Object.values(objTmp);
}
console.log(medali([
    ['Indonesia', 'emas'],
    ['India', 'perak'],
    ['Korea Selatan', 'emas'],
    ['India', 'perak'],
    ['India', 'emas'],
    ['Indonesia', 'perak'],
    ['Indonesia', 'emas']
]));

/**
 [
     {negara: indonesia},
     {negara: india},
     {negara: korea selatan}
 ]
 */