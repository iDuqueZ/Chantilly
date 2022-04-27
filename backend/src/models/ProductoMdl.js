const mongoose= require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    precio: {type:Number, required: [true, 'El precio es obligatorio']},
    imagen: {type:String, required: [true, 'La imagen es obligatoria']},
    cantidad: {type:Number, required: [true, 'La cantidad es oligatoria']},
    descripcion: {type:String}
})

module.exports = mongoose.model('producto', ProductoSchema)