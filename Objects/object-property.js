// Apply map, filter, find on an array of objects:

// Step: 01 (for loop)-------
// const output = [];
// const students = [
//         {id: 21, name: 'Samu'},
//         {id: 31, name: 'Mamu'},
//         {id: 41, name: 'Jamu'},
//         {id: 51, name: 'kanu'},
//     ];
//     for(let i = 0; i < students.length; i++){
//         const element = students[i];
//         const result = element.name;
//         output.push(result);
//     }
// console.log(output);

// Step: 02 (array map)--------
const students = [
    {id: 21, name: 'Samu'},
    {id: 31, name: 'Mamu'},
    {id: 41, name: 'Jamu'},
    {id: 51, name: 'kanu'},
];
const names = students.map( s => s.name );
const bigger = students.filter( s => s.id > 40 );
const onePerson = students.find( s => s.id < 40 );
console.log(names);
console.log(bigger);
console.log(onePerson);


