// StudentHub - Login Page

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter username and password.");
            return;
        }

        // Demo login
        if (username === "student" && password === "1234") {
            localStorage.setItem("studentLoggedIn", "true");
            localStorage.setItem("studentName", "Manthan");

            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    });
});