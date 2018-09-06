function countProfit(shoppers) {
    var listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    //yang tidak akan diubah, untuk mengambil total barang
    var listBarangTmp = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    var arrOutput = [];
    //jika tidak ada pembeli
    if (shoppers.length === 0) {
        return []
    } else {
        for (var i = 0; i < listBarang.length; i++) {
            arrOutput.push({
                product: listBarang[i][0],
                shoppers: [],
                leftOver: 0,
                totalProfit: 0
            })
        }
        //hitung orang yang beli suatu produk
        for (var j = 0; j < shoppers.length; j++) {
            //harus ngecek jika stok > amount
            switch (shoppers[j].product) {
                case 'Sepatu Stacattu':
                    if (shoppers[j].amount <= listBarang[0][2]) {
                        arrOutput[0].shoppers.push(shoppers[j].name)
                        listBarang[0][2] = listBarang[0][2] - shoppers[j].amount
                    }
                    break;
                case 'Baju Zoro':
                    if (shoppers[j].amount <= listBarang[1][2]) {
                        arrOutput[1].shoppers.push(shoppers[j].name)
                        listBarang[1][2] = listBarang[1][2] - shoppers[j].amount
                    }
                    break;
                case 'Sweater Uniklooh':
                    if (shoppers[j].amount <= listBarang[2][2]) {
                        arrOutput[2].shoppers.push(shoppers[j].name)
                        listBarang[2][2] = listBarang[2][2] - shoppers[j].amount
                    }
                    break;
                default:
                    break;
            }

        }
        //isi leftover & total profit
        for (var k = 0; k < listBarang.length; k++) {
            arrOutput[k].leftOver = listBarang[k][2]
            arrOutput[k].totalProfit = (listBarangTmp[k][2] - listBarang[k][2]) * listBarangTmp[k][1]
        }

        return arrOutput
    }
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]