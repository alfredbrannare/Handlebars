import express from 'express';
import ejs from 'ejs';
import navLinks from './src/js/server/navLinks.js';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const linkData = navLinks();
  res.render('pages/index', { ...linkData });
});

app.get('/movies', (req, res) => {
  const linkData = navLinks();
  res.render('pages/movies', { ...linkData });
});

app.use('/static', express.static('./static'));

const PORT = process.env.PORT || 5080;
app.listen(5080, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
