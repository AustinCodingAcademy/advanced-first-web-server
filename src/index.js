// Your server code here...
import express from 'express';
const app = express();

app.all('/*', (request, response, next) => {
  return response.send(request.params["0"]);
});

const PORT = 3001,

app.listen(PORT, (err) => {
  if(err){
    return console.log(err)
  }
  return console.log('Listening on port: ' + PORT)
})
