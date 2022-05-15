const UsuariosCtr = {}
const Usuario = require('../models/Usuario.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

UsuariosCtr.crearUsuario = async(req,res) => {
    const{userName,contrasena,correo,fechaNacimiento,direccion,telefono} = req.body
    const NuevoUsuario = new Usuario({
        userName,
        contrasena,
        correo,
        fechaNacimiento,
        direccion,
        telefono
    })

    const UsuarioUserName = await Usuario.findOne({userName:userName})
    const UsuarioCorreo = await Usuario.findOne({correo:correo})

    if (UsuarioUserName){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }else if (UsuarioCorreo){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }else if (calcularEdad(fechaNacimiento) <= 18){//Validarfecha
        res.json({
            mensaje: 'No es un usuario mayor de edad'
        })
    }else{        
        NuevoUsuario.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoUsuario._id},"Secreto")
        await NuevoUsuario.save()
        
        res.json({
            mensaje: "Bienvenido",
            token: token
        })
    }
}

UsuariosCtr.validarUsuario = async(req,res) => {
    const{userName,contrasena} = req.body
    const Valuser = await Usuario.findOne({userName:userName})
    if (!Valuser){
        res.json({
            mensaje : 'El usuario no existe',
            Usuario : Usuario
        })
    }else{
        const comparacion = await bcrypt.compare(contrasena,Valuser.contrasena)
        if (comparacion){
            token = jwt.sign({_id:Valuser._id},"Secreto")
            res.json({
                mensaje: 'Bienvenido',
                token: token,
                Usuario: Valuser
            })
        }else{
            res.json({
                mensaje: 'Usuario y/o  contraseña incorrecto'
            })

        }
    }
}

UsuariosCtr.actualizarUsuario = async(req,res) => {
    const{userName,contrasena,correo,fechaNacimiento,direccion,telefono} = req.body
    
    const UsuarioUserName = await Usuario.findOne({userName:userName})
    const UsuarioCorreo = await Usuario.findOne({correo:correo})

    UsuarioUserName.correo = correo
    UsuarioUserName.contrasena = contrasena
    UsuarioUserName.fechaNacimiento = fechaNacimiento
    UsuarioUserName.direccion = direccion
    UsuarioUserName.telefono = telefono

    if (!UsuarioUserName){
        res.json({
            mensaje: 'El usuario no existe'
        })
    }else if (UsuarioUserName.correo != correo && UsuarioCorreo){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }else if (calcularEdad(fechaNacimiento) <= 18){//Validarfecha
        res.json({
            mensaje: 'No es un usuario mayor de edad'
        })
    }
   
    UsuarioUserName.contrasena = await bcrypt.hash(contrasena,10)
    const token = jwt.sign({_id:UsuarioUserName._id},"Secreto")
    res1 = await UsuarioUserName.save()
    
    res.json({
        mensaje: "Bienvenido",
        token: token,
        res: res1/*,
        data: ActualizarUsuario,
        NomreUsuario: NuevoUsuario.userName,
        contrasena: NuevoUsuario.contrasena,
        correo: NuevoUsuario.correo,
        fechaNacimiento: NuevoUsuario.fechaNacimiento,
        direccion: NuevoUsuario.direccion,
        telefono: NuevoUsuario.telefono//*/
    })    
}

UsuariosCtr.eliminarUsuario = async(req,res) => {
    const{userName,contrasena} = req.body    
    const UsuarioUserName = await Usuario.findOne({userName:userName})

    if (!UsuarioUserName){
        res.json({
            mensaje: 'El usuario no existe'
        })
    }else if (!await bcrypt.compare(contrasena,UsuarioUserName.contrasena)){
        res.json({
            mensaje: 'La contrasena no coincide'
        })
    }else{   
        const token = jwt.sign({_id:UsuarioUserName._id},"Secreto")
        await Usuario.findByIdAndRemove({_id:UsuarioUserName._id})
        res.json({
            mensaje: "Usuario " + UsuarioUserName.userName + " fué eliminado"
        })    
    }
}

UsuariosCtr.listar = async(req,res) => {
    const respuesta = await Usuario.find()
    res.json(respuesta)
}

UsuariosCtr.listarId = async(req,res) => {
    const id = req.params.id
    const respuesta = await Usuario.findById({_id:id})
    res.json(respuesta)
}

UsuariosCtr.buscarPorNombreDeUsuario = async(req,res) => { 
    const nombreUsuario = req.params.nombreUsuario

    try {
        const respuesta = Usuario.find({userName: nombreUsuario})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({
            mensaje : 'Ha ocurrido un error',
            error
        })
    }
}

module.exports = UsuariosCtr