import React, { useState, useEffect, useParams } from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';


import '../PageCss/HeaderSection.css';
import SpotifyAPI from '../Pages/Spotify';

import '../../icons/gio.jpg';
import gtrating from '../../icons/gtrating.png';
import gtadd from '../../icons/gtadditional.png';
import safteycheck from '../../icons/safteycheck.png';
import GioBanner from '../../icons/Giobanner.png';
import GioLogo from '../../icons/GioLogo2.png';

import Info from '../../icons/info1.png';
import bg1 from '../../icons/bg1.png';
import bg5 from '../../icons/bg5.png';

import '../PageCss/Crudtable.css';
import '../PageCss/GioTable.css';
import '../PageCss/NewTable.css';

function HeaderSection() {

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
    logoSection = <img src={GioLogo} width='20%' height='auto' style={{ padding: '5px' }} />;
  }


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
            paddingTop: '0px',
            paddingBottom: '0px',
          }}
          onClick={mainBodyHandle}>
          CLOSE
        </button>
      </div>

      <div id="mainBody" className='gio-main'>


        <img src={Info} width='100%' height='auto' style={{ padding: '5px', marginBottom: '5px' }} />

        <div style={{ backgroundColor: 'black', padding: '5px'}}>
        <div className='subheader9' style={{ marginTop: '30px' }} >
          <h1 style={{ color: '#AEBEBEff', fontWeight: '900' }}>🥳 Project Spotlight </h1>
          <p style={{ color: '#AEBEBEff', backgroundColor: "black" }}>This is my favorite complete project at the moment!</p>
          <a style={{ color: 'white' }} href='https://giphy.com/ericaofanderson'>Gifs by : Erica Anderson</a>
          <a style={{ color: 'white', fontWeight: '700', marginTop: '20px', marginBottom: '10px' }} href='/#/Spotify'>Spotify API intergration</a>

        </div>

        <div className='gio-container-2' style={{ marginTop: '10px', padding: 'none'  }}>
          <SpotifyAPI/>
        </div>

        </div>


        <div style={{ padding: '10px', paddingTop: '30px', paddingBottom: '20px' }}>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--med'
          ></Button>
        </div>

        {/* <div className="gio-container">
          {youtubesub}
          <div class="g-ytsubscribe" data-channelid="UCKzykl0XjPKWtr4U3cszSAw" data-layout="full" data-theme="dark" data-count="default"></div>
        </div> */}

        <div className='gio-container-2' style={{ paddingTop: '30px', paddingBottom: '30px' }}>

          {specialheader}
          <iframe src="https://discord.com/widget?id=944377004193611817&theme=dark" padding="auto" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
        </div>

        <div className='spacer'>
        </div>

        <div className='gio-container-3' style={{ padding: '10px' }}>

          {logoSection}

          <h4 style={{ margin: '10px' }} >
            I'm friendly feel free to chat!
          </h4>
          <p style={{ backgroundColor: '#242a36' }}>All other relevant contact information is available through the "email icon" or contact page.</p>
          <ul>
            <li><a style={{ color: 'white' }} href="https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/"> Linkedin Dm</a></li>
            <li > giovannijmoscato@gmail.com </li>
          </ul>
          <img src={GioBanner} width='85%' height='auto' style={{ padding: '5px', margin: '5px' }} />

        </div>

        <div className='spacer'>
        </div>


        <div className='gio-container-2' style={{ padding: '2px' }}>

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
          <p style={{ backgroundColor: '#242a36' }}>
            You can find more information on what technologies, languages, data structures and concepts, ectr I have experience
            with on the about/skills page!
          </p>
        </div>

        <div className='spacer'>
        </div>

        <div className='gio-container-4' style={{ border: '1px solid white', padding: '5px' }}>
          <div className='gio-container-2' style={{ border: '1px solid white', padding: '5px', margin: '10px' }}>

            <h4> Site rating and statistics </h4>

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

          <h2 style={{
            color: 'white',
            padding: '5px'
          }}>
            As of previous build my website recieved a rating of
            <em> B</em>
          </h2>

          <img src={gtrating} width='35%' height='auto' style={{ margin: '10px' }} />

          <div className='gio-container-2' style={{ border: '1px solid white', padding: '5px', margin: '5px' }}>
            <p>
              Some additional metrics of the site such as site structure:
            </p>

            <img src={gtadd} width='100%' height='auto' />
          </div>
          <br />

          <div className='gio-container-2' style={{ border: '1px solid white', padding: '5px', margin: '5px' }}>
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



            <h2 style={{
              color: 'white',
              padding: '5px'
            }}>
              Recieved a rating of PASS with 93 tests completed and 0 reports of malware <em> or </em> spam
            </h2>

            <img src={safteycheck} width='100%' height='auto' />

            <br />
          </div>
        </div>

        <div className='spacer'>
        </div>


        <div className="end-div" style={{ margin: '5px' }}>
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
            <h2 style={{
              color: '#AEBEBEff',
              backgroundColor: 'black',
              fontWeight: '900'
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
              color: 'white',
              fontWeight: '900'
            }}> Please consider collaborating
              <br /> or donating!
              <br></br>🔥

            </h3>
          </a>
        </div>

        <div className="end-div2" style={{ margin: '5px' }}>
          <a

            href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
          >
            <h2 style={{
              color: '#AEBEBEff',
              fontWeight: '900',
              backgroundColor: 'black'
            }}>
              Having trouble viewing my website ? 💔
            </h2>
            <h5
              style={{
                color: '#AEBEBEff'
              }}
            >
              I tried to make my website <br /> desktop and mobile friendly as possible.
            </h5>
            <h3
              style={{
                color: '#AEBEBEff',
                backgroundColor: '#101730ff',
                fontWeight: '900',
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

        <div className='gio-container-2' style={{ padding: '0px' }}>
          <h3
            style={{
              color: '#AEBEBEff',
              fontSize: 'large',
              backgroundColor: '#101730ff',
              margin: '10px'
            }}
          >
            AI genereated art, the theme for this site! I used the theme and colors from these images that are AI generated to design my site
          </h3>

          <iframe
            src='https://app.wombo.art/'
            allowfullscreen="yes"
            width="100%"
            height="600px"
            frameborder="0"


          >
          </iframe>

          <a>
            <h3
              style={{
                color: '#E0012Aff',
                fontSize: 'large',
                backgroundColor: '#101730ff',
                margin: '10px',
              }}>

              https://app.wombo.art/
            </h3>
          </a>

          <div
            style={{
              margin: "10px"
            }}
            className="end-div2"
          >
            <img
              src={bg1}
              width='100%'
              height='auto'
            />
          </div>

          <div
            style={{
              margin: "10px"
            }}
            className="end-div2"
          >
            <img
              src={bg5}
              width='100%'
              height='auto'
            />
          </div>
        </div>
      </div>
      <button
        style={{
          color: '#025B79ff',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
        onClick={mainBodyHandle}>
        OPEN
      </button>
    </div>
  );
}
export default HeaderSection;