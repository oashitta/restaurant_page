import { createHtmlElement } from './helpers';
import './style.css';

function renderAbout() {
  const content = createHtmlElement('div', 'about-content');
  const div = createHtmlElement('div', 'about-details', null);

  const header = createHtmlElement('h2', 'about-header', 'A little about us!');
  const details = createHtmlElement(
    'p',
    'about-details',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eius non placeat deserunt a quas ut voluptates possimus, dolores similique, sunt aperiam modi assumenda quis totam, porro enim illum. Lorem, ipsum.'
  );

  const details2 = createHtmlElement(
    'p',
    'about-details',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eius non placeat deserunt a quas ut voluptates possimus, dolores similique, sunt aperiam modi assumenda quis totam, porro enim illum. Lorem, ipsum.'
  );

  div.appendChild(header);
  div.appendChild(details);
  div.appendChild(details2);

  content.appendChild(div);
  return content;
}

export default renderAbout;
