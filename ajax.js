// AJAX = Asynchronous JavaScript And XML. 
// defination--
// AJAX (Asynchronous JavaScript and XML) is a technique in JavaScript that allows web pages to fetch or send data to a server without reloading the page.

document.querySelector('button').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

    xhr.onload = () => { 
        console.log(JSON.parse(xhr.responseText));
            let response = JSON.parse(xhr.responseText);
            let image = document.createElement('img');
            image.setAttribute('src', response.message);
            image.style.width = "300px";
            image.style.height = "300px";

            document.querySelector("#dogimages").append(image);
    };
    xhr.send();
});

   
