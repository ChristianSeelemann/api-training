import styles from '../gameList/gameList.module.css';
import { createElement } from '../../utils/functions/createElement';

export function gameList(): HTMLElement {
  const gameListOutput = createElement('div', {
    innerText: 'Hello',
  });

  return gameListOutput;
}
