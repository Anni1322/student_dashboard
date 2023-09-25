document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const projectDetails = document.getElementById("project-details");

    // Sample project data (you would fetch this from a server in a real application)
    const projects = [
        {
            name: "Web Development Project",
            description: "Create a web application using HTML, CSS, and JavaScript.",
        },
        {
            name: "Mobile App Development",
            description: "Develop a mobile app for iOS and Android platforms.",
        },
        // Add more projects here
    ];

    // Function to display project details
    function displayProjectDetails(project) {
        projectDetails.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
    }

    // Function to populate the project list
    function populateProjectList() {
        projectList.innerHTML = "";
        projects.forEach((project, index) => {
            const listItem = document.createElement("li");
            const joinButton = document.createElement("button");
            joinButton.innerText = "View Details";
            joinButton.addEventListener("click", () => {
                displayProjectDetails(project);
            });
            listItem.innerHTML = `<strong>${project.name}</strong> - ${project.description}`;
            listItem.appendChild(joinButton);
            projectList.appendChild(listItem);
        });
    }

    // Initial population of the project list
    populateProjectList();
});
