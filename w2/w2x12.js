function konversiMenit(angka) {
    var jam, menit, nol;
    nol = "0";
    jam = 0;
    menit = angka % 60;

    while (angka >= 60) {
        jam++;
        angka -= 60;
    }
    if (menit < 10) {
        menit = nol.concat(String(menit));
    }
    return jam + ":" + menit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00