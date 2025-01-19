import express from 'express';
import ejs from 'ejs';
import navLinks from './src/js/server/navLinks.js';
import { fetchAllMovies } from './src/js/server/fetchMovies.js';
import { fetchMovie } from './src/js/server/fetchMovies.js';
import { marked } from 'marked';

const app = express();

app.locals.formatMarkdown = (text) => marked(text);
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const linkData = navLinks();
  const moviesData = await fetchAllMovies();
  res.render('pages/index', { moviesData, ...linkData });
});

app.get('/movies', async (req, res) => {
  const linkData = navLinks();
  const moviesData = await fetchAllMovies();
  res.render('pages/allMovies', { moviesData, ...linkData });
});

app.get('/movie/:movieId', async (req, res) => {
  const linkData = navLinks();
  const movieData = await fetchMovie(req.params.movieId);
  res.render('pages/movie', { movieData, ...linkData });
});

app.use('/static', express.static('./static'));

const PORT = process.env.PORT || 5080;
app.listen(5080, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
