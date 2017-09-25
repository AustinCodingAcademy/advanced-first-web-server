// Your server code here...
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('you tried to get the route path');
});
   
app.listen(3002, (err) => {
  if (err) {
    return console.log('Error', err);
  }
});
