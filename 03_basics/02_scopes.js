var c = 300;
let a = 1000
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a )
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Aryaman"

    function two() {
        const website = "youtube.com"
        // console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true) {
    const username = "Aryaman"
    if(username === "Aryaman") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username);

// ************************ Interesting ************************* //

// console.log(addOne(5))
function addOne(num) {
    return num+1                   // Output: 6
}

// console.log(addTwo(10))
const addTwo = function(num) {     // Output: Error (Cannot access 'addTwo' before initialization).
    return num+2                  
                                   // This is an example of hoisting. Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
}                                         
