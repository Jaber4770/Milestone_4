//  Task-1 :
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);



//  Task-2:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};


car["passenger capacity"] = 5;
car.color = 'white';
console.log(car);


//    Task-3:

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};


console.log("Physics marks: ", student.physics.marks);


//   Task-4:

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};


console.log(Object.keys(students));
console.log(Object.values(students));
console.log("Number of Property is: ", Object.keys(students).length);
console.log("Number of Value: ", Object.keys(students).length);



//   Task-5:

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for (property in myObject) {
    console.log(property, ":", myObject[property]);
    // console.log(myObject.property)
}




