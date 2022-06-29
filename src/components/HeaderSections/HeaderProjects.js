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
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
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
        backgroundColor: 'transparent',

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

          <h1 style={{ color: '#AEBEBEff', fontSize:'50px'}}>Projects</h1>
          <b>
            <div class="innerIam" >
              React Native Full Stack Web App<br />
              Spotify API Integration<br />
              Crypto Currency and Stock API Integration<br />
              Financial charts and graphs<br />
              CRUD Table's<br />
              Data Structures & Algorithms<br /> 
            </div>
          </b>
        </div>

        <div class="Iam" style={{ paddingTop: '30px' }}>
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px'}}>My other web apps</h1>
        </div>
        

        <div className="end-div4" 
        style={{  backgroundColor:"black", paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px'}}>
      
          <div className='gio-container-2' style={{ width: '100%', backgroundColor:"black" }}>
            

            {specialheader2}

            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              fontWeight: 'bold',
            }}> I am working on a Full Stack ReactNative app which hosts our other projects with a team ! </h2>

            <a style={{
              color: '#E0012Aff',
              fontSize: 'large',
            }}
              href="https://fullstackingdevelopment.com/"
            >
              fullstackingdevelopment.com
            </a>

          </div>
        </div>

        <div class="Iam" style={{paddingTop: '30px' }}>
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px'}}>API Intergrations</h1>
        </div>

        <div className="end-div3" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <Link to="/Spotify">
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
            }}> Spotify API Integration </h2>
            <img src={Sp} width='100%' height='auto' style={{ padding: '5px' }} />
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
            }}> Click me! </h2>
          </Link>

        </div>


        <div className="end-div3" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <Link to="/cstrack">
            <Bitcoinsymb style={{ backgroundColor: 'white', padding: '5px' }} />
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff',

            }}> Crypto & Stock tracker API's, click here ! </h2>
          </Link>
        </div>

        <div className="end-div3" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <div className='gio-container-2'>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
            }}>API Switch</h2>
            <h2 style={{ color: 'white' }} >Endpoint request using vanilla JS displayed in custom table</h2>
            <p>You can switch between endpoints using this button!</p>
            <p><em>It may take some time to load between button presses</em></p>
            <button
              style={{ color: '#AEBEBEff', backgroundColor: '#101730ff', cursor: 'pointer' }}
              onClick={urlChange}>
              Change API
            </button>
          </div>

          {!currentStatus ? <h2>Loading... </h2> : <Table data={data} />}
        </div>

        <div className="end-div2" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>

          {!currentStatus ? <h2>Loading... </h2> : <CrudTable data={data} />}
          <div className='gio-container-2'>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff',

            }}>CRUD Form & Table</h2>
            <h2 style={{ color: 'white' }}> Demonstration of CRUD properties</h2>
          </div>
        </div>

        <div className="end-div" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <div className='gio-container-2'>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff',

            }}>Website Updates</h2>
            <h2 style={{ color: 'white' }}>Current/Previous Website updates</h2>
          </div>
          {!currentStatus ? <h2>Loading... </h2> : <GioTable data={data} />}
        </div>

        <div class="Iam" >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px'}}>Data structures, algorithms, and more</h1>
        </div>

        <div className="end-div4" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px', backgroundColor:'black' }}>
          <div className='gio-container-4'>
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
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

            <p>I created a IEEE 754 standard converter to convert hexadecimal ( and decimal) numbers into floating point.</p>
            <p> This is my original code and It does have a few errors here and there discussed in DOC.
              Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
            </p>
          </div>
        </div>

        <div className="end-div4" style={{ paddingBottom: '10px',paddingLeft: '5px',paddingRight: '5px',paddingTop: '10px' }}>
          <Link to="/Dsa">
            <h2 style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
            }} > DSA Interactive Showcase </h2>
            <img src={Arrayinfo} width='100%' height='auto' style={{ padding: '5px' }} />
          </Link>
        </div>

        <div class="Iam" >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px'}}>Video game dev & design </h1>
        </div>

        <div className='gio-container-5'>
          <h4>Pink Balls created with Unity & C#</h4>
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
          <h2 style={{ color: '#AEBEBEff', fontSize: 'auto' }}>STORE video game (Musical Credits) </h2>
          <p style={{ color: 'white', fontSize: '20px' }}>
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





          <div className="end-div">
            <a href="https://github.com/codingcodewhilegoofin/giowebsite">
              <h2 style={{
                color: '#AEBEBEff',
                backgroundColor: 'black'
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
                color: '#AEBEBEff'
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
                  color: '#AEBEBEff',
                  backgroundColor: '#101730ff'
                }}>
                Major Update! : Most mobile / scaling issues should be fixed
                <br />
                <br />
                <a href="https://www.buymeacoffee.com/giomoscato101">
                  <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff" />
                </a>
              </h3>
            </a>
          </div>

          <div class="Iam" >
          <h1 style={{ color: '#AEBEBEff', fontSize:'30px'}}>More music by me!</h1>
        </div>
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
  );
}
export default HeaderProjects;