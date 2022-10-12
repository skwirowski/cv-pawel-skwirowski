/**
 * @param {string} tag - HTML tag, default 'div'
 * @param {string} className - optional css class name
 * @param {string} innerHTML - contend of created HTML element
 * @returns {HTMLElement} - HTMLElement
 */
export const createElement = (tag = "div", className, innerHTML) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(`${className}`);
  }

  element.innerHTML = innerHTML;

  return element;
};
