import { createElement } from "./helpers/createElement";
import { headingComponent } from "../components/heading";
import icon from "../../img/headings/experience.png";

export function renderExperience(htmlElement) {
  const experienceCn = "experience";
  const containerCn = experienceCn + "_container";

  const info = createElement(
    "div",
    `${experienceCn}`,
    /* html */ `
      ${headingComponent(icon, "Experience")}
      <div class=${containerCn}>
        content
      </div>
  `
  );

  htmlElement.appendChild(info);
}
