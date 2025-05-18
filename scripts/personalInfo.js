(function () {
  const personalInfo = [
    {
      imageSrc: "styles/images/locationpin.svg",
      imageAlt: "person location",
      href: "https://goo.gl/maps/W4BjwGjK9HJjpHej7",
      content: "Szczecin",
    },
    {
      imageSrc: "styles/images/email.svg",
      imageAlt: "person email address",
      href: "mailto:pskwirowski@gmail.com",
      content: "pskwirowski@gmail.com",
    },
    {
      imageSrc: "styles/images/mobile.svg",
      imageAlt: "person cellphone number",
      href: "tel:+48601647108",
      content: "+48 601 647 108",
    },
    {
      imageSrc: "styles/images/github.svg",
      imageAlt: "person github profile",
      href: "https://github.com/skwirowski",
      content: "github.com/skwirowski",
    },
    {
      imageSrc: "styles/images/linkedin.svg",
      imageAlt: "person linkedin profile",
      href: "https://www.linkedin.com/in/pawel-skwirowski/",
      content: "/in/pawel-skwirowski",
    },
  ];

  const personalInfoBlocks = (personalData) => /* html */ `
  <header class="header">
    <div class="header__image__wrapper">
      <img class="header__image" src="./styles/images/header_personal.svg" alt="header"/>
    </div>
    <h2 class="header__content">Personal info</h2>
  </header>
  ${personalData
    .map(
      (data) => /* html */ `
    <div class="personal-info">
      <div class="personal-info__item">
        <div class="personal-info__item__image__wrapper">
          <img class="personal-info__item__image" src=${data.imageSrc} alt=${data.imageAlt} />
        </div>
        <a class="personal-info__item__content" href=${data.href}>${data.content}</a>
      </div>
    </div>
  `
    )
    .join("")}
`;

  const htmlElement = document.getElementById("personal-info");
  htmlElement.innerHTML = personalInfoBlocks(personalInfo);
})();
