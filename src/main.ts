import { gameList } from './components/gameList/gameList';
import { searchBar } from './components/searchBar/searchBar';
import './style.css';
import type { Games } from './types';
import { fetchAPI } from './utils/functions/api';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const data = await fetchAPI();
const smallData = data.splice(0, 20);

const gameContainer = createElement('main', {
  className: 'gamelist-container',
  childElements: smallData.map((single: Games) => gameList(single)),
});

const searchBarContainer = searchBar();

const output = createElement('div', {
  className: 'page',
  childElements: [searchBarContainer, gameContainer],
});

if (app !== null) {
  app.append(output);
}
