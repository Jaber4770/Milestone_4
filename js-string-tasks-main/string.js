//  Task-1:
let text = "i have to count how many time a string has the letter a";
let count = 0;
for (let i = 0; i <= text.length; i++) {
    if (text[i] === "a") {
        count += 1;
    }
}
console.log(count);



//  Task-2:
let capitalAna = "here is A and a, and many more A A A A";
let AcountStart = 0;
let aCountStart = 0;
for (let i = 0; i <= capitalAna.length; i++) {
    if (capitalAna[i] === "A") {
        AcountStart += 1;
    }
    else if (capitalAna[i] === "a") {
        aCountStart += 1;
    }
}

console.log("A is", AcountStart, "times", "And small a", aCountStart, "times");



// Task-3:

let vowelCheck = "the quick brown fox jumps over the lazy dog.";
let totalVowel = 0;
for (let i = 0; i <= vowelCheck.length; i++) {
    if (vowelCheck[i] === "a" || vowelCheck[i] === "e" || vowelCheck[i] === "i" || vowelCheck[i] === "o" || vowelCheck[i] === "u") {
        totalVowel += 1;
    }
}
console.log("total vowel", totalVowel);



// Task-4:
let givenString = "If a given string has either x, replace x by y. if the given string has X, replace it by Y.";
console.log(givenString);
for (let i = 0; i < givenString.length; i++) {

    if (givenString[i] === "x") {
        givenString = givenString.replace("x", "y");
    }
    else if (givenString[i] === "X") {
        givenString = givenString.replace("X", "Y");
    }
}
console.log(givenString);
