// JavaScript program to illustrate forEach loop 
const numbers1 = [2, 6, 10];
const numbers2 = [];

// Step: 01
numbers1.forEach(function (num) {
    numbers2.push(num + num);
});
console.log('Output: ', numbers2);
