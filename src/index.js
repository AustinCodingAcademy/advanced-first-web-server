import express from 'express';
import mongoose from 'mongoose';
import ContactModel from './models/ContactModel';
import bodyParser from 'body-parser';

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());

app.get('/contacts', (req, resp) => {
  ContactModel.find({}).exec()
    .then(contacts => {
      return resp.json(contacts);
    })
    .catch(err => {
      console.log(`Error! ${err}`);
    });
});

app.get('/contacts/:_id', (req, resp) => {
  ContactModel.findById(req.params._id).exec()
    .then(contact => {
      return resp.json(contact);
    })
    .catch(err => {
      console.log(`Error! ${err}`);
    });
});

app.post('/contacts', (req, resp) => {
  const contact = new ContactModel({
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  });

  contact.save()
    .then(newContact => {
      return resp.json(newContact);
    });
});

app.delete('/contacts/:_id', (req, res) => {
  ContactModel.findByIdAndRemove(req.params._id).exec()
    .then(contact => {
      return res.json(contact);
    })
    .catch(err => {
      console.log(`Error! ${err}`);
    });
});

app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
