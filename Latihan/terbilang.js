function terbilang(num) {
    var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    if (num < 10) {
        return satuan[num];
    } else if (num == 10) {
        return 'sepuluh'
    } else if (num == 11) {
        return 'sebelas'
    } else if (num < 20) {
        return satuan[Number(num.toString()[1])] + ' belas'
    } else if (num < 100) {
        var tmp1 = satuan[Number(num.toString()[0])]
        var tmp2 = satuan[Number(num.toString()[1])]
        return tmp1 + ' puluh ' + tmp2
    } else if (num < 199) {
        var tmp1 = num.toString();
        var tmp2 = Number(tmp1.slice(1));
        return 'seratus ' + terbilang(tmp2)
    } else if (num < 1000) {
        var tmp1 = num.toString();
        var tmp2 = Number(tmp1.slice(1));
        return terbilang(Number(tmp1[0])) + ' ratus ' + terbilang(tmp2)
    } else if (num === 1000) {
        return 'seribu'
    } else if (num < 1000000) {
        var tmp = ''
        if (num < 2000) {
            tmp = 'seribu  ' + terbilang(Number(num.toString().slice(1)))
        } else {
            // return (num - (num % 1000)) / 1000;
            tmp = terbilang((num - (num % 1000)) / 1000) + ' ribu ' + terbilang(num % 1000)
        }
        return tmp
    } else if (num < 1000000000) {
        // return (num - (num % 1000000)) / 1000000;
        return terbilang((num - (num % 1000000)) / 1000000) + ' juta ' + terbilang((num % 1000000));
    } else if (num < 1000000000000) {
        return terbilang((num - (num % 1000000000)) / 1000000000) + ' milyar ' + terbilang((num % 1000000000));
    } else if (num < 1000000000000000) {
        return terbilang((num - (num % 1000000000000)) / 1000000000000) + ' triliun ' + terbilang((num % 1000000000000));
    }
    // else if (num < 1000000000000000000) {
    //     return terbilang((num - (num % 1000000000000000)) / 1000000000000000) + ' kuadriliun ' + terbilang((num % 1000000000000000));
    // } else if (num < 1000000000000000000000) {
    //     return terbilang((num - (num % 1000000000000000000)) / 1000000000000000000) + ' kuantiliun ' + terbilang((num % 1000000000000000000));
    // } else if (num < 1000000000000000000000000) {
    //     return terbilang((num - (num % 1000000000000000000000)) / 1000000000000000000000) + ' sekstiliun ' + terbilang((num % 1000000000000000000000));
    // } else if (num < 1000000000000000000000000000) {
    //     return terbilang((num - (num % 1000000000000000000000000)) / 1000000000000000000000000) + ' oktiliun ' + terbilang((num % 1000000000000000000000000));
    // }
}
console.log(terbilang(576987112123123435));