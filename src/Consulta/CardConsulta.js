import React from 'react';
import './CardConsulta.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Contacto</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/telefono.jpg'
              text='(011) 4011-8080'
              label='Única línea disponible'
              path='/services'
            />
            <CardItem
              src='images/direccion.jpg'
              text='Sánchez de Loria 117'
              label='Abasto'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/reloj.jpg'
              text='Lu a Vi 7:00 a 14:00 h'
              label='Horario'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;