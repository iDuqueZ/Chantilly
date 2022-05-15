const {Router} = require('express')
const router = Router()
const UsuarioCtrl = require('../controllers/Usuario.Controller')
const Auth = require('../helper/Auth')

router.post('/crear', UsuarioCtrl.crearUsuario)//*/
router.post('/login', UsuarioCtrl.validarUsuario)//*/
router.put('/Actualizar', Auth.verificarToken, UsuarioCtrl.actualizarUsuario)//*/
router.delete('/eliminar', Auth.verificarToken, UsuarioCtrl.eliminarUsuario)//*/
router.get('/listar', Auth.verificarToken, UsuarioCtrl.listar)//*/
router.get('/listar/:id', Auth.verificarToken, UsuarioCtrl.listarId)//*/
router.get('/buscarPorNombreDeUsuario/:nombreUsuario', Auth.verificarToken, UsuarioCtrl.buscarPorNombreDeUsuario)//*/

module.exports = router