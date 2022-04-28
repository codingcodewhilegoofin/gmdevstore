import React, { useState, useEffect, useParams } from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';



import '../../icons/gio.jpg';
import gtrating from '../../icons/gtrating.png';
import gtadd from '../../icons/gtadditional.png';
import safteycheck from '../../icons/safteycheck.png';
import GioBanner from '../../icons/Giobanner.png';
import GioLogo from '../../icons/GioLogo2.png';
import STORE from '../../icons/8XcuzD.png';
import Info from '../../icons/info1.png';
import bg1 from '../../icons/bg1.png';
import bg2 from '../../icons/bg2.png';
import bg3 from '../../icons/bg3.png';
import bg4 from '../../icons/bg4.png';
import Arrayinfo from '../../icons/Arrayinfo.png';

import { Link } from "react-router-dom";
import { ReactComponent as Bitcoinsymb } from '../../icons/Bitcoin.svg';
import { ReactComponent as Coffeesymb } from '../../icons/Coffee.svg';

import STOREmusic from '../../audio/Store.ogg';
import Table from './Table';
import GioTable from './GioTable.js';
import CrudTable from './CrudTable.js';

import '../PageCss/Crudtable.css';
import '../PageCss/GioTable.css';
import '../PageCss/NewTable.css';


function HeaderSection() {


  const [baseUrl, setBaseUrl] = useState("https://swapi.dev/api/starships");
  const [data, setData] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  let specialheader;
  let specialheader2;
  let logoSection;
  let youtubesub;
  let musicToggle = false;
  let Toggle;
  let urlToggle = false;
  if (window.innerWidth < 600) {
    specialheader = <></>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='90%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    logoSection = <></>;
    youtubesub = <></>;
  }
  else {
    specialheader = <h2 style={{color:'white'}}>Feel free to join my discord</h2>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='50%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    youtubesub = <h2 style={{color:'white'}}>SUB TO MY YOUTUBE?</h2>;
    logoSection = <div className="end-div" ><img src={GioLogo} width='50%' height='auto' style={{padding:'5px'}} /></div>;
  }

  function globalMusic() { };
  function urlChange() {
    urlToggle = !urlToggle;
    if (urlToggle) {
      setBaseUrl("https://swapi.dev/api/people");
    }
    else {
      setBaseUrl("https://pokeapi.co/api/v2/berry");
    }
  }



  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error("Response Error!"));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((json) => {
        try {
          setData(json.results);
          setStatus(true);
        }
        catch
        {
          return Promise.reject(new Error(`State Error!: Data: ${data} , Connection:${currentStatus}`));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [baseUrl]);

  return (
    <div className='gio-main'>
      <div className='gio-container' >
      
        <h1>🥳 Welcome to giomoscato.com Vanilla Version</h1>
        <img src={Info} width='100%' height='auto' style={{padding:'5px'}} />
        
      </div>

      <div style={{padding:'5px'}}>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          ></Button>
      </div>


      <div className='gio-container-2'>

        {specialheader}
        <iframe src="https://discord.com/widget?id=944377004193611817&theme=dark" padding="auto" width='90%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
      </div>
      

      <div className='gio-container-2'>
      <h2 style={{
            color: '#E0012Aff',
            fontSize: 'large',
            fontWeight: 'bold',
          }}> My other websites ! </h2>
      
        {specialheader2}

        <h2 style={{
            color: '#E0012Aff',
            fontSize: 'large',
            fontWeight: 'bold',
          }}> I am working on a ReactNative app which hosts other projects with a team ! </h2>

        <a style={{
            color: '#E0012Aff',
            fontSize: 'large',
          }}
          href="https://fullstackingdevelopment.com/"
        >
            fullstackingdevelopment.com
        </a>
      
      </div>

      <div className="end-div2">
        <Link to="/Dsa"> 
          <img src={Arrayinfo} width='100%' height='auto' style={{padding:'5px'}} />
        </Link>
      </div>

      <h1 
        className="gradient-text" 
        style={{ 
          backgroundImage: "<gradient>", 
          backgroundClip: "text", 
          textFillColor: "transparent", 
          textTransform: "uppercase",
          fontSize: "auto",
        }}>
          Detail of relevant information & skills
      </h1>

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
          <br />
          <li> Work experience in Full-Stack development / Web Design & React Framework</li>
          <br></br>
          <li>Some experience markup, programming, and scripting languages</li>
          <br></br>
          <li>Some experience with database management , algorithm analysis, data structures, and memory management</li>
          <br />
        </ul>
      </div>

      <h1 className="gradient-text" style={{ backgroundImage: "<gradient>", backgroundClip: "text", textFillColor: "transparent", textTransform: "uppercase" }}>Feel free to contact me!</h1>


      <div className='gio-container-3'>

        {logoSection}
        <ul>
          <li><a style={{ color: 'white'}} href="https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/"> Linkedin Dm</a></li>
          <li> giovannijmoscato@gmail.com </li>
        </ul>
        <p>
          Besides github and linkedin I want to be open and available to anyone who wants to chat!
        </p>
        <p>All other relevant contact information is available through the "email icon" or contact page.</p>
        <img src={GioBanner} width='90%' height='auto' style={{padding:'5px'}} />
        <h4> Best ways to reach me </h4>
        
      </div>

      <h1 className="gradient-text" style={{ backgroundImage: "<gradient>", backgroundClip: "text", textFillColor: "transparent", textTransform: "uppercase" }}>Personal Projects</h1>

      <div className='gio-container-4'>

       
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

      <h1 className="gradient-text" style={{ backgroundImage: "<gradient>", backgroundClip: "text", textFillColor: "transparent", textTransform: "uppercase" }}>Video Game Experience</h1>

      <div className='gio-container-5'>
        <h4>Pink Balls video game Unity & C#</h4>
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

      <div className='gio-container-2'>

        
        <h2 style={{color: 'red', fontSize:'auto'}}>STORE (Musical Credits) </h2>
        
          <p style={{color: 'white', fontSize:'20px'}}>
            I created the soundtrack for the demo game
            <em> STORE</em> created by
            <em> FellHawk Studios </em>
          </p>
        
        <a style={{
          color: "red",
          fontFamily: "Exo",
          fontSize: "large",
          border: "1px solid white",
          padding: "10px",
          margin: "10px"
        }} href="https://fell-hawk.itch.io/store">
          FellHawk-Itch.io
        </a>
        

        
        <img src={STORE} width='90%' height='auto' />
        <span></span>
        <div>
          <audio src={STOREmusic}
            type="audio/wav"
            controls="true"
            class="audio-1"
            style={{
              backgroundColor: "black",
              border: "3px solid white",
              color: "red",
              padding: "5px",
              margin: "20px"
            }}
          />
        </div>
   
      </div>
      
      <h1 className="gradient-text" style={{ backgroundImage: "<gradient>", backgroundClip: "text", textFillColor: "transparent", textTransform: "uppercase" }}>API's</h1>
      <div className='gio-container-3'>
      <div className='gio-container-2'>
        <h4>API Switch</h4>
        <h2 style={{ color: 'white' }} >Endpoint request using vanilla JS displayed in custom table</h2>
        <p>You can switch between endpoints using this button!</p>
        <p><em>It may take some time to load between button presses</em></p>
        <button
          style={{ color: 'red' }}
          onClick={urlChange}>
          Change API
        </button>
        </div>

        {!currentStatus ? <h2>Loading... </h2> : <Table data={data} />}
      </div>

      <div className='gio-container-4'>
      <div className='gio-container-2'>
        <h4>CRUD Form & Table</h4>
        <h2 style={{ color: 'white' }}> Demonstration of CRUD properties</h2>
      </div>
        {!currentStatus ? <h2>Loading... </h2> : <CrudTable data={data} />}
      </div>

      <div className='gio-container-5'>
      <div className='gio-container-2'>
        <h4>Website Updates</h4>
        <h2 style={{color:'white'}}>Current/Previous Website updates</h2>
      </div>
        {!currentStatus ? <h2>Loading... </h2> : <GioTable data={data} />}
      </div>


      <div className="end-div2">
        {youtubesub}
        <div className="end-div">
          <div class="g-ytsubscribe" data-channelid="UCKzykl0XjPKWtr4U3cszSAw" data-layout="full" data-theme="dark" data-count="default">
          </div>
        </div>
      </div>

      <div className='gio-container-4'>
      <div className='gio-container-2'>
        <h4>
          Site performance & statistics
        </h4>
        <p>
          <a
            style={{
              color: 'white',
              padding: '5px'
            }}
            href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/"
          >
            Rating
          </a>
            from:
          <a 
            style={{
              color: 'white',
              padding: '5px'
            }}
            href='https://gtmetrix.com/'>
            GTmetrix
          </a>
        </p>
        </div>

        <h2  style={{
              color: 'white',
              padding: '5px'
            }}>
          As of previous build giomoscato.com recieved a rating of 
          <em>B</em>
        </h2>

        <img src={gtrating} width='40%' height='auto' />

        <p>
          Some additional metrics of the site such as site structure:
        </p>

        <img src={gtadd} width='90%' height='auto' />

        <br />
        <p>
          <a 
            style={{
            color: 'white',
            padding: '5px'
          }} 
          href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/">
            Security Rating
            </a> from: 
          <a 
            style={{
            color: 'white',
           padding: '5px'
           }} 
           href='https://www.ssltrust.com/'
          >
             SSL Trust
          </a>
        </p>

        <h2  style={{
              color: 'white',
              padding: '5px'
            }}>
          As of previous build giomoscato.com recieved a rating of PASS with 93 tests completed and 0 reports of malware <em> or </em> spam
        </h2>

        <img src={safteycheck} width='90%' height='auto' />

        <br />
      </div>


      <div className="end-div">
        <a href="https://github.com/codingcodewhilegoofin/giowebsite">
          <h2 style={{
            color: '#E0012Aff'
          }}> My website technology pipeline / stack ? ✨ </h2>

          <ol style={{
            color: 'white'
          }}>
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
          <h3 style={{
            color: 'white'
          }}> Please consider collaborating
            <br /> or donating!
            <br></br>🔥

          </h3>
        </a>
      </div>

      <div className="end-div2">
        <a

          href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
        >
          <h2 style={{
            color: '#E0012Aff'
          }}>
            Having trouble viewing my website ? 💔
          </h2>
          <h5
            style={{
              color: 'white'
            }}
          >
            I tried to make my website <br /> desktop and mobile friendly as possible.
          </h5>
          <h3
            style={{
              color: '#E0012Aff'
            }}>
            Major Update! : Most mobile / scaling issues should be fixed
            <br />
            <br />
            <a href="https://www.buymeacoffee.com/giomoscato101">
             <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff"/>
            </a> 
          </h3>
        </a>
      </div>

      <div className="end-div3">

        <h1 style={{
          color: 'white'
        }}> NEW! : Crypto & Stock tracker
          <br></br>
          <br></br>
          <Link to="/cstrack">
            <Bitcoinsymb />
          </Link>
        </h1>

      </div>

      <div className='gio-container-2'>
      <h2 style={{
            color: '#E0012Aff',
            fontSize: 'large'
          }}> AI genereated art, the theme for this site </h2>
      <div className="end-div2" >
        <img src={bg1} width='100%' height='auto' />
      </div>
      </div>

    </div>
  );
}

export default HeaderSection;