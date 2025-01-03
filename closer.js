// function as a variable

// defination---
// function ko varible me store karke uske use kr sakte hai

// syantax---
// var add=function(){
//     console.log();
// }
// add();

//example---
// var multi = function(a,b){
//     console.log(a*b);
// }
// multi(10,4);

// array function(=>)

//defination--
// function ko array me store karke uske use kr sakte hai

//syantax---
// var add=()=>{

// }
// add();

//example--
//multiple line
// var sub=(a,b)=>{
//     console.log(a*b);
//     console.log(a-b);
//     console.log(a+b);
//     console.log(a/b);
// }
// sub(10,20);

// singel line
// var sayhello = ()=> "hello world";
// console.log(sayhello());

// IIFE =>immdetaly invoke function expression
// jab koi variable define kare tab use sath hii call kar sakte hai aalag se nahi karna padta

//exmple--
// (function(a,b){
//     console.log("IIFE function", a+b);
// })(10,2)

//closer function
//defination--A closure in JavaScript is a function that has access to its outer function's variables, even after the outer function has finished executing.

//exmple--
// function OuterFun(){
//     function InnerFun(){
//         console.log("innerfunction is called....");
//     }
//     console.log("outerfunction is called....");
//     return InnerFun;
// }
// var a=OuterFun();
// console.log(a());
// console.log(OuterFun());
// console.log(OuterFun()());

