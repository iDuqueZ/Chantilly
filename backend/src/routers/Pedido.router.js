const {Router} = require('express')
const router = Router()
const PedidoCtrl = require('../controllers/Pedido.controller')
const Auth = require('../helper/Auth')

router.post('/crear', PedidoCtrl.crear)

module.exports = router