import fetch from 'node-fetch';

const apiBase = 'https://plankton-app-xhkom.ondigitalocean.app/api';

function reformMovieObject(apiObject) {
  return {
    id: apiObject.id,
    ...apiObject.attributes,
  };
}

export async function fetchAllMovies() {
  const res = await fetch(apiBase + '/movies');
  const payload = await res.json();
  return payload.data.map(reformMovieObject);
}

export async function fetchMovie(id) {
  const res = await fetch(apiBase + '/movies/' + id);
  const payload = await res.json();
  return reformMovieObject(payload.data);
}
