console.log('-------------NOMOR 1------------------');
// cara 1
// var row1 = 10; //input disini
// for (row1; row1 >= 1; row1--) {
//     console.log('*');
// }
// end cara 1
// cara 2
var row1 = 5; //input disini
while (row1 >= 1) {
    console.log('*')
    row1--;
}
// end cara 2
console.log('-------------NOMOR 2------------------');
// cara 1
// var star = '*';
// var rows2 = 2;
// var tmp = rows2;
// for (rows2; rows2 >= 1; rows2--) {
//     for (var rows1 = tmp; rows1 > 1; rows1--) {
//         star += '*';
//     }
//     console.log(star);
//     star = '*';
// }
// end cara 1
// cara 2
var star = '*'
var rows2 = 5; //input disini
var i = rows2;
var cols2 = 1;
while (rows2 >= 1) {
    while (cols2 < i) {
        star += '*';
        cols2++;
    }
    console.log(star);
    star = '*';
    cols2 = 1;
    rows2--;
}
// end cara 2
console.log('-------------NOMOR 3------------------');
// cara 1
// var star3 = "*"
// var index = 0;
// var rows3 = 6; //input disini
// for (rows3; rows3 >= 1; rows3--) {
//     for (var cols3 = 0; cols3 < index; cols3++) {
//         star3 += '*';
//     }
//     index++;
//     console.log(star3);
//     star3 = '*';
// }
// end cara 1
// cara 2
var star3 = "*";
var rows3 = 5; //input disini
var cols3 = 1;
var index = 1;
while (index <= rows3) {
    while (cols3 < index) {
        star3 += '*';
        cols3++;
    }
    console.log(star3);
    index++;
    star3 = '*';
    cols3 = 1;
}
// end cara 2