// nested-if-else
var a=20;
var b=30;
var c=40;

if(a>b){
   if(a>c)
    {
    console.log("largest no is : " + a);
   }
   else{
    console.log("lar no is : " + c);
   }
}
else{
    if(b>c)
    {
        console.log("larges no is : " + b);
    }
    else
    {
        console.log("large no is : " + c);
    }
}
// ladder if-else
var d=20;
var f=30;
var g=10;
if(d>f && d>g)
    {
        console.log("largest no is : " + d);
    } 
else if(f>d && f>g)
    {
        console.log("larges no is : " + f);
    }
else{
        console.log("large no is : " + g);
    }    