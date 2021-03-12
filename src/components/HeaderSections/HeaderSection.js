import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';


function HeaderSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>YAY! 🥳 You've made it to giomoscato.com</h1>
      <h4>Who is Giovanni Moscato? </h4>
      <p>I started programming about 4 years ago at my community college and began to grow more interest in it as I progressed through school. 
        Originally I was going to school for VFX or some kind of art program. 
        I have always had a love for art and music but I also wanted to work in the tech industry. 
        My dream career would involve combing technology and art together to create experiences that users really love. 
        At the moment I have a wide range of experience in programming and design aspects. 
        Currently I am trying to figure out what emphasis of programming I'd like to focus on. 
        Recently I have begun to explore Machine Learning! 
        I plan to keep growing my developer knowledge while letting my creative side flourish with new projects on Github!
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;