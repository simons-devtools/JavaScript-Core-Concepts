// For the Includes in the Array: 

// Step: 01
// var obj = { "geeks1": 10, "geeks2": 12 }
// var gfg = ["geeks1", "geeks2", obj];

// var num = gfg.includes(obj, 0);
// console.log('Output: ', num);


// Step: 02
// var arr = ["geeks1", "geeks2", "geeks3",
//     { 1: "geeks4", 2: "geeks5" }];

// var boolVar = arr.some(
//     value => { return typeof value == "object" });

// console.log('Output: ', boolVar);


// Step: 03
// var obj = { "geeks1": 10, "geeks2": 12 }
// var arr = ["geeks1", "geeks2", "geeks3", obj];

// if (arr.filter(value => value == obj).length > 0) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// Step: 04
var arr = ["geeks1", "geeks2", "geeks3",
    { "geeks1": 10, "geeks2": 12 }];

var num = arr.findIndex(
    value => { return typeof value == "object" });

console.log("Object found at postion: " + num);
