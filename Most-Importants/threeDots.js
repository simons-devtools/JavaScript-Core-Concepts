// 01.Spread operator, 02.concatenate multiple arrays, 03.array max:

// XXX step:
const ages = [12, 15, 20, 25, 30];
const ages2 = [22, 25, 30, 35, 40];
const ages3 = [22, 25, 30, 35, 40];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3); // es5: 01
const allAges2 = [...ages3, ...ages2, 5, ...ages3]; // es6: 02
// console.log(allAges2);


// YYY step:
const business = 650;
const minister = 550;
const sochib = 450;
// const maximum = Math.max(business, minister, sochib); // result es5: 01

const takaPoisa = [650, 550, 450];
const maximum2 = Math.max(...takaPoisa); // result es6: 02

console.log(maximum2);


