import ContactModel from '../models/ContactModel';
const contactsController = {};

contactsController.list = function (request, response, next) {
  ContactModel.find({}).exec()
    .then(contacts => {
      return response.json(contacts);
    })
    .catch(err => {
      next(err);
    });
};

contactsController.show = function (request, response, next) {
  ContactModel.findById(request.params._id).exec()
    .then(contact => {
      return response.json(contact);
    })
    .catch(err => {
      return next(err);
    });
};

contactsController.create = function (request, response, next) {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });

  contact.save()
    .then(newContact => {
      return response.json(newContact);
    })
    .catch(err => {
      return next(err);
    });
};

contactsController.remove = function (request, response, next) {
  ContactModel.findByIdAndRemove(request.params._id).exec()
    .then(contact => {
      return response.json(contact);
    })
    .catch(err => {
      return next(err);
    });
};

export default contactsController;
