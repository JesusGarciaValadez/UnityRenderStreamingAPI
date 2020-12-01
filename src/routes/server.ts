import * as express from 'express';
import * as bodyParser from 'body-parser';
import signaling from './signaling';

export const createServer = (config): express.Application => {
  const app: express.Application = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.get('/.netlify/api/protocol', (req, res) => res.json({useWebSocket: config.websocket}));
  app.use('/.netlify/api/signaling', signaling);

  return app;
};
