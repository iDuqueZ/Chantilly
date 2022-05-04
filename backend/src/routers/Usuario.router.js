const {Router} = require('express')
const router = Router()
const UsuarioCtrl = require('../controllers/Usuario.Controller')

router.post('/crear', UsuarioCtrl.crearUsuario)//*/
router.get('/loguin', UsuarioCtrl.validarUsuario)//*/
router.put('/Actualizar', UsuarioCtrl.actualizarUsuario)//*/
router.delete('/eliminar', UsuarioCtrl.eliminarUsuario)//*/

module.exports = router