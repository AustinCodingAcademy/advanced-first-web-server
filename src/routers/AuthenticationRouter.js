import express from 'express';
import User from '../models/UserModel';

// import the controller when we have that cleaned up
// import AuthenticationController from '../controllers/AuthenticationController';
import bcrypt from 'bcrypt';

const router = express.Router();
const USERS_PATH = '/users';

// This is the request in postman that gets us here
// http://localhost:3000/users/signup
// add next() to the arguments in this controller

router.post(USERS_PATH + '/signup', (request, response, next) => {
  const {username, password} = request.body;

  if (!username || !password) {
    // add this is returning if either is undefined!
    return response.status(422).json({Error: 'Must provide a username and password'});
  }
  // will need to figure out the searching portion of this controller later
  User.findOne({username}).exec()
    .then((existingUsername) => {
      if (existingUsername) {
        console.log('stuck looking for one.');
        return response.status(422).json({ error: 'Username is already in use.'});
      }
      bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
          return next(err);
        }
        const user = new User({username, password: hashedPassword});

        user.save()
          .then(response.json(user));
      })
    .catch(err => next(err));
    });
});

export default router;
