import React from 'react'
import '../styles/LoginUser.css'
import Button from '@mui/material/Button'
import Ilustracion from '../img/fondoRegister.png'
import { Form } from 'react-bootstrap'

export default function RegisterUser() {
  return (
    <div className='bodyLoginUser'>
        <div className='Form'>
            <div className='contenedor2'>
                <h3>Registrase</h3>
                <br/>
                <Form className='row'>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digite su username'/>
                </Form.Group>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' className='form-control required' placeholder='Digite su password'/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-12'>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type='email' className='form-control required' placeholder='Digite su correo'/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type='date' className='form-control required' placeholder='Fecha'/>
                </Form.Group>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Telefonó</Form.Label>
                    <Form.Control type='number' className='form-control required' placeholder='Digite tu número de celular'/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-12'>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digite la dirreción a la que le llegaran los pedidos'/>
                </Form.Group>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor: '#F56CE8'}}
                >
                  Registrarse
                </Button>
                </Form>
                <a style={{color: '#4e4e4e'}} href='/'>Iniciar sesión</a>
            </div>
        </div>
        <div className='ilustracion'>
            <img src={Ilustracion} alt="" />
        </div>
    </div>
  )
}
