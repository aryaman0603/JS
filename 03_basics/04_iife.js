// Immediately Invoked Function Expressions (IIFE)

// IIFE is an expression which is used to immediately invoke a function. 
// For example, we have made an application and in that we want, as we open the application the DB should be connected, for this purpose IIFE is used.
// Sometimes there is some pollution from the global scope and its variables, to bypass that interference IIFE is used.


(function chai() {
    console.log(`DB Connected`);   // This is named IIFE
})();

( (name) => {
    console.log(`DB Connected ${name}`)
})("Aryaman")
