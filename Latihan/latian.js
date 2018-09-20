function tes(str) {
    var objTmp = {}
    for (var index = 0; index < str.length; index++) {
        objTmp[str[index]] = ''
    }
    return Object.keys(objTmp);
}

console.log(tes('dimitri')); //[d,i,m,t,r]