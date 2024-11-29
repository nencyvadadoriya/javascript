//==>  if-else
var a=10;
var b=20; 
if(a< b){
    console.log("smallest no is....",a);
}
else{
    console.log("smallest no is....",b);
}

//==>  ternary opreter
var c=20;
var d=30;
var smallest = console.log(c < d ) ? c : d;

//==>  swaping of variable

// with 3rd variable
// without 3rd variable
// using array or assignmnet operator
// xor operator

// with 3rd variable
var e=10;
var f=20;
var temp;
console.log(e,f);
console.log("after swaping....");
    temp=e;
    e=f;
    f=temp;
console.log(e,f);


// without 3rd variable
var e=30;
var f=40;
console.log(e,f);
console.log("after swaping....");
e=e+f;
f=e-f;
e=e-f;
console.log(e,f);

// using assignment opreter
var e=50;
var f=60;
console.log(e,f);
console.log("after swaping....");
[e,f]=[f,e];
console.log(e,f);

// using xor operator
var e=70;
var f=80;
console.log(e,f);
console.log("after swaping....");
e=e^f;
f=e^f;
e=e^f;
console.log(e,f);

//==> convert doller to rupees

var d=100;
var ans=d*83;
console.log("doller to rupees = "+ans);

// ==> convert feet into inches
var f=5;
var ans=f*12;
console.log("feet to inches = "+ans);

//==> convert Fahrenheit to celsius
var f=20;
var ans=(f-32)*5/9; 
console.log("Fahrenheit to celsius ans is  = "+ans);

//==> convert celsius to Fahrenheit
var c=20;
var ans=(c*9/5)+32; //(0°C × 9/5) + 32 = 32°F
console.log("celsius to Fahrenheit ans is  = "+ans);

//==>convert centimeter into meter
var c=50;
var ans=c/100;
console.log("centimeter to meter ans is  = "+ans);

//==> find out the area of triangle
var b=10;
var h=20;
var ans=1/2*b*h; 
 console.log("area of triangle = "+ans);

//==> find out the area of Rectangle
var l=10;
var w=20;
var ans=l*w; 
console.log(" area of Rectangle = "+ans);

//==> find out the area of circle
var c=30;
var ans=3.14*c;
console.log("area of circle = "+ans);

//==> find out simple intrest
var p=100;
var r=10;
var t=2;
var ans=(p*r*t)/100;
console.log("simple intrest = "+ans);

//==>find out salary of employee (basic , HRA(12%),DA (18%))
var B=10000;
var HRA=B*0.12;
var DA=B*0.18;
var ans=B+HRA+DA;
console.log("salary of employee " +ans);