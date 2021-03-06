const {Router} = require('express')
const router = Router()
const ProductoCtrl = require('../controllers/Producto.Controller')
const Auth = require('../helper/Auth')

router.post('/crear', ProductoCtrl.crearProducto)
router.get('/validarProducto', Auth.verificarToken, ProductoCtrl.validarProducto)
router.put('/actualizar', Auth.verificarToken, ProductoCtrl.actualizarProducto)
router.delete('/eliminar', Auth.verificarToken, ProductoCtrl.eliminarProducto)
router.get('/listar', Auth.verificarToken, ProductoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, ProductoCtrl.listarId)
router.get('/buscarPorNombreDeProducto/:nombre', Auth.verificarToken, ProductoCtrl.buscarPorNombreDeProducto)

module.exports = router