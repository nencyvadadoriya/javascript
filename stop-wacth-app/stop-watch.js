let id;
document.getElementById("start").addEventListener('click', () => {
    clearInterval(id);
    id = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById('timing').innerHTML = time; 
    }, 1000);
});

document.getElementById("end").addEventListener('click', () => {
    clearInterval(id);
});
