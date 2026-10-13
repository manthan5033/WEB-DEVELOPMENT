// StudentHub - Dashboard

document.addEventListener("DOMContentLoaded", function () {

    // Login protection
    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    // Student name
    const studentName = localStorage.getItem("studentName") || "Student";

    const nameElements = document.querySelectorAll(".student-name");

    nameElements.forEach(function (element) {
        element.textContent = studentName;
    });

    // Dashboard statistics
    const attendance = 85;
    const assignments = 4;
    const courses = 6;
    const upcomingExams = 2;

    const attendanceElement = document.getElementById("attendancePercentage");
    const assignmentElement = document.getElementById("assignmentCount");
    const courseElement = document.getElementById("courseCount");
    const examElement = document.getElementById("examCount");

    if (attendanceElement) {
        attendanceElement.textContent = attendance + "%";
    }

    if (assignmentElement) {
        assignmentElement.textContent = assignments;
    }

    if (courseElement) {
        courseElement.textContent = courses;
    }

    if (examElement) {
        examElement.textContent = upcomingExams;
    }

    // Logout
    const logoutButtons = document.querySelectorAll(".logout");

    logoutButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            localStorage.removeItem("studentLoggedIn");
            localStorage.removeItem("studentName");

            window.location.href = "index.html";
        });
    });
});