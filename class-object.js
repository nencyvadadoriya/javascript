//OOps=  Object Oriented Programming
//class-object
//class = blueprint for creating of objects
//object:=An Object is a unique entity that contains properties and methods.

// class Test{
//     sayHello(){
//         console.log("Hello");
//     }
//     addition(a,b){
//         console.log(`addition of a and b: ${a + b}`);
//     }
    
// }
// var obj = new Test();
// obj.sayHello(); 
// obj.addition(10,20)

// obj.addition(30,20)
//output:Hello


//Constructors 
class text{
    constructor(){
        console.log("defalut constructor called......");
    }

    test(name,age){
        this.name=name;
        this.age=age;
        console.log("perameter of constructors:= " , this.name , this.age)
    }
}
var obj = new text();
obj.test("nency",18);