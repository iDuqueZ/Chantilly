const {Router} = require('express')
const router = Router()
const CarritoCtrl = require('../controllers/Carrito.Controller')
const Auth = require('../helper/Auth')

router.post('/crear', CarritoCtrl.crearCarrito)
router.put('/actualizar', Auth.verificarToken, CarritoCtrl.actualizarCarro)
router.delete('/eliminar', Auth.verificarToken, CarritoCtrl.eliminarCarrito)
router.get('/listar', Auth.verificarToken, CarritoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, CarritoCtrl.listarId)
router.get('/listarPorUsuario/:idUsuario', Auth.verificarToken, CarritoCtrl.listarPorUsuario)
router.post('/agregarProducto', Auth.verificarToken, CarritoCtrl.agregarProducto) 
router.post('/removerProducto', Auth.verificarToken, CarritoCtrl.removerProducto) 


module.exports = router