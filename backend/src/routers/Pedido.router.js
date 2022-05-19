const {Router} = require('express')
const router = Router()
const PedidoCtrl = require('../controllers/Pedido.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, PedidoCtrl.crear)

module.exports = router