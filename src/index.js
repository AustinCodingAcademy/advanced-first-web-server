import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ContactModel from './models/ContactModel';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/first-web-server');

const app = express();
app.use(bodyParser.json());

// GETTING ALL THINGS - LIST
app.get('/contacts', (request,response) => {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
});

// CREATING NEW THINGS - CREATE
app.post('/contacts', (request,response) => {
  const contact = new ContactModel(request.body);
  contact.save()
  .then(cont => {
    return response.json(cont);
  });
});

// GETTING ONE THING - SHOW
app.get('/contacts/:id', (request, response) => {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
});

// ADD ONE THING - UPDATE
app.put('/contacts/:id', (request, response) => {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    contact.firstName = request.body.firstName || contact.firstName;
    contact.lastName = request.body.lastName || contact.lastName;
    contact.occupation = request.body.occupation || contact.occupation;
    contact.avatar = request.body.avatar || contact.avatar;
    contact.address = request.body.address || contact.address;
    contact.phone = request.body.phone || contact.phone;
    return contact.save();
  })
  .then(contact => {
    return response.json(contact);
  });
});

// // DELETE ONE THING - UPDATE
// app.delete('/contacts/:id', (request,response) => {
//   ContactModel.remove({_id: request.params.name}).exec()
//   .then(contact => {
//     return response.send();
//   });
// });



app.listen(3002, (err) => {
  if (err) {
    // return console.log('Error', err);
  }
});
