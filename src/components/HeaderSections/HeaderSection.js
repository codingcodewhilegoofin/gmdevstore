import React, { useState , useEffect} from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';


import '../../icons/gio.jpg';
import gtrating from '../../icons/gtrating.png';
import gtadd from '../../icons/gtadditional.png';
import safteycheck from '../../icons/safteycheck.png';
import STORE from '../../icons/8XcuzD.png';

import { Link } from "react-router-dom";
import { ReactComponent as Bitcoinsymb} from '../../icons/Bitcoin.svg';
import { ReactComponent as Coffeesymb} from '../../icons/Coffee.svg';

import STOREmusic from '../../audio/Store.ogg';
import Table from './Table';
import GioTable from './GioTable.js';

function HeaderSection() {

  const baseUrl = "https://swapi.dev/api/people";
  const [data, setData] = useState([]);
  const [currentStatus , setStatus] = useState(false);
  let specialheader;
  let youtubesub;
  let musicToggle = false;
  let Toggle;
  if(window.innerWidth < 400) 
  {
    specialheader =   <h1></h1>;
    youtubesub =   <h1></h1>;
  }
  else
  {
    specialheader =   <h1>Feel free to join my discord.</h1>;
    youtubesub =   <h1>SUB TO MY YOUTUBE?</h1>;
  }
  
  function globalMusic() {};

  useEffect(()=>{
    fetch(baseUrl)
    .then((response) =>{
      if(!response.ok)
      {
        return Promise.reject( new Error("Response Error!"));
      }
      else
      {
        return response.json();
      }
    })
    .catch ( (err) =>{
      console.log(err);
    })
    .then((json) => {
      try{
        setData(json.results);
        setStatus(true);
      }
      catch
      {
        return Promise.reject(new Error(`State Error!: Data: ${data} , Connection:${currentStatus}`));
      }
    })
    .catch((err) =>{
      console.log(err);
    })  
  },[]);

  return (
    <div className='gio-main'>
      <div className='gio-container'>
      <video src='/videos/space.mp4' autoPlay loop muted />
      <br/>
      <h1>🥳 Welcome to giomoscato.com Vanilla Version</h1>
      <h4>Who is Giovanni Moscato? </h4>
      <p>I started programming about 4 years ago at my community college. I'm currently working on 3-4 projects! 
        <br></br>
        <br></br>I just graduated from Northern Illinois University with a B.S in computer science
        ( specifically computational programming ) and minor in mathematics.  
        <br></br>
        <br></br>Now working as a Junior Software Developer! 
        <br></br>
        <br></br>At the moment I have a decent range of experience in programming and design aspects. 
        <br></br>
        <br></br>
        Currently I am trying to figure out what area of programming I'd like to specialize in. 
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

      <p><br></br>If you need my information in resume format click this button or on top right navbar
      </p>

      </div>

      <div style={{border:"2px solid purple"}} className="end-div" >
        
        {specialheader}
        <iframe src="https://discord.com/widget?id=944377004193611817&theme=dark" padding="auto" width='90%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
      </div>

      <h1 className="gradient-text" style={{backgroundImage:"<gradient>", backgroundClip:"text",textFillColor:"transparent", textTransform: "uppercase"}}>Detail of relevant information & skills</h1>
    
        <div className='gio-container-2'>
          <p>
            You can find more information on what technologies, languages, data structures and concepts, ectr I have experience
            with on the about/skills page! 
          </p>
        <p>
          Click the "brain" icon to learn more or scroll up! 
        </p>
        <h4> Quick summary of skillset : </h4>
        <ul>
          <br/>
          <li> Work experience in Full-Stack development / Web Design & React Framework</li>
          <br></br>
          <li>Some experience markup, programming, and scripting languages</li>
          <br></br>
          <li>Some experience with database management , algorithm analysis, data structures, and memory management</li>
          <br/>
        </ul>
      </div>

      <h1 className="gradient-text" style={{backgroundImage:"<gradient>", backgroundClip:"text",textFillColor:"transparent", textTransform: "uppercase"}}>Feel free to contact me!</h1>
      
      <div className='gio-container-3'>
       <img src='https://avatars.githubusercontent.com/u/69764323?s=460&u=3024abfb81a275e97236859efbfe816639da5a44&v=4' height='auto' width='40%' /> 
        <p>
          Besides github and linkedin I want to be open and available to anyone who wants to chat!
          All other relevant contact information is available through the "email icon" or contact page.
        </p>
        <h4> Best way to reach me? : </h4>
        <ul>
          <br/>
          <li><a href="https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/"> Linkedin Dm</a></li>
          <li> giovannijmoscato@gmail.com </li>
          <br/>
        </ul>
      </div>

      <h1 className="gradient-text" style={{backgroundImage:"<gradient>", backgroundClip:"text",textFillColor:"transparent", textTransform: "uppercase"}}>Personal Projects</h1>
      
      <div style={{border:"2px solid red"}}  className='gio-container-4'>

        <h1>C++: </h1>

        <p>
            Here are some of my favorite and most impressive projects I've aready completed or currently working on.

            <br></br>
            <br></br>
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
            <br></br>
            <br></br>Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
        </p>
        </div>

        <h1 className="gradient-text" style={{backgroundImage:"<gradient>", backgroundClip:"text",textFillColor:"transparent", textTransform: "uppercase"}}>Video Game Experience</h1>

        <div style={{border:"2px solid white"}} className='gio-container-5'>
        <h1>Pink Balls video game Unity & C#</h1>
        <p>
            The game is based on velocity. 
            <br></br>
            <br></br>You have to keep pressing the move keys to gain enough momentum to reach the end zone! Watch out for cubes they will slow you down.  
        </p>

        <iframe src="https://itch.io/embed-upload/2795508?color=E5383B" allowfullscreen="" width="100%" height="1000px" frameborder="0">
          <a href="https://yupimaperson101.itch.io/pink-balls">Play Pink Balls on itch.io</a>
        </iframe>

        <p>I designed and developed this game completley on my own with some inspiration.<br></br><br></br> I was going for a "monkey ball" type game.
           This game although simple at first glance was extremely hard to make and has many, many bugs that I had to fix. <br></br><br></br> 
           The game is finished however and beatable.<br></br><br></br> There is a menu, main gameplay loop, and end goal. 
           Please reach out to me if you find a bug.<br></br> Also, I plan to make more levels at some point.
        </p>
        
        </div>

        <div style={{border:"2px solid red"}} className='gio-container-2'>
        
        <h1>STORE ( Musical Credits) </h1>
        <div className='gio-container'>
          <h4>
            I created the soundtrack for the demo game
            <em> STORE</em> created by 
            <em> FellHawk Studios </em>
          </h4>
        </div>
        <a style={{color:"red" , fontFamily:"Exo", fontSize:"large", border:"1px solid white"}} href="https://fell-hawk.itch.io/store"> 
          FellHawk-Itch.io 
        </a>
        <img src={STORE} width='90%' height='auto' /> 
        <span></span>
        <div>
          <audio src={STOREmusic} 
          type="audio/wav" 
          controls="true" 
          class="audio-1"
          style={{backgroundColor:"black" , 
          border:"3px solid white" , 
          color:"red"
          }}
          />
        </div>
      </div>

      <div style={{border:"2px solid white"}} className='gio-container-3'>
       <h1>Polygon.io REST API</h1>
       <h4>Endpoint request using vanilla JS displayed in custom table</h4>
       {!currentStatus ?  <h2>Loading... </h2> : <Table data={data}/>}
      </div>

      <div style={{border:"2px solid black"}} className='gio-container-4'>
       <h1>Website Updates</h1>
       <h2>Current/Previous Website updates</h2>
       {!currentStatus ?  <h2>Loading... </h2> : <GioTable data={data}/>}
      </div>
      
      

      <div style={{border:"2px solid white"}} className="end-div">
          {youtubesub}
        <div className="end-div">
          <div class="g-ytsubscribe" data-channelid="UCKzykl0XjPKWtr4U3cszSAw" data-layout="full" data-theme="dark" data-count="default">
          </div>
        </div>
      </div>

        <div style={{border:"2px solid purple"}} className='gio-container-4'>
          <h1>Site performance & statistics</h1>
          <p><a href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/">Rating</a> from: <a href='https://gtmetrix.com/'>GTmetrix</a></p>
          <h2>As of previous build giomoscato.com recieved a rating of <em>B</em></h2>
          <img src={gtrating} width='40%' height='auto' /> 
          <p>Some additional metrics of the site such as site structure:</p>
          <img src={gtadd} width='90%' height='auto' /> 
          <br/>
          <p><a href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/">Security Rating</a> from: <a href='https://www.ssltrust.com/'>SSL Trust</a></p>
          <h2>As of previous build giomoscato.com recieved a rating of PASS with 93 tests completed and 0 reports of malware <em> or </em> spam </h2>
          <img src={safteycheck} width='90%' height='auto' /> 
          <br/>
        </div>
 

        <div style={{border:"2px solid white"}} className="end-div">
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
          <h5> I tried to make my website <br/> desktop and mobile friendly as possible.</h5>
          <h3> Major Update! : Most mobile / scaling issues should be fixed
            <br/> 
            <br/> 
            <a href="https://www.buymeacoffee.com/giomoscato101">
              <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=7F00FF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/>
            </a> 
          </h3>
          </a>
        </div>


        <div style={{border:"2px solid white"}} className="end-div">
          
            <h1> NEW! : Crypto & Stock tracker
              <br></br>
              <br></br>
              <Link  to="/cstrack"> 
                <Bitcoinsymb/>  
              </Link> 
            </h1>
          
        </div>
        
    </div>
  );
}

export default HeaderSection;