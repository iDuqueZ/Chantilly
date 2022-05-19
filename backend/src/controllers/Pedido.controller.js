const PedidoCtrl = {}
const Pedido = require('../models/Pedido.model')

PedidoCtrl.crear= async(req,res) => {
    const{suCarrito,metodoPago,fecha,hora,estadoPedido} = req.body
    const NuevoCarrito = new Carro({
        suCarrito,
        metodoPago,
        fecha,
        hora,
        estadoPedido
    })

    const respuesta = await NuevoCarrito.save()
    res.json({
        mensaje: "Pedido realizado",
        respuesta
    })
}

PedidoCtrl.listar = async (req,res) =>{

    const respuesta = await Pedido.find()
    res.json(respuesta)
}

PedidoCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Pedido.findById({_id: id})
    res.json(respuesta)
}

PedidoCtrl.actualizar = async (req,res)=> {

    const id = req.params.id
    const respuesta = await Pedido.findByIdAndUpdate({_id: id}, req.body)
    res.json ({
        mensaje: 'Pedido actualizado'
    })
}

PedidoCtrl.eliminar = async(req,res)=> {
    const id = req.params.id
    const respuesta = await Pedido.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Pedido eliminado'
    })
}

module.exports = PedidoCtrl