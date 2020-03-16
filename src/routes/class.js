const router = require('express').Router();

const classesController = require('../controllers/classController');

router.get('/', classesController.list); // list all classes in card view

module.exports = router;
