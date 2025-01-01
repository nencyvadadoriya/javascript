let form = document.getElementById("form");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let date = document.getElementById("date");
let hobby = document.getElementById("hobby");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearerror();

    if (ValidationForm()) {
        alert("Form Submitted Successfully!");
        form.reset(); 
    }
});

function ValidationForm() {
    let isValid = true;

    if (firstname.value === "") {
        document.getElementById("firsterr").innerHTML = "Please enter your first name";
        isValid = false;
    } else if (firstname.value.length < 3) {
        document.getElementById("firsterr").innerHTML = "First name must be at least 3 characters";
        isValid = false;
    }

    if (lastname.value === "") {
        document.getElementById("lasterr").innerHTML = "Please enter your last name";
        isValid = false;
    } else if (lastname.value.length < 3) {
        document.getElementById("lasterr").innerHTML = "Last name must be at least 3 characters";
        isValid = false;
    }

    if (email.value === "") {
        document.getElementById("emailerr").innerHTML = "Please enter your email";
        isValid = false;
    }

    if (password.value === "") {
        document.getElementById("passerr").innerHTML = "Please enter your password";
        isValid = false;
    } else if (password.value.length < 3 || password.value.length > 15) {
        document.getElementById("passerr").innerHTML = "Password must be 3 to 15 characters";
        isValid = false;
    } else {
        var validpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!validpass.test(password.value)) {
            document.getElementById("passerr").innerHTML = "Password must include one uppercase, one lowercase, one digit, and one special character";
            isValid = false;
        }
    }

    if (date.value === "") {
        document.getElementById("dateerr").innerHTML = "Please enter your date of birth";
        isValid = false;
    }

    if (hobby.value === "Select Hobby") {
        document.getElementById("hobbyerr").innerHTML = "Please select a hobby";
        isValid = false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("gendererr").innerHTML = "Please select your gender";
        isValid = false;
    }

    return isValid; 
}

function clearerror() {
    let error = document.querySelectorAll('.error');
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = ""; 
    }
}
