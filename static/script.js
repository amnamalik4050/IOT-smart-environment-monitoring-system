// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Login form validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // Signup form validation
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            const username = document.getElementById("signupUsername").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password1 = document.getElementById("signupPassword").value;
            const password2 = document.getElementById("signupConfirmPassword").value;

            if (username === "" || email === "" || password1 === "" || password2 === "") {
                alert("All fields are required!");
                event.preventDefault();
            } else if (password1 !== password2) {
                alert("Passwords do not match!");
                event.preventDefault();
            }
        });
    }

    // Optional: Add simple interactive effect for inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.style.borderColor = "#4CAF50"; // Green border on focus
        });
        input.addEventListener("blur", function() {
            this.style.borderColor = ""; // Reset border
        });
    });

});