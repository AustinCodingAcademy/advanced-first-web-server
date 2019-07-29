const express= require('express');
const router = express.Router();
const {list,show,showByName,create,update,remove} = require('../controllers/users')


router.get("/users", list);
router.get("/users/:someid", show);
router.get("/users/name/:userName", showByName);
router.post("/users", create);
router.put("/users/:someid", update);
router.delete("/users/:someid", remove);

module.exports = router