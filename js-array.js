// Task-1
let names = ['jack', 'mac', 'joe', 'sargey'];
console.log(names[3]);
names[1] = 'jambura';
console.log(names);

// Task-2
let placees = ['sajek', 'coxs bazar', 'bandarban', 'ranga mati', 'sondarban'];
placees.push('kuakata');
console.log(placees);
placees.unshift('jaflong', 'tea garden');
console.log(placees);
placees.pop();
console.log(placees);

// Task-3
let books = ['javascript', 'english', 'bangla', 'math', 'physics', 'biology', 'chemistry'];
let available = books.includes('javascript');
console.log(available);

// Task-4
let is_array = 50;
let checkArray = [3, 4, 5, 6];
console.log("Is array: ", Array.isArray(is_array));
console.log("Is array: ", Array.isArray(checkArray));

// Task-5
let array1 = [34,45,56,56,56,6,5,3,43,423];
let array2 = ['abc', 'def', 'ghi', 'jkh'];
let concating = array1.concat(array2);
console.log(concating);