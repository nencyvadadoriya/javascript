//SetTimeOut := function that allows you to delay the execution of code.
// setInterval := SetInterval() is a JavaScript function that allows you to schedule a function or expression to be executed repeatedly at specified intervals
// clearInterval := clearInterval() is a JavaScript function that allows you to cancel a previously scheduled function or expression execution
// cleartimeout := The clearTimeout() method of the Window interface cancels a timeout previously established by calling Window. setTimeout() .

//SetTimeOut := ek hii bar excuted krta hai based on time
//syntax---
// setTimeout(()=>{
//     console.log("hello world");
// },2000);

//example---
// console.log("hello world");

// setTimeout(()=>{
//     console.log(10*2);
// },1000);

// console.log("good bye!!!!!!!!");


// setInterval := many time excuted based on time
// let id = setInterval(()=>{
//     console.log("hello world");
// },3000)
// console.log("setinterval id : ", id);

// clearTimeOut := settimeout ni id ne je dealy thatu hoy time tene stop kri dey excuted j na thava dey
// let id= clearTimeout(()=>{
//     console.log("hello world");
// },1000);
// clearTimeout(id);

//clearinterval := setinterval ni id ne je time lage te stop kri dey
// let id= clearInterval(()=>{
//     console.log("hello world");
// },1000);
// clearInterval(id);

var id;
document.getElementById('start').addEventListener('click', () => {
    id = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById('time').innerHTML = time;
    }, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(id);
});
