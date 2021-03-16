// For the Reduce in the Array: 

// Step: 01
// var arr = [175, 50, 25];
// function subofArray(total, num) {
//     return total - num;
// }

// const output = arr.reduce(subofArray);
// console.log('Output: ', output);


// Step: 02
// var arr = [10, 20, 30, 40, 50, 60];
// function sumofArray(sum, num) {
//     return sum + num;
// }

// const output = arr.reduce(sumofArray);
// console.log('Output: ', output);


// Step: 03
// var arr = [1.5, 20.3, 11.1, 40.7];

// function sumofArray(sum, num) {
//     return sum + Math.round(num);
// }

// const output = arr.reduce(sumofArray, 0);
// console.log('Output: ', output);


// Step: 04
function product(a, b) {
    return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4); // a= [1*3*5] * b=[2*6*4];

var product_of_arr = arr.reduce(product)
console.log(product_of_arr)
