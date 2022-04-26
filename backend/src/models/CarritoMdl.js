const mongoose= require('mongoose')
const {Schema} = mongoose

const CarritoSchema = new Schema ({
    total: Number,
    productos: Array,
    metodoPago: String
})

module.exports = mongoose.model('carrito', CarritoSchema)