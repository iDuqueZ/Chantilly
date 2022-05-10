//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const CarritoCtrl = {}
const Carro = require('../models/Carrito.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

CarritoCtrl.crearCarrito = async(req,res) => {
    const{susProductos,metodoPago,fecha,hora,idUsuario,estadoPedido} = req.body
    const NuevoCarrito = new Carro({
        susProductos,
        metodoPago,
        fecha,
        hora,
        idUsuario,
        estadoPedido
    })/*
    const Carrito = await Carro.find({idUsuario: idUsuario, fecha: fecha})
    if (Carrito){
        res.json({
            mensaje: 'El carro ya existe',
            carro: Carrito
        })
        return
    }else{//*/
        token = jwt.sign({_id:NuevoCarrito._id},"Secreto")
        await NuevoCarrito.save()
        res.json({
            mensaje: "Bienvenido",
            id: NuevoCarrito.id,
            nombreDelCarrito: NuevoCarrito.nombre,
            token: token
        })/*
    }//*/
}

CarritoCtrl.validarCarro = async(req,res) => {
    const{fecha, idUsuario} = req.body
    const valCarro = await Carro.find({fecha: fecha, idUsuario: idUsuario})
    if (!valCarro){
        res.json({
            mensaje: 'El carro no existe'
        })
    }else{
        token = jwt.sign({_id:valCarro._id},"Secreto")
        res.json({
            mensaje: 'Carro: ' + valCarro.idUsuario + " " + valCarro.idUsuario +  " agregado correctamente",
            token: token
        })
    }
}/*

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
}//*/

module.exports = CarritoCtrl