import { infoContent, infoIcons } from "../content/info";
import { createElement } from "./helpers/createElement";
import { headingComponent } from "../components/heading";
import icon from "../../img/headings/personal-info.png";

export function renderInfo(htmlElement) {
  const infoCn = "info";
  const containerCn = infoCn + "_container";
  const wrapperCn = containerCn + "_wrapper";
  const iconCn = wrapperCn + "_icon";
  const imageCn = iconCn + "_image";
  const labelCn = wrapperCn + "_label";

  const createLabel = (key, value) => {
    const { link, description } = value;

    if (key === "github" || key === "linkedin") {
      return /* html */ `
        <a class=${labelCn} href=${link} rel="external">${description}</a>
      `;
    }

    return /* html */ `<span class=${labelCn}>${value}</span>`;
  };

  const infoList = Object.entries(infoContent)
    .map(
      ([key, value]) => /* html */ `
        <div class=${wrapperCn}>
          <div class=${iconCn}>
            <img class=${imageCn} src=${infoIcons[key]} alt=${key} />
          </div>
          ${createLabel(key, value)}
        </div>
      `
    )
    .join("");

  const info = createElement(
    "div",
    `${infoCn}`,
    /* html */ `
      ${headingComponent(icon, "Personal Info")}
      <div class=${containerCn}>
        ${infoList}
      </div>
  `
  );

  htmlElement.appendChild(info);
}
