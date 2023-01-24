//Standard imports 
import React, { Component, useState, useEffect } from 'react';
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

//Custom imports 
import MagicButton from './components/Buttons/MagicButton/magicButton.js'
import HomePage from './components/Pages/HomePage';
import Cstrack from './components/Pages/Cstrack';
import Dsa from './components/Pages/Dsa';
import Spotify from './components/Pages/Spotify';
import NewSite from './NewSite';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import Projects from './components/Pages/Projects';
import StartApp from './Start';
import './App.css';
import Giobot from './components/OpenAi/Giobot/Giobot.js';
import TestAPI from './components/Pages/TestAPI.js';
import Practice from './practiceSource/practice';

//Menu import
import MenuButton from './components/Buttons/MenuButton/MenuButton.js';

//Icons
import { ReactComponent as DownloadSymbol } from './icons/download.svg';
// Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>
import { ReactComponent as LinkedinSymbol } from './icons/linkedin.svg';
import { ReactComponent as GithubSymbol } from './icons/github.svg';


// Main component 
function OldSite() {
  //Custom variables
  let githublink = 'https://github.com/codingcodewhilegoofin';
  let linkedinlink = 'https://www.linkedin.com/in/giovanni-m-4a19a71b1/';
  let downloadres = 'https://github.com/codingcodewhilegoofin/giowebsite/blob/main/src/components/Resume/Gio%20M%20Res%20public.pdf';
  const [windowSize, setWindowSize] = useState(window.innerWidth, window.innerHeight);


  useEffect(() => {

    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', updateSize);

    //console.log(windowSize[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', updateSize);
    }
  }, [windowSize])



  let mobileNav;
  let fontSize;
  let iconSize;
  let showDownloadRes;
  let leafAnimation;

  if (windowSize[0] < 500) {
    mobileNav = 'column';
    fontSize = 'small';
    iconSize = 'small';
    showDownloadRes = false;
    leafAnimation = '';
  }
  else if (windowSize[0] < 800) {
    mobileNav = 'column';
    fontSize = 'medium';
    iconSize = 'medium';
    showDownloadRes = false;
    leafAnimation = '';
  }
  else if (windowSize[0] < 1000) {
    mobileNav = 'row';
    fontSize = 'large';
    iconSize = 'x-large';
    showDownloadRes = true;
    leafAnimation = '';
  }
  else {
    mobileNav = 'row';
    fontSize = 'x-large';
    iconSize = 'xx-large';
    showDownloadRes = true;
    leafAnimation = 'leaf 10s ease-in-out infinite';
  }

  const [showMenu, setshowMenu] = useState(false);


  //Send to DOM 
  return (

    <HashRouter basename='/'> {/*Hash routing  */}

      {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */}
      <div className="App" style={{ padding: '1px', marginTop: '20px;', backgroundColor: '#242a36' }}>

        {/* <Giobot /> */}
        <h2 style={{ color: 'white', fontSize: 'xx-large', fontFamily:'monospace' }}>Giomoscato.com </h2>

        <div onClick={() => setshowMenu(!showMenu)} className="end-div5" style={{ padding: '1px', width: '100%', flexDirection: `${mobileNav}`, textAlign: 'center', alignItems: 'center' }}>
          <button
            style={{
              color: '#19819fff',
              backgroundColor: '#243232ff',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontSize: 'x-large',

              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.9) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.9) 0px -3px 0px inset',
            }}>

              

            < div style={{ animation: 'wiggle 2s ease-in-out infinite' }}>
              👉
            </div>

            {!showMenu ?
              <>
                {/* <div style={{ animation: `${leafAnimation}` , paddingLeft: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingRight: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingLeft: '5%', fontSize: 'xx-large', }}>❄️</div>
 */}
                
                {/*  <div style={{ animation: 'turkey 10s ease-in-out ' }}> ☃️</div> */}

                <div style={{ display: 'inline-block', boxShadow: 'rgba(225, 255, 255, 0.9) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', }}>
                  <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                    Cust
                    <div style={{ animation: 'coffeePulse 3s ease-in-out infinite', display: 'inline' }}>
                      😋
                    </div>
                    m
                  </h2>
                  <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                    <div style={{ animation: 'football 3s ease-in-out infinite', display: 'inline' }}>💩</div>
                    {' '} Menu
                  </h2>
                </div>


              </>
              :

              <div style={{ color: 'white' }}>
                ☰
              </div>
            }
          </button>
        </div>

        {!showMenu ? <></> :
          <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: `${mobileNav}`, textAlign: 'center', alignItems: 'center' }}>
            <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
              <div
                className="end-div5"
                style={{
                  padding: '0px',
                  width: '80%',
                  flexDirection: 'row',
                  textAlign: 'center',
                  alignItems: 'center',
                  border: '1px solid white',
                  animation: 'pulse 3s ease-in-out infinite',

                }}
              >
                <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >


                  <Link className="nav-item" to="/github">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> Github</p>
                      <NavItem icon={<GithubSymbol />} > </NavItem>
                    </div>
                  </Link>


                  <Link className="nav-item" to="/linkedin">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> Linkedin</p>
                      <NavItem icon={<LinkedinSymbol />} />
                    </div>
                  </Link>

                  <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> Home</p>
                      <NavItem icon="💻" />
                    </div>
                  </Link>
                </div>

                <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >

                  <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/projects">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> Projects</p>
                      <NavItem icon="📁" />
                    </div>
                  </Link>

                  <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/about">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> About</p>
                      <NavItem style={{ color: 'white', fontSize: `${fontSize}` }} icon="🧠" />
                    </div>
                  </Link>

                  <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/contact">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                      <p style={{ color: 'white', fontSize: `${fontSize}` }}> Contact</p>
                      <NavItem style={{ color: 'white', fontSize: `${fontSize}` }} icon="✉️" />
                    </div>
                  </Link>

                  {showDownloadRes ? <></> :

                    <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/download">
                      <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '5px' }}>
                        <p style={{ color: 'white', fontSize: `${fontSize}` }}> Resume</p>
                        <NavItem icon={<DownloadSymbol />} />
                      </div>
                    </Link>

                  }

                </div>

                {!showDownloadRes ? <></> :
                  <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >
                    <Link style={{ fontSize: `${iconSize}` }} className="nav-item" to="/download">
                      <div style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', }}>
                        <p style={{ color: 'white', fontSize: `${fontSize}` }}> Resume</p>
                        <NavItem icon={<DownloadSymbol />} />
                      </div>
                    </Link>


                  </div>
                }

              </div>
            </div>
          </div>
        }

        {/*Routes  */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/dependency+" component={NewSite} />
        <Route exact path="/splinescene" component={StartApp} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/test" component={TestAPI} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cstrack" component={Cstrack} />
        <Route path="/dsa" component={Dsa} />
        <Route path="/spotify" component={Spotify} />

        <Route path='/github' component={() => {
          window.location.href = githublink;
          return null;
        }} />
        <Route path='/linkedin' component={() => {
          window.location.href = linkedinlink;
          return null;
        }} />
        <Route path='/download' component={() => {
          window.location.href = downloadres;
          return null;
        }} />

      </div>

    </HashRouter >
  );
}

//Custom functions for navbar
function Navbar(props) {

  return (
    <div style={{ padding: '2px' }}>
      <nav className="navbar"  >
        <ul className="navbar-nav">
          {props.children}
        </ul>
      </nav>
    </div>
  );
}
function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div className="icon-bg">
        <a href="#" className="icon-button" onClick={() => setOpen(!open) & window.scrollTo(0, 0)}>
          {props.icon}
        </a>
      </div>
      {open && props.children}
    </li>
  );
}
function UnderNav(props) {

  return (
    <div style={{ padding: '2px' }}>
      <nav className="navbar-2">
        <ul className="navbar-nav">
          <li className="nav-item-li" style={{ lineHeight: '50px' }}>
            {props.children}
          </li>
        </ul>
      </nav>
    </div>
  );
}
function UnderText(props) {

  return (
    <h6 className="navbar-nav-under-text">
      {props.children}
    </h6>
  );
}

export default OldSite;//Export the component to index.js 