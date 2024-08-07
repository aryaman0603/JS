// if 

const isUserloggedIn = true
const temperature = 61

// if(temperature<50) {
//     console.log("executed");
// } else {
//     console.log("Temperature is greater than 50")
// }

// <, >, <=, >=, ==, !=, ===


// const score = 200

// if(score>100) {
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");  // not a good way of writing code

// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard ) {
    console.log("Allow to buy courses");
}

if(LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("User logged in");
}
