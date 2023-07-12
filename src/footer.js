import { createHtmlElement } from './helpers';
import './style.css';

function renderFooter() {
  const footer = createHtmlElement('footer');
  const p = createHtmlElement('p', null, 'Github: @oashitta');

  footer.appendChild(p);

  return footer;
}

export default renderFooter;
