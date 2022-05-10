const mongoose= require('mongoose')
const {Schema} = mongoose

const CarritoSchema = new Schema ({
    susProductos: {type:Array},
    metodoPago: {type:String, default:"Efectivo"},
    fecha: {type:Date, default:Date.now},
    hora: {type:Date, default:Date.now},
    idUsuario: {type:Number, reuiere: true},
    estadoPedido: {type:String, default:"En espera"}
}) 

module.exports = mongoose.model('carrito', CarritoSchema)
/**
 * {
 *  {
 *      idProducto,
 *      numeroProductos,
 *      descripcion
 *  },
 *  {
 *      ...
 *  }, 
 *  ...
 * }
 */