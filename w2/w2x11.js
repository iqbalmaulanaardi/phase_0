function balikKata(kalimat) {
    var tmp = kalimat.length;
    var tmp_kalimat = "";
    while (tmp >= 0) {
        tmp_kalimat += kalimat.charAt(tmp - 1);
        tmp--;
    }
    return tmp_kalimat;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS