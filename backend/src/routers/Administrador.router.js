const {Router} = require('express')
const router = Router()
const AdminCtrl = require('../controllers/Administrador.controller')

router.post('/crear', AdminCtrl.crearAdmin)//*/

module.exports = router