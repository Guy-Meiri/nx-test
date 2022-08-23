/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { pokemon } from './pokemon';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get('/search', (req, res) => {
  res.send(
    pokemon.filter(({ name: { english } }) =>
      english
        .toLocaleLowerCase()
        .includes((req.query.q as string).toLocaleLowerCase() ?? '')
    )
  );
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
