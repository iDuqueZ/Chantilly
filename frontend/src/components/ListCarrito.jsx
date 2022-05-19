import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Carrito.css'

export default function ListCarrito() {

  const [productos, setProductos] = useState([]);
  const [idUsuario, setId] = useState('');
  const [idCarro, setIdCarro] = useState('');
  const [metodoPago, setMetodoPago] = useState([]);
  const [metodoPagoSelect, setMetodoPagoSelect] = useState('');

  useEffect(() => {
    obtenerCarro()

    setMetodoPago(['Efectivo', 'En línea'])
    setMetodoPagoSelect('Efectivo')
  }, [])
  
const obtenerCarro = async() =>{
  const idUsuario = sessionStorage.getItem('idUser');
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/carrito/listarPorUsuario/'+ idUsuario, {
      headers : {'autorizacion': token}
    })

    console.log(respuesta)
    setProductos(respuesta.data[0].susProductos)
    setId(respuesta.data[0].idUsuario)
    setIdCarro(respuesta.data[0]._id)
    console.log(respuesta.data[0].susProductos)
}

var total = 0; 

productos.forEach(producto => {
  total += producto.precio;
});

const pedir = async(e) => {
  e.preventDefault();

  const suCarrito = [idUsuario, productos];
  const nuevoPe = {suCarrito, idUsuario, metodoPagoSelect};

  const token = sessionStorage.getItem('token')
  const respuesta = await axios.post('/pedido/crear', nuevoPe, {
    headers : {'autorizacion': token}
  })

  console.log(respuesta)

  Swal.fire({
    icon: 'success',
    title: respuesta.data.mensaje,
    showConfirmButton: true,
    timer: 5000
  })

  const id = idCarro;
  const respuesta2 = await axios.delete('/carrito/limpiar/' + id, {
    headers : {'autorizacion': token}
  })

  console.log(respuesta2);
  obtenerCarro();

}

const quitarProducto = (idProducto) => async(e) => {
  e.preventDefault();
  e.stopPropagation();

  const car = {idCarro, idProducto}
  const token = sessionStorage.getItem('token')
  const respuesta = await axios.post('/carrito/removerProducto', car, {
    headers : {'autorizacion': token}
  })

  console.log(respuesta);

  Swal.fire({
    icon: 'success',
    title: respuesta.data.mensaje,
    showConfirmButton: false,
    timer: 2000
  })

  obtenerCarro();

}

const direccion = sessionStorage.getItem('direccion');

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
        <div className='BotonDelete'><label onClick={quitarProducto(producto._id)}>Delete</label></div>
      </div>
      ))}
    </div>

    <div className='ladoDerecho'>
      <div className='ResumenCompra'>
        <div className='title'>
          <h5>Resumen de la compra</h5>
        </div>
        <br></br>
        <div>
        {Array.from(productos).map((producto) => (
          <h6>$ {producto.precio}</h6>
        ))}
        </div>
        <hr></hr>
        <div>
          <h6>Total:</h6>
          <h6>$ {total}</h6> 
        </div>
        <div>
          <h6 className='label'>Método de pago</h6>

          <div className='col-md-12' style={{marginBottom: '10px'}}>
              <select className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setMetodoPagoSelect(e.target.value)}>
                  {
                      metodoPago.map(metodo =>(
                          <option key={metodo}>
                                {metodo}
                          </option>
                      ))
                  }
               </select>
          </div>
        </div>
      </div>

      <div className='Direccion'>
            <h6>Dirección de envio</h6>
            <h7 className='h7'>{direccion}</h7>
      </div>

      <div className='botonComprar'>
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{width: '100%', color:'white', backgroundColor: '#F56CE8'}}
              onClick= {pedir}
              >
                  Comprar
          </Button>
      </div>

    </div>
    </div>
  )
}
