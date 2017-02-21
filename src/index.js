// Your server code here...
/* eslint no-console: 0 */

import express from 'express';

const app = express();

app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

const PORT = 3001;

app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error!', error);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
