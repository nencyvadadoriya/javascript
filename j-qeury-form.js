$(document).ready(function () {
    let form = $("#form");

    form.on("submit", (event) => {
        event.preventDefault();
        if (ValidationForm()) {
            alert("Form Submitted Successfully!");
            form[0].reset();
        }
    });

    function ValidationForm() {
        let isValid = true;

        let firstname = $("#firstname").val();
        if (firstname === "") {
            $("#firsterr").text("Please enter your first name");
            $("#firstname").addClass("error-border");
            isValid = false;
        } else if (firstname.length < 3) {
            $("#firsterr").text("First name must be at least 3 characters");
            $("#firstname").addClass("error-border");
            isValid = false;
        } else {
            $("#firsterr").text("");
            $("#firstname").removeClass("error-border");
        }

        let lastname = $("#lastname").val();
        if (lastname === "") {
            $("#lasterr").text("Please enter your last name");
            $("#lastname").addClass("error-border");
            isValid = false;
        } else {
            $("#lasterr").text("");
            $("#lastname").removeClass("error-border");
        }

        let email = $("#email").val();
        if (email === "") {
            $("#emailerr").text("Please enter your email");
            $("#email").addClass("error-border");
            isValid = false;
        } else if (!email.includes("@")) {
            $("#emailerr").text("Email must contain '@'");
            $("#email").addClass("error-border");
            isValid = false;
        } else {
            $("#emailerr").text("");
            $("#email").removeClass("error-border");
        }

        let password = $("#password").val();
        if (password === "") {
            $("#passerr").text("Please enter your password");
            $("#password").addClass("error-border");
            isValid = false;
        } else if (password.length < 3 || password.length > 15) {
            $("#passerr").text("Password must be 3 to 15 characters");
            $("#password").addClass("error-border");
            isValid = false;
        } else {
            $("#passerr").text("");
            $("#password").removeClass("error-border");
        }

        let date = $("#date").val();
        if (date === "") {
            $("#dateerr").text("Please enter your date of birth");
            $("#date").addClass("error-border");
            isValid = false;
        } else {
            $("#dateerr").text("");
            $("#date").removeClass("error-border");
        }

        let gender = $('input[name="gender"]:checked').val();
        if (!gender) {
            $("#gendererr").text("Please select your gender");
            isValid = false;
        } else {
            $("#gendererr").text("");
        }

        let hobby = $("#hobby").val();
        if (hobby === "") {
            $("#hobbyerr").text("Please select your hobby");
            $("#hobby").addClass("error-border");
            isValid = false;
        } else {
            $("#hobbyerr").text("");
            $("#hobby").removeClass("error-border");
        }

        return isValid;
    }
});
