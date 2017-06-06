import bcrypt from 'bcrypt';
import passport from 'passport';
import User from '../models/UserModel';
import LocalStratagy from 'passport-local';
import { JwtStrategy, ExtractJwt} from 'passport-jwt';


const singinStratagy = new LocalStratagy((username, password, done) => {
  User.findOne({ user: username}).exec()
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
  secretOrKey: process.env.SECRET,

  jwtFromRequest: ExtractJwt.fromHeader('Authorization')
};

const authStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.userId, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, false);
    } else {
      done(null, false);
    }
  });
});

passport.use('authStratagy', authStrategy);
passport.use('singinStratagy', singinStratagy);
