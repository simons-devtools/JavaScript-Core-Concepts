// JavaScript program to illustrate for loop 
function lick_proved(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        total = total + num;
    }
    return total;
}

const element = [10,20,30];
const totalNum = lick_proved(element);

console.log('My Numbers: ', totalNum);