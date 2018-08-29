var input = 'Hello world!';
var output = '';
for (var index = input.length; index >= 1; index--) {
    output += input[index - 1]
}
console.log(output)