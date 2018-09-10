function highestScore(students) {
    var objOutput = {};

    //outputnya, dapatkan kelas
    for (var i = 0; i < students.length; i++) {
        objOutput[students[i].class] = {
            name: '',
            score: 0
        }
    }
    //itung highest tiap kelas
    var nameTmp = ''
    var scoreTmp = 0;
    var classTmp = '';
    var arrTmp = []
    var tampungKelas = Object.keys(objOutput)
    for (var x = 0; x < tampungKelas.length; x++) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].class === tampungKelas[x]) {
                if (students[i].score > scoreTmp) {
                    scoreTmp = students[i].score
                    nameTmp = students[i].name
                }
            }
        }
        arrTmp.push([nameTmp, scoreTmp])
        scoreTmp = 0;
    }
    for (var index = 0; index < arrTmp.length; index++) {
        objOutput[tampungKelas[index]].name = arrTmp[index][0];
        objOutput[tampungKelas[index]].score = arrTmp[index][1];
    }
    return objOutput;
}

console.log(highestScore([{
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
console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
console.log(highestScore([])); //{}