// Importing Modules.
let string4 = require ('../string4.cjs');
// Given data.
let nameObj = {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"};
// get name with applied title case.
let name = string4(nameObj);
// Printing name.
console.log(name);