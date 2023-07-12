import { createHtmlElement } from './helpers';
import './style.css';

function renderMenu() {
  const content = createHtmlElement('div', 'menu-content');
  const menuItems = [
    {
      name: 'Croissant',
      price: '$12',
      description: 'Delicious buttery croissants.',
    },
    {
      name: 'Stuffed Croissant',
      price: '$22',
      description:
        'Delicious buttery croissants filled with delicate berry stuffings. ',
    },
    {
      name: 'Cupcakes',
      price: '$25',
      description:
        'Choose from are extensive and flavour bursting options - Vanilla, Cookies and Cream, Chocolate.',
    },
    {
      name: 'Bagels',
      price: '$15',
      description: 'this is a random description of the meal.',
    },
    {
      meal: 'French Toast',
      price: '$30',
      description: 'this is a random description of the meal.',
    },
  ];

  menuItems.forEach((item) => {
    const div = createHtmlElement('div', 'food-item', null);

    const name = createHtmlElement('h2', null, item.name);
    const description = createHtmlElement('h4', null, item.description);
    const price = createHtmlElement('p', null, item.price);
    const button = createHtmlElement('button', null, 'Add to cart  🛒');

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);

    content.appendChild(div);
  });
  return content;
}

export default renderMenu;
