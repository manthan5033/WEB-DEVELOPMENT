// StudentHub - Resources

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const resources = [
        {
            title: "Data Structures Notes",
            subject: "Data Structures",
            type: "PDF",
            file: "#"
        },
        {
            title: "Computer Networks Notes",
            subject: "Computer Networks",
            type: "PDF",
            file: "#"
        },
        {
            title: "HTML & CSS Guide",
            subject: "Web Development",
            type: "PDF",
            file: "#"
        },
        {
            title: "Java Programming Notes",
            subject: "Java Programming",
            type: "PDF",
            file: "#"
        },
        {
            title: "Digital Electronics Notes",
            subject: "Digital Electronics",
            type: "PDF",
            file: "#"
        }
    ];

    const container = document.getElementById("resourceList");

    if (!container) return;

    resources.forEach(function (resource) {

        const card = document.createElement("div");

        card.className = "resource-card";

        card.innerHTML = `
            <h3>${resource.title}</h3>

            <p>
                <strong>Subject:</strong>
                ${resource.subject}
            </p>

            <p>
                <strong>Type:</strong>
                ${resource.type}
            </p>

            <button onclick="openResource('${resource.file}')">
                Open Resource
            </button>
        `;

        container.appendChild(card);
    });

    window.openResource = function (file) {

        if (file === "#") {
            alert("Resource file will be added here.");
        } else {
            window.open(file, "_blank");
        }
    };
});