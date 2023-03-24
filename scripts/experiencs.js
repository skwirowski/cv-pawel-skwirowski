(function () {
  const experience = [
    {
      timeStart: "12.2022",
      timeEnd: "present",
      companyImage: "./styles/images/company_globallogic.jpg",
      companyName: "GlobalLogic",
      position: "Software Engineer",
      location: "Szczecin",
      project:
        "Runtime and User Interface for electric cars navigation system.",
      role: "&#x2022; Primarily <span class='strong'>Front-end developer</span>",
      stackPrimary: "&#x2022; Primarily: TypeScript, React, RxJs, Node.js",
      stackSecondary: null,
      stackAdditional: null,
    },
    {
      timeStart: "01.2022",
      timeEnd: "12.2022",
      companyImage: "./styles/images/company_intive.png",
      companyName: "intive",
      position: "Software Engineering Specialist",
      location: "Szczecin",
      project:
        "Business portal for construction supplies company. Web application allows the customer to view and manipulate business data such as orders, invoices, planned projects or knowledge base. Project includes integration with existing systems and infrastructure.",
      role: "&#x2022; Primarily <span class='strong'>Front-end developer</span> &#x2022; Secondarily Back-end developer &#x2022; Working in SCRUM methodology",
      stackPrimary:
        "&#x2022; Primarily: React, TypeScript, JavaScript, Emotion CSS, Storybook",
      stackSecondary: "&#x2022; Secondarily: Node, Azure Cloud, Cosmos DB",
      stackAdditional: null,
    },
    {
      timeStart: "01.2020",
      timeEnd: "01.2022",
      companyImage: "./styles/images/company_tietoevry.jpg",
      companyName: "TietoEVRY",
      position: "Junior Software Developer",
      location: "Szczecin",
      project:
        "Scheduling web application for Social Care case workers. Application allows to use calendar, appoint and manage meetings, manage various resources.",
      role: "&#x2022; Primarily <span class='strong'>Front-end developer</span> &#x2022; Secondarily Back-end developer &#x2022; Additionally: Automation tests maintenance &#x2022; Working in SCRUM methodology",
      stackPrimary:
        "&#x2022; Primarily: TypeScript, JavaScript, HTML, CSS, Knockout JS",
      stackSecondary:
        "&#x2022; Secondarily: C# and .NET Core environment, Azure Cloud, SQL database",
      stackAdditional: "&#x2022; Additionally: Selenium web driver",
    },
  ];

  const experienceBlocks = (workHistory) => /* html */ `
  <header class="header">
    <div class="header__image__wrapper">
      <!-- <img class="header__image" src="./styles/images/" alt="header"/> -->
    </div>
    <h2 class="header__content">Experience</h2>
  </header>
  ${workHistory
    .map(
      (experience) => /* html */ `
      <div class="experience">
        <div class="experience__time">${experience.timeStart} - ${
        experience.timeEnd
      }</div>
        <div class="experience__company">
          <div class="experience__company__image__wrapper">
            <img
              class="experience__company__image"
              src=${experience.companyImage}
              alt=${experience.companyName} />
          </div>
          <div class="experience__company__name">${experience.companyName}</div>
        </div>
        <div class="experience__postion-location">
          <div class="experience__position-location__position">${
            experience.position
          }</div>
          <div class="experience__position-location__location">${
            experience.location
          }</div>
        </div>
        <div class="experience__project">
          <div class="experience__project__description">Project description:</div>
          <div class="experience__project__content">${experience.project}</div>
        </div>
        <div class="experience__role">
          <div class="experience__role__description">Role:</div>
          <div class="experience__role__content">${experience.role}</div>
        </div>
        <div class="experience__tech-stack">
          <div class="experience__tech-stack__description">Tech stack:</div>
          <div class="experience__tech-stack__content">${
            experience.stackPrimary
          }</div>
          ${
            experience.stackSecondary
              ? `<div class="experience__tech-stack__content">${experience.stackSecondary}</div>`
              : ""
          }
          ${
            experience.stackAdditional
              ? `<div class="experience__tech-stack__content">${experience.stackAdditional}</div>`
              : ""
          }
        </div>
      </div>
    `
    )
    .join("")}
`;

  const htmlElement = document.getElementById("experience");
  htmlElement.innerHTML = experienceBlocks(experience);
})();