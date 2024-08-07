// Array

const myArr = [0,1,2,3,4,5]  // Arrays are objects that are used to store a collection of multiple items under single variable.
const names = ["Aryaman", "Arav", "Hitansh"]
const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[4]);  // Arrays are resizable in JS and can contain a mix of different datatypes. Array-copy-operations in JS creates shallow copies. Shallow copies are those whose properties share the same references.(Changes occur in the original copy itself.)
// console.log(names[0]);

// Array Methods

// myArr.push(6)
// myArr.push(100)
// myArr.pop()  // Removes the last element of the array.

// myArr.unshift(24)  // Adds new element at start of the array
// myArr.shift()  // Removes element from the start of the array

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(6))

const newArr = myArr.join();  // This methods adds all the elements of an array into a string. 

// console.log(newArr)
// console.log(myArr)


// slice, splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1)  // [1, 2]

// console.log("B", myArr);  // [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)
// console.log(myn2)  // [1, 2, 3] (last index is also included)

// console.log("C", myArr)  // [0, 4, 5]  

// Difference b/w slice() and splice() is that, splice() manipulates the original array but slice() does not.

