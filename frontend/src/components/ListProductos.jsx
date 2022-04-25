import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export default function ListProductos() {
  return (
    <div className='GridProductos'>
        <Row xs={4} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src="https://images.rappi.com/products/5ccd8c12-4560-4e14-b5a5-d96324f7086c-1603481916739.jpeg" />
                <Card.Body>
                <Card.Title>Titulo de Producto</Card.Title>
                <Card.Text style={{color: '#F56CE8'}}>
                    <strong>$0.000</strong>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </div>
  )
}
