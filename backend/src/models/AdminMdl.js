const mongoose = require('mongoose')
const {Schema} = mongoose 

const AdminSchema = new Schema({
    user: {type:String, required: [true, 'El usuario es obligatorio']},
    contrasena: String
})


module.exports = mongoose.model('admin', AdminSchema)