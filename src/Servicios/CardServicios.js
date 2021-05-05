import React from 'react';
import './CardServicios.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Obras sociales</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/osde.jpg'
              text='OSDE'  
              label='OSDE'
              path='/services'
            />
            <CardItem
              src='images/swiss.jpg'
              text='Swiss Medical'
              label='Swiss Medical'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pasteur.jpg'
              text='Luis Pasteur'
              label=' Pasteur'
              path='/services'
            />
            <CardItem
              src='images/galeno.jpg'
              text='Galeno'
              label='Galeno'
              path='/products'
            />
            <CardItem
              src='images/medife.jpg'
              text='Medifé'
              label='Medifé'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;