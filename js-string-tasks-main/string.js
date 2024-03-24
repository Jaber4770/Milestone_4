//  Task-1:
let text = "i have to count how many time a string has the letter a";
let count = 0;
for(let i = 0; i <= text.length; i++){
    if (text[i] === "a") {
        count += 1;
    }
}
console.log(count);



//  Task-2:
let capitalAna= "here is A and a, and many more A A A A";
let AcountStart = 0;
let aCountStart = 0;
for(let i = 0; i<=capitalAna.length; i++){
    if(capitalAna[i] === "A"){
        AcountStart += 1;
    }
    else if( capitalAna[i] === "a"){
        aCountStart += 1;
    }
}

console.log("A is", AcountStart, "times", "And small a", aCountStart, "times");