import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import ListProductos from './ListProductos'
import '../styles/conInicio.css'

export default function conInicio() {
  return (
    <div>
      <NavBar/>
    <div className='bodyHome'>
        <Banner/>
        <div className='Trans'>
            <h4>Más productos</h4>
        </div>
        <ListProductos/>

        <div className='footer'>
            <p>Todos los derechos reservados Chantilly</p>
        </div>
    </div>
    </div>
  )
}
