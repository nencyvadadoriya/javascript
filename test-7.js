//ans-1)
class School {
    student(name, email, contact) {
        console.log(`Student Details:\n Name: ${name}\n Email: ${email}\n Contact: ${contact}`);
    }

    faculty(name, email, contact) {
        console.log(`Faculty Details:\n Name: ${name}\n Email: ${email}\n Contact: ${contact}`);
    }
}
var school = new School();
school.student("nency", "nency@example.com", "1234567890");
school.faculty("girishsir", "girishsir@example.com", "0987654321");

//ans-2)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(`Person Details:\n Name: ${this.name}\n Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

var employee = new Employee("nency", 18);
employee.details();

//ans-3)
class Employe{
    constructor() {
        console.log("Welcome to the Employee Class....");
    }
}
var employe = new Employe();

//ans-4)
class Shape {
    circle(radius) {
        return 3.14 * radius * radius;
    }

    rectangle(width, height) {
        return width * height;
    }
}
var shape = new Shape();
console.log(`Circle Area: ${shape.circle(7)}`);
console.log(`Rectangle Area: ${shape.rectangle(20,14)}`);