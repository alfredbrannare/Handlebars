import express from 'express';
import ejs from 'ejs';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.use('/static', express.static('./static'));

const PORT = process.env.PORT || 5080;
app.listen(5080, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
