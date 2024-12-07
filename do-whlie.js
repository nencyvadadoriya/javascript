// Do while loop=>The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

// Syntax:
//do{
    //   statement;
//}whlie();

// ans-1) Print out 10 to 1
// var i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);
//output => 10,9,8,7,6,5,4,3,2,1

// ans-2) Print out 51 to 79
// var i = 51;
// do {
//     console.log(i);
//     i++;
// } while (i <= 79);
// output=>51 to 79

//ans-3) Enter n and print out 1 to n
// var n =5;
// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i<= n);
// output=>1,2,3,4,5

//ans-4) Enter n and print out -n to 1
// var n =10;
// var i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);
//output => -10,-9,-8,-7,-6,-5,-4,-3,-2,-1 ,0,1,2,3,4,5,6,7,8,9,10

// ans-5) Enter n and print out -n to n
// var n=Number(prompt("Enter N number : "));
// var i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= n);
// output=>-5,-4,-3,-2,-1,0,1,2,3,4,5

//ans-6) Enter n and print out odd numbers up to n

// var n = Number(prompt("Enter The Number of n"));
// var i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);

//ans-7) Enter n and print out even numbers up to n
// var n = Number(prompt("Enter The Number of n"));
// var i = 0;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);
    

//ans-8) Series print out 1, 4, 3, 16, 5, 36.......
// var i = 1;
// do {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// } while (i <= 10);
//output=>1,4,3,16,5,36

//ans-9) Series print out 1, 1, 2, 3, 5, 8
// var a = +prompt("Enter a Number:");
// var x = 0, y = 1, z;
// var i = 0;
// do {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// } while (i <= a);
//output=>1,1,2,3,5,8

//ans-10) Series print out 1, 4, 12, 32, 80, 192, 448 .......
// var n = 10;
// var f = 1;
// var s = 4;
// var i = 3;

// console.log(f);
// console.log(s);

// do {
//     let next = (s - f) * 4;
//     console.log(next);
//     f = s;
//     s = next;
//     i++;
// } while (i <= n);
//output=> 1,4,12,32,80,192,448,1024,2048

// ans-11)factorial number
// var n = 5; 
// var r = 1;
// var i = n;
// do {
//     r *= i;
//     i--;
// } while (i > 0);
// console.log("factorial number 5 of is : "+r);
//output=>factorial number 5 of is :120

// ans-12)enter n and print out total number sum odd
var n = 20; 
var sum = 0;
var i = 1; 
do {
    if (i % 2 !== 0) 
        { 
            sum += i;      
        }
    i++;               
} while (i <= n);       

console.log("up to the number : "+ sum);
// output=>up to the number : 100

//ans-13) enter n and print out total number sum even.
var n = 4; 
var sum = 0;
var i = 1; 
do {
    if(i % 2 === 0)
    { 
        sum += i;      
    }
    i++;               
} while (i <= n);      

console.log("The sum of even numbers up to n number is : "+sum);
//output=>The sum of even numbers up to n number is : 6

//ans-14)enter the n and print out of digit of a number
var num = 222; 
var s = 0;    
do {
    var d = num % 10;       
    s += d;                   
    num = (num - (num % 10)) / 10;
} while (num > 0);          
console.log(s); 
// Output=>6





