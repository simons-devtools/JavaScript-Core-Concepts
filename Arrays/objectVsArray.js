//
var friendsAge = [12, 15, 18, 20];
var myName = {
    age: 18,
    weight: 50,
    height: 6,
    color: 'navyblue'
}
var lookingFor = 'age'; //Step: 01
var myAge = myName[lookingFor]; //Step: 02(accese value)
myName[lookingFor] = 70; //Step: 03(changed value)
console.log(myName);
