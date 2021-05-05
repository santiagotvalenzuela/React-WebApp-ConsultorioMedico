import React from 'react';
import Form from '../Consulta/FormConsulta';
import Footer from '../Footer';
import Mapa from '../Mapa';
import Cards from '../Consulta/CardConsulta';
import NavBar from '../Navbar';

function Contacto() {
    return (
      <>
        <NavBar />
        <Form />
        <Cards />
        <Mapa />    
        <Footer />
      </>
    );
  }
  
  export default Contacto;