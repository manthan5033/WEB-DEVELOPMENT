// StudentHub - Exams

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const exams = [
        {
            subject: "Data Structures",
            date: "2026-10-20",
            time: "10:00 AM",
            room: "Room 101"
        },
        {
            subject: "Computer Networks",
            date: "2026-10-23",
            time: "10:00 AM",
            room: "Room 102"
        },
        {
            subject: "Web Development",
            date: "2026-10-26",
            time: "2:00 PM",
            room: "Lab 1"
        },
        {
            subject: "Java Programming",
            date: "2026-10-28",
            time: "10:00 AM",
            room: "Lab 2"
        },
        {
            subject: "Digital Electronics",
            date: "2026-10-30",
            time: "2:00 PM",
            room: "Room 105"
        }
    ];

    const container = document.getElementById("examList");

    if (!container) return;

    exams.forEach(function (exam) {

        const card = document.createElement("div");

        card.className = "exam-card";

        card.innerHTML = `
            <h3>${exam.subject}</h3>
            <p><strong>Date:</strong> ${exam.date}</p>
            <p><strong>Time:</strong> ${exam.time}</p>
            <p><strong>Room:</strong> ${exam.room}</p>
        `;

        container.appendChild(card);
    });
});