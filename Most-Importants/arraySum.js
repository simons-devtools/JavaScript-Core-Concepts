// Sum of the array numbers:

/* For Loop:
var numbers = [10, 50, 20, 60, 30, 70, 40];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers: ", sum);
*/

// For function:
function getArraySum (numbers){
    var sum = 0;

    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [10, 50, 20, 60, 30, 70, 40];
var result = getArraySum(numbers); // Step: 01

var total = getArraySum([10, 20, 20, 30]); // Step: 02

console.log(result, total);

