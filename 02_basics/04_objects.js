// const tinderUser = new Object();  // This is a singleton object. 

const tinderUser = {};  // This is not a singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "aryaman07@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Aryaman",
            secondName: "Sharma"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)  

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2);  // Object.assign method is used to merge target objects with source objects. In simpler words, its used to merge two objects.
const obj3 = {...obj1, ...obj2}  // Using spread operator to merge two objects. 

// console.log(obj3)

const users = [
    {
        name: "Aryaman"
    },
    {
        name: "Arav"
    },
    {
        name: "Ashman"
    }
]

// console.log(users[2].name)  // Ashman

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))  // This method turns every key value into an array. 

// console.log(tinderUser.hasOwnProperty('name'));  // This method checks whether an object has a specific property/key. 

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course  // This is called object de-structuring. Changing the name of key in an object. 
// console.log(instructor)