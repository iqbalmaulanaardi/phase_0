function checkAB(num) {
    var output = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a' || num[i] === 'b') {
            if (num[i + 4] === 'a' || num[i + 4] === 'b') {
                output = true
            }
        }
        if (!output) {
            output = false
        }
    }
    return output
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false