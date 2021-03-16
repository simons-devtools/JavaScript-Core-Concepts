// 01.Destructure, 02.Object, 03.array, 04.destructure complex object:
const person ={ name: 'Jackson', age: 18, job: 'facebooker', friends: ['samu', 'manu', 'john'], address: 'rajshahi', phone: 01717221122 };

// Step: 01: es5
// const name = person.name;
// const age = person.age;
// console.log(name, age);

// Step: 02: es6
const { name, age, job, friends, address, phone } = person;
// console.log(name, age, job, friends, phone);

// Step: 03: es6
const complexObject = {
    name: 'samuel',
    info: {
        address: 'tanore',
        post: 'chanduria'
    }
}
const { post } = complexObject.info;
console.log(post);
