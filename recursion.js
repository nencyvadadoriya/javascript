// recursion =>function call it self 

//example--

//1)normal recursion function
function recursion(n){
    console.log("inside function called ....",n);
    if(n<5){
       recursion(++n);
    }
    console.log("function finished....",n);
}
recursion(1);
//output 
// inside function called .... 1
// inside function called .... 2
// inside function called .... 3
// inside function called .... 4
// inside function called .... 5
// function finished.... 5
// function finished.... 5
// function finished.... 4
// function finished.... 3
// function finished.... 2


//2) factorial number  5! => 5*4*3*2*1!
function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));
//output =>120

//3) print out 1,1,2,3,5,8,13
function fibonaci(n){
    if(n=1){
        return 1;
    }
    else{
       return n++;
    }
}
console.log(fibonaci(4));
