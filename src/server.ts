import * as express from 'express';
import * as bodyParser from 'body-parser';
import signaling from './signaling';

import { log, LogLevel } from './log';

export const createServer = (config): express.Application => {
  const app: express.Application = express();
  // const signal = require('./signaling');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.get('/protocol', (req, res) => res.json({useWebSocket: config.websocket}));
  app.use('/signaling', signaling);

  return app;
};
