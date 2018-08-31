function kalkulasi(statement) {
    var angka1 = ''
    var angka2 = ''
    var tmp = ''
    var result = 0;
    for (var index = 0; index < statement.length; index++) {
        if (statement[index] === '+' || statement[index] === '*' || statement[index] === '-' || statement[index] === '/') {
            tmp = statement[index]
        } else {
            if (tmp === '') {
                angka1 += statement[index]
            } else if (tmp !== '') {
                angka2 += statement[index]
            }
        }
        switch (tmp) {
            case '+':
                result = Number(angka1) + Number(angka2)
                break;
            case '-':
                result = Number(angka1) - Number(angka2)
                break;
            case '*':
                result = Number(angka1) * Number(angka2)
                break;
            case '/':
                result = Number(angka1) / Number(angka2)
                break;

            default:
                break;
        }
    }
    return result
}
console.log(kalkulasi('1+23'))
console.log(kalkulasi('2*22'))