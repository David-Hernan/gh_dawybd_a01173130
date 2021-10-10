const express = require('express');

const router = express.Router();

//Establezco la ruta
const usersController = require('../controllers/users_controller');

router.get('', usersController.getLogin);

router.post('', usersController.postLogin);

router.get('/logout', usersController.getLogout); 

//Agregar usuario
router.get('/adduser', usersController.getAdduser);

router.post('/adduser', usersController.postAdduser); 

module.exports = router; 