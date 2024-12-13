//array
//defination--
// sotre multiple element in array (start with 0 index )

//syntax--
// var fruits = ["apple", 1,true,false,null];
// console.log(fruits);

//example--
var data=[1,2,3,4,5,6,7];
console.log(data);
console.log(data[5]);
data[99]=100
console.log(data);
console.log(data.length);
console.log(data);
//push() method is used to add element at the end of array
data.push(8,9,10);
console.log(data);
//unshift() method is used to add element at the beginning of array
data.unshift(0);
console.log(data);
//pop() method is used to remove element at the end of array
data.pop();
console.log(data);
//shift() method is used to remove element at the starting of array
data.shift();
console.log(data);
//splice() method is used to remove and add element at the any index of array
data.splice(1,1,23333);
console.log(data);
//indexOf() method is used to find the index of element in array
console.log(data.indexOf(23333));
//check formate of array
console.log(Array.isArray(data));

