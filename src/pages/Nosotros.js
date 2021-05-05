import React from 'react';
import Nos from '../Nosotros/NosotrosSection';
import Footer from '../Footer';
import Cards from '../Nosotros/CardNosotros';
import NavBar from '../Navbar'

function Nosotros() {
    return (
      <>
        <NavBar />
        <Nos />
        <Cards/>
        <Footer/>
      </>
    );
  }  
  
  export default Nosotros;