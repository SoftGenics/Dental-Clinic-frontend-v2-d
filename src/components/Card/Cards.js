import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Dentistry</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Cosmetic Dentistry & Smile Design is the primary service we offer'
              label='Cosmetic Denstistry'
              path='/services'
            />
            <CardItem
              src='images/2.jpg'
              text='Beautiful smiling model with dental mirror'
              label='Dental Mirror'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Woman wearing orthodontic silicone trainer.'
              label='Braces Aligner'
              path='/services'
            />
            <CardItem
              src='images/4.jpg'
              text='The mouth of a child who lost one baby tooth and grows his first molar tooth close up'
              label='Baby Tooth'
              path='/products'
            />
            <CardItem
              src='images/5.jpg'
              text='Clear Aligner Dental Night Guard For Teeth'
              label='Aligner Dental'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
