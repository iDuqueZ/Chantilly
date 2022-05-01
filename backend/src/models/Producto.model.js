const mongoose= require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},//precio debe ser double
    precio: {type:Number, required: [true, 'El precio es obligatorio']},
    imagen: {type:String, required: [true, 'La imagen es obligatoria']},
    cantidad: {type:Number, required: [true, 'La cantidad es oligatoria']},
    categoria: {type:String, required:[true, "La categoria debe ser obligatoria"]},
    descripcion: {type:String}
})

module.exports = mongoose.model('producto', ProductoSchema)