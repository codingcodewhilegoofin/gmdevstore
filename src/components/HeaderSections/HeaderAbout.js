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
      <video src='/videos/invert.mp4' autoPlay muted   />
      <h1>ABOUT ME : Skills & information</h1>
      <h4> I am currently an undergrad in the computer science program at NIU. 
           Our program mainly focuses on teaching us how to understand WHY code is working and not how to just write code. 
      <br></br>This gave me the advantage of understanding the standards, 
           data structures, and mathematical reasoning behind most coding / computer science applications. </h4>
      <p>I have a range of experience in all listed languages. I am most comfortable with the C family but can adapt pretty easily.
      </p>
    
      </div>

      <div className='gio-container-2'>

        <h1>LANGUAGES: </h1>
        
        <ul>
        
        <li>C / C++:</li>
          <ul>
              <li>My first programming language. Plenty of coding projects to view on my website</li>
          </ul>
  
        <br></br>
  
        <li>JAVA / PYTHON / C# / PHP:
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

        <li>HTML, CSS, JS, JSX,JSON,XML, MARKDOWN:
          <ul>
              <li>Experience in web development & design. Used during CodeOrange internship and Personal website ( giomoscato.com)</li>
          </ul>
        </li>

        <br></br>

        <li> MySQL / SQL:
          <ul>
              <li>Queried/Created databases during my CodeOrange internship and during school through mostly SQL.</li>
          </ul>
        </li>

        <br></br>

        <li> UNIX / BASH :
          <ul>
              <li>Experience with a command line, sys commands, and OS api's </li>
          </ul>
        </li>
  
        </ul>

      </div>

      <div className='gio-container-3'>
        
      <h1>MORE WEB DEV EXPERIENCE: </h1>
        
        <ul>
        
        <li>FRONTEND:</li>
          <ol>
              <li>React</li>
              <li>PCF/AWS</li>
              <li>NPM</li>
          </ol>
  
        <br></br>
        <br></br>
        <br></br>
  
        <li>BACKEND:
          <ul>
            <br></br>
              <li>SPRINGBOOT:</li>
                <ol>
                    <li>
                        Java 
                    </li>
                    <li> REST/MVC</li>
                    <li> Hibernate/H2</li>
                </ol>
                <br></br>
              <li>MONGODB:</li>
              <ol>
                    <li>
                        Mostly for personal projects 
                    </li>
                    <li> Cluster managment / Documents</li>
                    <li> User managment/permissions</li>
                </ol>
              <br></br>
              <li>EXPRESS / NODE JS</li>
              <ol>
                    <li>
                        Used during CodeOrange internship 
                    </li>
                    <li> Used to handle dynamic http requests</li>
                </ol>
          </ul>
        </li>

        </ul>
      </div>

      <div className='gio-container-4'>
      <h1>CODE/PACKAGE MANAGEMENT: </h1>
        
        <ul>
        
        <li>GITHUB:</li>
          <ol>
              <li>Github add, commit , push cycle</li>
              <li>Branch management / Issue handling / AGILE methodology </li>
              <li>Githubpages / Github API experience</li>
          </ol>
  
        <br></br>
        <br></br>
        <br></br>
  
        <li>NPM / GRADLE :</li>
          <ol>
              <li>Update , install , and manage dev dependencies/packages and scripts</li>
              <li>Directory management for packages in different servers </li>
          </ol>


      
        </ul>

      </div>

        <div className='gio-container-5'>
        <h4>What was Code Orange?  </h4>
        <p>
            Tech-savvy juniors and seniors were hired by Discover and are being paid to work on and help develop new Discover technologies in the areas of mobile-software development, 
            <br></br>web-application coding, blue-tooth development and person-to-person payment systems  
        </p>

        <br></br>
        <br></br>


        <p>
              During the summer of 2020 I participated in the code_orange program at NIU. 
              <br></br>I was on a team tasked with developing a Full -stack website to host a user statistics dash board for the program. Unfortunately the program was cancelled due to COVID-19. 
              <br></br>Since DFS is a financial company we were not allowed to save any work from this internship and all I have to show is a few articles referring to it. ( link bellow )
        </p>

        <a href="https://newsroom.niu.edu/2018/11/01/niu-discover-mark-launch-of-on-campus-code_orange-program/">
          <h4> NIU code_orange program description</h4>
        </a>

        <a href="https://www.mystateline.com/news/niu-students-get-real-world-experience-developing-technology-for-discover/1495852453/">
          <h4> Article about the program</h4>
        </a>

        
        </div>

        <div className="end-div">
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
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
          </a>
        </div>

        <div className="end-div">
          <a href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/">
          <h2> Having trouble viewing my website ? 💔 </h2>
          
          <h5> I tried to make my website desktop and mobile friendly as possible</h5>
         
          <h3> If you're having issues on mobile try switching to desktop view! 
            <br></br>I'm currently working to fix these bugs sorry! 
            
          </h3>
          </a>
        </div>


    </div>
  );
}

export default HeaderAbout;