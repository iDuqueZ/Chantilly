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

/*
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
}//*/

CarritoCtrl.actualizarCarro = async(req,res) => {
    const{id,susProductos,metodoPago,fecha,hora,idUsuario,estadoPedido} = req.body
    const Carrito = await Carro.findById({_id:id})

    if (!Carrito){
        res.json({
            mensaje: 'El producto ' + id + ' no existe'
        })
    }else{   
        Carrito.susProductos = susProductos
        Carrito.metodoPago = metodoPago
        Carrito.fecha = fecha
        Carrito.hora = hora
        Carrito.idUsuario = idUsuario
        Carrito.estadoPedido = estadoPedido
        const token = jwt.sign({_id:Carrito._id},"Secreto")
        await Carrito.save()        
        res.json({
            mensaje: "El producto fué actualizado correctamente",
            token: token
        })    
    }
}

CarritoCtrl.eliminarCarrito = async(req,res) => {
    const{id} = req.body    
    const car = await Carro.findById({_id: id})

    if (!car){
        res.json({
            mensaje: 'El Carro no existe'
        })
    }else{   
        await Carro.findByIdAndRemove({_id:car._id})
        const token = jwt.sign({_id:car._id},"Secreto")
        res.json({
            mensaje: "Carro " + car._id + " fué eliminado",
            token, token
        })    
    }
}

CarritoCtrl.listar = async(req,res) => {
    const respuesta = await Carro.find()
    res.json(respuesta)
}

CarritoCtrl.listarId = async(req,res) => {
    const id = req.params.id
    const respuesta = await Carro.findById({_id:id})
    res.json(respuesta)
}/*

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