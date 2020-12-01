import * as express from 'express';
import * as bodyParser from 'body-parser';
import signaling from './signaling';

export const createServer = (config): express.Application => {
  const app: express.Application = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.get('/protocol', (req, res) => res.json({useWebSocket: config.websocket}));
  app.use('/signaling', signaling);
  app.use(express.static('/../public/stylesheets'));
  app.use(express.static('/../public/scripts'));
  app.use('/images', express.static('/../public/images'));
  app.get('/', (req, res) => {
    res.sendFile(`index.html`, { root: `./${__dirname}` });
  });

  return app;
};
