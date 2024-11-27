function addProjects() {
  const loadProjects = async () => {
    try {
      const response = await import("./data/projects.js");
      const projectParent = document.querySelector(".projects");

      if (Array.isArray(response.projects)) {
        response.projects.forEach((project, index) => {
          let projectCard = document.createElement("div");
          projectCard.className = "project-card";
          projectParent.appendChild(projectCard);

          let projectImage = document.createElement("img");
          projectImage.src =
            project.img.indexOf("http") === 0
              ? project.img
              : `../images/${project.img}`;
          projectImage.alt = `Project ${index + 1}`;
          projectCard.appendChild(projectImage);

          let projectText = document.createElement("div");
          projectText.className = "project-text";
          projectCard.appendChild(projectText);

          let projectName = document.createElement("h1");
          projectName.innerHTML = project.name;
          projectText.appendChild(projectName);

          let projectDescription = document.createElement("p");
          projectDescription.innerHTML = project.description;
          projectText.appendChild(projectDescription);

          let projectTags = document.createElement("div");
          projectTags.className = "techs";
          projectText.appendChild(projectTags);

          project.tags.forEach((tags) => {
            let projectTag = document.createElement("span");
            projectTag.className = "tech-tag";
            projectTag.innerHTML = tags;
            projectTags.appendChild(projectTag);
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
addProjects();

function addSkills() {
  const loadSkills = async () => {
    try {
      const { skills } = await import("./data/skills.js");

      const skillsParent = document.querySelector(".skills");

      skills.forEach((skill) => {
        const skillParent = document.createElement("div");
        skillParent.className = "skill-card";
        skillsParent.appendChild(skillParent);

        const skillImage = document.createElement("img");
        skillImage.src = skill.img;
        skillImage.alt = skill.name;
        skillParent.appendChild(skillImage);

        const skillText = document.createElement("div");
        skillText.className = "skill-text";
        skillParent.appendChild(skillText);

        const skillName = document.createElement("h1");
        skillName.innerHTML = skill.name;
        skillText.appendChild(skillName);

        const skillSubHeading = document.createElement("p");
        skillSubHeading.innerHTML = skill.subHeading;
        skillText.appendChild(skillSubHeading);
      });
    } catch (error) {
      console.error("Error loading the skill data:", error);
    }
  };

  loadSkills();
}

addSkills();

function preloader() {
  let loader = document.querySelector(".preloader");
  let loadingAnimation = document.querySelector(".preloader svg");
  let portfolioWrapper = document.querySelector(".portfolio-wrapper");

  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    loadingAnimation.style.display = "none";
    portfolioWrapper.style.display = "block";
  }, 2100);
}

preloader();
