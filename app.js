//import from mathModule.js
import multiply, { add, subtract } from './mathModule.js';

//import from stringModule.js
import { toUpperCase, toLowerCase } from './stringModule.js';

//import from arrayModule.js
import { findMax, reverseArray } from './arrayModule.js';

//call and log results from mathModule.js
console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(22, 5));
console.log('Multiply: ', multiply(4, 5));

//call and log results from stringModule.js
console.log('Uppercase: ', toUpperCase('hello!'));
console.log('Lowercase: ', toLowerCase('WELCOME!'));

//call and log results form arrayModule.js
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3,]));

//adds two numbers, convert to uppercase and log from mathModule.js
import { addAndLogUpper } from './mathModule.js';
addAndLogUpper(10, 20);  // Test the new function

//final challenge
import { result } from './arrayModule.js';
console.log(result.toString().toUpperCase());