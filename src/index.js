// Your server code here...
import express from 'express';

const PORT = 3001;

const app = express();


const contacts = [
  {
    _id: 1,
    name: 'Dale Cooper',
    occupation: 'FBI Agent',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
  },
  {
    _id: 2,
    name: 'Spike Spiegel',
    occupation: 'Bounty Hunter',
    avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
  },
  {
    _id: 3,
    name: 'Wirt',
    occupation: 'adventurer',
    avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
  },
  {
    _id: 4,
    name: 'Michael Myers',
    occupation: 'Loving little brother',
    avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
  },
  {
    _id: 5,
    name: 'Dana Scully',
    occupation: 'FBI Agent',
    avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
  },
  {
    _id: 6,
    name: 'Leeroy Jenkins',
    occupation: 'Badass',
    avatar: 'http://media-hearth.cursecdn.com/avatars/275/887/635855830364428898.jpeg'
  }
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/contacts', (request, response) => {
  return response.json(contacts);
});

app.get('/contacts/*', (request, response) => {
  const selectedContact = contacts.filter((contact) => {
    return contact._id === parseInt(request.params[0], 10);
  });
  return response.json(selectedContact[0]);
});

app.listen(3001, (error) => {

  if (error) {
    return console.log('error', error);
  }

  return console.log('listening on: http://localhost:' + PORT);
});
