// StudentHub - Profile

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const studentName = localStorage.getItem("studentName") || "Manthan";

    const nameInput = document.getElementById("studentName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const branchInput = document.getElementById("branch");
    const semesterInput = document.getElementById("semester");

    // Load saved data
    if (nameInput) {
        nameInput.value = localStorage.getItem("studentName") || studentName;
    }

    if (emailInput) {
        emailInput.value =
            localStorage.getItem("studentEmail") || "student@example.com";
    }

    if (phoneInput) {
        phoneInput.value =
            localStorage.getItem("studentPhone") || "9876543210";
    }

    if (branchInput) {
        branchInput.value =
            localStorage.getItem("studentBranch") || "Computer Engineering";
    }

    if (semesterInput) {
        semesterInput.value =
            localStorage.getItem("studentSemester") || "2";
    }

    // Save profile
    const profileForm = document.getElementById("profileForm");

    if (profileForm) {
        profileForm.addEventListener("submit", function (e) {
            e.preventDefault();

            localStorage.setItem("studentName", nameInput.value);
            localStorage.setItem("studentEmail", emailInput.value);
            localStorage.setItem("studentPhone", phoneInput.value);
            localStorage.setItem("studentBranch", branchInput.value);
            localStorage.setItem("studentSemester", semesterInput.value);

            alert("Profile updated successfully!");
        });
    }
});