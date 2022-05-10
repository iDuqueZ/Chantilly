const mongoose = require('mongoose')
const {Schema} = mongoose 

const AdminSchema = new Schema({
    usuario: {type:String, required: [true, 'El usuario es obligatorio']},
    contrasena: {type:String, required: [true, 'La contraseña es obligatorio']}
})


module.exports = mongoose.model('admin', AdminSchema)