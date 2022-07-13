import React, { useState, useEffect, useParams } from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';
import '../../icons/gio.jpg';

import GioLogo from '../../icons/GioLogo2.png';
import STORE from '../../icons/8XcuzD.png';

import Arrayinfo from '../../icons/Arrayinfo.png';
import Sp from '../../icons/SP.png';

import { Link } from "react-router-dom";
import { ReactComponent as Bitcoinsymb } from '../../icons/Bitcoin.svg';

import STOREmusic from '../../audio/Store.ogg';
import Table from './Table';
import GioTable from './GioTable.js';
import CrudTable from './CrudTable.js';
import ProjectCard from './ProjectCard.js';

import '../PageCss/Crudtable.css';
import '../PageCss/GioTable.css';
import '../PageCss/NewTable.css';



function HeaderProjects() {

  const [mainBody, setMainBody] = useState(true)

  const mainBodyHandle = () => {
    var x = document.getElementById("mainBody");
    if (x.style.display === "none") {
      x.style.display = "block";
      setMainBody(!mainBody)
    }
    else {
      x.style.display = "none";
    }
  }


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
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    logoSection = <></>;
    youtubesub = <></>;
  }
  else {
    specialheader = <h2 style={{ color: 'white' }}>Feel free to join my discord</h2>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="10px" width='60%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    youtubesub = <h2 style={{ color: 'white' }}>SUB TO MY YOUTUBE?</h2>;
    logoSection = <div className="end-div" ><img src={GioLogo} width='50%' height='auto' style={{ padding: '5px' }} /></div>;
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
    <div>
      <div style={{
        backgroundColor: '#1B2524ff',
        borderRadius: "5px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <button
          style={{
            color: '#025B79ff',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'smaller',
            textTransform: 'uppercase',
          }}
          onClick={mainBodyHandle}>
          CLOSE
        </button>
      </div>
      <div id="mainBody" className='gio-main'>

        <div class="Iam" >

          <h1 style={{ color: '#AEBEBEff', fontSize:'50px',fontWeight:'900' }}>Projects</h1>
          <b>
            <div class="innerIam"  style={{ backgroundColor: 'black'}}>
              Web,VideoGame, Embeded systems development<br />
              Spotify, Stock, OPENAI API Integrations<br />
              Web, Game, Embeded applications development<br />
              React & React Native Full Stack Web App's<br />
              Data Structures & Algorithms <br />
              CLI and Low level based projects<br /> 
            </div>
          </b>
          <a style={{ color: 'white'}} href='https://giphy.com/ericaofanderson'>Gifs by : Erica Anderson</a>
        </div>

        <div className='spacer'>
        </div>

        <ProjectCard 
          title="Other Web App's" 
          subtitle="Fullstackingdevelopment.com"
          description="I am working on a Full Stack React-Native app which hosts our other projects with a team !"
         
        >

        <div className='spacer2'>
        </div>
        
        <div className="gio-container" 
        style={{  paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px',borderRadius: "5px", }}>
      
          <div className='gio-container' style={{ width: '100%',borderRadius: "5px", }}>

            <label></label>

            {specialheader2}

            <label></label>

            <a style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              fontWeight: 'bold',
              backgroundColor:"#243232ff",
            }}
              href="https://fullstackingdevelopment.com/"
            >
              fullstackingdevelopment.com
            </a>

            <label></label>

          </div>
        </div>

        </ProjectCard>

        <div className='spacer'>
        </div>

        <div class="subheader2" style={{padding: '20px' }}>
          <h1 style={{ color: 'white', fontSize:'30px',fontWeight:'900',backgroundColor:'black'}}>API Intergrations</h1>
        </div>

        <div className='spacer2'>
        </div>

        <div class="subheader2body" style={{ paddingBottom: '20px',paddingLeft: '2px',paddingRight: '2px',paddingTop: '20px' }}>
        <div className="end-div5" >
          <Link to="/Spotify">
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#242a36'
            }}> Spotify API Integration, click me! </h2>
            <img src={Sp} width='100%' height='auto' style={{ padding: '5px' }} />
           
          </Link>

        </div>


        <div className="end-div5" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <Link to="/cstrack">
          <div className='gio-main' style={{ border:'none' , backgroundColor:'#242a36' }}>
            <Bitcoinsymb style={{ backgroundColor: '#AEBEBEff', padding: '5px' }} />
            </div>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#025B79ff',
              fontWeight: '900'

            }}> Crypto & Stock tracker API's, click here ! </h2>
          </Link>
        </div>

        <div className="gio-container" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <div className='gio-container-2'>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#243232ff',
             
            }}>API Switch</h2>
            <h2 style={{ color: 'white' }} >Endpoint request using vanilla JS displayed in custom table</h2>
            <p style={{backgroundColor:'#243232ff'}}>You can switch between endpoints using this button!</p>
            <p style={{backgroundColor:'#243232ff'}}><em>It may take some time to load between button presses</em></p>
            <button
              style={{ color: '#AEBEBEff', backgroundColor: '#101730ff', cursor: 'pointer' }}
              onClick={urlChange}>
              Change API
            </button>
          </div>

          {!currentStatus ? <h2>Loading... </h2> : <Table data={data} />}
        </div>

        <div className="gio-container" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
        <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#243232ff',

            }}>CRUD Form & Table</h2>
            <h2 style={{ color: 'white' }}> Demonstration of CRUD properties</h2>
          {!currentStatus ? <h2>Loading... </h2> : <CrudTable data={data} />}
         
        </div>
        </div>

        <div className='spacer'>
        </div>

        <div class="subheader3" style={{padding: '20px' }} >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px',fontWeight:'900',backgroundColor:'#19819Fff'}}>Data structures, algorithms, and more</h1>
        </div>

        <div className='spacer2'>
        </div>

        <div class="subheader3body" style={{ paddingBottom: '20px',paddingLeft: '2px',paddingRight: '2px',paddingTop: '20px' }}>
        <div className="end-div5" >
          <div className='gio-container-4' style={{ backgroundColor:'transparent'}}>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#242a36'
            }}>  C++ Compiler for IEEE 754 float converter </h2>
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

            <p style={{backgroundColor:'#243232ff'}}>I created a IEEE 754 standard converter to convert hexadecimal ( and decimal) numbers into floating point.</p>
            <p  style={{backgroundColor:'#243232ff'}}> This is my original code and It does have a few errors here and there discussed in DOC.
              Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
            </p>
          </div>
        </div>

        <div className="end-div5" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <Link to="/Dsa">
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#242a36'
            }} > DSA Interactive Showcase </h2>
            <img src={Arrayinfo} width='100%' height='auto' style={{ padding: '5px' }} />
          </Link>
        </div>
        </div>

        <div className='spacer'>
        </div>

        <div class="subheader4" style={{padding: '20px' }}  >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px',fontWeight:'900',backgroundColor:'black'}}>Video game dev & design </h1>
        </div>

        <div className='spacer2'>
        </div>
        
        <div class="subheader4body" style={{ paddingBottom: '40px',paddingLeft: '2px',paddingRight: '2px',paddingTop: '40px' }}>
        <div className='gio-container-5'>
          <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#242a36'
            }}>Pink Balls created with Unity & C#</h2>
          <p style={{backgroundColor:'#243232ff'}}>
            The game is based on velocity.
            <br></br>
            <br></br>You have to keep pressing the move keys to gain enough momentum to reach the end zone! Watch out for cubes they will slow you down.
          </p>

          <iframe src="https://itch.io/embed-upload/2795508?color=EEEEEE" allowfullscreen="" width="100%" height="1000px" frameborder="0">
            <a href="https://yupimaperson101.itch.io/pink-balls">Play Pink Balls on itch.io</a>
          </iframe>

          <p style={{backgroundColor:'#243232ff'}}>I designed and developed this game completley on my own with some inspiration.<br></br><br></br> I was going for a "monkey ball" type game.
            This game although simple at first glance was extremely hard to make and has many, many bugs that I had to fix. <br></br><br></br>
            The game is finished however and beatable.<br></br><br></br> There is a menu, main gameplay loop, and end goal.
            Please reach out to me if you find a bug.<br></br> Also, I plan to make more levels at some point.
          </p>

        </div>


        <div className='gio-container-2'>
          <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#242a36',
              fontWeight: '900'
            }}>STORE video game (Musical Credits) </h2>
          <p style={{backgroundColor:'#19819Fff', fontSize: 'auto' }}>
            I created the soundtrack for the demo game
            <em> STORE</em> created by
            <em> FellHawk Studios </em>
          </p>

          <a style={{
            color: "red",
            fontFamily: "Exo",
            fontSize: "large",
           
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
                backgroundColor: "#19819Fff",
                border: "3px solid #19819Fff",
                color: "red",
                padding: "5px",
                margin: "20px"
              }}
            />
          </div>
          </div>
          </div>

         <div className='spacer'>
         </div>


          <div className="end-div">
          
              <a href="https://github.com/codingcodewhilegoofin/giowebsite">
              <h2 style={{
                color: '#AEBEBEff',
                fontWeight: 'bold'
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
                <li> React Router</li>
                <li> Github ( source control ) </li>
              </ol>
              
            </a>
          </div>
          <div className="subheader5" style={{border:'2px solid #101730ff'}}>
            <h3 style={{
                color: 'white',
                fontWeight: 'bold',
               
              }}> Please consider collaborating
                <br /> or donating!
                <br></br>🔥

              </h3>
              </div>

          <div className="end-div3">
            <a

              href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
            >
              <h2 style={{
                color: '#AEBEBEff',
                fontWeight: 'bold'
              }}>
                Having trouble viewing my website ? 💔
              </h2>
              <h5
                style={{
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                I tried to make my website <br /> desktop and mobile friendly as possible.
              </h5>
             
            </a>
            <div className="subheader6">
            <h3
                style={{
                  color: '#AEBEBEff',
                  border: '2px solid #AEBEBEff',
                  fontWeight: 'bold'
                }}>
                Major Update! : Most mobile / scaling issues should be fixed
                <br />
                <br />
                <a href="https://www.buymeacoffee.com/giomoscato101">
                  <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff" />
                </a>
              </h3>
              </div>
          </div>

          <div className='spacer2'>
          </div>

          <div class="end-div2" >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px',fontWeight:'900'}}>More music by me!</h1>
          </div>

          <div class="Iam" >
          <iframe
              id="ytplayer"
              type="text/html"
              width="80%"
              height="360"
              autoplay="true"
              src="https://www.youtube.com/embed/ZwWTUljUZLU?autoplay=1"
              frameborder="0"
            >
            </iframe>
            </div>
      
      </div>

      <div style={{
        backgroundColor: '#1B2524ff',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      <button
        style={{
          color: '#025B79ff',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: 'smaller',
          textTransform: 'uppercase',
        }}
        onClick={mainBodyHandle}>
        OPEN
      </button>
      </div>

    </div>
  );
}
export default HeaderProjects;