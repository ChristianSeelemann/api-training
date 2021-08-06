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
    searchContainer.append(...games);
  }
}

fireInitFetch();

const searchElement = createElement('input', {
  placeholder: 'Search your favorite Game...',
  className: 'search__input',
  oninput: async () => {
    const searchQuery = searchElement.value;
    const searchContainer = document.querySelector('.gamelist-container');

    if (searchQuery === '') {
      if (searchContainer) {
        searchContainer.innerHTML = '';
      }
      fireInitFetch();
    } else {
      const response = await fetchAPIFilter(searchQuery);
      const gamesFiltered = response.filter((game) =>
        game.title.match(searchQuery)
      );
      const filteredList = gamesFiltered.map((Game) => gameList(Game));

      if (searchContainer) {
        searchContainer.innerHTML = '';
        searchContainer.append(...filteredList);
      }
    }
  },
});

export function searchBar(searchString: string): HTMLElement {
  const searchContainer = createElement('section', {
    className: styles.searchBar,
    childElements: [
      createElement('div', {
        innerText: 'Filter',
      }),
      createElement('div', {
        childElements: [searchElement],
      }),
    ],
  });

  return searchContainer;
}
