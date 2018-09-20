/**
  [
    { 
        match: 'indonesia vs philipin',
        area: {
          'tribun barat': 'Alfa | Enigma |',
          'tribun timur': 'Delta |'
        }
    },
    { 
        match: 'indonesia vs malaysia',
        area: {
          'tribun barat': 'Beta |',
          'tribun timur': 'Charlie |'
        }
    }
  ]
 */
var input = [{
        nama: 'Alfa',
        match: 'indonesia vs philipin',
        area: 'tribun barat'
    },
    {
        nama: 'Beta',
        match: 'indonesia vs malaysia',
        area: 'tribun barat'
    },
    {
        nama: 'Charlie',
        match: 'indonesia vs malaysia',
        area: 'tribun timur'
    },
    {
        nama: 'Delta',
        match: 'indonesia vs philipin',
        area: 'tribun timur'
    },
    {
        nama: 'Enigma',
        match: 'indonesia vs philipin',
        area: 'tribun barat'
    },
]

function pertandingan(array) {
    var arrOutput = []
    var obj = {}
    var objTmp = { match: '', area: '' }
    for (var i = 0; i < array.length; i++) {
        if (obj[array[i].match] === undefined) {
            obj[array[i].match] = {
                match: array[i].match,
                area: {}
            }
        }
        if (obj[array[i].match].area[array[i].area] === undefined) {
            obj[array[i].match].area[array[i].area] = ''
        }
        if (i === (array.length - 1)) {
            obj[array[i].match].area[array[i].area] += array[i].nama

        } else {
            obj[array[i].match].area[array[i].area] += array[i].nama + ' | '
        }
    }
    return Object.values(obj)
}

console.log(pertandingan(input));