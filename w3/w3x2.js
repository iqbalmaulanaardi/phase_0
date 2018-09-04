function balikString(input) {
    var output = '';
    for (var index = input.length; index >= 1; index--) {
        output += input[index - 1]
    }
    return output
}

console.log(balikString('Hello world!'))