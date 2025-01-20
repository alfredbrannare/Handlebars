import express from 'express';
import ejs from 'ejs';
import navLinks from './navLinks.js';
import { marked } from 'marked';

function startApp(api) {
  const app = express();

  app.locals.formatMarkdown = (text) => marked(text);
  app.set('view engine', 'ejs');

  app.get('/', async (req, res) => {
    const linkData = navLinks();
    const moviesData = await api.fetchAllMovies();
    res.render('pages/index', { moviesData, ...linkData });
  });

  app.get('/movies', async (req, res) => {
    const linkData = navLinks();
    const moviesData = await api.fetchAllMovies();
    res.render('pages/allMovies', { moviesData, ...linkData });
  });

  app.get('/movie/:movieId', async (req, res) => {
    const linkData = navLinks();
    const movieData = await api.fetchMovie(req.params.movieId);
    res.render('pages/movie', { movieData, ...linkData });
  });

  app.use('/static', express.static('./static'));

  app.use((req, res) => {
    const linkData = navLinks();
    res.status(404).render('pages/error', { message: 'Page not found', ...linkData });
  });

  return app;
}

export default startApp;
