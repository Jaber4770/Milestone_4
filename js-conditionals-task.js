// Practice task_______Free Drinks
let burgerBudget = 400;
if (burgerBudget >= 500) {
    console.log("Get e free coke");
}
else {
    console.log("Buy a Coke.");
}



// Practice Task_________BMI Calculator
let weight = 85;
let heightInch = 65;
let heightMeter = 65 * 0.0254;
let calculatedBMI = weight / Math.pow(heightMeter, 2);
let BMI = calculatedBMI.toFixed(2);
if (BMI < 18.5) {
    console.log(BMI, "You are underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(BMI, "You are normal.");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log(BMI, "Your are overweight.");
}
else {
    console.log(BMI, "You are obese.");
}

// Practice Task________Grade Calculator
let marks = 80;
if (marks >= 90 && marks <= 100) {
    console.log("Your grade is A");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Your grade is B");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Your grade is C");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Your grade is D");
}
else if (marks >= 0 && marks <= 59) {
    console.log("Your grade is F");
}

// Practice Task_____________Nested Condition
let myMarks = 90;
let friendsMarks = 79;
if (myMarks > friendsMarks) {
    console.log("go for a lunch");
    if (friendsMarks < 80 && friendsMarks >= 60) {
        console.log("Good Luck next time.");
    }
    else if (friendsMarks < 60 && friendsMarks >= 40) {
        console.log("Keep your friend's message unseen");
    }
    else if (friendsMarks < 40) {
        console.log("Block your friends.");
    }
}
else {
    console.log("Pore kotha hobe.");
}

// Practice Task_________Ternary Oparator
let numb1 = 6;
let numb2 = 5;

if (numb1 > numb2) {
    console.log("Number 1 is greter than number 2", numb1 + numb1);
}
else {
    console.log("Number 2 is greter than number 1", numb1 + numb2);
}

// ternary oparator:
numb1 > numb2 ? console.log(numb1 + numb1) : console.log(numb1 + numb2);








// Practice Task______________Bus Fare Calculator:
let age = 50;
let isStudent = true;

if (age <= 10) {
    console.log("You are free to go.");
}
else if (age >= 60) {
    console.log("You will get 15% discount.");
}
else if(isStudent == true && age >=11){
    console.log("You will get 50% discount.");
}
else {
    console.log("Pay the regular fee, 800tk");
}


