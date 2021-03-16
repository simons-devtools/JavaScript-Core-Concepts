// 01.Arrow function, 02.multiple parameter, 03.function body:

// function myFunction(num){ // Step: 01
//     return null * 2;
// }

// const myFunction = function(num){ // Step: 02
//     return num * 2;
// }

// const myNullPerameter = () => 5; // For empty perameter
// const myNullPerameter = peraMeter => peraMeter * 2; // For one perameter
// const myTwoPerameter = (x, y) => x + y; // For two perameter

const myMultipleFunction4 = (x, y) => {
    const sum = x + y;
    const diff = y - x;
    const result = sum * diff;
    return result;
}

// Function result
const result = myMultipleFunction4(2, 3);
console.log(result);
