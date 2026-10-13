// StudentHub - Assignments

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("studentLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const assignments = [
        {
            id: 1,
            title: "Linked List Implementation",
            subject: "Data Structures",
            dueDate: "2026-10-10",
            status: "Pending"
        },
        {
            id: 2,
            title: "OSI Model Report",
            subject: "Computer Networks",
            dueDate: "2026-10-12",
            status: "Submitted"
        },
        {
            id: 3,
            title: "HTML & CSS Website",
            subject: "Web Development",
            dueDate: "2026-10-15",
            status: "Pending"
        },
        {
            id: 4,
            title: "Java Inheritance Program",
            subject: "Java Programming",
            dueDate: "2026-10-18",
            status: "Pending"
        }
    ];

    const container = document.getElementById("assignmentList");

    if (!container) return;

    function displayAssignments(list) {

        container.innerHTML = "";

        list.forEach(function (assignment) {

            const card = document.createElement("div");

            card.className = "assignment-card";

            card.innerHTML = `
                <h3>${assignment.title}</h3>

                <p>
                    <strong>Subject:</strong>
                    ${assignment.subject}
                </p>

                <p>
                    <strong>Due Date:</strong>
                    ${assignment.dueDate}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${assignment.status}
                </p>

                ${
                    assignment.status === "Pending"
                    ? `<button onclick="submitAssignment(${assignment.id})">
                        Submit
                       </button>`
                    : `<button disabled>Submitted</button>`
                }
            `;

            container.appendChild(card);
        });
    }

    displayAssignments(assignments);

    // Filter
    const filter = document.getElementById("assignmentFilter");

    if (filter) {

        filter.addEventListener("change", function () {

            const value = filter.value;

            if (value === "All") {
                displayAssignments(assignments);
            } else {
                const filtered = assignments.filter(function (item) {
                    return item.status === value;
                });

                displayAssignments(filtered);
            }
        });
    }

    window.submitAssignment = function (id) {

        const assignment = assignments.find(function (item) {
            return item.id === id;
        });

        if (assignment) {
            assignment.status = "Submitted";

            displayAssignments(assignments);

            alert("Assignment submitted successfully!");
        }
    };
});