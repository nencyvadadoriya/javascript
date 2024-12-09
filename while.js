// defination:-----
//  while loop =>The while loop loops through a block of code as long as a specified condition is true.

// syntax :---
// while (condition) {
  // code block to be executed
// }

// ex:-----
// var number= 1;
// while (number<=5) {
//   console.log("Number:", number);
//   number++;
// }

//ans-1) Print out 10 to 1
// var i = 10;
// while (i >0) {
//     console.log(i);
//     i--;
// }
//output=>10,9,8,7,6,5,4,3,2,1

//ans-2) Print out 51 to 79
// var i = 51;
// while (i<= 79) {
//     console.log(i);
//     i++;
// }
//output=> 51 to 79

//ans-3) Enter n and print out 1 to n
// var n = Number(prompt("Enter the value of n"));
// var k = 1;
// while (k <= n) {
//     console.log(k);
//     k++;
// }

//an-4) Enter n and print out -n to 1
// var n = Number(prompt("Enter The Number of n"));
// var i = -n;
// while (i<= 1) {
//     console.log(i);
//     i++;
// }

//ans-5) Enter n and print out -n to n
// var n = Number(prompt("Enter The Number of n"));
// var i = -n;
// while (i <= n) {
//     console.log(i);
//     i++;
// }

//ans-6) Enter n and print out odd numbers up to n
// var n = Number(prompt("Enter The Number of n"));
// var i = 1;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

//ans-7) Enter n and print out even numbers up to n
// var n = Number(prompt("Enter The Number of n"));
// var i = 0;
// while (i <= n) {
//     console.log(i);
//     i += 2;
// }

//ans-8) Series print out 1, 4, 3, 16, 5, 36.......
// var i = 1;
// while (i <= 10) {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// }
//output=> 1, 4, 3, 16, 5, 36 7, 64 ,9,100

//ans=9) Series print out 1, 1, 2, 3, 5, 8 .....
// var a =5;
// var x = 0, y = 1, z;
// var i = 0;

// while (i <= a) {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// }
//output=>0,1,1,2,3,5

//ans-10) Series print out 1, 4, 12, 32, 80, 192, 448 .......
// var n = 10;
// var first = 1, second = 4;
// var i = 3;
// console.log(first);
// console.log(second);
// while (i <= n) {
//     let next = (second - first) * 4;
//     console.log(next);
//     first = second;
//     second = next;
//     i++;
// }
//output=>1,4,12,32,80,192,448

//ans-11) Find out the factorail of a given number in javascript. 
var n= 5; 
var r=1;
var i = n;
while (i > 0) {
    r*= i;
    i--;
}
console.log("factorial number of :"+r);

// enter n and print out total number sum odd 
// var n = parseInt(prompt("Enter a number :"));
// var sum = 0;
// var i = 1;
// while (i <= n) {
//     if (i % 2 !== 0)
//     { 
//         sum += i;      
//     }
//     i++;
// }
// console.log("The sum of all odd numbers if: " +sum);

//ans-13) enter n and print out total number sum even..
// var n = +(prompt("Enter a number:")); 
// var sum = 0;
// var i = 1;
// while (i <= n) {
//     if (i % 2 === 0)
//     {
//         sum += i;      
//     }
//     i++;
// }
// console.log("The sum of all even numbers from 1 to n number " + sum);

//ans-14)enter the n and print out of digit of a number 
var n =+(prompt("Enter a number:"));
console.log("The digits of:"+ n);
while (n > 0)
{
    var d= n % 10;   
    console.log(d);      
    n= (n-(n%10))/10; 
}


