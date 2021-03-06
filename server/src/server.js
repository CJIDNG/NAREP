import express from 'express';
import Debug from 'debug';
import path from 'path';
import compression from 'compression';
import enforce from 'express-sslify';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import docs from './docs';
import router from './routes';
import { serverErrorResponse } from './helpers/serverResponse';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const debug = Debug(process.env.DEBUG);
const app = express();

app.use(cors());
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(router);
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(docs));
app.use(serverErrorResponse);
app.use(express.static('../../client/public'))

process.on('uncaughtException', (err) => {
  debug(err.stack);
  process.exit(1);
});

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
const server = app.listen(process.env.PORT || 5000, () => {
  debug(`Listening on port ${server.address().port}`);
});

export default app;
