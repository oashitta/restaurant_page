import { createHtmlElement } from "./helpers";
import "./style.css";

function navbar() {
  const navItems = ["Home", "Menu", "About"];
  const nav = document.createElement("nav");

  navItems.forEach((item) => {
    const a = createHtmlElement("a", null, item);
    nav.appendChild(a);
  });

  return nav;
}

export default navbar;
