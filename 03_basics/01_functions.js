// function addTwoNumbers(num1, num2){    // when function is defined then parameters are passed.
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){    // when function is defined then parameters are passed.
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumbers(3, 8);    // when function is called then arguments are passed.
// console.log("Result", result)


function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return ` ${username} just logged in`
    
}

// console.log(loginUserMessage("Aryaman"));
// console.log(loginUserMessage(" "));

function calculatecartPrice (val1, val2, ...num1){    // Rest/Spread operator is used to wrap multiple items into an array. 
    return num1
}

// console.log(calculatecartPrice(20,300,60000,62))

const user = {
    username: "Aryaman",
    price: 199
}

function handleObject(anyobject) {
    return `Username is ${anyobject.username} and price is ${anyobject.price}`
}

// console.log(handleObject(user))

// console.log(handleObject({
//     username: "Arya",
//     price: 299
// }))

const myArr = [200, 400, 600]

function returnSecondValue(anyarray) {
    return `Second Value is ${anyarray[2]}`
}

console.log(returnSecondValue(myArr));

console.log(returnSecondValue([1000,400,70]));