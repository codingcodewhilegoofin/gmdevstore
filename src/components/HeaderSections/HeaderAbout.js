import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';


function HeaderAbout() {
  return (
    <div className='gio-main'>
      <div className='gio-container'>
      <video src='/videos/invert.mp4' autoPlay   />
      <h1>ABOUT ME : Skills & information</h1>
      <h4> I am currently an undergrad in the computer science program at NIU. 
           Our program mainly focuses on teaching us how to understand WHY code is working and not how to just write code. 
      <br></br>This gave me the advantage of understanding the standards, 
           data structures, and mathematical reasoning behind most coding / computer science applications. </h4>
      <p>I have a range of experience in all listed languages. I am most comfortable with C++ but can adapt pretty easily.
      </p>
    
      </div>

      <div className='gio-container-2'>


        <h1>LANGUAGES: </h1>
        
        <ul>
        
        <li>C++:</li>
          <ul>
              <li>My first programming language. Plenty of coding projects to view on my website</li>
          </ul>
  
        <br></br>
  
        <li>JAVA / PYTHON / C#:
          <ul>
              <li>Some experience</li>
          </ul>
        </li>

        <br></br>

        <li>ASSIST ASSEMBLY ( INTEL ):
          <ul>
              <li>Experience in high level assembly </li>
          </ul>
        </li>

        <br></br>

        <li>HTML, CSS, JS, JSX,JSON,XML:
          <ul>
              <li>Intermediate experience in web development. Used during CodeOrange internship and Personal website ( giomoscato.com)</li>
          </ul>
        </li>

        <br></br>
  
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

export default HeaderAbout;