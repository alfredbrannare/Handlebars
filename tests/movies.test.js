import { expect, test } from '@jest/globals';
import request from 'supertest';
import startApp from '../src/js/server/app.js';

test('Home page shows list of movies and navigation links', async () => {
  const app = startApp(
    {
      fetchMovie: async () => ({
        id: 1,
        title: 'Pulp Fiction',
      }),
      fetchAllMovies: async () => [
        { id: 1, title: 'Pulp Fiction' },
        { id: 2, title: 'Fire Walk With Me' },
        { id: 3, title: 'Isle of Dogs' },
      ],
    },
    {
      navLinks: async () => ({
        headerData: [
          { label: 'BILJETTER', id: 'biljetter', link: '#' },
          { label: 'EVENEMANG', id: 'evenemang', link: '#' },
          { label: 'FILMER', id: 'filmer', link: 'movies' },
        ],
        footerSection1: [
          { label: 'OM KINO', link: 'about' },
          { label: 'FRÅGOR SVAR', link: '#' },
          { label: 'KONTAKTA OSS', link: '#' },
        ],
      }),
    }
  );

  const response = await request(app).get('/').expect('Content-Type', /html/).expect(200);

  console.log(response.text);

  expect(response.text).toMatch('Pulp Fiction');
  expect(response.text).toMatch('Fire Walk With Me');
  expect(response.text).toMatch('Isle of Dogs');

  expect(response.text).toMatch('BILJETTER');
  expect(response.text).toMatch('EVENEMANG');
  expect(response.text).toMatch('FILMER');
});
