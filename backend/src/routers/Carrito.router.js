const {Router} = require('express')
const router = Router()
const CarritoCtrl = require('../controllers/Carrito.Controller')
const Auth = require('../helper/Auth')

router.post('/crear', CarritoCtrl.crearCarrito)
//router.get('/login', Auth.verificarToken, CarritoCtrl.validarCarrito)
//router.put('/Actualizar', Auth.verificarToken, CarritoCtrl.actualizarCarrito)
//router.delete('/eliminar', Auth.verificarToken, CarritoCtrl.eliminarCarrito)
//router.get('/listar', Auth.verificarToken, CarritoCtrl.listar)
//router.get('/listar/:id', Auth.verificarToken, CarritoCtrl.listarId) 
//router.get('/buscarPorNombreDeUsuario/:nombreUsuario', Auth.verificarToken, CarritoCtrl.buscarPorNombreDeCarrito)

module.exports = router