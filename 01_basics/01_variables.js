const accountID = 1234242;
let accountEmail = "aryaman@gmail.com";
var accountPassword = "abcd1234";
accountCity = "Delhi"
let accountState;

accountEmail = "sharma@gmail.com";
accountPassword = "efgh";
accountCity = "Ghaziabad";

// accountID = 43434;     * Value of a constant variable cannot be changed *

// Avoid using var because it has issues regarding block scope and functional scope. 

console.log(accountEmail);

console.table([accountEmail, accountPassword, accountCity, accountID, accountState]);