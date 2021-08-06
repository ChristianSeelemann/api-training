import type { Games, Game } from '../../types';

export async function fetchAPI(): Promise<Games[]> {
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games'
  );

  return response.json();
}

export async function fetchAPIFilter(searchQuery: string): Promise<Games[]> {
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games'
  );

  return response.json();
}
