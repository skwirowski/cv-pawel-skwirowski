import { createElement } from "./helpers/createElement";

export const containerCn = "container";
export const mainCn = containerCn + "_main";
export const asideCn = containerCn + "_aside";

export function renderContainer(htmlElement) {
  const container = createElement(
    "main",
    `${containerCn}`,
    /* html */ `
      <div class=${mainCn}></div>
      <div class=${asideCn}></div>
  `
  );

  htmlElement.appendChild(container);
}
