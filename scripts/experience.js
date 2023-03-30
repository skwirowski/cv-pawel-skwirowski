(function () {
  const experiencePage1 = [
    {
      timeStart: "2022.12",
      timeEnd: "present",
      companyImage: "./styles/images/company_globallogic.jpg",
      companyName: "GlobalLogic",
      position: "Software Engineer",
      location: "Szczecin",
      project:
        "Runtime and User Interface for electric cars navigation system.",
      role: "&#x2022; <span class='strong'>Front-end developer</span>",
      stackPrimary: "&#x2022; TypeScript, React, RxJs, Node.js",
      stackSecondary: null,
      stackAdditional: null,
      rowDisplay: true,
    },
    {
      timeStart: "2022.01",
      timeEnd: "2022.12",
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
      rowDisplay: false,
    },
    {
      timeStart: "2020.01",
      timeEnd: "2022.01",
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
      rowDisplay: false,
    },
    {
      timeStart: "2019.01",
      timeEnd: "2019.10",
      companyImage: "./styles/images/company_tipanddonation.png",
      companyName: "TAD Sp. z o. o.",
      position: "Junior Front-end Developer",
      location: "Szczecin",
      project:
        "Web application for streamers and internet creators. Providing integration with YouTube and Twitch, streaming utilities and tools to monetize internet activity.",
      role: "&#x2022; <span class='strong'>Front-end developer</span>",
      stackPrimary: "&#x2022; HTML, CSS, JavaScript, React, Redux",
      stackSecondary: "",
      stackAdditional: "",
      rowDisplay: true,
    },
  ];

  const experiencePage2 = [
    {
      timeStart: "2014.02",
      timeEnd: "2018.12",
      companyImage: "./styles/images/company_sbt.jpeg",
      companyName: "Schreuders Bouwtechniek (SBT)",
      position: "Construction Engineer & Drafting technician",
      location: "Szczecin",
      project: null,
      role: null,
      stackPrimary: null,
      stackSecondary: null,
      stackAdditional: null,
      rowDisplay: false,
    },
    {
      timeStart: "2013.05",
      timeEnd: "2014.02",
      companyImage: "./styles/images/company_kjr.png",
      companyName: "Construction Office KJR Projekt",
      position: "Assistant Construction Engineer & Draftsman",
      location: "Szczecin",
      project: null,
      role: null,
      stackPrimary: null,
      stackSecondary: null,
      stackAdditional: null,
      rowDisplay: false,
    },
    {
      timeStart: "2009.10",
      timeEnd: "2013.05",
      companyImage: "./styles/images/company_nologo.png",
      companyName: "Architectural Office Józefa Benłużańska",
      position: "Draftsman & Assistant Construction Engineer",
      location: "Goleniów",
      project: null,
      role: null,
      stackPrimary: null,
      stackSecondary: null,
      stackAdditional: null,
      rowDisplay: false,
    },
  ];

  const experienceBlocks = (workHistory, pageNumber) => /* html */ `
  ${
    pageNumber === 1
      ? `<header class="header">
          <div div class="header__image__wrapper">
            <!-- <img class="header__image" src="./styles/images/" alt="header"/> -->
          </div>
          <h2 class="header__content">Experience</h2>
        </header>`
      : ""
  }
  
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
        ${
          experience.project
            ? `<div class="experience__project">
                <div class="experience__project__description">Project description:</div>
                <div class="experience__project__content">${experience.project}</div>
              </div>`
            : ""
        }
        <div class="experience__role-tech-stack__wrapper${
          experience.rowDisplay ? " row-display" : ""
        }">
          ${
            experience.role
              ? `<div class="experience__role">
                  <div class="experience__role__description">Role:</div>
                  <div class="experience__role__content">${experience.role}</div>
                </div>`
              : ""
          }
          ${
            experience.stackPrimary
              ? `<div class="experience__tech-stack">
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
                </div>`
              : ""
          }
        </div>
      </div>
    `
    )
    .join("")}
`;

  const htmlElement1 = document.getElementById("experience-page-1");
  htmlElement1.innerHTML = experienceBlocks(experiencePage1, 1);

  const htmlElement2 = document.getElementById("experience-page-2");
  htmlElement2.innerHTML = experienceBlocks(experiencePage2, 2);
})();
