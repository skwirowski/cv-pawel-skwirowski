import { headerContent } from "../content/header";
import { emphasize } from "./helpers/emphasize";
import { createElement } from "./helpers/createElement";

export function renderHeader(htmlElement) {
  const { firstName, secondName, position, description } = headerContent;
  const headerCn = "header";
  const nameCn = headerCn + "_name";
  const positionCn = headerCn + "_position";
  const descriptionCn = headerCn + "_description";

  const header = createElement(
    "header",
    `${headerCn}`,
    /* html */ `
      <h1 class=${nameCn}>${firstName}
        <span class=${emphasize(nameCn)}>${secondName}</span>
      </h1>
      <span class=${positionCn}>${position}</span>
      <p class=${descriptionCn}>${description}</p>
  `
  );

  htmlElement.appendChild(header);
}
