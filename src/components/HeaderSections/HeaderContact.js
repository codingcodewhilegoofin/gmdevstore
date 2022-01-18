import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';
import '../../icons/instagram.png';



function HeaderContact() {
  return (
    <div className='gio-main'>
      <div className='gio-container'>
      <video src='/videos/split.mp4' autoPlay loop muted />
      <h1>HOW TO CONTACT ME</h1>
      <h4>Contact me anytime CST  </h4>

      <div className='contactCT' style={{ backgroundColor: "#161A1D" , border: "1px solid white" }}>
        <h1> Social Media</h1>
      <form action="">
        
        <label for="fname" style={{color: "white" }} >EMAIL:</label>
        <br/>
          <input type="text" value="yupimaperson101@protonmail.com" id="myInput" size= "80vw"/>
        <br></br>
        <br/>

        <label for="pin"  style={{color: "red" }}>PHONE:</label>
        <br/>
          <input type="text" value="224-245-7385" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <img src="linkedin.svg" style={{ width: '25px', height: '25px'}}/>
        <br/>
          <input type="text" value="https://www.instagram.com/giovannimoscato101/" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <label for="fname" style={{color: "blue" }}>LINKEDIN:</label>
        <br/>
          <input type="text" value="https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <a href="https://www.buymeacoffee.com/giomoscato101">
          <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=7F00FF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/>
        </a> 
        <br/>

        <label for="fname" style={{color: "#1DA1F2" }}>Twitter:</label>
        <br/>
          <input type="text" value="https://twitter.com/GiovanniJMosca1" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <label for="fname" style={{color: "#14171A", backgroundColor: 'white' }}>TikTok:</label>
        <br/>
          <input type="text" value="https://www.tiktok.com/@giomoscatodev?lang=en" id="myInput" size= "auto"/>
        <br></br>
        
        <br/>
      </form>
      </div>
    </div>


    <div className='gio-container-2'>
      <div className='contactCT' style={{ backgroundColor: "#161A1D" , border: "1px solid white" }}>
        <h1> Developer Media </h1>
        <form action="">
        
        <label for="fname" style={{color: "white" }} >Github:</label>
        <br/>
          <input type="text" value="https://github.com/codingcodewhilegoofin/giowebsite/settings/pages" id="myInput" size= "80vw"/>
        <br></br>
        <br/>

        <label for="pin"  style={{color: "red" }}>StackOF:</label>
        <br/>
          <input type="text" value="https://stackoverflow.com/users/14115291/giovanni-moscato" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <label for="pin"  style={{color: "pink" }}>Devpost:</label>
        <br/>
          <input type="text" value="https://devpost.com/codingcodewhilegoofin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <label for="fname" style={{color: "blue" }}>HackerRank:</label>
        <br/>
          <input type="text" value="https://www.hackerrank.com/Yupimaperson101?hr_r=1" id="myInput" size= "auto"/>
        <br></br>
        <br/>

        <a href="https://www.buymeacoffee.com/giomoscato101">
          <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=7F00FF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/>
        </a> 
        <br/>

        <label for="fname" style={{color: "#1DA1F2" }}>BuyMeACoffe:</label>
        <br/>
          <input type="text" value="https://www.buymeacoffee.com/giomoscato101" id="myInput" size= "auto"/>
        <br></br>
        <br/>

    
        <br/>
      </form>
      </div>
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

    </div>
    
  );
}





export default HeaderContact;