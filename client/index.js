const path = require('path');
const express = require('express');
const Debug = require('debug');

const app = express();
const debug = Debug(process.env.REACT_APP_DEBUG);

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  debug('listening on port 5000');
});
