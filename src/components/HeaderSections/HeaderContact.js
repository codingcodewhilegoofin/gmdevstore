import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';


function HeaderContact() {
  return (
    <div className='gio-main'>
      <div className='gio-container'>
      <video src='/videos/split.mp4' autoPlay loop muted />
      <h1>YOUR DAD</h1>
      <h4>Who is Giovanni Moscato? </h4>
      <p>I started programming about 4 years ago at my community college and began to grow more interest in it as I progressed through school. 
        <br></br>Originally I was going to school for VFX or some kind of art program. 
        I have always had a love for art and music but I also wanted to work in the tech industry. 
        <br></br>My dream career would involve combing technology and art together to create experiences that users really love. 
        <br></br>At the moment I have a decent range of experience in programming and design aspects. 
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

     
      <p><br></br>If you want all my information in resume format click this button or on top right navbar
      </p>




     
      </div>

      <div className='gio-container-2'>
        <h1>Details of Relevant skills & information 📊 </h1>
        <p>
          You can find more information on what technologies, languages, data structures and concepts, ectr I have experience
          with on the about/skills page! 
        </p>
        <p>
          Click the "brain" icon to learn more or scroll up! 
        </p>
        <h4> Quick summary of skillset : </h4>
        <ul>
          <li>Experience in Full-Stack development / Web Design</li>
          <li>Some experience in C++ , Java ,Python, Unix, Assembly, and other languages</li>
          <li>Some experience with database management , algorithm analysis, data structures, and memory management</li>
        </ul>
      </div>

      <div className='gio-container-3'>
        <h1>Feel free to contact me! 📨</h1>

        <img src='https://avatars.githubusercontent.com/u/69764323?s=460&u=3024abfb81a275e97236859efbfe816639da5a44&v=4' className="img-1" />
        <p>
          Besides github and linkedin I want to be open and available to anyone who wants to chat!
          All other relevant contact information is available through the "email icon" or contact page.
        </p>
        <h4> Best way to reach me? : </h4>
        <ul>
          <li> Linkedin Dm ( Professional please )</li>
          <li> Given email ( No I will not open your spam , nice try though)</li>
        </ul>
      </div>

      <div className='gio-container-4'>
        <h1>Personal Projects 💻: </h1>
        <p>
            Here are some of my favorite and most impressive projects I've aready completed.
            Most of the source code is publicaly available on my github. 
        </p>
        <h4> C++ Compiler for IEEE 754 float converter : </h4>
        <iframe 
        height="600px" 
        width="100%" 
        src="https://replit.com/@codingcodewhile/IntelligentBurdensomeAdaware?lite=true" 
        scrolling="yes" 
        frameborder="yes" 
        allowtransparency="true" 
        allowfullscreen="true" 
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
        </iframe>

        <p>I created a IEEE 754 standard converter to convert hexadecimal ( and decimal) numbers into floating point.</p>
        <p> This is my original code and It does have a few errors here and there discussed in DOC. 
            <br></br>Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
        </p>
        </div>

        <div className='gio-container-5'>
        <h1>Unity / C# video game Pink Balls: </h1>
        <p>
            The game is based on velocity. 
            <br></br>You have to keep pressing the move keys to gain enough momentum to reach the end zone! Watch out for cubes they will slow you down.  
        </p>

        <iframe src="https://itch.io/embed-upload/2795508?color=E5383B" allowfullscreen="" width="100%" height="1000px" frameborder="0">
          <a href="https://yupimaperson101.itch.io/pink-balls">Play Pink Balls on itch.io</a>
        </iframe>

        <p>I designed and developed this game completley on my own with some inspiration. I was going for a "monkey ball" type game.
           This game although simple at first glance was extremely hard to make and has many, many bugs that I had to fix.  
           The game is finished however and beatable. There is a menu, main gameplay loop, and end goal. 
           Please reach out to me if you find a bug. Also, I plan to make more levels at some point.
        </p>
        
        </div>

        

        <div className="end-div">
          <h2> Want to know how I made this website ? ✨ </h2>
          <ol>
            <li> React </li>
            <li> NPM</li>
            <li> HTML/CSS/JAVA/JSX </li>
            <li> Githubpages </li>
            <li> GoogleDomains(DNS)</li>
            <li> React Router & Few other libraries</li>
            <li> Github ( source control ) </li>
          </ol>
          <h3> Visit my github to find all the code!(please also folllow lol)
            <br></br>🔥 
            
          </h3>
        </div>





    </div>
  );
}

export default HeaderContact;