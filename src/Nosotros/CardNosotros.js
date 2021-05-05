import React from 'react';
import './CardNosotros.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Historia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/fundador.jpg'
              text='Fundador: Doctor Enrique Rossi'
              label='Fundador'
              path='/services'
            />
            <CardItem
              src='images/director.jpg'
              text='Director Dr. Santiago Rossi'
              label='Director'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/unaClaraVocacion.png'
              text='Generaciones de médicos con una misma pasión; la especialización y la vocación de sanar a las personas.'
              label='Una clara vocación'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Descubrí nuestras instalaciones'
              label='De interés'
              path='/products'
            />
            <CardItem
              src='images/visto.jpg'
              text='El trabajo y la convicción de brindar atención médica de excelencia cada día.'
              label='Una constante desde hace más de 89 años'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;