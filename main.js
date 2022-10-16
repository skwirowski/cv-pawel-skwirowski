import "./style.less";
import { renderHeader } from "./src/scripts/renders/header";
import {
  renderContainer,
  containerCn,
  mainCn,
  asideCn,
} from "./src/scripts/renders/container";
import { renderInfo } from "./src/scripts/renders/info";
import { renderExperience } from "./src/scripts/renders/experience";

const appElement = document.getElementById("app");

renderHeader(appElement);
renderContainer(appElement);

const mainContent = appElement.querySelector(`.${containerCn} .${mainCn}`);
const asideContent = appElement.querySelector(`.${containerCn} .${asideCn}`);

renderInfo(asideContent);
renderExperience(mainContent);
