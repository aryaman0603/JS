const myNums = [1, 2, 3]

// Reduce Method - This method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each 
// element of the array.  

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`); 
    return acc + currval
}, 0)

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "mobile dev course",
        price: 5999
    },
    {
        course: "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(total)