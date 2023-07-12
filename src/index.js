import navbar from './navbar';
import pageLoad from './pageLoad';
import renderMenu from './menu';
import renderAbout from './about';
import renderFooter from './footer';
import './style.css';

// root is the div in which all the content is displayed.
const root = document.getElementById('root');
let pageContent = pageLoad();
root.appendChild(pageContent);

function home() {
  root.textContent = '';
  pageContent = pageLoad();
  root.appendChild(pageContent);
}

function menu() {
  root.textContent = '';
  const nav = navbar();
  root.appendChild(nav);
  const menuContent = renderMenu();
  root.appendChild(menuContent);
  const footer = renderFooter();
  root.appendChild(footer);
}

function about() {
  root.textContent = '';
  const nav = navbar();
  root.appendChild(nav);
  const aboutContent = renderAbout();
  root.appendChild(aboutContent);
  const footer = renderFooter();
  root.appendChild(footer);
}

document.addEventListener('click', function (event) {
  const target = event.target;
  if (target.id === 'Home') {
    home();
  }

  if (target.id === 'Menu') {
    menu();
  }

  if (target.id === 'About') {
    about();
  }
});
