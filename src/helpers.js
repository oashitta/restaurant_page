// this helper function is usef to create elements in order to keep the code clean
function createHtmlElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

export { createHtmlElement };
