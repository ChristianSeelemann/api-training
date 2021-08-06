import { createElement } from '../../utils/functions/createElement';
import styles from './searchBar.module.css';

export function searchBar() {
  const searchContainer = createElement('section', {
    className: styles.searchBar,
    childElements: [
      createElement('div', {
        innerText: 'Filter',
      }),
      createElement('div', {
        childElements: [
          createElement('input', {
            placeholder: 'Search your favorite Game...',
          }),
        ],
      }),
    ],
  });

  return searchContainer;
}
