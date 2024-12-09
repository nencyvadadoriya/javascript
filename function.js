// defination----
// function => perform a perticulary task or work its called function..

// syantax---
// function add(){
// }

// example :- 
// var a=10;
// var b=20;
// function add(){
//     console.log(a+b);
// }add();

// Functions Normal Functions
var a=10;
var b=20;
function add(){
    console.log(a+b);
}
add();

// ans-1)10,9,8,7,6,5,4,3,3,2,1
function num(){
    for(var i=10; i>=1; i--)
        {
             console.log(i);
        }
}
num();

//ans-2)51 to 79
function n(){
    for(var i=51; i<=79; i++)
    {
          console.log(i);
    }   
}
n();

//ans-3)enter n and print out 1 to n
// function no(){
//     var n=+(prompt("Enter a number : "));
//         for(var i=1; i<=n; i++)
//         {
//             console.log(i);
//         }     
// }
// no();

//ans-4)enter a and print out -n to 1
function num1(){
    var n = 5;
        for (let i = -n; i <= 1; i++)
            {
                console.log(i);
            }   
}
num1();

//ans-5)enter a and print out -n to n
function num2(){
    var n=3;
    for(var i=-n; i<=n; i++){
        console.log(i)
    }
}
num2();

//ans-6)enter n and print out odd number up to n
function odd(){
    var n=10;
        for(var i=1; i<=30; i+=2)
        {
            console.log(i);
        }
}
odd();

//ans-7)enter n and print out even number up to n
function even(){
    var n = 10; 
        for (let i = 2; i <= n; i += 2) 
        {
            console.log(i);
        
        }   
}
even();

//ans-8)print out the number of  1,4,3,16,5
function num3(){
    for (var i =1; i<=5; i++){
    if(i%2==1){
        console.log(i);
    }
    else{
        console.log(i*i);
    }
}
}num3();

//ans-9)print out the number of 1,1,2,3,5,8
function num4(){
        var a = 1, b = 1;
            console.log(a); 
            console.log(b); 

        for (var i = 0; i < 4; i++) 
        {
            var next = a + b;
                console.log(next);
                a = b;
                b = next;
        }
}num4();

//ans-10)print out 1,4,12,32,80
function num5(){
        var a=1;
            for(var i=1; i<=5; i++)
                {
                 console.log(a*i)
                  a*=2;
                }
}
num5();

//ans-11) factorial number
function factorial(){
    for (var i = 1; i <=5; i++) 
        {
            a *= i;   
         }
        console.log(a); 
}
factorial();

//ans-12)enter n and print out total number sum odd

function odd1(){
    var n =5;
    var sum = 0;
    for (var i = 1; i <= n; i++) 
        {
            if (i % 2 !== 0) 
            {
                sum += i; 
            }
        }
console.log("The sum of odd numbers up to " + n + " is: " + sum);
}odd1();

//ans-13)enter n and print out total number sum even..
function even1(){
    var n =10;
    var sum = 0;
        for (var i = 1; i <= n; i++) 
            {
                if (i % 2 !== 1) 
                    {
                        sum += i; 
                    }  
            }
console.log("The sum of even numbers up to " + n + " is: " + sum);
}even1();

//ans-14)enter the n and print out of digit of a number 
function num6(){
    var num=238;
    var s=0;
        while(num >0)
        {
            var d=num % 10;
            s+=d;
            num = (num - (num % 10))/10;
        }
console.log(s);
}num6();

// no arg no return
// no arg with return
// with arg no return
// with arg with return

// 1)No arguments, no return
function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // Output: Hello, World!


//2)  No arguments, with return
function getMessage() {
    return "This is a simple message.";
}
var message = getMessage();
console.log(message); // Output: This is a simple message.

//3)With arguments, no return
function greetUser(name) {
    console.log("Hello,",name);
}
greetUser("nency vadadoriya"); // output : hello nency vadadoriya

//4)With arguments, with return
function add(a, b) {
    return a + b;
}
var sum = add(5, 7);
console.log(sum); // output : 12