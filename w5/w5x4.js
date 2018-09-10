function graduates(students) {
    var objOutput = {};
    //outputnya, dapatkan kelas
    for (var i = 0; i < students.length; i++) {
        objOutput[students[i].class] = []

    }
    //itung yg lulus tiap kelas
    var arrTmp = []
    var tampungKelas = Object.keys(objOutput)
        // console.log(tampungKelas);
    for (var x = 0; x < tampungKelas.length; x++) {
        arrTmp = []
        for (var i = 0; i < students.length; i++) {
            if (students[i].class === tampungKelas[x]) {
                if (students[i].score > 75) {
                    arrTmp.push({ name: students[i].name, score: students[i].score })
                }
            }
        }
        objOutput[tampungKelas[x]] = arrTmp;
    }
    return objOutput;
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([{
//         name: 'Alexander',
//         score: 100,
//         class: 'foxes'
//     },
//     {
//         name: 'Alisa',
//         score: 76,
//         class: 'wolves'
//     },
//     {
//         name: 'Vladimir',
//         score: 92,
//         class: 'foxes'
//     },
//     {
//         name: 'Albert',
//         score: 71,
//         class: 'wolves'
//     },
//     {
//         name: 'Viktor',
//         score: 80,
//         class: 'tigers'
//     }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}