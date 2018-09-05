function urutkanAbjad(str) {
    var arrStr = []
    for (var i = 0; i < str.length; i++) {
        arrStr.push(str[i])
    }
    arrStr.sort()
        // console.log(arrStr)
    return arrStr.toString().replace(/,/g, "")
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'