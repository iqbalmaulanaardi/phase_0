function changeVocals(str) {
    //code di sini
    var vokal = 'aiueoAIUEO'
    var lanjut = 'bjvfpBJVFP'
    var output = '';
    var status = false
    var index_status = 0;
    for (var index = 0; index < str.length; index++) {
        var i = 0
        while (i < vokal.length) {
            if (str[index] === vokal[i]) {
                status = true
                index_status = i
            }
            i++;
        }
        if (status === true) {
            output += lanjut[index_status]
            status = false
        } else {
            output += str[index]
        }
    }
    return output
}

function reverseWord(str) {
    //code di sini
    var output = ''
    for (var index = str.length - 1; index >= 0; index--) {
        output += str[index]
    }
    return output
}

function setLowerUpperCase(str) {
    //code di sini
    var output = ''
    for (var index = 0; index < str.length; index++) {
        if (str[index] === str[index].toUpperCase()) {
            output += str[index].toLowerCase()
        } else {
            output += str[index].toUpperCase()
        }
    }
    return output
}

function removeSpaces(str) {
    //code di sini
    var output = ''
    for (var index = 0; index < str.length; index++) {
        if (str[index] !== ' ') {
            output += str[index]
        }
    }
    return output
}

function passwordGenerator(name) {
    //code di sini
    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        var changeVocal = changeVocals(name);
        var reverse = reverseWord(changeVocal);
        var setLUC = setLowerUpperCase(reverse);
        var output = removeSpaces(setLUC);
        return output
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex'));