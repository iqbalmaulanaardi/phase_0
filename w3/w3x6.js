function angkaPalindrome(input) {
    var inputStr = input.toString() //117
    var output = '';
    var tmp = '';
    //caripalindrom-selanjutnya
    if (inputStr.length == 1 && input < 9) {
        return input + 1;
    } else {
        while (inputStr !== tmp) {
            input += 1; //118,119,120,121
            inputStr = input.toString(); //118,119,120,121
            //urutan dibalikin
            for (var index = inputStr.length; index >= 1; index--) {
                output += inputStr[index - 1] //811,911,021,121
            }
            tmp = output //ditampung 811,911,021,121
            output = '' //reinisialisasi 
        }
        return input;
    }

}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001