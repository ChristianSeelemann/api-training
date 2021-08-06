import { gameList } from './gameList/gameList';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.innerHTML = gameList();
}
