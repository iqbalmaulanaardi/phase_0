function ubahHuruf(kata) {
    //ubah dulu kata ke array
    var arr = []
    for (var x = 0; x < kata.length; x++) {
        arr.push(kata[x])
    }
    //pop index 0 lalu push
    for (var y = 0; y < arr.length; y++) {
        //ganti ke alfabet selanjutnya a->b,c->d, z->a dst
        switch (arr[y]) {
            case 'a':
                arr[y] = 'b'
                break;
            case 'b':
                arr[y] = 'c'
                break;
            case 'c':
                arr[y] = 'd'
                break;
            case 'd':
                arr[y] = 'e'
                break;
            case 'e':
                arr[y] = 'f'
                break;
            case 'f':
                arr[y] = 'g'
                break;
            case 'g':
                arr[y] = 'h'
                break;
            case 'h':
                arr[y] = 'i'
                break;
            case 'i':
                arr[y] = 'j'
                break;
            case 'j':
                arr[y] = 'k'
                break;
            case 'k':
                arr[y] = 'l'
                break;
            case 'l':
                arr[y] = 'm'
                break;
            case 'm':
                arr[y] = 'n'
                break;
            case 'n':
                arr[y] = 'o'
                break;
            case 'o':
                arr[y] = 'p'
                break;
            case 'p':
                arr[y] = 'q'
                break;
            case 'q':
                arr[y] = 'r'
                break;
            case 'r':
                arr[y] = 's'
                break;
            case 's':
                arr[y] = 't'
                break;
            case 't':
                arr[y] = 'u'
                break;
            case 'u':
                arr[y] = 'v'
                break;
            case 'v':
                arr[y] = 'w'
                break;
            case 'w':
                arr[y] = 'x'
                break;
            case 'x':
                arr[y] = 'y'
                break;
            case 'y':
                arr[y] = 'z'
                break;
            case 'z':
                arr[y] = 'a'
                break;
            default:
                break;
        }
    }
    //hilangkan koma
    var str = arr.toString()
    var output = str.replace(/,/g, "") //g artinya global
    return output
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu