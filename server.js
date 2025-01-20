import startApp from './src/js/server/app.js';
import { fetchAllMovies, fetchMovie } from './src/js/server/fetchMovies.js';
import navLinks from './src/js/server/navLinks.js';

const api = {
  fetchMovie,
  fetchAllMovies,
};

const nav = {
  navLinks,
};

const app = startApp(api, nav);

const PORT = process.env.PORT || 5080;
app.listen(5080, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
