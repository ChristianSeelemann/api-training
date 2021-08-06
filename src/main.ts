import { gameList } from './components/gameList/gameList';
import './style.css';
import { createElement } from './utils/functions/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const output = createElement('div', {
  className: 'page',
  childElements: [
    createElement('main', {
      childElements: [
        createElement('section', {
          className: 'gamelist-container',
          childElements: [gameList(), gameList(), gameList(), gameList()],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(output);
}
