// Task 1: Obtaining String Length
let message = "Hello, World!";
// Use the length property to obtain the length of the string
let messageLength = message.length;
console.log(messageLength); // 13

// Task 2: Converting Cases
let text = "Hello, World!";
// Convert the string to uppercase
let upperText = text.toUpperCase();
console.log(upperText); // "HELLO, WORLD!"
// Convert the string to lowercase
let lowerText = text.toLowerCase();
console.log(lowerText); // "hello, world!"

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
// Use the substring method to extract a substring
let substring = sentence.substring(4, 9);
console.log(substring); // "quick"

// Task 4: Splitting Strings
let words = "The quick brown fox";
// Use the split method to split the string into an array of words
let wordsArray = words.split(' ');
console.log(wordsArray); // ["The", "quick", "brown", "fox"]
