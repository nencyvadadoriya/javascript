//inheritance:= ek class apde parent class ki value ko acces kar sakta hai 

//To create a class inheritance, use the extends keyword.
//The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

//typr of inheritance:= 1) singel inheritance 2) multilevel inheritance 3) hierarchical inheritance 4) multiple inheritance 

//1)singel inheritance:= Single inheritance is a programming concept that allows a subclass to inherit properties and behaviors from a single parent class
// class Parent{
//     sayParent(){
//         console.log("Parent class called .........");
//     }
// }

// class Chlid extends Parent{
//     sayChlid(){
//         console.log("Child class called ........");
//     }
// }

// let obj = new Chlid();
// obj.sayChlid(); // Output: Child class called ........
// obj.sayParent(); // Output: Parent class called .........


//2)mutileval inherirtance:=step by step access the parent class property
// class GrandParent{
//     sayGrandParent(){
//         console.log("GrandParent class called .........");
//     }
// }
// class Parent extends GrandParent{
//     sayParent(){
//         console.log("Parent class called ........");
//     }
// }
// class Chlid extends Parent{
//     sayChlid(){
//         console.log("Child class called ........");
//     }
// }
// let obj = new Chlid();
// obj.sayChlid();
// obj.sayParent();
// obj.sayGrandParent();

// let obj1 = new Parent();
// obj1.sayParent();
// obj1.sayGrandParent();

//3:=hierarchical inheritance

                                 //      -------Animal-------
                               //         ||                  ||
                           //  -------Reptile------      -------Mammal------
                         //        ||       ||             ||           ||  
                        //       Sanke    Lizard           Dog          Cat
// class Animal{
//     sayAnimal(){
//         console.log("Animal class called ........");
//     }
// }
// class Reptile extends Animal{
//     sayReptile(){
//         console.log("Reptile class called ........");
//     }
// }
// class Mammal extends Animal{
//     sayMammal(){
//         console.log("Mammal class called ........");
//     }
// }
// class Snake extends Reptile{
//     saySnake(){
//         console.log("Snake class called ........");
//     }
// }
// class Lizard extends Reptile{
//     sayLizard(){
//         console.log("Lizard class called ........");
//     }
// }
// class Dog extends Mammal{
//     sayDog(){
//         console.log("Dog class called ........");
//     }
// }
// class Cat extends Mammal{
//     sayCat(){
//         console.log("Cat class called ........");
//     }
// }

// let cat = new Cat();
// cat.sayCat();
// cat.sayMammal();

// let dog = new Dog();
// dog.sayDog();
// dog.sayMammal();

// let lizard = new Lizard();
// lizard.sayLizard();
// lizard.sayReptile();

// let snake = new Snake();
// snake.saySnake();
// snake.sayReptile();

// let mammal = new Mammal();
// mammal.sayMammal();
// mammal.sayAnimal();

// let reptile = new Reptile();
// reptile.sayReptile();
// reptile.sayAnimal();

class Parent {
    constructor(name) {
        this.name = name;
    }
    sayparent() {
        console.log("Parent class called .........", this.name);
    }
}

class Child extends Parent {
    constructor(parentname, childname) {
        super(parentname);  
        this.childname = childname;
    }
    sayChild() {
        console.log("Child class called ........", this.childname);
    }
}

let child = new Child("jayantibhai","Nency"); 
child.sayparent(); 
child.sayChild();

 