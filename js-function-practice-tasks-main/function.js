// Task-1: 
function multiply(a, b, c) {
    let result = a * b * c;
    return result;
}

let getResult = multiply(2, 3, 4);
console.log(getResult);



// Task-2:
function oddEvenCheker(number) {
    if (number % 2 === 0) {
        return number * 2;
    }
    else {
        return number / 2;
    }
}

let getOddEvenChecker = oddEvenCheker(3);
console.log(getOddEvenChecker);



//  Task-3:
function make_avg(marks) {
    let sum = 0;
    for(mark of marks){
        sum = sum + mark;
    }
    let avg = sum / marks.length;
    return avg;
}

let marks = [20, 30, 40, 50, 60, 70, 80, 12, 30, 40, 435, 45, 56, 67, 767, 87];
let getAvg = make_avg(marks);
console.log(getAvg);


//  Task-4:
function count_zero(binaryString){
    let totalZero = 0;
    for(binary of binaryString){
        if(binary === "0"){
            totalZero = totalZero + 1;
        }
    }
    return totalZero;
}

let binary_string = "110011010101001010101010100000111100001101010111010101";
let getZero = count_zero(binary_string);
console.log(getZero);


//  Task-5:
function odd_even(value){
    if(value % 2 ===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

let oddEvenChekerValue = 6;
let getResultOddEvenChecker = odd_even(oddEvenChekerValue);
console.log(getResultOddEvenChecker);

