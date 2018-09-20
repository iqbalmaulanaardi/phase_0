// function stars(num) {
//     var i = num;
//     var star = '*';
//     if (num === 0) {
//         return '';
//     } else {
//         for (var j = i; j > 1; j--) {
//             star += '*';
//         }
//         if (i === 1) {
//             return star + stars(i - 1)
//         } else {
//             return star + '\n' + stars(i - 1)
//         }
//     }
// }
function stars(num, i) {
    var star = '*';
    if (i === num) {
        return '';
    } else {
        for (var j = 0; j < i; j++) {
            star += '*';
        }
        if (i === (num - 1)) {
            return star + stars(num, i + 1)
        } else {
            return star + '\n' + stars(num, i + 1)
        }

    }
}

console.log(stars(5, 0));
/* 
 *
 **
 ***
 ****
 *****
 */