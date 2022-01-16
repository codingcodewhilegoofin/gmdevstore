import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';
import co from '../../icons/CO.png';


function HeaderAbout() {
  return (
    <div className='gio-main'>

      <div className='gio-container'>
      <video src='/videos/invert.mp4' autoPlay muted   />
      <h1>ABOUT ME : Skills & information</h1>
      <h4> Graduate with BS of Computer Science from Northern Illinois University on 12/12/21.
      <br/>
      <br/>
          NIU focused on the understanding of the standards, 
          data structures, and mathematical reasoning behind coding / computer science applications. 
      </h4>
      <p> I have a range of experience in all listed languages and technologies. I am most comfortable with the C/Java family but can adapt pretty easily.
      </p>
      </div>

      <div className='gio-container-2'>

      <br/>
      <a href="https://www.buymeacoffee.com/giomoscato101">
        <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=7F00FF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/>
      </a> 

        <h1>LANGUAGES: </h1>

        <ul>

        <br/>
        
          <label style={{color: 'red'}}> Programming Languages ( Compiled ): </label>
          <li>C / C++ / C# :</li>
            <ul>
              <li>My first programming language. Plenty of coding projects to view on my website</li>
            </ul>
  
          <br></br>
  
          <li>JAVA / LaTeX :
            <ul>
              <li>Some experience</li>
            </ul>
          </li>

        <br></br>

          <li>ASSIST ASSEMBLY ( INTEL ):
            <ul>
              <li>Some experience </li>
            </ul>
          </li>

        <br></br>

        <label style={{color: 'red'}}> Scripting Languages ( Interpreted ) : </label>

        <li>JS, JSX, Python, Ruby, PHP, Bash, PowerShell:
          <ul>
              <li>Some experience</li>
          </ul>
        </li>

        <br></br>

        <label style={{color: 'red'}}> Markdown Languages ( Interpreted ) : </label>
          <li>HTML, CSS, Markdown:
            <ul>
              <li>Some experience</li>
            </ul>
          </li>

        <br/>
        <label style={{color: 'red'}}> Procedural Languages ( Relational DB ) : </label>
        <li> MySQL / SQL:
          <ul>
              <li>Queried/Created databases during my CodeOrange internship and during school through mostly SQL.</li>
          </ul>
        </li>

        <br></br>

        <label style={{color: 'red'}}>  Environments: </label>
        <li> UNIX / BASH / LINUX:
          <ul>
              <li>Experience with a CLI, sys commands, and OS api's </li>
          </ul>
        </li>
        <br/>
  
        </ul>

        

      </div>

      <div className='gio-container-3'>
        
       

        <h1> WEB DEV Experience 
        </h1>

       
        
        <ul>
        <br/>
        <li>FRONTEND TECHNOLOGIES / FRAMEWORKS:</li>
        <br/>
          <ul>
              <li>ReactJS</li>
              <li>RubyonRails</li>
              <li>Standard Markdown</li>
          </ul>
  
        <br></br>
        <br></br>
        <br></br>
  
        <li>BACKEND TECHNOLOGIES:
          <ul>
            <br></br>
              <li>Ruby</li>
              <li>NodeJS</li>
              <li>Flask</li>
              <li>ASP.NET</li>
              <li>ExpressJS</li>
              <li>Springboot</li>
              <li>Postman/Insomia</li>
          </ul>
        </li>
        <br/>

        <li>DATABASE / CLOUD SERVICES
          <ul>
            <br></br>
              <li>MongoDB</li>
              <li>H2Hibernate</li>
              <li>AWS</li>
              <li>PCF</li>
          </ul>
        </li>
        <br/>

        </ul>
      </div>

      <div className='gio-container-4'>

       

        <h1>CODE/PACKAGE MANAGEMENT: </h1>

       
        <ul>
        <br/>
        
        <li>GITHUB/GIT:</li>
          <ol>
              <li>Github add, commit , push cycle</li>
              <li>Branch management / Issue handling / AGILE methodology </li>
              <li>Githubpages / Github API experience</li>
          </ol>
          <br/>

        </ul>
  
     
        <ul>
        <br/>
  
        <li>NPM / GRADLE :</li>
          <ol>
              <li>Update , install , and manage dev dependencies/packages and scripts</li>
              <li>Directory management for packages in different servers </li>
          </ol>
          <br/>
        </ul>


        <ul>
        <br/>

          <li>DOCKER:</li>
          <ul>
              <li>Adding a dockerfile, to containerize a project</li>
          </ul>

          <br/>

        </ul>


    
      </div>

        <div className='gio-container-5'>
        <h4>What was Code Orange?  </h4>
        <p>
            Tech-savvy juniors and seniors were hired by Discover and are being paid to work on and help develop new Discover technologies in the areas of mobile-software development, 
            <br></br>web-application coding, blue-tooth development and person-to-person payment systems  
        </p>

        <br></br>
       
        <p>
              During the summer of 2020 I participated in the code_orange program at NIU.<br></br> 
              <br></br>I was on a team tasked with developing a Full -stack website to host a user statistics dash board for the program. Unfortunately the program was cancelled due to COVID-19.
              <br></br> 
              <br></br>Since DFS is a financial company we were not allowed to save any work from this internship and all I have to show is a few articles referring to it. ( link bellow )
        </p>

        <a className='special-link' href="https://newsroom.niu.edu/2018/11/01/niu-discover-mark-launch-of-on-campus-code_orange-program/">
          <h4><i> NIU code_orange program description </i></h4>
        </a>

        
        <a className='special-link' href="https://www.mystateline.com/news/niu-students-get-real-world-experience-developing-technology-for-discover/1495852453/">
          
          <h4><i> Article about the program </i></h4>
        </a>

        <img src={co} alt={"Code Orange logo"} className="img-2" />

        
        </div>

        <div className='gio-container-2'>

        <h1>Additional Experience </h1>
        
        <ul>
        
        <li>Advanced Programming:</li>
          <ul>
              <li>Some experience in Multi-Threading, Concurrent programs, Andriod applications, Semaphores/Deadlock solutions.</li>
          </ul>
  
        <br></br>
  
        <li>MLH ( Major Leauge Hacking):
          <ul>
              <li>Attended 3 hackathons, Joined 1 international team ( India )</li>
          </ul>
        </li>

        <br></br>

        <li>Game Development / Unity :
          <ul>
              <li>Some experience in game design & development in C# ( Unity ), OpenGL Api, and Google Cardboard VR  </li>
          </ul>
        </li>

        <br></br>

        <li>Theoretical Computer Science:
          <ul>
              <li>Some experience with Chomsky's Hierarchy, Turing machine theory, and Finite/Pushdown Automata</li>
          </ul>
        </li>

        <br></br>

        <li> Paradigms:
          <ul>
              <li> Experience in Imperative:  OOP, Scripts, Procedural Languages   </li>
              <li> Experience in Declarative: Database   </li>
          </ul>
        </li>

        <br></br>

        <li> Crypto/FinTech:
          <ul>
              <li> Understanding of theoretical basics of blockchain technology  </li>
          </ul>
        </li>

        <br></br>

        <li>  
          <ul>
              <li>more to come...... </li>
          </ul>
        </li>
  
        </ul>

      </div>
      

      <div className="end-div">
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
          <h2> My website technology pipeline / stack ? ✨ </h2>
          
          <ol>
            <li> Bash/Linux/Windows( CLI/OS )</li>
            <li> VScode( IDE )</li>
            <li> ReactJS </li>
            <li> NPM</li>
            <li> HTML/CSS/JS/JSX </li>
            <li> Githubpages(Host server) </li>
            <li> GoogleDomains(DNS)</li>
            <li> React Router & Few other standard libraries</li>
            <li> Github ( source control ) </li>
          </ol>
          <h3> Please consider collaborating
            <br/> or donating!
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