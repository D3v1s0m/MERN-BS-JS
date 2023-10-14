document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form element
    var form = document.querySelector("form");

    // Add a form submission event listener
    form.addEventListener("submit", function (event) {
        // Get form elements by name
        var firstname = form.elements["firstname"].value;
        var lastname = form.elements["lastname"].value;
        var email = form.elements["email"].value;
        var password = form.elements["password"].value;
        var repassword = form.elements["repassword"].value;
        var gender = form.querySelector('input[name="gender"]:checked');
        var age = form.elements["age"].value;
        var address = form.elements["address"].value;
        var state = form.elements["state"].value;
        var country = form.elements["country"].value;
        var declaration = form.elements["declaration"];

        // Validation logic
        var valid = true;

        if (firstname.trim() === "") {
            valid = false;
            alert("Please enter your First Name.");
        }

        if (lastname.trim() === "") {
            valid = false;
            alert("Please enter your Last Name.");
        }

        if (email.trim() === "" || !isValidEmail(email)) {
            valid = false;
            alert("Please enter a valid Email address.");
        }

        if (password.trim() === "" || password !== repassword) {
            valid = false;
            alert("Passwords do not match.");
        }

        if (!gender) {
            valid = false;
            alert("Please select a Gender.");
        }

        if (age.trim() === "" || isNaN(age)) {
            valid = false;
            alert("Please enter a valid Age.");
        }

        if (address.trim() === "") {
            valid = false;
            alert("Please enter your Address.");
        }

        if (state.trim() === "") {
            valid = false;
            alert("Please enter your State.");
        }

        if (country.trim() === "") {
            valid = false;
            alert("Please enter your Country.");
        }

        if (!declaration.checked) {
            valid = false;
            alert("Please check the declaration.");
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
