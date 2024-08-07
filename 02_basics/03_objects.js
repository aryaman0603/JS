// singleton
// Object.create  // Constructor method

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aryaman",
    "full name": "Aryaman Sharma",
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "aryaman@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Tuesday", "Sunday"] 
}

// console.log(JsUser.name);  // Accessing objects
// console.log(JsUser["name"]);  // Sometimes its mandatory to access objects using [] brackets only. 
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aryaman06@gmail.com"  // Reassigning Values

// Object.freeze(JsUser);  // This method is used to freeze the object so that one cannot make any changes in values. 

JsUser.email = "aryaman05@gmail.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
