const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router(); 


//Establezco la ruta
const phishingController = require('../controllers/phishing_controller');

//Para lista_menu.ejs
router.get('/list', isAuth, phishingController.getList);

router.get('', phishingController.getPhishing);

router.post('', phishingController.postPhishing);

module.exports = router;