/*
UserController.js

contains all the actions sent by UserRouter.js

*/

// 1.  import the models
import User from '../models/User';


// 2.  define the object with functions inside
const UserController = {
  find: (request, response, next) => {
    User.findById(request.params.id).exec()
    .then((user) => {
      return response.json(user);
    })
    .catch((err) => {
  // send error  to error handler
      return next(err);
    });
  },  // end of find

  list: (request, response, next) => {
    User.find().exec()
  .then((user) => {
    return response.json(user);
  })
  .catch((err) => {
// send error  to error handler
    return next(err);
  });
  },  // end of list

  delete: (request, response) => {
    User.findByIdAndRemove(request.params.id).exec()
    .then((user) => {
      return response.json(user);
    })
    .catch((err) => {
      console.log('Error deleting ', err.message);
      return next(err);
    });
  }, // end of delete

  create: (request, response, next) => {
    const user = new User(request.body);
    user.save()
    .then(storedUser => {
      console.log('User was saved.');
      return response.json(storedUser);
    })
    .catch((err) => {
      return next(err);
    });
  } // end of create
}; // end of object

// export the router
export default UserController;
