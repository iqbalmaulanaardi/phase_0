function graduates(students) {

    var obj = {}
    var obj2 = {}
    var objTmp = {}
    obj[students[0].class] = []
    for (var i = 0; i < students.length; i++) {
        // return objTmp['name']
        if (students[i].class === 'foxes') {
            if (students[i].score > 75) {
                objTmp['name'] = students[i].name;
                objTmp['score'] = students[i].score;
            }
            //objTmp = dimitri
            obj[students[i].class].push(objTmp);
            objTmp = {}
                // objTmp['name'] = 'Sergei';
                // objTmp['score'] = 79;
                // obj[students[i].class].push(objTmp);
                // return obj
        }
        // 
    }
    return obj;
    //isi objTmp
    //pake if ketika studentkei.score > 75 maka objTmp name,score
    // for( var i=0; i<students.length; i++){
    //   if(students[i].score>75){
    //     obj[students[i].class]=students[i].name
    //     obj[students[i].class].score=students[i].score
    //   }
    // }
    return obj

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
        score: 79,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]))