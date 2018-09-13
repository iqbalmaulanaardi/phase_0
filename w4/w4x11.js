function changeMe(arr) {
    var myObj = new Object

    //pengecekan jika array kosong
    if (!arr) {
        console.log("")
    } else {
        for (var i = 0; i < arr.length; i++) {
            myObj.firstName = arr[i][0]
            myObj.lastName = arr[i][1]
            myObj.gender = arr[i][2]
            if (!arr[i][3] || arr[i][3] > 2018) {
                //false,null,undefined,""
                myObj.age = "Invalid Birth Year"
            } else {
                myObj.age = 2018 - arr[i][3]
            }
            console.log((i + 1) + ". " + myObj.firstName + " " + myObj.lastName)
            console.log(myObj)
        }
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""