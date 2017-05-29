// Your server code here...
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const users = [
  {
    id: 4,
    Name: 'Jimmy'
  }
];

app.use(bodyParser.json());

app.get('/', (request, response) => {
  console.log('Route Called');
  return response.json([
    {
      id: 1,
      name: 'Joe Momma'
    }
  ]);
});

// app.post('/users', (request, response) => {
//   users.push({
//     id: users.length + 1,
//     ...request.body
//   });
//   users.push(users);
//
//   return response.json(users);
// });

// app.get('/users/:id', (request, response) => {
//   const foundUser = users.find((user) => {
//     return String(user.id) === request.params.id;
//   });
//
//   return response.json(foundUser || null);
// });


// app.delete('/users/:id', (request, response) => {
//   return response.json();
// });

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

const PORT = 3001;


app.listen(PORT, (err) => {
  if (err) {
    console.log('Server Error', err);
    return;
  }

  console.log('Server is listening on port' + PORT);

});
