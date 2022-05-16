//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const AdminsCtr = {}
const Admin = require('../models/Administrador.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

AdminsCtr.crearAdmin = async(req,res) => {
    const{usuario,contrasena} = req.body
    const NuevoAdmin = new Admin({
        usuario,
        contrasena
    })
    const userAdmin = await Admin.findOne({usuario:usuario})
    if (userAdmin){
        res.json({
            mensaje: 'El administrador ya existe'
        })
        return
    }else{
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        NuevoAdmin.token = jwt.sign({_id:NuevoAdmin._id},"Secreto")
        await NuevoAdmin.save()

        res.json({
            mensaje: "Bienvenido",
            id: NuevoAdmin.id,
            usuario: NuevoAdmin.usuario,
            token: NuevoAdmin.token
        })
    }
}

AdminsCtr.validarAdmin = async(req,res) => {
    const{usuario,contrasena} = req.body
    const Valusuario = await Admin.findOne({usuario:usuario})
    if (!Valusuario){
        res.json({
            mensaje: 'El administrador no existe'
        })
    }else{
        const comparacion = await bcrypt.compare(contrasena,Valusuario.contrasena)
        if (comparacion){
            token = jwt.sign({_id:Valusuario._id},"Secreto")
            res.json({
                mensaje: 'Bienvenido',
                token: token
            })
        }else{
            res.json({
                mensaje: 'Usuario de administrador y/o  contraseña incorrecto'
            })
        }
    }
}

AdminsCtr.actualizarAdmin = async(req,res) => {
    const{usuario,contrasena} = req.body    
    const UsuarioAd = await Admin.findOne({usuario:usuario})

    if (!UsuarioAd){
        res.json({
            mensaje: 'El usuario no existe'
        })
    }else{   
        UsuarioAd.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:UsuarioAd._id},"Secreto")
        res1 = await UsuarioAd.save()
        
        res.json({
            mensaje: "Bienvenido",
            token: token
        })    
    }
}

AdminsCtr.eliminarAdmin = async(req,res) => {
    const{usuario,contrasena} = req.body    
    const UsuarioAd = await Admin.findOne({usuario:usuario})

    if (!UsuarioAd){
        res.json({
            mensaje: 'El usuario no existe'
        })
    }else if (!await bcrypt.compare(contrasena,UsuarioAd.contrasena)){
        res.json({
            mensaje: 'La contrasena no coincide'
        })
    }else{   
        const token = jwt.sign({_id:UsuarioAd._id},"Secreto")
        await Admin.findByIdAndRemove({_id:UsuarioAd._id})
        res.json({
            mensaje: "Usuario " + UsuarioAd.usuario + " fué eliminado"
        })    
    }
}

AdminsCtr.listar = async(req,res) => {
    const respuesta = await Admin.find()
    res.json(respuesta)
}

AdminsCtr.listarId = async(req,res) => {
    const id = req.params.id
    const respuesta = await Admin.findById({_id:id})
    res.json(respuesta)
}

AdminsCtr.buscarPorNombreDeAdmin = async(req,res) => { 
    //Por alguna puta razón no funciona este metodo
    const usuario = req.params.nombreAdmin
    try {
        const respuesta = Admin.find({usuario: usuario})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({
            mensaje : 'Ha ocurrido un error',
            error
        })
    }
}

module.exports = AdminsCtr