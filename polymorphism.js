//Polymorphism := "Many forms"
// poly means many and morphism means transforming one form into another. 
// two type of Polymorphism 1)Compile-time Polymorphism. 2)Runtime Polymorphism.

//1)compile-time:= 
// class Test{
//     sayhello(){
//         console.log("parent class calledd.....")
//     }
// }
// class Test2 extends Test{
//     sayhello(){
//         console.log("child class called.....")
//     }
//     sayhello(a,b){
//         console.log("child1 class called.....");
//         console.log(a+b);
//     }
//     sayhello(a,b,c){
//         console.log("child2 class called.....");
//         console.log(a+b+c);
//     }

// }
// let obj = new Test2(10,20);
// obj.sayhello();

//2) Runtime Polymorphism:= 

// class Test{
//     sayhello(){
//         console.log("parent class calledd.....")
//     }
// }
// class Test2 extends Test{
//     sayhello(){
//         console.log("child class called.....")
//     }
// }
// let obj = new Test2();
// obj.sayhello();

//example:=
// class A {
//     area(x, y) {
//         console.log(x * y);
//     }
// }
// class B extends A {
//     area(a, b) {
//         super.area(a, b);
//         console.log('Class B')
//     }
// }
// let obj = new B();
// let output = obj.area(100, 200);