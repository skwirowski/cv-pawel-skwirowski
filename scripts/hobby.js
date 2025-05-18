(function () {
  const coreSkillsList = [
    { imageSrc: "styles/images/hobby_music.svg", name: "Music" },
    { imageSrc: "styles/images/hobby_swimming.svg", name: "Swimming" },
    { imageSrc: "styles/images/hobby_movies.svg", name: "Movies" },
    { imageSrc: "styles/images/hobby_reading.svg", name: "Reading" },
    { imageSrc: "styles/images/hobby_gaming.svg", name: "Gaming" },
    { imageSrc: "styles/images/hobby_piano.svg", name: "Piano" },
  ];

  const skillsBlocks = (coreSkills) => /* html */ `
    <header class="header">
        <div class="header__image__wrapper">
          <img class="header__image" src="./styles/images/header_hobby.svg" alt="header"/>
        </div>
        <h2 class="header__content">Hobby</h2>
      </header>
      <div class="skills">
        <div class="skills__core">
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
      </div>
  `;

  const htmlElement = document.getElementById("hobby");
  htmlElement.innerHTML = skillsBlocks(coreSkillsList);
})();
