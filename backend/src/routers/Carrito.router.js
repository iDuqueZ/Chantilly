const {Router} = require('express')
const router = Router()
const CarritoCtrl = require('../controllers/Carrito.Controller')
const Auth = require('../helper/Auth')

router.post('/crear', CarritoCtrl.crearCarrito)
router.put('/actualizar', Auth.verificarToken, CarritoCtrl.actualizarCarro)
router.delete('/eliminar', Auth.verificarToken, CarritoCtrl.eliminarCarrito)
router.get('/listar', Auth.verificarToken, CarritoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, CarritoCtrl.listarId) 

module.exports = router