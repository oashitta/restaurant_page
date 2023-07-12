import { createHtmlElement } from './helpers';
import navbar from './navbar';
import renderFooter from './footer';
import './style.css';

function pageLoad() {
  // Creating elements and setting attributes

  const content = createHtmlElement('div', 'content');
  const nav = navbar();
  const main = createHtmlElement('main');
  const div = createHtmlElement('div', 'home');
  const h2 = createHtmlElement('h2', null, "Welcome to Mot's Bakery");
  const h4 = createHtmlElement(
    'h4',
    null,
    'Place an order to enjoy the best pasteries in town!'
  );
  const button = createHtmlElement('button', null, 'Order now 🤤');
  const footer = renderFooter();

  content.appendChild(nav);
  div.appendChild(h2);
  div.appendChild(h4);
  div.appendChild(button);
  main.appendChild(div);
  content.appendChild(main);
  content.appendChild(footer);

  return content;
}

export default pageLoad;
