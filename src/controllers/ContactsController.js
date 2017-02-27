import ContactModel from '../models/ContactModel';

export default {

  list(request, response, next) {
    ContactModel.find().exec()
      .then(contacts => {
        return response.json(contacts);
      })
      .catch(err => {
        return next(err);
      });
  },

  show(request, response, next) {
    ContactModel.findById(request.params._id).exec()
      .then(contact => {
        return response.json(contact);
      })
      .catch(err => {
        return next(err);
      });
  },

  create(request, response, next) {
    // Create a new instance of our `ContactModel`
    // We are grabbing attributes from our request.body object, again this is set
    // for us because we are using body-parser
    const contact = new ContactModel({
      name: request.body.name,
      occupation: request.body.occupation,
      avatar: request.body.avatar,
    });

    // Save the new contact
    contact.save()
      // When the save completes, return the newly created contact
      .then(newContact => {
        return response.json(newContact);
      })
      .catch(err => {
        return next(err);
      });
  },

  update(request, response, next) {
    ContactModel.findById(request.params._id)
      .then(contact => {
        // Set the attributes on the model from the request.body OR
        // if we receive nothing, what the contact is already set to
        // this way if we send an update for just the `avatar` field, the name and
        // occupation wont change
        contact.name = request.body.name || contact.name;
        contact.occupation = request.body.occupation || contact.occupation;
        contact.avatar = request.body.avatar || contact.avatar;

        return contact.save();
      })
      .then(contact => {
        return response.json(contact);
      })
      .catch(err => {
        return next(err);
      });
  },

  remove(request, response, next) {
    ContactModel.findByIdAndRemove(request.params._id).exec()
          .then(contact => {
            return response.json(contact);
          })
          .catch(err => {
            return next(err);
          });
  },
};
