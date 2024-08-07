const score = 100;
// console.log(score);

const balance = new Number(400);
// console.log(balance); // output: [Number: 400]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // output: 100.00  (This method returns the number with specified number of decimals.)

const otherNumber = 23.757
console.log(otherNumber.toPrecision(3))  // output: 24  (This method formats a number to a specified length.)

const hundreds = 1000000;
// console.log(hundreds.toLocaleString())  // output: 10,00,000  (This method formats a string of number using local language format. One can also specify the language format.)
// console.log(hundreds.toLocaleString('en-US'))  // output: 1,000,000  


//+++++++++++++++++ MATHS +++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-25))  // output: 25  (Returns '+' value of '-' values)
// console.log(Math.round(5.7))  // output: 6
// console.log(Math.ceil(4.2))  // output: 5
// console.log(Math.floor(6.8))  // output: 6
// console.log(Math.sqrt(64))  // output: 8
// console.log(Math.pow(3, 4))  // output: 81
// console.log(Math.max(3,9,6,2))  // output: 9
// console.log(Math.min(3,2,8,6))  // output: 2

// console.log(Math.random())  // Gives values b/w 0 & 1
// console.log(Math.floor((Math.random() * 10) + 1))  // 1 is added to make the min value 1 not zero, in case 0.1 comes.

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1) )) + min)  // min is added at last to set the min value of range. 