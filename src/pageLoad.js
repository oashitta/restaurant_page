import { createHtmlElement } from "./helpers";
import navbar from "./navbar";
import "./style.css";

function pageLoad() {
  // Creating elements
  // const nav = document.createElement("nav");
  // const tab1 = document.createElement("a");
  // const tab2 = document.createElement("a");
  // const tab3 = document.createElement("a");
  const content = createHtmlElement("div", "content");
  const nav = navbar();
  const main = createHtmlElement("main");
  const h2 = createHtmlElement("h2", null, "Welcome to Mot's Bakery");
  const h4 = createHtmlElement(
    "h4",
    null,
    "Place an order to enjoy the best pasteries in town!"
  );
  const button = createHtmlElement("button", null, "Order now :)");
  const footer = createHtmlElement("footer");

  // Setting attributes
  // tab1.href = "";
  // tab1.innerHTML = "Home";
  // tab2.href = "";
  // tab2.innerHTML = "Contact";
  // tab3.href = "";
  // tab3.innerHTML = "Menu";
  // h2.innerHTML = "Welcome to Mot's Bakery";
  // h4.innerHTML = "Place an order to enjoy the best pasteries in town!";
  // button.textContent = "Order now :)";

  // Append elements to the content div

  // const contentDiv = document.getElementById("content");
  // contentDiv.appendChild(nav);
  // nav.appendChild(tab1);
  // nav.appendChild(tab2);
  // nav.appendChild(tab3);
  content.appendChild(nav);
  content.appendChild(main);
  main.appendChild(h2);
  main.appendChild(h4);
  main.appendChild(button);
  content.appendChild(footer);

  return content;
}

export default pageLoad;
