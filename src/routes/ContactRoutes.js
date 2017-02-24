import express from 'express';
const router = express.Router();
import ContactsController from '../controllers/ContactsController';

// Declare GET /contacts route
router.get('/contacts', ContactsController.list);

router.get('/contacts/:_id', ContactsController.show);

router.delete('/contacts/:_id', ContactsController.remove);

router.post('/contacts', ContactsController.create);

router.put('/contacts/:_id', ContactsController.update);

module.exports = router;
