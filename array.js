
//array
//defination--
// sotre multiple element in array (start with 0 index )

//syntax--
// var fruits = ["apple", 1,true,false,null];
// console.log(fruits);

//example--
// var data=[1,2,3,4,5,6,7];
// console.log(data);
// console.log(data[5]);
// data[99]=100
// console.log(data);
// console.log(data.length);
// console.log(data);

//push() method is used to add element at the end of array
// data.push(8,9,10);
// console.log(data);

//unshift() method is used to add element at the beginning of array
// data.unshift(0);
// console.log(data);

//pop() method is used to remove element at the end of array
// data.pop();
// console.log(data);

//shift() method is used to remove element at the starting of array
// data.shift();
// console.log(data);

//splice() method is used to remove and add element at the any index of array
// data.splice(1,1,23333);
// console.log(data);

//indexOf() method is used to find the index of element in array
// console.log(data.indexOf(23333));
//output=1

//check formate of array
// console.log(Array.isArray(data));
//output= true

// function a(name, callback) {
//     console.log(name);
//     callback(25);
// }

// function b(age) {
//     console.log(age); 
// }
// a("hello", b);
//output=>hello 25


//Filter() method used to filter in array
// let arr=[11,22,33,44,55];

// let ans= arr.filter((ele,index) => { 
//     return ele>=30;
// })
// console.log(ans);
//output=33,44,55

//find() used to find out the element in array
// let arr=[111,22,33,44,55];
// let ans= arr.find((ele,index) => { 
//     return ele <=30;
// })
// console.log(ans);
//output=22

//findindex()used to the find index of element in array
// let arr=[11,22,33,44,55];
// let ans= arr.findIndex((ele,index) => { 
//     return ele == 22;
// })
// console.log(ans);
//output=1

//some()used to condition true hogi so return true otherwise false
let arr=[111,21,313,414,515];
let ans= arr.some((ele,index) => { 
    return ele <=30;
})
console.log(ans);
//output=true

//every()used to all the condition true hogi so return true otherwise false
// let arr=[111,221,33,44,55];
// let ans= arr.every((ele,index) => { 
//     return ele >30;
// })
// console.log(ans);
//output=true

//includes() in condition element check in array
// let arr=[111,22,33,44,55];
// let ans= arr.includes((ele,index) => { 
//     return ele > 30;
// })
// console.log(ans);
//output=false

// map()used to map return new array //to create a new array without modifying the original array

// let arr=[10,20,30,40,50];
// let ans= arr.map((ele,index) => { 
//     return ele *2;
// })
// console.log(ans);
//output=[ 20, 40, 60, 80, 100 ]

//foreach() no return statment use 
// var data=[11,22,33];
// let arr=data.forEach((ele,index)=>{
//     console.log(ele);
// })
//output=11,22,33

