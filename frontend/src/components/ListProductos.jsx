import React, {useEffect , useState} from 'react'
import {Row, Col, Card, Modal, Button, CardGroup} from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function ListProductos() {

  const [productos, setProductos] = useState([])
    const [name, setname]= useState('');
    const [precio, setprecio] = useState('');
    const [imagen, setimagen]= useState('');
    const [descripcion, setdescripcion] = useState  ('');
    const [id, setId] = useState ('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
      obtenerProductos();
    }, [])
    
    const obtenerProductos = async()=>{

      const token = sessionStorage.getItem('token')
      const respuesta = await axios.get('/producto/listar', {
          headers : {'autorizacion': token}
      })
      console.log(respuesta)

      setProductos(respuesta.data)
  }

  const obtenerProducto = (idParametro) => async(event)=>{
    event.stopPropagation();
    event.preventDefault();
    setShow(true)
    const id = idParametro
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/producto/listar/' + id, {
        headers : {'autorizacion': token}
    })
    console.log(respuesta.data)
    setname(respuesta.data.nombre)
    setprecio(respuesta.data.precio)
    setdescripcion(respuesta.data.descripcion)
    setimagen(respuesta.data.imagen)
    setId (respuesta.data._id)
  
    setShow(true);
  }

  const añadirCarrito = (idParametro) => async(event)=>{
    event.stopPropagation();
    event.preventDefault();

    const idUsuario = sessionStorage.getItem('idUser');
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/carrito/listarPorUsuario/'+ idUsuario, {
      headers : {'autorizacion': token}
    })

    console.log(respuesta)

    const idCarro = respuesta.data[0]._id;
    console.log(respuesta.data[0]._id);
    const idProducto = idParametro;

    const car = {idCarro, idProducto}
    console.log(car)
    const respuesta2 = await axios.post('/carrito/agregarProducto', car , {
      headers : {'autorizacion': token}
    })

    console.log(respuesta2)

    Swal.fire({
      icon: 'success',
      title: respuesta2.data.mensaje,
      text: 'Oprime el icono del carro de compra para ver tus productos agragados',
      showConfirmButton: true,
      timer: 2500
  })

  }

  return (
    <div className='GridProductos'>
        <Row xs={4} md={4} className="g-4">
        {Array.from(productos).map((producto) => (
            <Col>
            <Card onClick={obtenerProducto(producto._id)} style={{ width: '14rem' }}>
                <Card.Img style={{objectFit: 'cover', backgroundSize: 'cover'}} variant="top" src={producto.imagen} />
                <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text style={{color: '#F56CE8'}}>
                    <strong>$ {producto.precio}</strong>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CardGroup>
          <Card>
            <Card.Img style={{sobjectFit: 'cover', backgroundSize: 'cover'}} variant="left" src={imagen}/>
            <Card.Body>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                {descripcion}
                <br/><br/>
                <h3>${precio}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
                <Button variant="primary" onClick={añadirCarrito(id)}>
                  Añadir a carrito
                </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}
