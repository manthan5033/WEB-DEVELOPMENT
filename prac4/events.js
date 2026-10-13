// StudentHub - Events

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const events = [
        {
            id: 1,
            name: "Tech Fest 2026",
            date: "15 October 2026",
            location: "Main Auditorium"
        },
        {
            id: 2,
            name: "Hackathon",
            date: "18 October 2026",
            location: "Computer Lab"
        },
        {
            id: 3,
            name: "Cricket Tournament",
            date: "22 October 2026",
            location: "College Ground"
        },
        {
            id: 4,
            name: "Cultural Night",
            date: "25 October 2026",
            location: "Main Ground"
        }
    ];

    const container = document.getElementById("eventList");

    if (!container) return;

    events.forEach(function (event) {

        const card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>

            <button onclick="registerEvent(${event.id})">
                Register
            </button>
        `;

        container.appendChild(card);
    });

    window.registerEvent = function (id) {

        const event = events.find(function (item) {
            return item.id === id;
        });

        if (event) {
            alert(
                "You have successfully registered for " +
                event.name
            );
        }
    };
});