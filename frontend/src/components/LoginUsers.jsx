import React, {useState} from 'react'
import Ilustracion from '../img/ilustracionLogin.png'
import '../styles/LoginUser.css'
import TextField from '@mui/material/TextField';
import NavBar from './NavOff';
import Button from '@mui/material/Button'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function LoginUser() {

  const [userName, setUser] = useState('')
  const [contrasena, setContrasena] = useState('')

    const login= async(e)=>{
        e.preventDefault();
        const user = {userName, contrasena}
        const respuesta= await Axios.post('/User/login', user);
        console.log(respuesta);
        const mensaje= respuesta.data.mensaje;

        if(mensaje !== 'Bienvenido'){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }else {
            const token = respuesta.data.token
            const idUser= respuesta.data.Usuario._id

            sessionStorage.setItem('res', respuesta.data)
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('idUser', idUser)
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
            window.location.href = "/home"
        }
    }

  return (
    <div>
      <NavBar/>
        <div className='bodyLoginUser'>
            <div className='ilustracion'>
                <img alt='' src={Ilustracion}/>
            </div>
            <div className='Form'>
              <div className='contenedor'>
                <h1>Iniciar sesión</h1>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="User name"
                  name="user"
                  autoComplete="user"
                  autoFocus
                  variant='filled'
                  onChange={(e)=>setUser(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant='filled'
                  onChange={(e)=>setContrasena(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor: '#F56CE8'}}
                  onClick= {login}
                >
                  Acceder
                </Button>

                <p>¿Olvidaste tu contraseña o tienes algún problema?</p>
                <a style={{color: '#4e4e4e'}} href='/register'>Registrarse</a>
              </div>          
            </div>
        </div>
    </div>
  )
}
