import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

//eslint-disable-next-line
app.use((err, request, response, next) => {
  console.log('error handling with middleware', err);
});

// eslint-disable-next-line
app.use((err, request, response, next) => {
  console.log('error handler middleare is running');
  return response.status(500).json({
    message: err.message
  });
});

app.get('/falseroute', (request, response, next) => {
  const error = new Error('this is my first error');
  next(error);
});


app.get('/recipes' , (request, response) => {
  console.log('called recipes');
  return response.json({
    message: 'this works'
  });
});


app.listen(PORT, (err) => {
  if (err) {
    console.log('somethign went wrong', err);
  }
  console.log('Server is running on port' + PORT);
});
