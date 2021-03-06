import styles from '../gameList/gameList.module.css';
import { createElement } from '../../utils/functions/createElement';
import type { Games } from '../../types';

export function gameList(single: Games): HTMLElement {
  const descriptionInput = single.short_description;
  const descriptionOutput = descriptionInput.slice(0, 50) + '...';

  const platform = () => {
    if (single.platform === 'PC (Windows)') {
      return '<i class="fab fa-windows"></i>';
    } else if (single.platform === 'Web Browser') {
      return '<i class="fas fa-window-restore"></i>';
    } else {
      return '';
    }
  };
  const platformContainer = createElement('div', {
    innerHTML: platform(),
  });

  const gameCard = createElement('article', {
    className: styles.card,
    childElements: [
      createElement('div', {
        className: styles.top,
        childElements: [
          createElement('img', {
            className: styles.img,
            src: single.thumbnail,
          }),
          createElement('div', {
            className: styles.genre,
            innerText: single.genre,
          }),
        ],
      }),
      createElement('section', {
        className: styles.info,
        childElements: [
          createElement('h2', {
            className: styles.title,
            innerText: single.title,
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
                innerText: single.developer,
              }),
              platformContainer,
            ],
          }),
        ],
      }),
    ],
  });

  return gameCard;
}
