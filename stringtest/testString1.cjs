// Importing modules.
const string1 = require('../string1.cjs');
// Given money string list.
let strList = ["$100.45", "$1,002.22", "-$123"];
// Converting string to equivalent numeric value.
const moneyList = string1(strList);
// Printing the numeric values list.
console.log(moneyList); 

