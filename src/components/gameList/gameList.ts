import styles from '../gameList/gameList.module.css';
import { createElement } from '../../utils/functions/createElement';

export function gameList(): HTMLElement {
  const descriptionInput =
    'A browser-based 3D space-combat MMO with a massive playerbase! A browser-based 3D space-combat MMO with a massive playerbase! A browser-based 3D space-combat MMO with a massive playerbase!';
  const descriptionOutput = descriptionInput.slice(0, 80) + '...';

  const gameCard = createElement('article', {
    className: styles.card,
    childElements: [
      createElement('div', {
        className: styles.top,
        childElements: [
          createElement('img', {
            className: styles.img,
            src: 'https://www.freetogame.com/g/1/thumbnail.jpg',
          }),
          createElement('div', {
            className: styles.genre,
            innerText: 'MMORPG',
          }),
        ],
      }),
      createElement('section', {
        className: styles.info,
        childElements: [
          createElement('h2', {
            className: styles.title,
            innerText: 'Dark Orbit Reloaded Dark Orbit Reloaded',
          }),
          createElement('p', {
            className: styles.description,
            innerText: descriptionOutput,
          }),
          createElement('section', {
            className: styles.additionals,
            childElements: [
              createElement('div', {
                className: styles.publisher,
                innerText: 'Bigpoint | Digital Extremes',
              }),
              createElement('div', {
                innerHTML: '<i class="fab fa-xbox"></i>',
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return gameCard;
}
