const score = 400
// console.log(score);

const balance = new Number(100)               //returns a dic type
// console.log(balance);

// console.log(balance.toString().length);    //returns length
// console.log(balance.toFixed(1));           //returns decimals as 0 by the number provided in the bracket

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));   //returns approx 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    //returns commas as in indian style

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //to get numbers between 2 values