// Task-1:

function lowestFinder(numbers) {
    let fakeLowest = numbers[0];
    for (let number of numbers) {
        if (fakeLowest > number) {
            fakeLowest = number;
        }
    }
    return fakeLowest;
}

const numbers = [167, 190, 120, 165, 137];
console.log(lowestFinder(numbers));




// ### Task -2: 

function smallFriendFinder(friends) {
    let smallFriend = friends[0];
    for (let friend of friends) {
        if (smallFriend.length > friend.length) {
            smallFriend = friend;
        }
    }
    return smallFriend
}


const friends = ['rahim', 'bbb', 'robin', 'rafi', 'ron', 'aa', 'rashed'];
console.log(smallFriendFinder(friends));





// ### Task-3:


function calculateElectronicsBudget(quantity) {

    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;

    let laptopQuantity = quantity[0];
    let tabletQuantity = quantity[1];
    let mobileQuantity = quantity[2];

    let laptopPrice = laptop * laptopQuantity;
    let tabletPrice = tablet * tabletQuantity;
    let mobilePrice = mobile * mobileQuantity;

    let totalPrice = laptopPrice + tabletPrice + mobilePrice;
    return totalPrice;

}


let ProductQuantity = [1, 1, 1];
console.log(calculateElectronicsBudget(ProductQuantity));



// ______________________ Dynamic way _______________________


function calculateElectronicsBudget(products) {
    let totalPrice = 0;
    for (const product in products) {
        let productPrice = products[product].price;
        let ProductQuantity = products[product].quantity;

        totalPrice += productPrice * ProductQuantity;

    }
    return totalPrice;

}


let products = {
    laptop: { price: 35000, quantity: 1 },
    tablet: { price: 15000, quantity: 1 },
    mobile: { price: 20000, quantity: 1 }
};
console.log(calculateElectronicsBudget(products));









// ### Task-4: 

function avaragePriceOfPhone(phones) {
    let totalPrice = 0;
    let totalPhoneCount = phones.length;
    for (const priceOfPhone of phones) {
        let price = priceOfPhone.price;
        totalPrice += price;
    }

    let avabragePrice = totalPrice / totalPhoneCount;
    return avabragePrice;

}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log("Avarage price of phones: ", avaragePriceOfPhone(phones));




// ### Task -5: (Hard)


function salaryCalculator(employees){

    let totalStartingSalary = 0;

    for(const employee of employees){

        let salaryStarting = employee.starting;
        let experience = employee.experience;
        let salaryIncrement = employee.increment;

        let currentSalary = salaryStarting + (experience * salaryIncrement);
        totalStartingSalary += currentSalary;

    }
    return totalStartingSalary;


}


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log("Employees total salary will be: ", salaryCalculator(employees));


