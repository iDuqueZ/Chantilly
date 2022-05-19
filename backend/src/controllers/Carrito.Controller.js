//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const CarritoCtrl = {}
const Carro = require('../models/Carrito.model')
const Producto = require('../models/Producto.model')


CarritoCtrl.crearCarrito = async(req,res) => {
    const{susProductos,idUsuario} = req.body
    const NuevoCarrito = new Carro({
        susProductos,
        idUsuario
    })

    await NuevoCarrito.save()
    res.json({
        mensaje: "Carro creado",
    })
}

CarritoCtrl.actualizarCarro = async(req,res) => {
    const id = req.params.id
    const respuesta = await Producto.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje: 'Producto actualizado',
    })
}

CarritoCtrl.eliminarCarrito = async(req,res) => {
    const id = req.params.id
    const respuesta = await Producto.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Producto eliminado',
    })
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

CarritoCtrl.listarPorUsuario = async(req,res) => {
    const idUsuario = req.params.idUsuario;
    try {
        const respuesta = await Carro.find({idUsuario: idUsuario})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'No encontrado',
            error
        })
    
    }
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
            const respuesta = await carrito.save()        
            res.json({
                mensaje: "El producto fué agregado correctamente",
                respuesta
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


            const respuesta= await carrito.save() 
                  
            if (primero) {
                res.json({
                    mensaje: "El producto fué eliminado correctamente",
                    respuesta
                })  
            }else{
                res.json({
                    mensaje: "El producto no fué encontrado",
                    respuesta
                })  
            }
        }
    }
}

CarritoCtrl.limpiarCarro= async(req,res) => {
    const id = req.params.id;
    const carrito = await Carro.findById({_id:id})
    carrito.susProductos = []
    const respuesta= await carrito.save() 
    res.json({
        mensaje: "Carro limpiado",
        respuesta
    })  
}

module.exports = CarritoCtrl