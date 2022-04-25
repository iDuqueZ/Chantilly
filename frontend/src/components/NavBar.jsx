import React from 'react'
import Logo from '../img/Logo.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'boxicons'

export default function NavBar() {
  return (
    <Navbar style={{backgroundColor: "#303030"}} variant="dark">
    <Container>
      <Navbar.Brand href="/home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="33"
          className="d-inline-block align-top"
        />{' '}
      Chantilly
      </Navbar.Brand>
        <Nav className="justify-content-end">
        <Nav.Link href="#home"><box-icon name='user' color='white' size='cssSize' ></box-icon></Nav.Link>
        <Nav.Link href="#features"><box-icon name='cart' color='white' size='cssSize' ></box-icon></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
