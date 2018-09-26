/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga) {

    var ketersediaanUang = [
        { nominal: 100000, jumlah: 5 },
        { nominal: 50000, jumlah: 5 },
        { nominal: 20000, jumlah: 5 },
        { nominal: 10000, jumlah: 5 },
        { nominal: 5000, jumlah: 5 }
    ];

    //Your code here
    var output = {}
    var kembalian = bayar - harga //245000
        // return kembalian
    if (kembalian < 0) {
        return ' Uang tidak cukup';
    } else {
        if (kembalian >= 100000) {
            var unit = (kembalian - (kembalian % 100000)) / 100000
            if (unit <= ketersediaanUang[0].jumlah) {
                output['100000'] = unit
                kembalian = kembalian - (100000 * unit)
                ketersediaanUang[0].jumlah = ketersediaanUang[0].jumlah - unit
            } else {
                unit = ketersediaanUang[0].jumlah
                output['100000'] = unit
                kembalian = kembalian - (100000 * unit)
                ketersediaanUang[0].jumlah = ketersediaanUang[0].jumlah - unit
            }
        }
        if (kembalian >= 50000) {
            var unit = (kembalian - (kembalian % 50000)) / 50000
            if (unit <= ketersediaanUang[1].jumlah) {
                output['50000'] = unit
                kembalian = kembalian - (50000 * unit)
                ketersediaanUang[1].jumlah = ketersediaanUang[1].jumlah - unit
            } else {
                unit = ketersediaanUang[1].jumlah
                output['50000'] = unit
                kembalian = kembalian - (50000 * unit)
                ketersediaanUang[1].jumlah = ketersediaanUang[1].jumlah - unit
            }
        }
        // return kembalian
        if (kembalian >= 20000) {
            var unit = (kembalian - (kembalian % 20000)) / 20000
            if (unit <= ketersediaanUang[2].jumlah) {
                output['20000'] = unit
                kembalian = kembalian - (20000 * unit)
                ketersediaanUang[2].jumlah = ketersediaanUang[2].jumlah - unit
            } else {
                unit = ketersediaanUang[2].jumlah
                output['20000'] = unit
                kembalian = kembalian - (20000 * unit)
                ketersediaanUang[2].jumlah = ketersediaanUang[2].jumlah - unit
            }
        }
        if (kembalian >= 10000) {
            var unit = (kembalian - (kembalian % 10000)) / 10000
            if (unit <= ketersediaanUang[3].jumlah) {
                output['10000'] = unit
                kembalian = kembalian - (10000 * unit)
                ketersediaanUang[3].jumlah = ketersediaanUang[3].jumlah - unit
            } else {
                unit = ketersediaanUang[3].jumlah
                output['10000'] = unit
                kembalian = kembalian - (10000 * unit)
                ketersediaanUang[3].jumlah = ketersediaanUang[3].jumlah - unit
            }
        }
        if (kembalian >= 5000) {
            var unit = (kembalian - (kembalian % 5000)) / 5000
            if (unit <= ketersediaanUang[4].jumlah) {
                output['5000'] = unit
                kembalian = kembalian - (5000 * unit)
                ketersediaanUang[4].jumlah = ketersediaanUang[4].jumlah - unit
            } else {
                unit = ketersediaanUang[4].jumlah
                output['5000'] = unit
                kembalian = kembalian - (5000 * unit)
                ketersediaanUang[4].jumlah = ketersediaanUang[4].jumlah - unit
            }
        }
        return output
    }
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000, 50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000, 500000)); // Uang tidak cukup