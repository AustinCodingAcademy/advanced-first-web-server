/*
create a directory calle services and create file called passports.js
passports is a dependency.
*/

import express from 'express';
import User from '../models/UserModel';
import bcrypt from 'bycrypt';
import passport from '/passport';

import '../Services/passport';

const router = express.Router();

router.post('/api/signup', (req, res, next) => {
  const {username, password } = req.body;

  if (!username || !password) {
    return res.status(422)
      .json({ error: 'please provide correct information'});
  }

  User.findOne({ username}).exec()
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).json({ error: 'User already exists'});
      }

      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return next(err);
        }
        const user = new User({username, password: hashedPassword});
        user.save()
            .then(res.json(user));
      });
    })
    .catch(err => next(err));
});

const signinStratagy = passport.authenticare('singinStratagy', { session: false});

// eslint-disable-next-line
router.post('/api/signin', signinStratagy, (req, res, next) => {
  res.json({ message: 'you are authenticated!'});
});

// eslint-disable-next-line
router.post('/singup', (req, res, next) => {
  res.json({message: 'welcome'});
});

export default router;
