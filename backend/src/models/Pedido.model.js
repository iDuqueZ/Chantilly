const mongoose= require('mongoose')
const {Schema} = mongoose

const PedidoSchema = new Schema ({
    suCarrito: {type:Array},
    idUsuario: {type:String},
    metodoPago: {type:String, default:"Efectivo"},
    fecha: {type:Date, default:Date.now},
    hora: {type:String, /*default:Date.now*/},
    estadoPedido: {type:String, default:"En espera"}
}) 

module.exports = mongoose.model('pedidos', PedidoSchema)