// Pushing in the Array: (+ last)
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// Step: 01 (for loop)
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
