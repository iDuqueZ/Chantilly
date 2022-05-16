const {Router} = require('express')
const router = Router()
const AdministradorCtrl = require('../controllers/Administrador.controller')
const Auth = require('../helper/Auth')

router.post('/crear', AdministradorCtrl.crearAdmin)
router.post('/validarAdmin', /*Auth.verificarToken, */AdministradorCtrl.validarAdmin)
router.put('/Actualizar', Auth.verificarToken, AdministradorCtrl.actualizarAdmin)
router.delete('/eliminar', Auth.verificarToken, AdministradorCtrl.eliminarAdmin)
router.get('/listar', Auth.verificarToken, AdministradorCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, AdministradorCtrl.listarId)
router.get('/buscarPorNombreDeAdmin/:nombreAdmin', /*Auth.verificarToken, */AdministradorCtrl.buscarPorNombreDeAdmin)

module.exports = router