// Dates 

let myDate = new Date();

// console.log(myDate.toString())  //  Wed Jun 12 2024 16:35:06 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())  //  Wed Jun 12 2024
// console.log(myDate.toLocaleString())  //  12/6/2024, 4:35:06 pm
// console.log(typeof myDate)  //  object

// let createdDate = new Date(2024, 0, 15)
let createdDate = new Date("06-12-2024");
console.log(createdDate.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(createdDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);  //  1 is added bcz months in JS start from 0. 
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}));

