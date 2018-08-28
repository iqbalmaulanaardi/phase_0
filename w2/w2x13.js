function xo(str) {
    var tmp = str.length;
    var x = 0;
    var o = 0;
    while (tmp > 0) {
        if (str[tmp - 1] === 'x') {
            x++;
        } else if ((str[tmp - 1] === 'o')) {
            o++;
        }
        tmp--;
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true