console.log('<-- Let\'s Form a Sentence Start -->');
var first = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(first + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh)

// Let's Form a Sentence End

console.log('<-- Index Accessing - 1 by 1 -->');
var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// Index Accessing - 1 by 1 End

console.log('<-- Breaking Sentence (Again) using Substring -->');
var firstword = word.substr(0, 3)
var secondword = word.substr(4, 10)
var thirdword = word.substr(15, 2)
var fourthword = word.substr(18, 2)
var fifthword = word.substr(21, 4)

console.log('First Word: ' + firstword)
console.log('Second Word: ' + secondword)
console.log('Third Word: ' + thirdword)
console.log('Fourth Word: ' + fourthword)
console.log('Fifth Word: ' + fifthword)

// Breaking Sentence(Again) using Substring End

console.log('<-- Breaking Sentence (yet Again) and Count Each Length -->')
var firstWordLength = firstword.length;
var secondWordLength = secondword.length;
var thirdWordLength = thirdword.length;
var fourthWordLength = fourthword.length;
var fifthWordLength = fifthword.length;

console.log('First Word: ' + firstword + ', with length: ' + firstWordLength)
console.log('Second Word: ' + secondword + ', with length: ' + secondWordLength)
console.log('Third Word: ' + thirdword + ', with length: ' + thirdWordLength)
console.log('Fourth Word: ' + fourthword + ', with length: ' + fourthWordLength)
console.log('Fifth Word: ' + fifthword + ', with length: ' + fifthWordLength)
    // Breaking Sentence (yet Again) and Count Each Length End