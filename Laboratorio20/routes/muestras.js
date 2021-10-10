const express = require('express');

const router = express.Router();

//Establezco la ruta
const muestrasController = require('../controllers/muestras_controller');

//ruta para consultar
router.get('/list/:muestras_nombre', muestrasController.getList);

//ruta y acción del controller que está mandando a llamar
router.get('/list', muestrasController.getList);

//-------------------------------------------------------------------
//ruta para editar elementos
router.get('/edit/:muestras_index', muestrasController.getModif);

router.post('/edit/:muestras_index', muestrasController.postModif);
//-------------------------------------------------------------------

router.get('/add', muestrasController.getAdd);

router.post('/add', muestrasController.postAdd);
 
module.exports = router;  