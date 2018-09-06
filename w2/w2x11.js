function balikKata(kalimat) {
    //cara 1 looping while
    // var tmp = kalimat.length;
    var tmp_kalimat = "";
    // while (tmp > 0) {
    //     tmp_kalimat += kalimat[tmp - 1];
    //     tmp--;
    // }
    //cara 2 looping for
    for (var i = kalimat.length; i > 0; i--) {
        tmp_kalimat += kalimat[i - 1];

    }
    return tmp_kalimat;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS