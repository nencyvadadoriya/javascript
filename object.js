//object :=

//defination--
//object is a real world entity
//every think is the object

//syntax---
// let a={}
// let a = {
//     name: "nency",
//     age: 18,
//     email: "nencyvadadoriya@gmail.com",
//       add: function() {
//         return("this is function");
//     }
// };

// console.log(a);
// a.add(); 

//1)dot opreter
// console.log(a.name);
// console.log(a.age);
// console.log(a.add);
// console.log(a.add());


//2)[]squre opreter
// console.log(a["email"]);
// console.log(a["age"]);
// console.log(a["add"]);
// console.log(a["add"]());

//delete
// console.log(a)
// delete a.age;
// console.log(a)

//add 
// console.log(a)
// a.gender="female"
// console.log(a)

//method
//hasOwnProperty() method returns false if the object does not have the specified property.
//hasOwnProperty() method returns true if the object has the specified property.
// console.log(a.hasOwnProperty("name"));
// console.log(a.hasOwnProperty("age"));


// 1. Object.assign
var a = { 
    name: 'nency' 
};
var b = {
        age: 18, city: 'surat'
};

Object.assign(a, b);
console.log(a);  // { name: 'nency', age: 18, city: 'surat' }

// 2. Object.create(object)=>Creates a new object, using object as its prototype.
// var person = { species: 'Human' };
// var student = Object.create(person);
// student.name = 'nency';
// student.age = 18;
// console.log(student.name);  // 'nency'
// console.log(student.species);  // 'Human' 

// 3. Object.entries(object)=>Returns an array of key-value pairs (arrays) from the object.
// var person = { name: 'nency',  city: 'surat' };
// var entries = Object.entries(person);
// console.log(entries);  // [ ['name', 'nency'],  ['city', 'surat'] ]

// 4. Object.fromEntries()
// const a = [['name', 'nency'], ['city', 'surat'],['hobby ','reading']];
// const b = Object.fromEntries(a);
// console.log(b);  // { name: 'nency',city: 'surat' , hobby: 'reading' }


//keys
// console.log(Object.keys(a));
//output: [ 'name', 'email', 'add', 'gender' ]

//values
// console.log(Object.values(a));
//output:[ 'nency', 'nencyvadadoriya@gmail.com', [Function: add], 'female' ]


