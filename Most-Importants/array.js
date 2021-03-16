//-------------------
function addNumber(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = addNumber(10, 20);
console.log(result);