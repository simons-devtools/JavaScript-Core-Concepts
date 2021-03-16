// Backup my all code;
function add(num1, num2){ // OR, num2 = 0;
    if(num2 == undefined){ // OR, num2 = null || 0;
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15); // if you are mistake added the scond value;
console.log(total);
