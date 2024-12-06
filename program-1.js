// ans-2)c program to check whether a person is eligble for a voting or not ?
var age=10;
if(age >=18){
    console.log("Eligible for voting");
}
else{
    console.log("Not Eligible for voting");
}
//ans-3) calculate the gross on the salary
// basic                 HRA         DA
// up to 5000            8%          20%
// 5000 to 10000         12%         30%
// 10000 to 15000        15%         40%
// 15000 to above        20%         50%

var basic=10000;
var hra , da , gross;
if(basic <= 5000)
    {
    hra = basic * 0.08 ;
    da = basic * 0.20 ;
    gross = basic + hra + da;
    console.log("Gross salary is " + gross);
}
else{
    if(basic <= 10000)
    {
        hra = basic*0.12;
        da = basic *0.30;
        gross= basic + hra + da;
        console.log("Gross salary " + gross);
    }else{

    }
}

// 5) grade
// mark>75 - A
// mark 60< mark <75 - B
// mark 45 < mark <60 -C
// mark 35 < mark <45 -D
// mark <35 -fail
var marks = 50;

                if (marks >=75) {
                    console.log("your grade is A ");
                } 
                else if (marks >= 60 && marks<75) {
                    console.log("your grade is B ");
                } 
                else if (marks >= 45 && marks<60) {
                    console.log("your grade is C ");
                }
                else if (marks >= 35 && marks<45) {
                    console.log("your grade is D ");
                } 
                else 
                {
                    console.log("your grade is fail ");
                }
// ans-6)
var x=2000;
var y=300;
if(x<2000 && x>3000){
    console.log(x);
}
.
else{
   console.log("") 
}