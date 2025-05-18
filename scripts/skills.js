(function () {
  const coreSkillsList = [
    { imageSrc: "styles/images/html5.svg", name: "HTML" },
    { imageSrc: "styles/images/css3.svg", name: "CSS" },
    { imageSrc: "styles/images/javascript.svg", name: "JavaScript" },
    { imageSrc: "styles/images/typescript.svg", name: "TypeScript" },
    { imageSrc: "styles/images/reactjs.svg", name: "React.js" },
    { imageSrc: "styles/images/redux.svg", name: "State" },
    { imageSrc: "styles/images/git.svg", name: "GIT" },
    { imageSrc: "styles/images/webpack.svg", name: "Bundlers" },
    { imageSrc: "styles/images/package.svg", name: "npm/yarn" },
    { imageSrc: "styles/images/rwd.svg", name: "RWD" },
    { imageSrc: "styles/images/api.svg", name: "API" },
    { imageSrc: "styles/images/scrum.svg", name: "SCRUM" },
  ];

  const additionalSkillsList = [
    { imageSrc: "styles/images/nodejs.svg", name: "Node.js" },
    { imageSrc: "styles/images/clouds.svg", name: "Clouds" },
    { imageSrc: "styles/images/nosqldatabase.svg", name: "NoSQL DB" },
    { imageSrc: "styles/images/sqldatabase.svg", name: "SQL DB" },
    { imageSrc: "styles/images/dotnet.svg", name: "C# .NET" },
    { imageSrc: "styles/images/python.svg", name: "Python" },
  ];

  const skillsBlocks = (coreSkills, additionalSkills) => /* html */ `
    <header class="header">
        <div class="header__image__wrapper">
          <img class="header__image" src="./styles/images/header_skills.svg" alt="header"/>
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
                  <div class="skills__core__item__image__wrapper">${
                    core.imageSrc
                      ? `<img class="skills__core__item__image" src=${core.imageSrc} alt=${core.name} />`
                      : ""
                  }
                  </div>
                  <div class="skills__core__item__content">${
                    core.name ? core.name : ""
                  }</div>
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
                <div class="skills__additional__item__image__wrapper">${
                  additional.imageSrc
                    ? `<img class="skills__additional__item__image" src=${additional.imageSrc} alt=${additional.name} />`
                    : ""
                }
                </div>
                <div class="skills__additional__item__content">${
                  additional.name ? additional.name : ""
                }</div>
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
