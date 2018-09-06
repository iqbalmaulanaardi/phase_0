/*
12345
2345
345
45
5
num :5
*/
var num = 5;
for (var i = 1; i <= num; i++) {
    var str = ""
    for (var j = i; j <= num; j++) {
        str += j
    }
    console.log(str)
}
// /* 
// 54321
// 5432
// 543
// 54
// 5
// */
// var masukan = 5;

// for (var index = masukan; index > 0; index--) {
//     var tmp = '';
//     for (var j = masukan; j > (masukan - index); j--) {
//         tmp += j
//     }
//     console.log(tmp)
// }

// function kalkulasi(statement) {
//     var angka1 = ''
//     var angka2 = ''
//     var tmp = ''
//     var result = 0;
//     for (var index = 0; index < statement.length; index++) {
//         if (statement[index] === '+' || statement[index] === '*' || statement[index] === '-' || statement[index] === '/') {
//             tmp = statement[index]
//         } else {
//             if (tmp === '') {
//                 angka1 += statement[index]
//             } else if (tmp !== '') {
//                 angka2 += statement[index]
//             }
//         }
//         switch (tmp) {
//             case '+':
//                 result = Number(angka1) + Number(angka2)
//                 break;
//             case '-':
//                 result = Number(angka1) - Number(angka2)
//                 break;
//             case '*':
//                 result = Number(angka1) * Number(angka2)
//                 break;
//             case '/':
//                 result = Number(angka1) / Number(angka2)
//                 break;

//             default:
//                 break;
//         }
//     }
//     return result
// }
// console.log(kalkulasi('1+23'))
// console.log(kalkulasi('2*22'))

/*
rows = 5
*
**
***
****
*****
*/
// var i = 0;
// var rows2 = 5;
// var str = "*"
// var j = 0
// while (i < rows2) {
//     while (j < i) {
//         str = str + "*";
//         j++;
//     }
//     console.log(str)
//     i++;
// }