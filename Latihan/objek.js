function tes(str) {
    var obj = {};
    var max = 0;
    var huruf = ''
    for (var i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
        if (max < obj[str[i]]) {
            max = obj[str[i]]
            huruf = str[i]
        }
    }
    return 'Huruf terbanyak adalah ' + huruf + " sebanyak " + max;
}
console.log(tes('hachactiiv8888888'));