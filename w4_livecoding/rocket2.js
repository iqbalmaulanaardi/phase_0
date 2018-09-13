//  var notUniq = ['Kambing', 'Sapi', 'Kuda', 'Sapi']
//  var obj = {}
//  for (var index = 0; index < notUniq.length; index++) {
//      obj[notUniq[index]] = 1
//  }
//  console.log(Object.keys(obj))
var kata = 'katakan';
var objOutput = {};
for (var index = 0; index < kata.length; index++) {
    if (objOutput[kata[index]] === undefined) {
        objOutput[kata[index]] = 1
    } else {
        objOutput[kata[index]] += 1
    }
    // console.log(objOutput[kata[index]])
}
var keys = Object.keys(objOutput);
var values = Object.values(objOutput);
var tmpAwal = values[0]
var tmpIndex = 0;
for (var i = 1; i < keys.length; i++) {
    if (values[i] > tmpAwal) {
        tmpAwal = values[i];
        tmpIndex = i;
    }
}
console.log(keys[tmpIndex]);