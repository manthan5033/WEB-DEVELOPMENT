// StudentHub - Courses

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const courses = [
        {
            name: "Data Structures",
            code: "CE201",
            faculty: "Prof. Patel",
            credits: 4
        },
        {
            name: "Computer Networks",
            code: "CE202",
            faculty: "Prof. Shah",
            credits: 4
        },
        {
            name: "Web Development",
            code: "CE203",
            faculty: "Prof. Mehta",
            credits: 3
        },
        {
            name: "Java Programming",
            code: "CE204",
            faculty: "Prof. Joshi",
            credits: 4
        },
        {
            name: "Digital Electronics",
            code: "CE205",
            faculty: "Prof. Desai",
            credits: 3
        },
        {
            name: "Engineering Mathematics",
            code: "MA201",
            faculty: "Prof. Trivedi",
            credits: 4
        }
    ];

    const courseContainer = document.getElementById("courseList");

    if (!courseContainer) return;

    courseContainer.innerHTML = "";

    courses.forEach(function (course) {

        const card = document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Faculty:</strong> ${course.faculty}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <button onclick="viewCourse('${course.code}')">
                View Course
            </button>
        `;

        courseContainer.appendChild(card);
    });
});

function viewCourse(code) {
    alert("Opening course: " + code);
}