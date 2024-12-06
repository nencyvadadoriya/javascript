// loop ==>
// A loop is a programming concept used to repeat a block of code multiple times. It's useful when you need to execute the same action or set of actions over and over, without writing the same code multiple times.

// for loop=>A for loop in JavaScript is a control structure that repeats a block of code a certain number of times. It consists of three parts:
// for(init; condition; inc/dec/expressions)
//{
    // statements
//}

// for(var i=0; i<=5; i++){
//     console.log(i);
// }

// initialization condition print inc/dec/expressions
//  1              1<5   T    1        2
//  2              2<5   T    2        3
//  3              3<5   T    3        4
//  4              4<5   T    4        5
//  5              5<5   T    5        6
//  6              6<5   F


// output 0,1,2,3,4,5

// ans-1)
// 10,9,8,7,6,5,4,3,3,2,1
// for(var i=10; i>=1; i--){
//     console.log(i);
// }

// ans-2)
// 51 to 79
// for(var i=51; i<=79; i++){
//     console.log(i);
// }

// ans-3)
// var n=Number(prompt("Enter a number : "));
// for(var i=1; i<=n; i++){
//     console.log(i);
// }

//ans-4)
// enter a and print out -n to 1
// var n = 5;
// for (let i = -n; i <= 1; i++)
//  {
//   console.log(i);
// }
  // initialization condition print inc/dec/expressions
    //   5             -5<1   T    -5+1        -4
    //  -4             -4<1   T    -4+1        -3
    //  -3             -3<1   T    -3+1        -2
    //  -2             -2<1   T    -2+1        -1
    //  -1             -1<1   T    -1+1         0
    //   0              0<1   T    0+1          1
    //   1              1<1   T    1+1          2

// ans-5)
// enter a and print out -n to n
// var a =7; 

// for (let i = -a; i <= a; i++) {
//     console.log(i);  
// }
   // initialization condition print inc/dec/expressions
    //  7             -7<7   T    -7+1        -6
    // -6             -6<7   T    -6+1        -5
    // -5             -5<7   T    -5+1        -4
    // -4             -4<7   T    -4+1        -3
    // -3             -3<7   T    -3+1        -2
    // -2             -2<7   T    -2+1        -1
    // -1             -1<7   T    -1+1         0
    //  0              0<7   T    0+1         1
    //  1              1<7   T    1+1         2
    //  2              2<7   T    2+1         3
    //  3              3<7   T    3+1         4

// ans-6)
// var n=30;
// for(var i=1; i<=30; i+=2){
//     console.log(i);
// }
 // initialization condition print inc/dec/expressions
    //   1               1<=30   T   1+2         3
    //   3               3<=30   T   3+2         5
    //   5               5<=30   T   5+2         7
    //   7               7<=30   T   7+2         9
    //   9               9<=30   T   9+2        11
    //  11              11<=30   T  11+2        13
    //  13              13<=30   T  13+2        15
    //  15              15<=30   T  15+2        17
    //  17              17<=30   T  17+2        19

// ans-7)
// let n = 10; 
// for (let i = 2; i <= n; i += 2) {
//   console.log(i);
// }
   // initialization condition print inc/dec/expressions
  //   2               2<=10   T   2+2         4
  //   4               4<=10   T   4+2         6
  //   6               6<=10   T   6+2         8

// ans-8)
// // 1,4,3,16,5
// for (let i =1; i<=5; i++){
//     if(i%2==1){
//         console.log(i);
//     }
//     else{
//         console.log(i*i);
//     }
// }
// initialization condition print inc/dec/expressions
// 1	           1%2==1    1	true (odd) 
// 2	           2%2==1    2	false (even 2*2 =4)
// 3	           3%2==1    3	true (odd)
// 4	           4%2==1    4	false (even 4*4=16)
// 5	           5%2==1    5	true (odd)
//6                6%2==1    6  false(even 6*6=36)

// ans-9)
// 1,1,2,3,5,8
// var a = 1, b = 1;
// console.log(a); 
// console.log(b); 

// for (var i = 0; i < 4; i++) {
//   var next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
// }
// initialization condition print inc/dec/expressions
// 1 	                      a = 1, b = 1	-	1
// 2 	                      a = 1, b = 1	-	1
// 3	        1+1=2         a = 1, b = 1	2	2
// 4	        2+1=3         a = 1, b = 2	3	3
// 5	        3+2=5         a = 2, b = 3	5	5
// 6	        5+3=8         a = 3, b = 5	8	8

// ans-10)
// 1,4,12,32
// var a=1 , i;
// for(i=1; i<=5; i++){
//     console.log(a*i)
//     a*=2;
// }
//initialization condition print inc/dec/expressions
// 1 	                      a = 1, i = 1	-	1
// 2 	                      a = 1, i = 2	-	4
// 3 	                      a = 1, i = 3	-	12
// 4 	                      a = 1, i = 4	-	32


// ans-11)
// factorial number
// var a = 1; 

// for (var i = 1; i <= 5; i++) {
//   a *= i;   
// }
// console.log(a);  // Output: 120

// ans-12)
// enter n and print out total number sum odd
var n =5;
var sum = 0;
for (var i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum += i; 
  }
}
console.log("The sum of odd numbers up to " + n + " is: " + sum);
//output=>The sum of odd numbers up to 5 is: 9

// ans-13)
// enter n and print out total number sum even..
var n =4;
var sum = 0;
for (var i = 1; i <= n; i++) {
  if (i % 2 !== 1) {
    sum += i; 
  }
}
console.log("The sum of even numbers up to " + n + " is: " + sum);
// output=>The sum of even numbers up to 4 is: 6

// ans-14)enter the n and print out of digit of a number 
var num=222;
var s=0;
while(num >0){
    var d=num % 10;
    s+=d;
    num = (num - (num%10))/10;
}
console.log(s);
// output => 6