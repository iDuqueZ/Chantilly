const mongoose= require('mongoose')
const {Schema} = mongoose

const CarritoSchema = new Schema ({
    susProductos: {type:Array},
    idUsuario: {type:String, reuiere: true}
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