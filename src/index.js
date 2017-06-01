// Your server code here...

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const users = [
  {
    id: 1,
    name: 'Joe'
  },
  {
    id: 2,
    name: 'Michael'
  },
  {
    id: 3,
    name: 'Susan'
  }
];

app.get('/users', (request, response) => {
  response.json(users);
});

app.get('/users/:id', (request, response, next) => {

  users.findById(request.params.id).exec()
  .then((user) => {
    return response.json(user);
  })
  .catch((err) => {
    return next(err);
  });
});


app.post('/users', (request, response,) => {
  const user = {
    id: users.length + 1,
    ...request.body
  };
  users.push(user);
  return response.json(user);
});


app.delete('/users/:id' , (request, response) => {
  const foundUser = users.find((user) => {
    return String(user.id) === request.params.id;

  });
  return response.json(foundUser || null);
});

 // wild card
app.get('/*', (err, request, response, next) => {
  next(err);
});

// javasccript error object

app.get('/user', (err, request, response, next) => {
  return next(new Error('Error is thrown'));
});


app.use((err, request, response) => {
  console.log('Error middle ware', err);
  return response.status(500).json({message: err.message});
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log('server start failed');
  }
  console.log('server is listening' + PORT);
});
