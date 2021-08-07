import { searchBar } from './components/searchBar/searchBar';
import './style.css';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const gameContainer = createElement('main', {
  className: 'gamelist-container',
});

const searchBarContainer = createElement('section', {
  className: 'filter-container',
  childElements: [searchBar()],
});

const output = createElement('div', {
  className: 'page',
  childElements: [searchBarContainer, gameContainer],
});

if (app !== null) {
  app.append(output);
}
