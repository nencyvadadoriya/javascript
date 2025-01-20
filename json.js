// JSON = Javascript Object Notation
//JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

let user1 ={
    name : "nency vadadoriya",
    age : 18,
    email : "nencyvadadoriya07@gmail.com",
    hobby : ["eating" , "reading"]
} 
console.log(user1);

let user ={
    "name ": "nency vadadoriya",
    "age" : 18,
    "email ": "nencyvadadoriya07@gmail.com",
    "hobby" : ["eating" , "reading"]
}
console.log(user);

localStorage.setItem('user' , JSON.stringify(user));
let jonsobj = JSON.parse(user)
console.log(jonsobj);
