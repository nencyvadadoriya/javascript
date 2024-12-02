// ans-1)
var  units = 55; 
var amount = 0;
if (units > 50) 
    {
    amount += (units - 50) * 2;
    units = 50;
}
if (units > 150) 
    {
    amount += (units - 150) * 3;
    units = 150;
}
if (units > 250)
    {
    amount += (units - 250) * 4;
    units = 250;
}
amount += units * 1;

// Add 20% surcharge if total units  150
if (units > 150) {
    amount += amount * 0.2;
}

console.log("Total bill: ₹" + amount);

// ans-2)
var season=0;
switch (season){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("winter");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log("summer");
        break;
    case 9:
    case 10:
    case 11:
    case 12:
    console.log("monsoon");
    break;

    default:
        console.log("invalid choice");
}

// ans-3)
var P = 100; 
var N = 7;    
var R;         

if (N >3 && N<= 5) {
    R = 3;
} else if (N >5 && N<=8) {
    R = 5;
} else if (N >8 && N<=12) {
    R = 12;
}
 else 
{
    R = 15;
}
let I = (P * R * N) / 100;

console.log("Principal Amount :" + P);
console.log("Number of Years :" + N);
console.log("Interest Rate :" + R + "%");
console.log("Total Interest :" + I);


// ans-4)
var age=0;
if(age>=18){
    console.log("you are eligible vote");
}
else{
    console.log("you are not eligible for vote");
}

//ans-5)
var age1=40;
if(age<=12){
    console.log("you are chlid");
}
else if(age>13 && age<=19){
    console.log("you are teneger");
}
else if(age>20 && age<58){
    console.log("you are young");
}
else if(age>=58){
    console.log("you are senior sitizen");
}
