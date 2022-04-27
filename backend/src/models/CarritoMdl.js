const mongoose= require('mongoose')
const {Schema} = mongoose

const CarritoSchema = new Schema ({
    susProductos: {type:Array},
    metodoPago: {type:String, default:["Efectivo"]},
    fecha: {type:date},
    hora: {type:time},
    estadopedido: {type:String, default:["En espera"]}
})

module.exports = mongoose.model('carrito', CarritoSchema)