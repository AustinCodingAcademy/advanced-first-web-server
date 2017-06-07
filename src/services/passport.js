import bcrypt from 'bcrypt';
import passport from 'passport';
import User from '../models/UserModel';
import LocalStrategy from 'passport-local';
import {JwtStrategy, ExtractJwt} from 'passport-jwt';

const signInStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({username}).exec()
    .then(user => {
      if (!user) {
        return done(null, false);
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return done(err, false);
        }
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  .catch(err => done(err, false));
});

const jwtOptions = {
  secretKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const authStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findOne(payload.userId, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    done(null, false);
  });
});

passport.use('authStrategy', authStrategy);
passport.use('signInStrategy', signInStrategy);

// stopped at destructuring on the web guide
