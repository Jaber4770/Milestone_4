// Problem-1:

function celciousToFahrenheit(celcious) {
    let getFahrenheit = celcious * 9 / 5 + 32;
    return getFahrenheit;
}

let celcious = 50;
const getFahrenheitResult = celciousToFahrenheit(celcious);
console.log(getFahrenheitResult);



// Problem-2:

function countNumber(arry, find) {
    let count = 0;
    for (let arr of arry) {
        if (arr === find) {
            count++;
        }
    }
    return count;

}

let numbers = [5, 4, 11, 12, 98, 5];
let find = 50;
const getResultCount = countNumber(numbers, find);
console.log(getResultCount);




// ### Task-3: 


function vowelCounting(string) {
    let vowel = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    for (let i = 0; i < string.length; i++) {
        for (let v = 0; v < vowel.length; v++) {
            if (string[i] === vowel[v]) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}

let string = "The quick brown fox jumps over the lazy dog.";
console.log(vowelCounting(string));




// ### Task-4: 


function wordChecker(longSentense) {
    let longWord = "";
    let words = longSentense.split(' ');
    let longWordIs = words[0];
    for (word of words) {
        if(longWordIs.length < word.length){
            longWordIs = word;
        }
    }
    longWord = longWordIs;
    return longWord;

}

let longSentense = 'I am learning Programming to become a programmer';
console.log(wordChecker(longSentense));



/* ### Task-5: 
Generate a random number between 10 to 20. */


function randonNumber(){
    let integar = Math.ceil(Math.random() * 10) + 10;
    return integar;
}

console.log(randonNumber());

























