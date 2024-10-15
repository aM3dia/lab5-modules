//two math functions
export function add (a, b) {
    return a + b;
}

export function subtract (a, b) {
    return a - b;
}

export default function multiply (a, b) {
    return a * b;
}

//add two numbers, convert to uppercase, and log it
import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

//final challenge
export const numbers = [20, 4, 100, 5000];
export function findMax(arr) {
    let maxNumber = arr[0]; //assume the first element is the max initially
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
export const maxNumber = findMax(numbers);