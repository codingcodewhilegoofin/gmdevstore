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
      <h1>HOW TO CONTACT ME</h1>
      <h4>I should be available any day of the week , at any reasonable time!  </h4>

      <div className='contactCT' style={{ backgroundColor: "#161A1D" , border: "5px solid white" }}>
      <form action="">
        <label for="fname" style={{color: "white" }}>EMAIL:</label>
        <input type="text" value="yupimaperson101@protonmail.com" id="myInput" size= "51"/>
        <br></br>

        <label for="pin"  style={{color: "white" }}>PHONE:</label>
        <input type="text" value="224-245-7385" id="myInput" size= "50"/>
        <br></br>

        <label for="pin"  style={{color: "white" }}>INSTAGRAM:</label>
        <input type="text" value="https://www.instagram.com/coding_code_while_goofin/" id="myInput" size= "45"/>
        <br></br>
      </form>
      </div>
      
     
      
     
     

     
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

    </div>
    
  );
}





export default HeaderContact;