export function headingComponent(icon, label) {
  const headingCn = "heading";
  const iconCn = headingCn + "_icon";
  const imageCn = iconCn + "_image";
  const labelCn = headingCn + "_label";

  return /* html */ `
    <div class=${headingCn}>
      <div class=${iconCn}>
        <img class=${imageCn} src=${icon} alt=${label} />
      </div>
      <h2 class=${labelCn}>${label}</h2>
    </div>
  `;
}
