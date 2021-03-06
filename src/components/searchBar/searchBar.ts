import { fetchAPI, fetchAPIFilter } from '../../utils/functions/api';
import { createElement } from '../../utils/functions/createElement';
import styles from './searchBar.module.css';
import { gameList } from '../gameList/gameList';

async function fireInitFetch() {
  const response = await fetchAPI();
  const smallGames = response.splice(0, 20);
  const games = smallGames.map((Game) => gameList(Game));
  const searchContainer = document.querySelector('.gamelist-container');
  if (searchContainer !== null) {
    searchContainer.innerHTML = '';
    searchContainer.append(...games);
  }
}

fireInitFetch();

let timer: number | undefined;

const searchElement = createElement('input', {
  placeholder: 'Search your favorite Game...',
  className: styles.search__input,
  onkeyup: async () => {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      const searchQuery = searchElement.value;
      const searchContainer = document.querySelector('.gamelist-container');

      if (searchQuery === '') {
        fireInitFetch();
      } else {
        const response = await fetchAPIFilter();
        const reg = new RegExp(searchQuery, 'ig');
        const gamesFiltered = response.filter((game) => game.title.match(reg));
        const filteredList = gamesFiltered.map((Game) => gameList(Game));

        if (searchContainer) {
          searchContainer.innerHTML = '';
          if (filteredList.length === 0) {
            searchContainer.innerHTML = `<div class="${styles.notFound}">Oops... maybe try another search?</div>`;
          } else {
            searchContainer.append(...filteredList);
          }
        }
      }
    }, 750);
  },
});

export function searchBar(): HTMLElement {
  const searchContainer = createElement('section', {
    className: styles.searchBar,
    childElements: [
      createElement('div', {
        childElements: [searchElement],
      }),
    ],
  });

  return searchContainer;
}
