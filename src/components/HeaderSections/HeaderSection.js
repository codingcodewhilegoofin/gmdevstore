import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';
import '../../icons/gio.jpg';


function HeaderSection() {
  return (
    <div>
      <div className='hero-container'>
      <video src='/videos/space.mp4' autoPlay loop muted />
      <h1>YAY! 🥳 You've made it to giomoscato.com</h1>
      <h4>Who is Giovanni Moscato? </h4>
      <p>I started programming about 4 years ago at my community college and began to grow more interest in it as I progressed through school. 
        Originally I was going to school for VFX or some kind of art program. 
        I have always had a love for art and music but I also wanted to work in the tech industry. 
        My dream career would involve combing technology and art together to create experiences that users really love. 
        At the moment I have a decent range of experience in programming and design aspects. 
        Currently I am trying to figure out what niche of programming I'd like to focus on. 
        Recently I have begun to explore Machine Learning and Web Dev! 
      </p>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DOWNLOAD MY RESUME 📝
        </Button>
      </div>

     
      <p>If you want all my information in resume format click this button or on top right navbar
      </p>




     
      </div>

      <div className='gio-container-2'>
        <h1>Details of Relevant skills & information </h1>
        <p>
          You can find more information on what technologies, languages, data structures and concepts, ectr I have experience
          with on the about/skills page! 
        </p>
        <p>
          Click the "brain" icon to learn more or scroll up! 
        </p>
        <h4> Quick summary of skillset : </h4>
        <ul>
          <li> Yes</li>
          <li> No</li>
        </ul>
      </div>

      <div className='gio-container-3'>
        <h1>Feel free to contact me! </h1>

        <img src='../../icons/gio.jpg' sizes="(min-width: 600px) 25vw, (min-width: 500px) 50vw, 100vw" />
        <p>
          Besides github and linkedin I want to be open and available to anyone who wants to chat!
          All other relevant contact information is available through the "email icon" or contact page.
        </p>
        <h4> Best way to reach me? : </h4>
        <ul>
          <li> Linkedin Dm ( Professional please )</li>
          <li> Given email ( No I will not open your spam , nice try tho)</li>
        </ul>
      </div>

      <div className='gio-container-4'>
        <h1>Personal Projects 💻: </h1>
        <p>
            Here are some of my favorite and most impressive projects I've aready completed.
            Most of the source code is publicaly available on my github. 
        </p>
        <h4> Converter : </h4>
        <iframe 
        height="400px" 
        width="100%" 
        src="https://replit.com/@codingcodewhile/IntelligentBurdensomeAdaware?lite=true" 
        scrolling="no" 
        frameborder="no" 
        allowtransparency="true" 
        allowfullscreen="true" 
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
        </iframe>
      </div>



    </div>
  );
}

export default HeaderSection;