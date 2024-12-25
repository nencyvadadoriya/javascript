//DOM => Document Object Model
//defination---
// It represents the page so that programs can change the document structure, style, and content.

//1-document.getElementById
//2-document.getElementByClass
//3-document.getElementByTagName
//4-document.querySelector

//==>1-Documnet.getElementById
// let data = document.getElementById('name');
// console.log(data);
// data.style.color = "red";
// data.style.fontSize ="50px";
// data.innerHTML = "runing javascript ......";

//==>2-document.getElementByClass
// let data = document.getElementsByClassName('num');
// console.log(data);
// data[0].style.color = "blue" ;
// data[0].style.fontSize ="50px";

//==>3-document.getElementByTagName
// let data = document.getElementsByTagName('p');
// console.log(data);
// data[0].style.color = "green";

//==>4-document.querySelector 
// let data = document.querySelector('.num');
// console.log(data);
// data.style.color = "#eb8634";
// data.style.fontSize = "50px";

function displayDate() {
    document.getElementById("demo").innerHTML  = Date();
}
