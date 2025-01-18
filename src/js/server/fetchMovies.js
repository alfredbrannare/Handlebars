import fetch from 'node-fetch';

const apiBase = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function fetchAllMovies() {
  const res = await fetch(apiBase + '/movies');
  const payload = await res.json();
  return payload.data;
}

export async function fetchMovie(id) {
  const res = await fetch(apiBase + '/movies/' + id);
  const payload = await res.json();
  return payload.data;
}
