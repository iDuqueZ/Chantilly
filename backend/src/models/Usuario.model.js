const mongoose = require('mongoose')
const {Schema} = mongoose 

const UserSchema = new Schema({
    userName: {type:String, required: [true, 'El usuario es obligatorio']},
    contrasena: {type:String, required: [true, 'La contraseña es obligatorio']},
    correo: {type:String, required: [true, 'El correo es obligatorio']},
    fechaNacimiento: {type:Date, required: [true, 'La fecha es obligatorio']},
    direccion: {type:String, required: [true, 'La direccion es obligatorio']},
    telefono: {type:Number, required: [true, 'El celular es obligatorio']}
})


module.exports = mongoose.model('user', UserSchema)