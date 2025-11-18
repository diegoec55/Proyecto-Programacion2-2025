const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const productoController = require('../controllers/ProductoController');
const validations = require('../middlewares/validations')
const auth = require('../middlewares/authMiddleware')

router.get('/', productoController.index);
router.get('/show/:id/', productoController.show )

router.get('/create',
    auth,
    productoController.create )
router.post('/create', 
    auth,
    upload.array('imagenes_producto', 5),
    validations.producto,
    validations.handleErrors,
    productoController.store )

router.get('/edit/:id/',
    auth,
    productoController.edit)
router.put('/edit/:id',
    auth,
    upload.array('imagenes_producto', 5),
    validations.productoUpdate,
    validations.handleErrors,
    productoController.update)

router.delete('/:id',
    auth,
    productoController.destroy)


module.exports = router;

