const name = "Aryaman Sharma"
const repoCount = 30

// console.log(name + repoCount + "value");     // Old Method 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     // New Method (String Interpolation)

const newName = new String ("Aryaman")
console.log(newName)  // [String: 'Aryaman']
const newName2 = new String ("Aryaman-as-AS")

// console.log(newName.length);  // output: 7  (Gives the length of the given string)

// console.log(newName[3]);  // output: a  (Gives the character at given index)

// console.log(newName.charAt(6));  // output: n  (Gives the character at given index)

// console.log(newName.substring(0, 4));  // output: Arya  (Gives the part of string between given indexes)

// console.log(newName.slice(-6, 3));  // output: r  (Gives the part of string between given indexes. But this method also includes negative values.)

// console.log(newName2.split('-'))  // output: [ 'Aryaman', 'as', 'AS' ]  (Splits the string into an array on the basis of (seperator, limit).)

// console.log(newName.toUpperCase());  // output: ARYAMAN  (Returns the string in uppercase)

// console.log(newName.indexOf('A'))  // output: 1  (Gives the index of given character)

const newString = newName.substring(0, 4);
// console.log(newString);  // output: Arya  (Gives the part of string between given indexes)

const anotherString = "   aryaman   "
// console.log(anotherString.trim())  // output: aryaman  (Gives the string removing the whitespaces from both sides of the string)

// console.log(anotherString.trimStart())  // output: "aryaman   "  (Gives the string removing whitespaces from start)

// console.log(anotherString.trimEnd())  // output: "   aryaman"  (Gives the string removing whitespaces from end)

const url = "https://aryaman.com/aryaman%20sharma"

const newUrl = url.replace('%20', '-')  // output: https://aryaman.com/aryaman-sharma  (Gives the string after replacing the characters)
// console.log(newUrl);

// console.log(url.includes('aryaman'))  // output: true  (Checks whether a string contains a value or not)
// console.log(url.includes('football')) // output: false


