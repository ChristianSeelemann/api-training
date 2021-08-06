export async function fetchAPI() {
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games'
  );
  return response.json();
}
