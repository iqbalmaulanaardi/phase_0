/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */
function addValidationCode(users) {
    // your code here
    var arrOutput = []
    var objTmp = {}
    if (users.length !== 0) {
        for (var i = 0; i < users.length; i++) { //i
            objTmp['name'] = users[i].name;
            var strTmp = '';
            // return users[i].name; Antonio
            for (var j = 0; j < users[i].name.length; j += 2) {
                if (users[i].name[j + 1] !== undefined) {
                    strTmp += users[i].name[j + 1] + users[i].name[j]
                } else {
                    strTmp += users[i].name[j]
                }
            }
            // return strTmp;
            //split '-'
            var arrTmp = users[i]['join date'].split('-')
            objTmp['validationCode'] = strTmp + arrTmp[0] + arrTmp[1] + arrTmp[2];
            arrOutput.push(objTmp);
            objTmp = {}
        }
        return arrOutput
    } else {
        return []
    }
}

//Test case
console.log(addValidationCode([{
        name: 'Antonio',
        'join date': '09-08-2018'
    },
    {
        name: 'Banderaz',
        'join date': '10-08-2018'
    },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
// console.log(addValidationCode([{
//         name: 'Cecile',
//         'join date': '01-02-2018'
//     },
//     {
//         name: 'Dominique',
//         'join date': '10-09-2018'
//     },
// ]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
// console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */