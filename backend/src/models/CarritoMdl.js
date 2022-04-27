const mongoose= require('mongoose')
const {Schema} = mongoose

const CarritoSchema = new Schema ({
    susProductos: {type:Array},
    metodoPago: {type:String, default:["Efectivo"]},
    fecha: {type:Date, required: [true, 'La fecha es obligatorio']},
    hora: {type:Date, required: [true, 'La hora es obligatorio']},
    idUsuario: {type:Number, reuiere: true},
    estadoPedido: {type:String, default:["En espera"]}
})

module.exports = mongoose.model('carrito', CarritoSchema)