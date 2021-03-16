// Mapping in the array: 
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// (Array map 01):
// function square (element){
//     return element * element;
// }
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);


// (Array map 02):
// const square = element => element * element; // Arrow func
// const square = x => x * x; // Arrow func
// console.log(square);


// (Array map 03):
const result = numbers.map(x => x * x);
console.log(result);