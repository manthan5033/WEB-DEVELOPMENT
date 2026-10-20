document.getElementById("registerForm").addEventListener("submit", function(event) {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    alert("Registration successful! Welcome to StudentHub.");
});