const user = {
    username: "Aryaman Sharma",
    price: 999,

    welcomeMessage:  function() {
        console.log(`${this.username}, welcome to the website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Arav Sharma"
// user.welcomeMessage()

// console.log(this)

// function three() {
//     const username = "aryan"
//     console.log(this.username)         // Output: undefined, 'this' keyword cannot be used inside functions, they are only used in referring objects.
// }
// three()

// const three = function() {
//     let username = "Aryaman"
//     console.log(this.username)
// }

// const three = () => {
//     let username = "Aryaman"
//     console.log(this.username)   // Output: undefined.
// }

// three()

// const addTwo = (num1, num2) => {
//     return num1 + num2                 // example of Arrow Function
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2                 // example of Arrow Function. This is explicit function. In explicit function 'return' keyword is used.
// }

// const addTwo = (num1, num2) => num1 + num2    
                                                     // These are examples of implicit function. In implicit function 'return' keyword is not used.
// const addTwo = (num1, num2) => (num1+num2)

// const addTwo = () => ({username: "Aryaman"})    // Taking an object in an arrow function.

// console.log(addTwo())




