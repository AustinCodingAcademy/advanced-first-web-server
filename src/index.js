import express from 'express';

// Instantiate
const app = express();

// Declare our Get /contacts route
app.get('/contacts', (request, response) => {
  const contacts = [
    {
      _id: 1,
      name: 'Nugget Soape',
      occupation: 'Ankle Biter',
      avatar: 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/13879202_10107942913699150_5756944923215245156_n.jpg?oh=db34837500d67ba28c5160ca6b35a2b9&oe=59113BBF'
    },
    {
      _id: 3,
      name: 'Fizzgig',
      occupation: 'Gelfling Companion',
      avatar: 'http://vignette1.wikia.nocookie.net/darkcrystal/images/8/81/Fizzgig.jpg/revision/latest?cb=20080506205401'
    }
  ];

  return response.json(contacts);
});

// Declare the route
app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
