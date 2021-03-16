/* 
#Different kind of Arrow function:
---------------------------------------
01. forEach func:
02.Arrow Single-line Default Parameter,
03.Arrow Single-line One Parameter,
04.Arrow Single-line Two Parameter,
05.Arrow Two-Parameter func body
*/

// forEach func: 01
// const numbers = [10,20,30,40,50,60,70,80,90,100];
// numbers.forEach(num => {
//     console.log(num);
// });



// Step: 02
// const myNullPerameter = () => 5; // For empty perameter

// Function result
// const output = myNullPerameter();
// console.log('Output: ', output);
// console.log('Default Parameter: ', myNullPerameter());



// Step: 03
// const myOnePerameter = perameter => perameter * 2; // For one perameter

// Function result
// const output = myOnePerameter(10);
// console.log('One Parameter: ', output);



// Step: 04
// const myTwoPerameter = (x, y) => x + y; // For two perameter

// Function result
// const output = myTwoPerameter(2, 6);
// console.log('Two Parameter: ', output);



// Step: 05
// Same to the step:04 BUT statement in {} breaket
const myMultipleFunc = (x, y) => {
    const sum = x + y;
    const diff = y - x;
    const result = sum * diff;
    return result;
}

// Function result
const output = myMultipleFunc(3, 6);
console.log('Output: ', output);
