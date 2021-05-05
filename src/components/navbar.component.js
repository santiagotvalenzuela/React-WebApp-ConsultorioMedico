import React, { Component } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'
import "./../NavIntra.css";


export default class NavBar extends Component {
  eventoLogOut=()=>{
    localStorage.clear();
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className="NavInt">
        <Navbar.Brand href="/">Consultorio Medico</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav>
            <Nav.Link href="/turnos">Turnos</Nav.Link>
            <Nav.Link href="/createTurno">Crear Turno</Nav.Link>
            <Nav.Link href="/users">Usuarios</Nav.Link>
            <Nav.Link href="/createUser">Crear Usuario</Nav.Link>
            <Nav.Link href="/recetas">Recetas</Nav.Link>
            <Nav.Link href="/createReceta">Crear Receta</Nav.Link>
            <Nav.Link href="/historialList">Historiales</Nav.Link>
            <Nav.Link href="/crearHistorial">Crear Historial</Nav.Link>
            <Nav.Link href="/"><Button buttonStyle='btn--outline' onClick={this.eventoLogOut}>Salir</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}