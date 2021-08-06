import { gameList } from './components/gameList/gameList';
import './style.css';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const output = createElement('main', {
  childElements: [gameList()],
});

if (app !== null) {
  app.append(output);
}
