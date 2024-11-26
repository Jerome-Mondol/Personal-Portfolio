function addProjects() {
    const loadProjects = async () => {
        try {
          const response = await import("./data/projects.js");
          const projectParent = document.querySelector(".projects");

          if (Array.isArray(response.projects)) {
            response.projects.forEach((project, index) => {
              // Create the project card container
              let projectCard = document.createElement("div");
              projectCard.className = "project-card";
              projectParent.appendChild(projectCard);

              // Create and append project image
              let projectImage = document.createElement("img");
              projectImage.src =
                project.img.indexOf("http") === 0
                  ? project.img
                  : `./images/${project.img}`;
              projectImage.alt = `Project ${index + 1}`;
              projectCard.appendChild(projectImage);

              // Create and append project text section
              let projectText = document.createElement("div");
              projectText.className = "project-text";
              projectCard.appendChild(projectText);

              // Create and append project name
              let projectName = document.createElement("h1");
              projectName.innerHTML = project.name;
              projectText.appendChild(projectName);

              // Create and append description
              let projectDescription = document.createElement("p");
              projectDescription.innerHTML = project.description;
              projectText.appendChild(projectDescription);

              // Create and append tags
              let projectTags = document.createElement("div");
              projectTags.className = "techs";
              projectText.appendChild(projectTags);

              project.tags.forEach((tags) => {
                // Create a span for each technology tag
                let projectTag = document.createElement("span");
                projectTag.className = "tech-tag";
                projectTag.innerHTML = tags; // Set the tag text directly, no need for nested forEach
                projectTags.appendChild(projectTag); // Append each tag to the projectTags container
              });
            });
          } else {
            console.error(
              "Expected 'response.projects' to be an array but got:",
              response.projects
            );
          }
        } catch (error) {
          console.error("Error loading the project data:", error);
        }
      };

      loadProjects();
}
addProjects()

function addSkills() {
    const loadSkills = async () => {
        try {
            // Import skills.js and destructure the skills array
            const { skills } = await import("./data/skills.js");

            const skillsParent = document.querySelector(".skills");

            // Loop through each skill in the skills array
            skills.forEach(skill => {
                // Create the skill card container
                const skillParent = document.createElement("div");
                skillParent.className = "skill-card";
                skillsParent.appendChild(skillParent);

                // Create and append the skill image
                const skillImage = document.createElement("img");
                skillImage.src = skill.img; // Assuming skill.img is the image path
                skillImage.alt = skill.name; // Add alt text for accessibility
                skillParent.appendChild(skillImage);

                // Create the skill text container
                const skillText = document.createElement("div");
                skillText.className = "skill-text";
                skillParent.appendChild(skillText);

                // Create and append the skill name
                const skillName = document.createElement("h1");
                skillName.innerHTML = skill.name; // Display skill name
                skillText.appendChild(skillName);

                // Create and append the skill subheading
                const skillSubHeading = document.createElement("p");
                skillSubHeading.innerHTML = skill.subHeading; // Display skill subheading
                skillText.appendChild(skillSubHeading);
            });

        } catch (error) {
            console.error("Error loading the skill data:", error);
        }
    };

    loadSkills();  // Call the function to load and display the skills
}

addSkills();  // Invoke the function to load the skills
