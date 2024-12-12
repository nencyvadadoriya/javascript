//ans-1)greeting message using with argument no return type
var n;
function greeting(n){
    console.log("Good Morning..");
}greeting(n);
//output=>Good Morning

//ans-2)find the circle area 
const PI =3.14;
var circle=(r)=>{
    return PI*r*r;
}
console.log(circle(4));
//output=>50.24

//ans-3)find the triangle area
function triangle(l,h){
    return (l*h/2);
}
console.log(triangle(10,20));
//output=>100

//ans-4)find the rectangle area
function rectangle(l,h){
        return l*h;
}
console.log(rectangle(15,5));
//output=>75

// ans-5)((b*b)(4*a*c))/(2*a)
function ans(a,b,c){
    return (b*b)*(4*a*c)/(2*a);
}
console.log(ans(5,4,3));
//output=>96

//ans-6)(a*a)+(2*a*b)+(b*b)
function add(a,b){
    return (a*a)+(2*a*b)+(b*b);
}
console.log(add(10,20));
//output=>900

//ans-7)convert faherenhit to celsius (c=(f-32)/1.8)
function convertC(f){
    return (f-32)/1.8;
}
console.log(convertC(40));
//output=>4.444444444444445

//ans-8)convert celsius to fahrenheit(f=(c*1.8)+32)
function convertF(c){
        return (f=(c*1.8)+32);
}
console.log(convertF(30));
//output =>86

//ans-9)with argument no return type print out odd and even number
function even(a){
    if(a%2==0){
        console.log("even number is :", a);
    }
    else
    {
        console.log("number is odd");
    }
}
even(59);
//output =>number is odd

//ans-10)swap a value without third variable using with argument no return type
function swap(a,b){
    console.log("befor swapping =",a,"b =",b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("after swapping =",a,"b =",b);
}
swap(10,20);
//output=>20,10