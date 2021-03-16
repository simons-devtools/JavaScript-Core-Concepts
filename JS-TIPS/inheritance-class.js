// 01.Inheritance, 02.extends class, 03.super, 04.class method:
// Object Oriented Programming Piller:
/*
01. Inheritance,
02. Incapsulation and
03. Polimerfism
*/

// 
class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super(); // For call the upper class
        this.name = name;
    }
    getFullName(){ // For created function (function name in don't provided)
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);
