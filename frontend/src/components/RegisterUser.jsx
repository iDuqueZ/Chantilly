import React, {useState} from 'react'
import '../styles/LoginUser.css'
import Button from '@mui/material/Button'
import Ilustracion from '../img/fondoRegister.png'
import NavBar from './NavOff'
import { Form } from 'react-bootstrap'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function RegisterUser() {

const [userName, setUser] = useState('')
const [contrasena, setContrasena] = useState('')
const [correo, setCorreo] = useState ('')
const [fechaNacimiento, setFechaN] = useState ('')
const [direccion, setDireccion] = useState('')
const [telefono, setTelefono] = useState('')
// const [idUsuario, setId] = useState('');


const register = async(e) =>{
    e.preventDefault();
    const user = {userName, contrasena, correo, fechaNacimiento, direccion, telefono}

    if(userName === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar un nombre',
            showConfirmButton: false,
            timer: '1500'
        })
    } else if (contrasena === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar una contraseña',
            showConfirmButton: false,
            timer: '1500'
        })
    }else if (correo === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar un correo valido',
            showConfirmButton: false,
            timer: '1500'
        })
    }else if (fechaNacimiento === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar su fecha de nacimietno',
            showConfirmButton: false,
            timer: '1500'
        })
    }else if (direccion === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar una dirección',
            showConfirmButton: false,
            timer: '1500'
        })
    }else if (telefono === ''){
        Swal.fire({
            icon: 'error',
            title: 'Debe ingresar un número de contacto',
            showConfirmButton: false,
            timer: '1500'
        })
    }else if (telefono < 0){
        Swal.fire({
            icon: 'error',
            title: 'El número de celular invalido',
            showConfirmButton: false,
            timer: '1500'
        })
    }else {
    
        const respuesta = await Axios.post('/User/crear', user);
        console.log(respuesta);

        const mensaje = respuesta.data.mensaje
        // setId(respuesta.data.respuesta._id)
        console.log(respuesta.data.respuesta._id)
        const idUsuario = respuesta.data.respuesta._id
        const susProductos= [];
        const carro = {susProductos, idUsuario}
        const respuesta2 = await Axios.post('/Carrito/crear', carro);
        console.log(respuesta2.data.mensaje)

        if(mensaje !== 'Bienvenido'){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }else {
            Swal.fire({
                icon: 'success',
                title: mensaje,
                text: 'Ya puedes iniciar sesión',
                showConfirmButton: false,
                timer: 1500
            })
            
        }
    }

}




  return (
    <div>
        <NavBar/>
    <div className='bodyLoginUser'>
        <div className='Form'>
            <div className='contenedor2'>
                <h3>Registrase</h3>
                <br/>
                <Form className='row' onSubmit={register}>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digite su username'  onChange={(e)=>setUser(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' className='form-control required' placeholder='Digite su password' onChange={(e)=>setContrasena(e.target.value)}/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-12'>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type='email' className='form-control required' placeholder='Digite su correo' onChange={(e)=>setCorreo(e.target.value)}/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type='date' className='form-control required' placeholder='Fecha' onChange={(e)=>setFechaN(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-sm-6'>
                    <Form.Label>Telefonó</Form.Label>
                    <Form.Control type='number' className='form-control required' placeholder='Digite tu número de celular' onChange={(e)=>setTelefono(e.target.value)}/>
                </Form.Group>
                <div></div>
                <Form.Group className='col-sm-12'>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digite la dirreción a la que le llegaran los pedidos' onChange={(e)=>setDireccion(e.target.value)}/>
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
    </div>
  )
}
