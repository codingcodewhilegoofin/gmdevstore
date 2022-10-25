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
import Practice from './practice/practice';

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
  let linkedinlink = 'https://www.linkedin.com/in/gio-m-4a19a71b1/';
  let downloadres = 'https://github.com/codingcodewhilegoofin/giowebsite/blob/main/src/components/Resume/Gio%20M%20Res%20public.pdf';
  const [windowSize, setWindowSize] = useState(window.innerWidth);



  useEffect(() => {

    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    updateSize();

    window.addEventListener('resize', updateSize);
    //console.log(windowSize[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSize])

  let mobileNav;

  if (windowSize[0] < 800) {
    mobileNav = 'column';
  }
  else {
    mobileNav = 'row';
  }

  //Send to DOM 
  return (

    <HashRouter basename='/'> {/*Hash routing  */}

      {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */}
      <div className="App" style={{ padding: '1px', marginTop: '20px;' }}>

        <Giobot />

        <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: `${mobileNav}`, textAlign: 'center', alignItems: 'center' }}>
          <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            <div className="end-div5" style={{ padding: '0px', width: '80%', flexDirection: 'row', textAlign: 'center', alignItems: 'center', backgroundColor: '#242a36' }}>
              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >

                <Link style={{ margin: '10px', }} className="nav-item" to="/github">
                  <NavItem icon={<GithubSymbol />}> </NavItem>

                </Link>

                <Link style={{ margin: '10px', }} className="nav-item" to="/linkedin">
                  <NavItem icon={<LinkedinSymbol />} />
                </Link>

                <Link style={{ fontSize: 'large', margin: '10px', }} className="nav-item" to="/">
                  <NavItem icon="💻" />
                </Link>
              </div>

              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >

                <Link style={{ fontSize: 'large', margin: '10px', }} className="nav-item" to="/projects">
                  <NavItem icon="📁" />
                </Link>

                <Link style={{ fontSize: 'large', margin: '10px', }} className="nav-item" to="/about">
                  <NavItem icon="🧠" />
                </Link>

                <Link style={{ fontSize: 'large', margin: '10px', }} className="nav-item" to="/contact">
                  <NavItem icon="✉️" />
                </Link>

              </div>

              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >
                <Link style={{ margin: '10px', }} className="nav-item" to="/download">
                  <NavItem icon={<DownloadSymbol />} />
                </Link>
              </div>
            </div>
          </div>

          <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: 'column', textAlign: 'center', alignItems: 'center', }}>
            <div className="end-div5" style={{ padding: '0px', width: '80%', flexDirection: 'row', textAlign: 'center', alignItems: 'center', backgroundColor: 'black', }}>
              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >

                <Link style={{ margin: '10px', }} className="nav-item" to="/github">
                  <UnderText> Github </UnderText>
                </Link>

                <Link style={{ margin: '10px', }} className="nav-item" to="/linkedin">
                  <UnderText> Linkedin </UnderText>
                </Link>

                <Link style={{ margin: '10px', }} className="nav-item" to="/">
                  <UnderText> Home </UnderText>
                </Link>
              </div>

              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >

                <Link style={{ margin: '10px', }} className="nav-item" to="/projects">
                  <UnderText> Projects </UnderText>
                </Link>

                <Link style={{ margin: '10px', }} className="nav-item" to="/about">
                  <UnderText> Skills </UnderText>
                </Link>

                <Link style={{ margin: '10px', }} className="nav-item" to="/contact">
                  <UnderText> Socials </UnderText>
                </Link>

              </div>

              <div style={{ margin: '15px', flexDirection: `${mobileNav}`, width: '33%', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }} >
                <Link style={{ margin: '10px', }} className="nav-item" to="/download">
                  <UnderText> Resume </UnderText>
                </Link>
              </div>
            </div>
          </div>
        </div>

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

    </HashRouter>
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