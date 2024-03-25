// Arrya looping task

// Task-1:
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverseArray = [];
for (color of colors) {
    reverseArray.unshift(color);
}
console.log(reverseArray);



//  Task-2:
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber = [];
for (number of numbers) {
    if (number % 2 === 0) {
        evenNumber.push(number);
    }
}
console.log(evenNumber);


//  Task-3:
var words = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = " ";
for (word of words) {
    string = string.concat(word);
}

console.log(string);


//  Task-4:
const statement = 'I am a hard working person';
let wordsOfStatement = statement.split(" ");
let reversedLine = [];
for (singleWord of wordsOfStatement) {
    reversedLine.unshift(singleWord);
}
let completeReversedLine = reversedLine.join(' ');
console.log(completeReversedLine);