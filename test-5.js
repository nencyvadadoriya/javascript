//==>ans-1)
// var color = ["Red", "Green", "White", "Black"];
// console.log(color); 
// Output:= [ 'Red', 'Green', 'White', 'Black' ]

// color.pop();  
// console.log(color); 
// Output:= [ 'Red', 'Green', 'White' ]

// color.splice(1)
// console.log(color);
//output:= [ 'Red' ]

// color.splice(1,2)
// console.log(color);
//output:= ['Green' , 'White']

// color.push("orange")
// console.log(color);
//output:= [ 'Red', 'Green', 'White', 'Black', 'orange' ]

//==>ans-5)remove negitive value using filter array function

// var num = [-23,-20,-17,-12,-5,0,1,5,12,19,20];
// console.log("befor filter",num);
// let ans= num.filter((ele,index) => { 
//     return ele >0;
// })
// console.log("after filter",ans);
//output:=[ 1, 5, 12, 19, 20 ]

//==>ans-6)using map()method and return the sqeuare of the array element
// var  arr=[2,5,6,3,8,9];
// let ans= arr.map((ele,index) => { 
//     return ele * 2;
// })
// console.log(ans);
//output :=[ 4, 10, 12, 6, 16, 18 ]

//==>ans-7)sorting an arry in ascending descending
//ans-1)
// let num=[23,20,17,5,0,1,5,12,19,20]
// console.log("befor sorting",num);
//output:=befor sorting [
//   23, 20, 17,  5,  0,
//   1,  5, 12, 19, 20
// ]
// let ans=num.sort((a,b) => {return a-b})
// console.log("after sorting",ans);
//output:=after sorting [
//    0,  1,  5,  5, 12,
//    17, 19, 20, 20, 23
//  ]

//ans-2)sorting an arry in ascending descending
// var color = ["Red", "Green", "White", "Black"];
// console.log("befor ascending ",color);
// Output:= [ 'Red', 'Green', 'White', 'Black' ]
// color.sort((a, b) => 
//     {
//         if (a < b) return -1;
//         if (a > b) return 1;
//         return 0;
//     })
//     console.log("after ascending ",color);
// Output:= [ 'Black', 'Green', 'Red', 'White' ]

//==>ans-8)filter out any string whichis less than 8 charcters
// var str=["Python","Javascript","Go","Java","PHP","Ruby"];
// let ans=str.filter((ele,index) => 
//     {
//          return ele.length >=8;
//     })
//     console.log(ans);
    //output:=[ 'Javascript']

//==>ans-9)print expeted output
//ans-1)
// var x= ["a","i","r","p","l","a","n","e"];
// let ans=x.find((ele,index) => 
//     {
//          return ele == "r";
//     })
//     console.log(ans);
//output=r

//ans-2)
// var x="A New Java Book";
// var ans=x.toLowerCase();
// console.log(ans);
//output:= a new java book

//ans-3)
// var x="A New Java Book";
// var ans = x.toUpperCase();
// console.log(ans);
//output:= A NEW JAVA BOOK

//==>ans-10)array reverse
// var rev = [1,2,3,4,5]
// let ans = rev.reverse()
// console.log(ans);
//output:=[ 5, 4, 3, 2, 1 ]

//==>ans-11)javascript program to check if a value is found or not 
// var arr=[1,2,3,4,5];
// let ans=arr.includes(3);
// console.log(ans);
//output:=true

//==>ans-12)print your name and write the number of total character
// var data="nency";
// let ans=data.length;
// console.log(data+" "+ans);
//output:= nency 5

//==>ans-13)change dog name to cat
// var str ="I offen take a walk with my dog in the evening .His dog follows him everyware . I don't feed my dog in the morning"
// console.log("befor replace ==>",str)
// var ans=str.replace("dog","cate").replace("dog","cat").replace("dog","cat");
// console.log("after replace ==>",ans);
//output:= after replace ==> I offen take a walk with my cate in the evening .His cat follows him everyware . I don't feed my cat in the morning

//==>ans-14)convert string to arry
// var input="Hire the top 1% freelance devlopers";
// console.log(input);
// var ans = input.split(" ");
// console.log(ans);
// //output:=[ 'Hire', 'the', 'top', '1%', 'freelance', 'devlopers' ]

// var fil = ans.splice(0,4);
// console.log(fil);
//output:=[ 'Hire', 'the', 'top', '1%' ]

//==>ans-15)convert an array to string
// var input=['5',32, 'Daniel'];
// console.log(input);
// var ans=input.toString()
// console.log(ans);
//output:=5,32,Daniel