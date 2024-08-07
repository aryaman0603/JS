const marvel_heroes = ["thor", "ironman", "hulk"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)  // [ 'thor', 'ironman', 'hulk', [ 'batman', 'superman', 'flash' ] ]
// console.log(marvel_heroes)

const newArr = marvel_heroes.concat(dc_heroes)  // [ 'thor', 'ironman', 'hulk', 'batman', 'superman', 'flash' ]
// console.log(newArr)

const spread_arr = [...marvel_heroes, ...dc_heroes];
console.log(spread_arr)

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // Depth is passed as a parameter in this method. This method is used to reduces multiple arrays into one.

// console.log(real_another_array);

// console.log(Array.isArray(["Aryaman"]))  // true
// console.log(Array.from("Aryaman"))  // [ 'A', 'r', 'y', 'a', 'm', 'a', 'n']

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));  // This method is used to create an array from a set of elements
