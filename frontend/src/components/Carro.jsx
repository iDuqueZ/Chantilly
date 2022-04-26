import React, {useState} from 'react'
import { Nav } from 'react-bootstrap'
import ListCarrito from './ListCarrito';
import '../styles/Carro.css'

export default function Carro() {

const [selec, setSelec]= useState('');

const handleSelect = (eventKey) =>{
    if(eventKey === '1'){
        setSelec('1')
    }else {
        setSelec('2')
    }
}

  return (
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
        if (selec === '1') {
          return (
            <ListCarrito/>
          )
        } else {
          return (
            <div>Historial</div>
          )
        }
      })()}
    </div>
  )
}
