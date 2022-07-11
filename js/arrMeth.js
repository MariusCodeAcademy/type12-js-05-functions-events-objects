'use strict';
// masyvu metodai
const colors = ['green', 'blue', 'red'];
console.log('colors orginalas ===', colors);

// const colorsCopy = colors;
// console.log('colorsCopy ===', colorsCopy);

// array.push() - prideti reiksme i masyvo gala (modifikuojantis orginala)
const pushResult = colors.push('violet');
console.log('pushResult ===', pushResult);
console.log('colors po push ===', colors);

// array.unshift('nauja reiksme') - pridti reiksme i masyvo pradzia (modifikuojantis orginala)
const unshiftResult = colors.unshift('white');
console.log('unshiftResult ===', unshiftResult);
console.log('colors po unshift ===', colors);

// array.shift()
// const shiftResult = colors.shift();
// console.log('shiftResult ===', shiftResult);
// console.log('colors po shift ===', colors);

// array.pop() - nutrinam paskutini elementa

// array.slice(start, finish) - nemodifikuoja orginalo
let sliceResult = colors.slice(2, 5);
sliceResult = colors.slice(2);
sliceResult = colors.slice(-2);
console.log('sliceResult ===', sliceResult);
console.log('colors po slice ===', colors);

console.log('typeof colors ===', typeof colors);
console.log('Ar tai yra masyvas ===', Array.isArray(colors));
