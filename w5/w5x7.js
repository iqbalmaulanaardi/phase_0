function hapusSimbol(str) {
    // you can only write your code here!
    if (str) {
        var output = str.match(/([a-z]|[0-9])/gi, '')
        return output.toString().replace(/,/gi, '')
    } else {
        return 'No Input'
    }

}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('')); // 1352100