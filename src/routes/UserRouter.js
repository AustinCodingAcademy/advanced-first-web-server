// #1  imports
import express from 'express';
import UserController from '../controllers/UserController';


// #3
const router = express.Router();

// #4
const BASE_ROUTE = '/users';

// #5
router.get(BASE_ROUTE, UserController.list);

// #6
router.post(BASE_ROUTE,UserController.create);

// #7
router.get(BASE_ROUTE, UserController.find);

// #8
router.delete(BASE_ROUTE + '/:id', UserController.delete);

// #9
export default router;
