//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const ProductoCtrl = {}
const Producto = require('../models/Producto.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

ProductoCtrl.crearProducto = async(req,res) => {
    const{nombre, precio, imagen, cantidad, categoria, descripcion} = req.body
    const NuevoProducto = new Producto({
        nombre, 
        precio, 
        imagen, 
        //cantidad, 
        categoria, 
        descripcion
    })
    const prod = await Producto.findOne({nombre: nombre})
    if (prod){
        res.json({
            mensaje: 'El producto ya existe'
        })
        return
    }else{
        token = jwt.sign({_id:NuevoProducto._id},"Secreto")
        await NuevoProducto.save()
        res.json({
            mensaje: "Bienvenido",
            id: NuevoProducto.id,
            nombreDeProducro: NuevoProducto.nombre,
            token: token
        })
    }
}

ProductoCtrl.validarProducto = async(req,res) => {
    const{nombre} = req.body
    const valProducto = await Producto.findOne({nombre:nombre})
    if (!valProducto){
        res.json({
            mensaje: 'El producto no existe'
        })
    }else{
        token = jwt.sign({_id:valProducto._id},"Secreto")
        res.json({
            mensaje: 'Producto: ' + valProducto.nombre + " agregado correctamente",
            token: token
        })
    }
}

ProductoCtrl.actualizarProducto = async(req,res) => {
    const{nombre, precio, imagen, cantidad, categoria, descripcion} = req.body
    const Prod = await Producto.findOne({nombre: nombre})

    if (!Prod){
        res.json({
            mensaje: 'El producto ' + nombre + ' no existe'
        })
    }else{   
        Prod.precio = precio
        Prod.imagen = imagen
        Prod.categoria = categoria
        Prod.descripcion = descripcion        
        const token = jwt.sign({_id:Prod._id},"Secreto")
        await Prod.save()        
        res.json({
            mensaje: "El producto fué actualizado correctamente",
            token: token
        })    
    }
}

ProductoCtrl.eliminarProducto = async(req,res) => {
    const{nombre} = req.body    
    const Prod = await Producto.findOne({nombre: nombre})

    if (!Prod){
        res.json({
            mensaje: 'El producto no existe'
        })
    }else{   
        await Producto.findByIdAndRemove({_id:Prod._id})
        const token = jwt.sign({_id:Prod._id},"Secreto")
        res.json({
            mensaje: "Producto " + Prod.nombre + " fué eliminado",
            token, token
        })    
    }
}

ProductoCtrl.listar = async(req,res) => {
    const respuesta = await Producto.find()
    res.json(respuesta)
}

ProductoCtrl.listarId = async(req,res) => {
    const id = req.params.id
    const respuesta = await Producto.findById({_id:id})
    res.json(respuesta)
}

ProductoCtrl.buscarPorNombreDeProducto = async(req,res) => { 
    //Por alguna puta razón no funciona este metodo
    const nombre = req.params.nombre
    try {
        const respuesta = Producto.find({nombre: nombre})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({
            mensaje : 'Ha ocurrido un error',
            error
        })
    }
}

module.exports = ProductoCtrl