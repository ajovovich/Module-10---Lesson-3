// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
// Add a new element to the end of the array
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
// Remove the last element from the array
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange']

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// Task 3: Applying Array Methods
let moreNumbers = [3, 1, 5, 2, 4];
// Use map to double each number in the array
let doubled = moreNumbers.map(num => num * 2);
console.log(doubled); // [6, 2, 10, 4, 8]

// Use filter to filter out even numbers from the array
let evens = moreNumbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Use reduce to calculate the sum of all numbers in the array
let sum = moreNumbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Spread operator to copy an array
let copiedFruits = [...fruits];
console.log(copiedFruits); // ['apple', 'banana', 'orange']

// Rest operator to collect arguments into an array
function sumAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15