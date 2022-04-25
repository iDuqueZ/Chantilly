import React from 'react'
import Fondo from '../img/FondoInicio.png'
import '../styles/Banner.css';
import { Card, Button, CardGroup } from 'react-bootstrap';

export default function Banner() {
  return (
    <div className='Banner'>
        <div className='Fondo'>
            <img src={Fondo} alt=""/>
        </div>
        <div className='Titulo'>
            <h1>¡Promoción del día!</h1>
        </div>
        <div className='TarjetaPromo'>
        <CardGroup>
        <Card style={{ width: '12rem' }}>
            <Card.Body>
                <Card.Title>Merengues de fresa x2</Card.Title>
                <Card.Text>
                $ 20.000
                </Card.Text>
                <Button style={{backgroundColor: "#F56CE8"}} variant="secondary">Comprar</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://www.crumbsmia.com/spa/wp-content/uploads/2019/02/MNMRENG.jpg" />
        </Card>
        </CardGroup>
        </div>
    </div>
  )
}
