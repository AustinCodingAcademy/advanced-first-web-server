import express from 'express';
/*  eslint-disable no-unused-vars*/

const app = express();

const PORT = 3000;

app.get('/recipes', (request, response, next) => {
  console.log('recipes was requested');
  return response.json({
    message: 'recipes is a go-go'
  });
});

app.get('/things', (request, response, next) => {
  console.log('things was requested');
  return response.json({
    message: 'things is now a go-go'
  });
});

app.get('/newget', (request, response, next) => {
  console.log('newget was requested');
  return response.json({
    message: 'newget is now going'
  });
});

app.get('/extra', (request, response, next) => {
  console.log('this is getting extra');
  return response.json({
    message: 'EXTRA EXTRA'
  });
});

// Put things above this function
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('newServer app is running on port', PORT);
});
