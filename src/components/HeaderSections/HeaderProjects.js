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

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {

    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    //console.log(windowSize[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSize])

  let specialheader;
  let specialheader2;
  let specialheader3;
  let logoSection;
  let youtubesub;
  let musicToggle = false;
  let Toggle;
  let urlToggle = false;


  if (windowSize[0] < 500) {
    specialheader = <></>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    specialheader3 = <iframe src="https://gmapps-api-v1.gmdev.workers.dev/" padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    logoSection = <></>;
    youtubesub = <></>;
  }
  else if (windowSize[0] < 600) {

  }
  else if (windowSize[0] < 800) {

  }
  else {
    specialheader = <h2 style={{ color: 'white' }}>Feel free to join my discord</h2>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="10px" width='60%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    specialheader3 = <iframe src="https://gmapps-api-v1.gmdev.workers.dev/" padding="10px" width='60%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
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

      <h2 style={{ color: 'white', fontSize: 'x-large' }}>Gio Moscato.com</h2>

      <div style={{
        backgroundColor: 'transparent',
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

        <div class="Iam" style={{ marginTop: '50px', width: '80%' }}>

          <h1 style={{ color: '#AEBEBEff', fontSize: '50px', fontWeight: '900' }}>Projects</h1>
          <b>
            <div class="innerIam" style={{ backgroundColor: 'black' }}>
              Web,VideoGame, Embeded systems development<br />
              Spotify, Stock, OpenAi API Integrations<br />
              Web, Game, Embeded applications development<br />
              React & CloudFlare & Full Stack Web App's<br />
              Data Structures & Algorithms <br />
              CLI and Low level based projects<br />
            </div>
          </b>
          <a style={{ color: 'white', cursor: 'pointer' }} href='https://giphy.com/ericaofanderson'>Gifs by : Erica Anderson</a>
        </div>

        <div className='gio-container' style={{ background: 'transparent', flexDirection: 'column', width: '100%', alignSelf: 'center', alignItems: 'center', border: 'none', paddingTop: '5px' }}>
          <div className="projectHeader" style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', width: '85%' }}>

            <h1
              style={{
                color: "#AEBEBEff",
                backgroundColor: "#025B79ff",
                marginTop: "5px",
                border: "2px solid #242a36 ",
                borderRadius: "5px",
                fontSize: '15px',
                fontWeight: '900',
                margin: '5px',
                width: '100%'
              }}>
              PROJECT DIRECTORY AND Q&A
            </h1>

            <div className='spacer'>
            </div>

            <ProjectCard
              title="Directory"
              subtitle="Project Directory"
              description="List of all projects I have made available to the public that involve coding or programming"
              cardToggleID={"IdZero"}
            >
              <div className="end-div5" style={{ backgroundColor: "transparent" }} >
                <ol style={{ backgroundColor: "#025B79ff", fontWeight: '900', border: '3px solid black', borderRadius: "10px", }}>
                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Web dev based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700' }}>giomoscato.com<br /> <a style={{ color: 'white' }}>(React web app)</a></li>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700' }}>fullstackingdevelopment.com<br /> <a style={{ color: 'white' }}>(React web app)</a></li>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700' }}>gmapps-api-v1.gmdev.workers.dev<br /> <a style={{ color: 'white' }}>(CloudFlare Worker API JS)</a></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '5px solid white', margin: '5px' }}>API intergration projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', border: '2px solid #19819Fff' }}>Spotify API<br /> <p style={{ color: 'white' }}>(called from gmapps-api-v1)</p><br /><a href="/#/Spotify" style={{ color: '#19819Fff' }}>/Spotify</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Open AI API<br /> <p style={{ color: 'white' }}>(called from gmapps-api-v1)</p><br /><p style={{ color: 'white' }}>Used for the AI Gio-Chatbot</p><br /><p style={{ color: '#19819Fff' }}>Check the top of this website</p></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Financial API's<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><br /><p style={{ color: 'white' }}>Used to display financial data</p><br /><a href="/#/cstrack" style={{ color: '#19819Fff' }}>/cstrack</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Arduino Cloud IOT API<br /> <p style={{ color: 'white' }}>(called from gmapps-api-v1)</p><br /><a style={{ color: 'white' }}>Used in 3D render of Arduino Project</a><br /><a href="/#/dependency+" style={{ color: '#19819Fff' }}>/dependency+</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Polygon.io API<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><br /><p style={{ color: 'white' }}>Displays financial information</p><br /><a href="/#/cstrack+" style={{ color: '#19819Fff' }}>/cstrack</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>SW API<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><p style={{ color: 'white' }}>Used for table</p></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>3D based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700' }}>3D version of giomoscato.com<br /> <a style={{ color: 'white' }}>(Uses ThreeJS and R3F)</a></li>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700' }}>3D Introduction Scene & Menu<br /> <a style={{ color: 'white' }}>(Uses SplineJS)</a></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '5px solid white', margin: '5px' }}>Data structure & Algorithm based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ padding: '5px', margin: '5px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', border: '2px solid #19819Fff' }}>C++ Compiler for IEEE 754 float converter<br /> <p style={{ color: 'white' }}>(Written in C++)</p></li>
                    <label></label>
                    <li style={{ margin: '5px', borderRadius: "20px", color: '#EE0527ff', fontWeight: '700', border: '2px solid #19819Fff' }}>DSA showcase<br /><p style={{ color: 'white' }}>(Written in pure JS & JSX)</p></li>
                    <label></label>
                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Video Games</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#EE0527ff', fontWeight: '700', fontWeight: '900' }}>Pink Balls<br /> <a style={{ color: 'white' }}>(Used Unity, written in C#)</a></li>
                    <label></label>

                  </ul>
                </ol>
              </div>

            </ProjectCard>

            <div className='spacer'>
            </div>


            <ProjectCard
              title="Q & A"
              subtitle="Questions and answers"
              description="More information about these projects, where to find them, and what they do."
              cardToggleID={"Id"}
            >
              <div className="end-div5" >
                <ol style={{ fontWeight: '900', border: '5px solid black', }}>
                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid black' }}>Q: How can I navigate this website better, i'm lost</li>
                  <ul style={{ fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>There is a spinning menu button to click on, or use the header icons</li>

                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid white' }}>Q: What the heck is this website</li>
                  <ul style={{ fontWeight: '900', border: '2px solid white', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>My personal portfolio to showcase my projects<br /> <a style={{ color: 'white' }}>This website itself is also a project so it can get confusing.</a></li>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid black' }}>Q: How may projects are there total</li>
                  <ul style={{ fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>4 technically<br /> <a style={{ color: 'white' }}>Some of the projects I am working on are nested INTO this website.<br /> I know it can be a bit confusing which is why I made this Q&A.</a></li>

                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid white' }}>Q: Okay, which projects are part of the website ?</li>
                  <ul style={{ fontWeight: '900', border: '2px solid white', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>Any 3D scene, API call, or pure JS / JSX is built from scratch into this website<br /> <a style={{ color: 'white' }}>The 3D scenes do use libraries but I only used them to set up the environment's necessary.</a> <br />If you're still on giomoscato.com/#/ it's probably a project built into the site or using an Iframe</li>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid black' }}>Q: What is that 3D scene when I load this website?</li>
                  <ul style={{ fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>A 3D scene created with Spline.js<br /> <a style={{ color: 'white' }}>I wanted the introduction to my portfolio to be interesting<br /> That scene is a menu basically but has some easter eggs.</a></li>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid white' }}>Q: How can I see your projects without having to go to other websites</li>
                  <ul style={{ fontWeight: '900', border: '2px solid white', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>Check "Project Showcase" to see them live on this website</li>
                    <label></label>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid black' }}>Q: Are all your projects code - based?</li>
                  <ul style={{ fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900', }}>Any projects mentioned in "Project Directory" are coded by me or with a team<br /> <p style={{ color: 'white' }}>I do have non-code projects on here but they are not mentioned in the directory</p></li>

                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid white' }}>Q: How can I find a specific project ?</li>
                  <ul style={{ fontWeight: '900', border: '2px solid white', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>Check "Project Directory" or use the Gio-Chatbot and ask it a question</li>
                    <label></label>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid black' }}>Q: Most impressive project ? </li>
                  <ul style={{ fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900' }}>giomoscato.com or some C++ based projects I have not yet realeased</li>
                    <label></label>


                  </ul>

                  <li style={{ backgroundColor: "white", fontWeight: '900', border: '5px solid white' }}>Q: Favorite project?</li>
                  <ul style={{ fontWeight: '900', border: '2px solid white', margin: '10px' }}>
                    <label></label>
                    <li style={{ fontWeight: '900', }}>Pink balls was my first super silly game I ever made, but it was really fun<br /> It was also my first experience with 3D worlds</li>

                  </ul>


                </ol>
              </div>

            </ProjectCard>

          </div>
        </div>

        <div className='spacer'>
        </div>


        <div className="projectFooter" style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>

          <h1
            style={{
              color: "#AEBEBEff",
              backgroundColor: "#025B79ff",
              marginTop: "5px",
              border: "2px solid #242a36 ",
              borderRadius: "5px",
              fontSize: '15px',
              fontWeight: '900',
              margin: '5px',
              width: '80%'
            }}>
            PROJECT SHOWCASE
          </h1>

          <div className='spacer'>
          </div>

          <ProjectCard
            title="Other Web App's"
            subtitle="Fullstackingdevelopment.com"
            description="I am working on a Full Stack React-Native app which hosts our other projects with a team !"
            cardToggleID={"IdOne"}
          >
            <div className="gio-container" style={{ margin: '10px' }}>
              <div className="gio-container" style={{ width: '100%', borderRadius: "5px", }}>
                {specialheader2}
                <label></label>
                <a style={{
                  color: '#AEBEBEff',
                  fontSize: 'large',
                  fontWeight: 'bold',
                  backgroundColor: "#243232ff",
                }}
                  href="https://fullstackingdevelopment.com/"
                >
                  fullstackingdevelopment.com
                </a>
                <label></label>
              </div>
            </div>

            <div className="gio-container" style={{ margin: '10px' }}>
              <div className="gio-container" style={{ width: '100%', borderRadius: "5px", }}>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: '15px',
                    fontWeight: '900',
                    margin: '10px'
                  }}>
                  gmapps-api-v1.gmdev
                </h1>

                <h3 style={{
                  color: "#AEBEBEff",
                  fontSize: "auto",
                  fontWeight: '900',

                }}>
                  This is a CloudFlare worker built with JS and bundled with webpack.
                  It serves lots of endpoints for anyone to use. I use it in my personal projects
                  to secure API keys and call other API's.
                </h3>


                {specialheader3}
                <label></label>
                <a style={{
                  color: '#AEBEBEff',
                  fontSize: 'large',
                  fontWeight: 'bold',
                  backgroundColor: "#243232ff",
                }}
                  href="https://gmapps-api-v1.gmdev.workers.dev/"
                >
                  gmapps-api-v1
                </a>
                <label></label>
              </div>
            </div>
          </ProjectCard>

          <div className='spacer'>
          </div>


          <ProjectCard
            title="API Intergrations"
            subtitle="Spotify API"
            description="I intergrated the Spotify API my web app to show off my music !"
            cardToggleID={"IdTwo"}
          >

            <div class="subheader2body" style={{ paddingBottom: '20px', paddingLeft: '2px', paddingRight: '2px', paddingTop: '20px' }}>
              <div className="end-div5" style={{ padding: '10px' }}>
                <Link to="/Spotify">
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: '#242a36'
                  }}> Click me! </h2>
                  <img src={Sp} width='100%' height='auto' style={{ padding: '5px' }} />

                </Link>

              </div>

              <h1
                style={{
                  color: "#AEBEBEff",
                  backgroundColor: "#025B79ff",
                  marginTop: "5px",
                  border: "2px solid #242a36 ",
                  borderRadius: "5px",
                  fontSize: '15px',
                  fontWeight: '900',
                  margin: '5px'
                }}>
                Stock and Crypto API intergration
              </h1>

              <div className="end-div5" style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>

                <Link to="/cstrack">
                  <div className='gio-main' style={{ border: 'none', backgroundColor: '#242a36' }}>
                    <Bitcoinsymb style={{ backgroundColor: '#AEBEBEff', padding: '5px' }} />
                  </div>
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: '#025B79ff',
                    fontWeight: '900'

                  }}> Click here ! </h2>
                </Link>
              </div>

              <h1
                style={{
                  color: "#AEBEBEff",
                  backgroundColor: "#025B79ff",
                  marginTop: "5px",
                  border: "2px solid #242a36 ",
                  borderRadius: "5px",
                  fontSize: '15px',
                  fontWeight: '900',
                  margin: '5px'
                }}>
                Custom API call and CRUD examples
              </h1>


              <div className="gio-container" style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>
                <div className='gio-container-2'>
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: '#243232ff',

                  }}>API Switch</h2>
                  <h2 style={{ color: 'white' }} >Endpoint request using vanilla JS displayed in custom table</h2>
                  <p style={{ backgroundColor: '#243232ff' }}>You can switch between endpoints using this button!</p>
                  <p style={{ backgroundColor: '#243232ff' }}><em>It may take some time to load between button presses</em></p>
                  <button
                    style={{ color: '#AEBEBEff', backgroundColor: '#101730ff', cursor: 'pointer' }}
                    onClick={urlChange}>
                    Change API
                  </button>
                </div>

                {!currentStatus ? <h2>Loading... </h2> : <Table data={data} />}
              </div>

              <div className="gio-container" style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>
                <h2 style={{
                  color: '#AEBEBEff',
                  fontSize: 'large',
                  backgroundColor: '#243232ff',

                }}>CRUD Form & Table</h2>
                <h2 style={{ color: 'white' }}> Demonstration of CRUD properties</h2>
                {!currentStatus ? <h2>Loading... </h2> : <CrudTable data={data} />}

              </div>
            </div>
          </ProjectCard>

          <div className='spacer'>
          </div>

          <ProjectCard
            title="Data Structures, Algorithms, and more"
            subtitle=" C++ Compiler for IEEE 754 float converter"
            description="I wrote a CLI program in C++ , feel free to try it in this code editor!"
            cardToggleID={"IdThree"}
          >

            <div className='spacer2'>
            </div>

            <div class="subheader3body" style={{ paddingBottom: '20px', paddingLeft: '2px', paddingRight: '2px', paddingTop: '20px' }}>
              <div className="end-div5"  >
                <div className='gio-container-4' style={{ backgroundColor: 'transparent', }}>

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

                  <p style={{ backgroundColor: '#243232ff' }}>I created a IEEE 754 standard converter to convert hexadecimal ( and decimal) numbers into floating point.</p>
                  <p style={{ backgroundColor: '#243232ff' }}> This is my original code and It does have a few errors here and there discussed in DOC.
                    Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
                  </p>
                </div>
              </div>

              <h1
                style={{
                  color: "#AEBEBEff",
                  backgroundColor: "#025B79ff",
                  marginTop: "5px",
                  border: "2px solid #242a36 ",
                  borderRadius: "5px",
                  fontSize: '15px',
                  fontWeight: '900',
                  margin: '5px'
                }}>
                Practice and usage with DSA !
              </h1>

              <div className="end-div5" style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>
                <Link to="/Dsa">
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: '#242a36',
                    margin: '5px'
                  }} > Click me!  </h2>
                  <img src={Arrayinfo} width='100%' height='auto' style={{ padding: '5px' }} />
                </Link>
              </div>
            </div>
          </ProjectCard>

          <div className='spacer'>
          </div>

          <ProjectCard
            title="Video game dev/design , Music, and more"
            subtitle=" Pink Balls created with Unity & C#"
            description="I created a small ball physics based game with Unity. Sadly it only works on Desktop"
            cardToggleID={"IdFour"}
          >

            <div class="subheader4body" >
              <div className='gio-container-5'>
                <p style={{ backgroundColor: '#243232ff' }}>
                  The game is based on velocity.
                  <br></br>
                  <br></br>You have to keep pressing the move keys to gain enough momentum to reach the end zone! Watch out for cubes they will slow you down.
                </p>
                <iframe src="https://itch.io/embed-upload/2795508?color=EEEEEE" allowfullscreen="" width="100%" height="1000px" frameborder="0">
                  <a href="https://yupimaperson101.itch.io/pink-balls">Play Pink Balls on itch.io</a>
                </iframe>
                <p style={{ backgroundColor: '#243232ff' }}>I designed and developed this game completley on my own with some inspiration.<br></br><br></br> I was going for a "monkey ball" type game.
                  This game although simple at first glance was extremely hard to make and has many, many bugs that I had to fix. <br></br><br></br>
                  The game is finished however and beatable.<br></br><br></br> There is a menu, main gameplay loop, and end goal.
                  Please reach out to me if you find a bug.<br></br> Also, I plan to make more levels at some point.
                </p>
              </div>

              <h1
                style={{
                  color: "#AEBEBEff",
                  backgroundColor: "#025B79ff",
                  marginTop: "5px",
                  border: "2px solid #242a36 ",
                  borderRadius: "5px",
                  fontSize: '15px',
                  fontWeight: '900',
                  margin: '5px'
                }}>
                STORE video game (Musical Credits)
              </h1>

              <div className='gio-container-2'>
                <h2 style={{
                  color: '#AEBEBEff',
                  fontSize: 'large',
                  backgroundColor: '#242a36',
                  fontWeight: '900'
                }}>STORE </h2>
                <p style={{ backgroundColor: '#19819Fff', fontSize: 'auto' }}>
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

                <img src={STORE} width='99%' height='auto' />
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
          </ProjectCard>

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

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '10px' }}>

        <div className="end-div" style={{ margin: '30px', width: '45%', borderRadius: '30px' }}>

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

        <div className="subheader5" style={{ border: '2px solid #101730ff', width: '50%', paddingTop: '100px', paddingBottom: '100px', borderRadius: '30px' }}>
          <h3 style={{
            color: 'white',
            fontWeight: 'bold',

          }}> Please consider collaborating
            <br /> or donating!
            <br></br>🔥

          </h3>
        </div>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '10px', }}>

        <div className="end-div5" style={{ margin: '20px', borderRadius: '30px', width: '80%', paddingTop: '50px', paddingBottom: '50px' }}>
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
          <div className="subheader6" style={{ border: '2px solid white', borderRadius: '10px', margin: '5px' }}>
            <h3
              style={{
                color: '#AEBEBEff',

                fontWeight: 'bold',

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

      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '10px', width: '100%' }}>
        <div class="Iam" style={{ width: '75%', paddingTop: '50px', paddingBottom: '50px' }} >
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="360"

            autoplay="true"
            src="https://www.youtube.com/embed/ZwWTUljUZLU?autoplay=1"
            frameborder="0"
          >
          </iframe>
        </div>
      </div>


    </div >
  );
}
export default HeaderProjects;