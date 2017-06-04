// #1  imports
import express from 'express';
import UserController from '../controllers/UserController';


// #3
const router = express.Router();

// #4
const BASE_ROUTE = '/users';

/*
App.get was changed to "router.get"
*/

// #5  list all users
router.get(BASE_ROUTE, UserController.list);

// #6
router.post(BASE_ROUTE,UserController.create);

// #7
router.get(BASE_ROUTE, UserController.find);

//  find by id
router.get(BASE_ROUTE + '/:id', UserController.find);

// #8
router.delete(BASE_ROUTE + '/:id', UserController.delete);

// #9
export default router;
