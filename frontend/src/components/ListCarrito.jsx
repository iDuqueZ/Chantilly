import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/Carrito.css'

export default function ListCarrito() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerCarro()
  }, [])
  
const obtenerCarro = async() =>{
  const idUsuario = sessionStorage.getItem('idUser');
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/carrito/listarPorUsuario/'+ idUsuario, {
      headers : {'autorizacion': token}
    })

    console.log(respuesta)
    setProductos(respuesta.data[0].susProductos)
    console.log(respuesta.data[0].susProductos)
}

  return (
    <div className='principal'>

    <div className='cajon'>
    {Array.from(productos).map((producto) => (
      <div className='CajonProducto'>
        <div className='Imagen'>
          <img src={producto.imagen} alt=''/>
        </div>
        <div className='Texto'>
          <h3>{producto.nombre}</h3>
          <br></br>
          <br></br>
          <br></br>
          <h4>$ {producto.precio}</h4>
        </div>
        <div className='BotonDelete'>Delete</div>
      </div>
      ))}
    </div>


      <div className='ResumenCompra'>
        <div className='title'>
          <h5>Resumen de la compra</h5>
        </div>
        <br></br>
        <div>
          <h6>$ 0000</h6>
          <h6>$ 0000</h6>
          <h6>$ 0000</h6>
        </div>
        <hr></hr>
        <div>
          <h6>Total:</h6>
          <h6>$ 00000</h6> 
        </div>
        <div>
          Método de pago
        </div>
      </div>
    </div>
  )
}
