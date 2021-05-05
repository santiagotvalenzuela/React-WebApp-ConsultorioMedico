import React from 'react';
import Serv from '../Servicios/ServiciosSection';
import Footer from '../Footer';
import Cards from '../Servicios/CardServicios';
import Navbar from '../Navbar';
function Servicios() {
    return (
      <>
        <Navbar />
        <Serv />
        <Cards/>
        <Footer/>
      </>
    );
  }
  
  export default Servicios;