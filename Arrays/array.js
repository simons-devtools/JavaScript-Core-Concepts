//-------------------

// 01. Passed the array in parameter:
// function addNumber(numbers) {
//     let sum = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum = sum + ' ' + element;
//     }
//     return sum;
// }
// const result = addNumber([10, 50, 20, 60, 30, 70, 40]);
// console.log(result);



// 02. Get the array in parameter:
// const numbers = [10, 50, 20, 60, 30, 70, 40];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log("Total of the numbers: ", sum);



// For function:
function getArraySum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

// Step: 01:
const num = [10, 50, 20, 60, 30, 70, 40];
const result = getArraySum(num); // Passed the ==>>  function(variableArray = parameter){};

// Step: 01:
const total = getArraySum([10, 20, 20, 30]); // Passed the ==>>  function(array = parameter){};

console.log(result, total);

