/* Create and Apply Condition:
----------------------------------
01. if condition
02. if, else condition
03. if, else-if, else condition
*/

// 01. (if) condition:
// const hour = 15;
// if (hour < 18) {
//     console.log('Good day');
// }


// 02. if, (else) condition:
// const hour = 20;
// if (hour < 18) {
//     console.log('Good day');
// } else {
//     console.log('Good evening');
// }


// 03. if, (else-if), else condition:
const time = 15;
if (time < 10) {
    console.log('Good morning');
} else if (time < 20) {
    console.log('Good day');
} else {
    console.log('Good evening');
}
