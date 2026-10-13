// StudentHub - Attendance

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const subjects = [
        {
            name: "Data Structures",
            total: 30,
            present: 27
        },
        {
            name: "Computer Networks",
            total: 28,
            present: 23
        },
        {
            name: "Web Development",
            total: 25,
            present: 22
        },
        {
            name: "Java Programming",
            total: 30,
            present: 26
        },
        {
            name: "Digital Electronics",
            total: 27,
            present: 24
        },
        {
            name: "Mathematics",
            total: 32,
            present: 28
        }
    ];

    const container = document.getElementById("attendanceList");

    if (!container) return;

    container.innerHTML = "";

    subjects.forEach(function (subject) {

        const percentage =
            ((subject.present / subject.total) * 100).toFixed(1);

        let status;

        if (percentage >= 75) {
            status = "Good";
        } else {
            status = "Low";
        }

        const row = document.createElement("div");

        row.className = "attendance-row";

        row.innerHTML = `
            <h3>${subject.name}</h3>
            <p>Total Classes: ${subject.total}</p>
            <p>Present: ${subject.present}</p>
            <p>Attendance: ${percentage}%</p>
            <p>Status: <strong>${status}</strong></p>
        `;

        container.appendChild(row);
    });
});