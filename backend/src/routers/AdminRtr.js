const {Router} = require('express')
const router = Router()
const AdminCtrl = require('../controllers/AdminCtrl')

router.post('/crear', AdminCtrl.crearAdmin)

module.exports = router