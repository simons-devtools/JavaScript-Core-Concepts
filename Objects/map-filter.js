// map, filter, find, foreach, smart way to run for loop:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// Step: 01 (for loop)
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// Step: 02 (array map 01)
// function square (element){
//     return element * element;
// }
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);


// Step: 03 (array map 02)
// const square = element => element * element; // Arrow func
// const square = x => x * x; // Arrow func
// console.log(square);


// Step: 04 (array map 03)
// const result = numbers.map(x => x * x);
// console.log(result);


// Step: 05 (array map-filter)
// const bigger = numbers.filter(x => x > 5); // bigger of 5
// console.log(bigger);


// Step: 06 (array map-find)
const isThere = numbers.find(x => x > 5); // Only numbers 5 < [0] index displays
console.log(isThere);
