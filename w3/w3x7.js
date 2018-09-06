function hitungJumlahKata(kalimat) {
    var counter = 1;
    for (var index = 0; index < kalimat.length; index++) {
        // console.log(kalimat[index])
        if (kalimat[index] === ' ' && kalimat[index + 1] !== ' ') {
            counter += 1;
        }
    }
    return counter
}
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5