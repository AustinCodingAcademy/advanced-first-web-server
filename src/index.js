// Your server code here...
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/contacts');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('MongoDB connected');
});


const app = express();

const PORT = 3001;


const users = [
  {
    id: 4,
    Name: 'Jimmy'
  }
];

app.use(bodyParser.json());

app.get('/', (request, response,) => {
  console.log('Route Called');
  return response.json([
    {
      id: 1,
      name: 'Joe Momma'
    }
  ]);
});

app.post('/users', (request, response) => {
  users.push({
    id: users.length + 1,
    ...request.body
  });
  users.push(users);

  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const foundUser = users.find((user) => {
    return String(user.id) === request.params.id;
  });

  return response.json(foundUser || null);
});


app.delete('/users/:id', (request, response) => {
  return response.json();
});

app.get('/users', (request, response) => {
  return response.json({
    That: 'works'
  });
});

app.get('/*', (request, response) => {
  return response.json({
    message: 'Not implemented yet'
  });
});



app.listen(PORT, (err) => {
  if (err) {
    return console.log('Server Error', err);

  }

  console.log('Server is listening on port' + PORT);

});
