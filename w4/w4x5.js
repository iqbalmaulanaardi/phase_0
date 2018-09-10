function ubahHuruf(kata) {
    //cara 1
    //buat string a sampe z
    var alfabet = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';
    for (var index = 0; index < kata.length; index++) {
        output += alfabet[alfabet.indexOf(kata[index]) + 1]
    }
    return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu