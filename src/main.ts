import { searchBar } from './components/searchBar/searchBar';
import './style.css';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

/* const data = await fetchAPI('');
const smallData = data.splice(0, 20);

const gameContainer = createElement('main', {
  className: 'gamelist-container',
  childElements: smallData.map((single: Games) => gameList(single)),
}); */

const gameContainer = createElement('main', {
  className: 'gamelist-container',
});

const searchBarContainer = searchBar('searchValue');

const output = createElement('div', {
  className: 'page',
  childElements: [searchBarContainer, gameContainer],
});

if (app !== null) {
  app.append(output);
}
