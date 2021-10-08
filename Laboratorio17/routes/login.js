const express = require('express');

const router = express.Router();

//Establezco la ruta
const usersController = require('../controllers/users_controller');

//ruta y acción del controller que está mandando a llamar
router.get('', usersController.getLogin);

router.post('', usersController.postLogin);

router.get('/logout', usersController.getLogout); 

module.exports = router; 