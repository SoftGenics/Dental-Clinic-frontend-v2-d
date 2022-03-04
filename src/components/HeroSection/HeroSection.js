import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/videos-3.mp4' autoPlay loop muted />
      <span style={{color: 'white'}}>
            <Typewriter 
            loop
            cursor
            cursorStyle="_"
            typeSpeed={20}
            deleteSpeed={50}
            words={['WELCOME TO']}
            />
            </span>
      <p>DENTAL CLINIC HOME </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK NOW <i className="fas fa-sign-in-alt" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
