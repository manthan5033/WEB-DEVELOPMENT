// StudentHub - Timetable

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const timetable = [
        ["Monday", "Data Structures", "Computer Networks", "Java Programming"],
        ["Tuesday", "Web Development", "Mathematics", "Digital Electronics"],
        ["Wednesday", "Computer Networks", "Data Structures", "Web Development"],
        ["Thursday", "Java Programming", "Mathematics", "Computer Networks"],
        ["Friday", "Digital Electronics", "Data Structures", "Web Development"]
    ];

    const container = document.getElementById("timetableBody");

    if (!container) return;

    container.innerHTML = "";

    timetable.forEach(function (day) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td><strong>${day[0]}</strong></td>
            <td>${day[1]}</td>
            <td>${day[2]}</td>
            <td>${day[3]}</td>
        `;

        container.appendChild(row);
    });
});