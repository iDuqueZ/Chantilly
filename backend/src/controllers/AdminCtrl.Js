//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const AdminsCtr = {}
const Admin = require('../models/AdminMdl')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

AdminsCtr.crearAdmin = async(req,res) => {
    const{user,contrasena,token} = req.body
    const NuevoAdmin = new Admin({
        user,
        contrasena,
        token
    })
    const userAdmin = await Admin.findOne({user:user})
    if (userAdmin){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }else{
        
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoAdmin._id},"Secreto")
        await NuevoAdmin.save()

        res.json({
            mensaje: "Bienvenido",
            id: NuevoAdmin.id,
            user: NuevoAdmin.user,
            token
        })
    }
}
