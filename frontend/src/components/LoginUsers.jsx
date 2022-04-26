import React from 'react'
import Ilustracion from '../img/ilustracionLogin.png'
import '../styles/LoginUser.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function LoginUser() {
  return (
    <div>
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
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor: '#F56CE8'}}
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
