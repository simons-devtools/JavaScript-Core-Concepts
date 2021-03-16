// All perameters pass this arguments; 
function getFullName(){
    let fulllName = '';
    // console.log(arguments);
    // const result = [...arguments].join(' '); //For ES6 OR arguments
    for(let i = 0; i < arguments.length; i++){
        fulllName = fulllName + ' ' + arguments[i];
    }
    return fulllName;
}
let name = getFullName('sp', 'simon', 'hembrom', 'pappy');
console.log(name);
