// StudentHub - Notices

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const notices = [
        {
            title: "Mid-Term Examination Notice",
            date: "06 October 2026",
            message: "Mid-term examinations will start from 20 October 2026."
        },
        {
            title: "Assignment Submission",
            date: "05 October 2026",
            message: "Students must submit pending assignments before the deadline."
        },
        {
            title: "College Event",
            date: "03 October 2026",
            message: "Annual technical event registrations are now open."
        },
        {
            title: "Library Notice",
            date: "01 October 2026",
            message: "Library timings have been extended during examination preparation."
        }
    ];

    const container = document.getElementById("noticeList");

    if (!container) return;

    notices.forEach(function (notice) {

        const card = document.createElement("div");

        card.className = "notice-card";

        card.innerHTML = `
            <h3>${notice.title}</h3>
            <small>${notice.date}</small>
            <p>${notice.message}</p>
        `;

        container.appendChild(card);
    });
});