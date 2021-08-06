import { gameList } from './components/gameList/gameList';
import './style.css';
import { fetchAPI } from './utils/functions/api';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const data = await fetchAPI();
const smallData = data.splice(0, 20);

const gameContainer = createElement('main', {
  className: 'gamelist-container',
  childElements: smallData.map((single) => gameList(single)),
});

const output = createElement('div', {
  className: 'page',
  childElements: [gameContainer],
});

if (app !== null) {
  app.append(output);
}
