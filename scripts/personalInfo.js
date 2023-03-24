(function () {
  const personalInfo = [
    {
      imageSrc: "",
      imageAlt: "person location",
      href: "https://goo.gl/maps/W4BjwGjK9HJjpHej7",
      content: "Szczecin",
    },
    {
      imageSrc: "",
      imageAlt: "person email address",
      href: "mailto:pskwirowski@gmail.com",
      content: "pskwirowski@gmail.com",
    },
    {
      imageSrc: "",
      imageAlt: "person cellphone number",
      href: "tel:+48601647108",
      content: "+48 601 647 108",
    },
    {
      imageSrc: "",
      imageAlt: "person github profile",
      href: "https://github.com/skwirowski",
      content: "github.com/skwirowski",
    },
    {
      imageSrc: "",
      imageAlt: "person linkedin profile",
      href: "https://www.linkedin.com/in/pawel-skwirowski/",
      content: "/in/pawel-skwirowski",
    },
  ];

  const personalInfoBlocks = (personalData) => /* html */ `
  <header class="header">
    <div class="header__image__wrapper">
      <!-- <img class="header__image" src="./styles/images/" alt="header"/> -->
    </div>
    <h2 class="header__content">Personal info</h2>
  </header>
  ${personalData
    .map(
      (data) => /* html */ `
    <div class="personal-info">
      <div class="personal-info__item">
        <div class="personal-info__item__image__wrapper">
          <!-- <img class="personal-info__location__image" src=${data.imageSrc} alt=${data.imageAlt} /> -->
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
