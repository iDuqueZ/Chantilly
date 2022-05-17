import React, {useEffect , useState} from 'react'
import {Row, Col, Card, Modal, Button, CardGroup} from 'react-bootstrap'
import axios from 'axios'

export default function ListProductos() {

  const [productos, setProductos] = useState([])
    const [name, setname]= useState('');
    const [precio, setprecio] = useState('');
    const [imagen, setimagen]= useState('');
    const [descripcion, setdescripcion] = useState  ('');
    const [id, setId] = useState ('');

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

  return (
    <div className='GridProductos'>
        <Row xs={4} md={4} className="g-4">
        {Array.from(productos).map((producto) => (
            <Col>
            <Card style={{ width: '14rem' }}>
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
    </div>
  )
}
