const express = require('express');

const router = express.Router(); 


//Establezco la ruta
const phishingController = require('../controllers/phishing_controller');

//Para lista_menu.ejs
router.get('/list', phishingController.getList);

router.get('', phishingController.getPhishing);

router.post('', phishingController.postPhishing);

module.exports = router;