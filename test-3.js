// ans-1)  Write JS Program to check number is Palindrome or not
var num = 123;
var originalNum = num;
var reverseNum = 0;
if(originalNum === reverseNum){
    console.log(num + " is a palindrome number");
}
else{
    console.log(num + " is not a palindrome number");
}
// output =>123 is not palindrome number

// ans-2) Print Series 1, 4, 3, 16, 5, ....
for (var i =1; i<=5; i++){
    if(i%2==1){
        console.log(i);
    }
    else{
        console.log(i*i);
    }
}
// output => 1, 4, 3, 16, 5

//ans-3)  Print Multiplication table of n
var n=5;
for(var i=1; i<=10; i++){
    console.log("5 * = "+i+" = "+n*i);
}
// output =>
// 5 * = 1 = 5
// 5 * = 2 = 10
// 5 * = 3 = 15
// 5 * = 4 = 20
// 5 * = 5 = 25
// 5 * = 6 = 30?
// 5 * = 7 = 35
// 5 * = 8 = 40
// 5 * = 9 = 45
// 5 * = 10 = 50
   
//ans-4) find out sum of digit of given number
var num=123;
var sum=0;
while(num >0){
    var d=num % 10;
    sum+=d;
    num = (num - (num%10))/10;
}
console.log(sum);
// output => 6

//ans-5) print series 1, 1, 2, 3, 5
var a=1;
var b=1;
for(var i=1; i<=5; i++){
    console.log(a);
    var i=a;
    a=b;
    b=i+a;
}
// output => 1, 1, 2, 3, 5
