import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Enterate de las últimas novedades</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Cómo cuidarse en tiempos de pandemia'
              label='Salud'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Conocé las próximas charlas de profesionales de la salud'
              label='Educación'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Consejos para controlar la alimentación en cuarentena'
              label='Salud'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Descubrí nuestras instalaciones'
              label='De interés'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Medidas de prevención del Covid-19'
              label='Salud'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
