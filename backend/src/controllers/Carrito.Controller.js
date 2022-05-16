//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const CarritoCtrl = {}
const Carro = require('../models/Carrito.model')
const Producto = require('../models/Producto.model')
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
    })

    token = jwt.sign({_id:NuevoCarrito._id},"Secreto")
    await NuevoCarrito.save()
    res.json({
        mensaje: "Bienvenido",
        id: NuevoCarrito.id,
        nombreDelCarrito: NuevoCarrito.nombre,
        token: token
    })
}

CarritoCtrl.actualizarCarro = async(req,res) => {
    const{id,metodoPago,fecha,hora,idUsuario,estadoPedido} = req.body
    const Carrito = await Carro.findById({_id:id})

    if (!Carrito){
        res.json({
            mensaje: 'El producto ' + id + ' no existe'
        })
    }else{   
        Carrito.susProductos = []
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
}

CarritoCtrl.agregarProducto = async(req,res) => {
    const{idCarro,  idProducto} = req.body 
    const carrito = await Carro.findById({_id:idCarro})

    if (!carrito){
        res.json({
            mensaje: 'El carro con id: ' + id + ' no existe'
        })
    }else{   
        const prod = await Producto.findById({_id:idProducto})        
        if (!prod){
            res.json({
                mensaje: 'El producto con id: ' + id + ' no existe'
            })
        }else{
            if(carrito.susProductos.length ==0){
                if(String(carrito.susProductos[0]) == String("")){
                    carrito.susProductos.splice(0, 1);
                }
            }

            carrito.susProductos.push(prod)
            const token = jwt.sign({_id:carrito._id},"Secreto")
            await carrito.save()        
            res.json({
                mensaje: "El producto fué agregado correctamente",
                susProductos: carrito.susProductos,
                token: token
            })  
        }
    }
}

CarritoCtrl.removerProducto = async(req,res) => {
    const{idCarro,  idProducto} = req.body 
    const carrito = await Carro.findById({_id:idCarro})

    if (!carrito){
        res.json({
            mensaje: 'El carro con id: ' + id + ' no existe'
        })
    }else{   
        const prod = await Producto.findById({_id:idProducto})

        if (!prod){
            res.json({
                mensaje: 'El producto con id: ' + id + ' no existe'
            })
        }else{
            if(carrito.susProductos.length ==0){
                if(String(carrito.susProductos[0]) == String("")){
                    carrito.susProductos.splice(0, 1);
                }
            }
            primero = false

            for (var i=0; i < carrito.susProductos.length; i++){
                if (String(carrito.susProductos[i]._id) == String(prod._id)){
                    carrito.susProductos.splice(i, 1);   
                    primero = true        
                    break
                }
            }

            const token = jwt.sign({_id:carrito._id},"Secreto")
            await carrito.save() 
                  
            if (primero) {
                res.json({
                    mensaje: "El producto fué eliminado correctamente",
                    susProductos: carrito.susProductos,
                    token: token
                })  
            }else{
                res.json({
                    mensaje: "El producto no fué encontrado",
                    susProductos:  carrito.susProductos,
                    token: token
                })  
            }
        }
    }
}

module.exports = CarritoCtrl