// 01.Class, 02.constructor, 03.create object from class:

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Dr. abu bakker high school";
    }
}
const student1 = new Student(10, "Samu");
const student2 = new Student(20, "Manu");
const student3 = new Student(30, "john");

console.log(student3);
