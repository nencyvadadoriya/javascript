// The Fetch API is a modern interface in JavaScript used for making HTTP requests (like GET, POST, PUT, DELETE) to servers. It provides a simple way to fetch resources asynchronously and works with Promises, making it more flexible and readable than the older XMLHttpRequest.

// //Key Features of Fetch API:

// Uses Promises for handling responses.
// Supports asynchronous requests.
// Allows easy handling of JSON and other response types.
// Provides built-in methods for error handling.

document.querySelector('button').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        console.log("res ==>" , res)
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        let response = data
        let image = document.createElement('img');
        image.setAttribute('src', response.message);
        image.style.width = "300px"
        image.style.height = "300px"

        document.querySelector("#dogimages").append(image)
    })
    .catch((err)=>{
        console.log(err);
    })
});

   
