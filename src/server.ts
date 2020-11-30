import * as express from 'express';
import * as bodyParser from 'body-parser';
import signaling from './signaling';

const serverless = require('serverless-http');

import { log, LogLevel } from './log';

export const createServer = (config): express.Application => {
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.get('/.netlify/functions/api/protocol', (req, res) => res.json({useWebSocket: config.websocket}));
  app.use('/.netlify/functions/api/signaling', signaling);

  module.exports = app;
  module.exports.handler = serverless(app);

  return app;
};
