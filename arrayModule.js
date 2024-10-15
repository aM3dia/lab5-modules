export function findMax(arr) {
    let maxValue = arr[0]; //assume the first element is the max initially
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

export function reverseArray(arr) {
    return arr.slice().reverse();
}

//final challenge
import { maxNumber } from './mathModule.js';
export const result = maxNumber * 5;