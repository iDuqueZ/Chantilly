import React, {useState} from 'react'
import { Nav } from 'react-bootstrap'
import NavBar from './NavBar';
import ListCarrito from './ListCarrito';
import '../styles/Carro.css'

export default function Carro() {

const [selec, setSelec]= useState('');

const handleSelect = (eventKey) =>{
    if(eventKey === '2'){
        setSelec('2')
    }else {
        setSelec('1')
    }
}

  return (
    <div>
      <NavBar/>

    <div className='caja'>
        <Nav variant="tabs" defaultActiveKey="1" onSelect={handleSelect}>
        <Nav.Item>
            <Nav.Link eventKey="1">Carrito de compras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2">
                Historial de compras
            </Nav.Link>
        </Nav.Item>
        </Nav>
        {(() => {
        if (selec === '2') {
          return (
            <div>Historial</div>
          )
        } else {
          return (   
            <ListCarrito/>
          )
        }
      })()}
    </div>
    </div>
  )
}
