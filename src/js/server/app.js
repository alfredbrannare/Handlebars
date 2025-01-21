import express from 'express';
import { engine } from 'express-handlebars';
import { marked } from 'marked';

function startApp(api, nav) {
  const app = express();

  app.locals.formatMarkdown = (text) => marked(text);
  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './templates');

  app.get('/', async (req, res) => {
    try {
      const linkData = await nav.navLinks();
      const moviesData = await api.fetchAllMovies();

      console.log('Movies Data:', moviesData);
      console.log('Link Data:', linkData);

      if (!moviesData || !linkData) {
        console.error('Data is missing or malformed');
        return res.status(500).send('Movies or Links data is missing or malformed');
      }

      res.render('index', { moviesData, ...linkData });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error occurred while fetching data from API or navLinks');
    }
  });

  app.get('/movies', async (req, res) => {
    const linkData = await nav.navLinks();
    const moviesData = await api.fetchAllMovies();
    res.render('allMovies', { moviesData, ...linkData });
  });

  app.get('/movie/:movieId', async (req, res) => {
    const linkData = await nav.navLinks();
    const movieData = await api.fetchMovie(req.params.movieId);
    res.render('movie', { movieData, ...linkData });
  });

  app.use('/static', express.static('./static'));

  app.use((req, res) => {
    const linkData = nav.navLinks();
    res.status(404).render('error', { message: 'Page not found', ...linkData });
  });

  return app;
}

export default startApp;
