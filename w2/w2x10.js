function bandingkanAngka(num1, num2) {
    if (num1 > num2) {
        return false;
    } else if (num1 < num2) {
        return true;
    } else {
        return -1;
    }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)) //false