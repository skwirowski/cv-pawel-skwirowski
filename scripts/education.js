(function () {
  const education = [
    {
      timeStart: "2017.12",
      timeEnd: "2018.07",
      institutionImage: "./styles/images/education_isa.png",
      institutionName: "infoShare Academy",
      field: "Junior Front-end Developer",
      location: "Szczecin",
      description:
        "Course preparing for Front-End Development position. The scope covered SCRUM methodologies and web development topics including: HTML, CSS, JS, RWD, UX, REST, React. During three sprints teams worked on web applications.",
    },
    {
      timeStart: "2012.10",
      timeEnd: "2015.11",
      institutionImage: "./styles/images/education_zut.png",
      institutionName: "West Pomeranian University of Technology",
      field: "Master of Science in Engineering",
      location: "Szczecin",
      description: "Faculty of Civil Engineering and Architecture",
    },
    {
      timeStart: "2005.10",
      timeEnd: "2012.09",
      institutionImage: "./styles/images/education_zut.png",
      institutionName: "West Pomeranian University of Technology",
      field: "Bachelor of Science in Engineering",
      location: "Szczecin",
      description: "Faculty of Civil Engineering and Architecture",
    },
  ];

  const educationBlocks = (educationHistory) => /* html */ `
    <header class="header">
      <div class="header__image__wrapper">
        <img class="header__image" src="./styles/images/header_education.svg" alt="header"/>
      </div>
      <h2 class="header__content">Education</h2>
    </header>
    ${educationHistory
      .map(
        (education) => /* html */ `
        <div class="education">
          <div class="education__time">${education.timeStart} - ${education.timeEnd}</div>
          <div class="education__institution">
            <div class="education__institution__image__wrapper">
              <img
                class="education__institution__image"
                src=${education.institutionImage}
                alt=${education.institutionName}
              />
            </div>
            <div class="education__institution__name">${education.institutionName}</div>
          </div>
          <div class="education__field-location">
            <div class="education__field-location__field">${education.field}</div>
            <div class="education__field-location__location">${education.location}</div>
          </div>
          <div class="education__info">
            <div class="education__info__description">Description:</div>
            <div class="education__info__content">${education.description}</div>
          </div>
        </div>
      `
      )
      .join("")}
    
  `;

  const htmlElement = document.getElementById("education");
  htmlElement.innerHTML = educationBlocks(education);
})();
