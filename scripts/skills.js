(function () {
  const coreSkillsList = [
    { imageSrc: "", name: "HTML" },
    { imageSrc: "", name: "CSS" },
    { imageSrc: "", name: "JavaScript" },
    { imageSrc: "", name: "TypeScript" },
    { imageSrc: "", name: "React.js" },
    { imageSrc: "", name: "TypeScript" },
    { imageSrc: "", name: "GIT" },
    { imageSrc: "", name: "Bundlers" },
    { imageSrc: "", name: "npm/yarn" },
    { imageSrc: "", name: "RWD" },
    { imageSrc: "", name: "API" },
    { imageSrc: "", name: "SCRUM" },
  ];

  const additionalSkillsList = [
    { imageSrc: "", name: "Node.js" },
    { imageSrc: "", name: "Clouds" },
    { imageSrc: "", name: "NoSQL DB" },
    { imageSrc: "", name: "SQL DB" },
    { imageSrc: "", name: "C# .NET" },
    { imageSrc: "", name: "Python" },
  ];

  const skillsBlocks = (coreSkills, additionalSkills) => /* html */ `
    <header class="header">
        <div class="header__image__wrapper">
          <!-- <img class="header__image" src="./styles/images/" alt="header"/> -->
        </div>
        <h2 class="header__content">Skills</h2>
      </header>
      <div class="skills">
        <div class="skills__core">
          <div class="skills__core__header">Core skills</div>
          ${coreSkills
            .map(
              (core) => /* html */ `
                <div class="skills__core__item">
                  <div class="skills__core__item__image__wrapper">
                    <!-- <img class="skills__core__item__image" src=${core.imageSrc} alt=${core.name} /> -->
                  </div>
                  <div class="skills__core__item__content">${core.name}</div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="skills__additional">
          <div class="skills__additional__header">Additional skills</div>
          ${additionalSkills
            .map(
              (additional) => /* html */ `
              <div class="skills__additional__item">
                <div class="skills__additional__item__image__wrapper">
                  <!-- <img class="skills__additional__item__image" src=${additional.imageSrc} alt=${additional.name} /> -->
                </div>
                <div class="skills__additional__item__content">${additional.name}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
  `;

  const htmlElement = document.getElementById("skills");
  htmlElement.innerHTML = skillsBlocks(coreSkillsList, additionalSkillsList);
})();
