const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); 

/*
length → Returns the length of the string

toUpperCase() → Converts string to uppercase

toLowerCase() → Converts string to lowercase

trim() → Removes whitespace from both ends

slice(start, end) → Extracts a portion of the string

substring(start, end) → Extracts characters between two indices

replace(old, new) → Replaces the first matching substring

replaceAll(old, new) → Replaces all matching substrings

includes(text) → Checks if the string contains a substring

startsWith(text) → Checks if the string starts with a substring

endsWith(text) → Checks if the string ends with a substring

indexOf(text) → Returns the first occurrence index

lastIndexOf(text) → Returns the last occurrence index

split(separator) → Splits the string into an array

concat() → Joins two or more strings

charAt(index) → Returns the character at a specified index

at(index) → Returns the character at the specified index (supports negative indices)

repeat(count) → Repeats the string multiple times
*/