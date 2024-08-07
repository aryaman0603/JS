const userEmail = []

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy Values - The values which are assumed to be false are called falsy values. Example - 

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values - The values which are assumed to be true are called truthy values. Example - 

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");   // Checking an empty array
// }

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");   // Checking an empty object
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20

console.log(val1)


// Ternary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")