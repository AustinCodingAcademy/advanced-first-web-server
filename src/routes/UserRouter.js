import express from 'express';
import users from './models/users';


const router = express.Router();

// eslint-disable-next-line
router.post('/users', (request, response, next) => {

  const {username, password} = request.body;

  if (!username || !password) {
    return response.status(422).json({
      error: 'You must enter your username or password'
    });
  }
});

router.get('/users', (request, response) => {
  response.json(users);
});
router.get('/users/:id', (request, response, next) => {

  users.findById(request.params.id).exec()
  .then((user) => {
    return response.json(user);
  })
  .catch((err) => {
    return next(err);
  });
});


router.post('/users', (request, response,) => {
  const user = {
    id: users.length + 1,
    ...request.body
  };
  users.push(user);
  return response.json(user);
});

router.delete('/users/:id' , (request, response) => {
  const foundUser = users.find((user) => {
    return String(user.id) === request.params.id;

  });
  return response.json(foundUser || null);
});


export default router;
