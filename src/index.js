// Your server code here...
import express from 'express';

const app = express();

app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error!', err);
  }
  return console.log('Listening on: http://localhost:' + PORT);

});
