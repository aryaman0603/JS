// Primitive (Call by Value)

// 7 types: String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100 
const scoreValue = 100.5
const accountName = "Aryaman"
const isLoggedIn = false;
const outsideTemp = null
let accountState;

const id = Symbol('abcd')
const anotherId = Symbol('abcd')

// console.log(id == anotherId);  // false (if two symbols are same, then their values are still not same.)

const bigNumber = 1123124123428971223421321312124213n;


// Non-Primitive (Call by Reference)

// 3 types: Arrays, Objects, Functions

const fruits = ["apple", "orange", "mango"];

let myDetails = {
    name: "Aryaman",
    age: 20
}

// const myFunction =  function() {
//     console.log("Hello World");
// }

// console.log(typeof (bigNumber))


// Stack (Primitive Datatypes) & Heap (Non-Primitive Datatypes)

let name = "Aryaman Sharma";

let anotherName = name;

anotherName = "Arav Sharma"

// console.log(name)
// console.log(anotherName)



let userOne = {
    email: "aryaman06@gmail.com",
    age: 20
}

let userTwo = userOne;

userTwo.email = "aryaman08@hotmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);


