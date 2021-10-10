const express = require('express');

const router = express.Router(); 

//Establezco la ruta
const labsController = require('../controllers/labs_controller');

router.get('', labsController.getLabs);

router.get('/lab3', labsController.getLab3);

router.get('/lab5', labsController.getLab5);

router.get('/lab6', labsController.getLab6);

router.get('/lab7', labsController.getLab7);

router.get('/lab12', labsController.getLab12);

module.exports = router;