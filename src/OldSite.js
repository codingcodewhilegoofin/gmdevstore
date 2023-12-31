//Standard imports
import React, { Component, useState, useEffect } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
//import { CSSTransition } from 'react-transition-group';

//Custom imports
//import MagicButton from './components/Buttons/MagicButton/magicButton.js'
import HomePage from "./components/Pages/HomePage";
import Cstrack from "./components/Pages/Cstrack";
import Dsa from "./components/Pages/Dsa";
import Spotify from "./components/Pages/Spotify";
import NewSite from "./NewSite";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import Projects from "./components/Pages/Projects";
import StartApp from "./Start";
import "./App.css";
import TestAPI from "./components/Pages/TestAPI.js";

import AiartGif from "./icons/gifs/Backgroundwave.gif";
import TechSpiral from "./icons/TeachSpiral.png";

//Menu import
//import MenuButton from './components/Buttons/MenuButton/MenuButton.js';

//Icons
import { ReactComponent as DownloadSymbol } from "./icons/download.svg";
// Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>
import { ReactComponent as LinkedinSymbol } from "./icons/linkedin.svg";
import { ReactComponent as GithubSymbol } from "./icons/github.svg";

// Main component
function OldSite() {
  //Custom variables
  let githublink = "https://github.com/codedumpsterfire";
  let linkedinlink = "";
  let downloadres = "";

  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  let mobileNav;
  let mobileNav_menu;
  let mobileNav_subMenu;
  let fontSize;
  let iconSize;
  let showDownloadRes;
  let leafAnimation;
  let paddingType;
  let marginType;
  let picSize;
  let moreButtonWidth;

  if (windowSize) {
    mobileNav = "column";
    mobileNav_menu = "column";
    mobileNav_subMenu = "column";
    fontSize = "auto";
    iconSize = "auto";
    showDownloadRes = false;
    leafAnimation = "";
    paddingType = "0px";
    marginType = "0px";
    picSize = "85%";
    moreButtonWidth = "65%";
  } else {
    picSize = "75%";
    mobileNav = "row";
    mobileNav_menu = "row";
    mobileNav_subMenu = "row";
    fontSize = "auto";
    iconSize = "auto";
    showDownloadRes = true;
    leafAnimation = "leaf 10s ease-in-out infinite";
    paddingType = "6px";
    marginType = "6px";
    moreButtonWidth = "90%";
  }

  const [showMenu, setshowMenu] = useState(false);
  const [mainMenuToggle, setMainMenuToggle] = useState(true);

  //Send to DOM
  return (
    <HashRouter basename="/">
      {" "}
      {/*Hash routing  */}
      {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */}
      <div
        className="App"
        style={{
          padding: "1px",
          marginTop: "20px;",
          backgroundColor: "#242a36",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: `url('${AiartGif}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            marginTop: "1em",
            backgroundPosition: `${!showMenu ? "center" : "center"}`,
            marginLeft: `${!showMenu ? "5px" : "25px"} `,
            marginRight: `${!showMenu ? "5px" : "25px"} `,
          }}
        >
          <div
            style={{
              boxShadow: `0 8px 32px 0 rgba( 255, 255, 255, 0.37 )`,
              backdropFilter: "blur( 20px )",
              borderRadius: "10px",
              border: `1px solid rgba( 255, 255, 255, 0.18 )`,
            }}
          >
            <div
              className="end-div5"
              style={{
                padding: "1em",
                width: "auto",
                flexDirection: `row`,
                justifyContent: "flex-start",
                textAlign: "center",
                alignItems: "flex-start",
                opacity: ".5",
                backgroundColor: `${mainMenuToggle ? "black" : "transparent"}`,
                border: "1px solid white",
                borderRadius: "5px 5px 0px 0px",
              }}
            >
              <div
                style={{
                  // backgroundImage: `url('https://media.giphy.com/media/dB66K4Kywc8gPVh6A7/giphy-downsized-large.gif')`,
                  /* backgroundRepeat: 'no-repeat',
                backgroundSize: 'center',
                backgroundPosition: 'left',
                borderRadius: '15px',
                opacity: '.9',
                boxShadow: `0 8px 32px 0 rgba( 25, 129, 159, 0.4 )`, */
                  margin: `${marginType}`,
                  padding: `${paddingType}`,
                }}
              >
                <div
                  style={{
                    color: "#19819fff",
                    fontSize: "large",
                    /*  background: 'rgba( 25, 129, 159, 0.04 )',
                    boxShadow: `0 8px 8px 0 rgba( 25, 129, 159, 0.4 )`,
                    backdropFilter: 'blur( 10px ) ',
                    borderRadius: '15px',
                    border: '1px solid rgba( 255, 255, 255, 0.4 )' */
                  }}
                >
                  {!showMenu ? (
                    <>
                      <h2
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textTransform: "lowercase",
                          marginLeft: "2em",
                          marginRight: "2em",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "0px",
                            fontSize: "x-large",
                          }}
                          onClick={() => {
                            setMainMenuToggle(!mainMenuToggle);
                          }}
                        >
                          {mainMenuToggle ? (
                            <> 🔼</>
                          ) : (
                            <>
                              <h3
                                style={{
                                  padding: "0px",
                                  margin: "0px",
                                  fontSize: "medium",
                                  cursor: "pointer",
                                }}
                              >
                                open
                              </h3>
                            </>
                          )}
                        </button>
                        gmdevstore
                      </h2>
                    </>
                  ) : (
                    <div
                      style={{
                        color: "white",
                        boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
                        backdropFilter: "blur( 25px ) saturate(20%)",
                        borderRadius: "10px",
                        border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                        backgroundPosition: `${
                          !showMenu ? "bottom" : "center"
                        }`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            {mainMenuToggle ? (
              <div
                onClick={() => setshowMenu(!showMenu)}
                className="end-div5"
                style={{
                  margin: `${marginType}`,
                  padding: `${paddingType}`,
                  width: "100%",
                  flexDirection: `${showMenu ? mobileNav : mobileNav_menu}`,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    color: "#19819fff",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    fontSize: "large",
                    opacity: ".9",
                    borderRadius: "15px",
                    background: "rgba(175, 191, 200, 0.4)",
                    boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                    backdropFilter: "blur( 18.5px )",
                    border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                  }}
                >
                  {!showMenu ? (
                    <>
                      {/* <div style={{ animation: `${leafAnimation}` , paddingLeft: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingRight: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingLeft: '5%', fontSize: 'xx-large', }}>❄️</div>
 */}

                      {/*  <div style={{ animation: 'turkey 10s ease-in-out ' }}> ☃️</div> */}

                      <div
                        style={{
                          display: "inline-block",
                          padding: `${paddingType}`,
                          margin: `${marginType}`,
                          textTransform: "lowercase",
                        }}
                      >
                        <p
                          style={{
                            color: "white",
                            fontSize: "auto",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            border: "3px solid white",
                            padding: "10px",
                            borderRadius: "10px",
                            opacity: "1",
                            background: "rgba(0, 0, 0, 0.5 )",
                          }}
                        >
                          Gmdevstore is a full stack web site portfolio offering
                          tutoring & web design/development services. 
                          <br/>
                          <br/>
                          Learn current & future tech skills.
                        </p>

                        <div
                          style={{
                            color: "white",
                            fontSize: `${fontSize}`,
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            border: "3px solid white",
                            padding: "20px",
                            borderRadius: "10px",
                            opacity: ".9",
                            background: "rgba(0, 0, 0, 0.5 )",
                            marginTop: "10px",
                          }}
                        >
                          <h2
                            style={{
                              color: "white",
                              fontSize: "large",
                            }}
                          >
                            Development & tutoring service catagories
                          </h2>

                          <ul
                            style={{
                              color: "white",
                              fontSize: `${fontSize}`,
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              border: "3px solid white",
                              padding: "30px",
                              borderRadius: "0px",
                              opacity: "1",
                              background: "rgba(0, 0, 0, 0.5 )",
                            }}
                          >
                            <li> ☁️ Cloud services</li>
                            <li> 📚 Fundamentals </li>
                            <li> 💻📱 Web & Mobile <br/> development/design</li>
                            <li> 🛡️ Security</li>
                            <li> 🤖 AI/ML</li>
                            <li> 🌐 Networking</li>
                            <li> Embeded systems & electronics</li>
                            <li> 🔓 Ethical "hacking"</li>
                            <li> 🕹️ Video games</li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      <h2
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          textTransform: "lowercase",
                        }}
                      >
                        {" "}
                        gmdevstore
                      </h2>
                    </div>
                  )}
                </button>

                <div
                  style={{
                    flexDirection: "column",
                  }}
                >
                  {!showMenu ? (
                    
                      <img
                        src={TechSpiral}
                        width={picSize}
                        height="auto"
                        style={{ padding: "3px" }}
                      />
                   
                  ) : (
                    <></>
                  )}

                  <button
                    style={{
                      color: "#19819fff",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontSize: "auto",
                      opacity: ".9",
                      borderRadius: "15px",
                      background: "rgba(238, 5, 39, 0.15)",
                      boxShadow: `0 8px 32px 0 rgba( 238, 5, 39, 0.37 )`,
                      backdropFilter: "blur( 2px )",
                      border: `2px solid rgba( 255, 255, 255, 0.18 )`,
                      width: `${moreButtonWidth}`,
                    }}
                  >
                    <div
                      style={{
                        animation: `${
                          !showMenu ? "wiggle 2s ease-in-out infinite" : "none"
                        }`,
                      }}
                    >
                      {showMenu ? (
                        <>
                          <h2>Close menu ❌</h2>
                        </>
                      ) : (
                        "👉"
                      )}
                    </div>

                    {!showMenu ? (
                      <>
                        {/* <div style={{ animation: `${leafAnimation}` , paddingLeft: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingRight: '95%', fontSize: 'xx-large', }}>❄️</div>
                <div style={{ animation: `${leafAnimation}` , paddingLeft: '5%', fontSize: 'xx-large', }}>❄️</div */}

                        {/*  <div style={{ animation: 'turkey 10s ease-in-out ' }}> ☃️</div> */}
                        <div
                          style={{
                            padding: "20px",
                          }}
                        >
                          <h2
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "auto",
                              animation: "coffeePulse 3s ease-in-out infinite",
                              display: "inline",
                            }}
                          >
                            M😋re !
                          </h2>
                        </div>
                      </>
                    ) : (
                      <div style={{ color: "white" }}></div>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}

            {!showMenu ? (
              <></>
            ) : (
              <div
                className="end-div5"
                style={{
                  padding: "5px",
                  width: "100%",
                  flexDirection: `${mobileNav}`,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="end-div5"
                  style={{
                    padding: "5px",
                    width: "100%",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="end-div5"
                    style={{
                      paddingType: "0px",
                      marginType: "0px",
                      width: "100%",
                      flexDirection: `${mobileNav_subMenu}`,
                      textAlign: "center",
                      alignItems: "center",
                      background: "rgba(175, 191, 200, 0.1)",
                      boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.1 )`,
                      backdropFilter: "blur( 3px )",
                      animation: "pulse 5s ease-in-out infinite",
                    }}
                  >
                    <div
                      style={{
                        flexDirection: `${mobileNav}`,
                        width: "33%",
                        flexWrap: "wrap",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/github"
                      >
                        <div
                          style={{
                            flexDirection: `${mobileNav_subMenu}`,
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            Github
                          </p>
                          <NavItem icon={<GithubSymbol />}> </NavItem>
                        </div>
                      </Link>

                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/linkedin"
                      >
                        <div
                          style={{
                            flexDirection: `${mobileNav_subMenu}`,
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            Linkedin
                          </p>
                          <NavItem icon={<LinkedinSymbol />} />
                        </div>
                      </Link>

                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/"
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                          onClick={() => {
                            setMainMenuToggle(!mainMenuToggle);
                            setshowMenu(!showMenu);
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            Home
                          </p>
                          <NavItem icon="💻" />
                        </div>
                      </Link>
                    </div>

                    <div
                      style={{
                        flexDirection: `${mobileNav}`,
                        width: "33%",
                        flexWrap: "wrap",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/projects"
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                          onClick={() => {
                            setMainMenuToggle(!mainMenuToggle);
                            setshowMenu(!showMenu);
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            Projects
                          </p>
                          <NavItem icon="📁" />
                        </div>
                      </Link>

                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/about"
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                          onClick={() => {
                            setMainMenuToggle(!mainMenuToggle);
                            setshowMenu(!showMenu);
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            About
                          </p>
                          <NavItem
                            style={{ color: "white", fontSize: `${fontSize}` }}
                            icon="🧠"
                          />
                        </div>
                      </Link>

                      <Link
                        style={{ fontSize: `${iconSize}` }}
                        className="nav-item"
                        to="/contact"
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            marginTop: `${marginType}`,
                          }}
                          onClick={() => {
                            setMainMenuToggle(!mainMenuToggle);
                            setshowMenu(!showMenu);
                          }}
                        >
                          <p
                            style={{ color: "white", fontSize: `${fontSize}` }}
                          >
                            {" "}
                            Contact
                          </p>
                          <NavItem
                            style={{ color: "white", fontSize: `${fontSize}` }}
                            icon="✉️"
                          />
                        </div>
                      </Link>

                      {showDownloadRes ? (
                        <></>
                      ) : (
                        <Link
                          style={{ fontSize: `${iconSize}` }}
                          className="nav-item"
                          to="/download"
                        >
                          <div
                            style={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignSelf: "center",
                              marginTop: `${marginType}`,
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                fontSize: `${fontSize}`,
                              }}
                            >
                              {" "}
                              Resume
                            </p>
                            <NavItem icon={<DownloadSymbol />} />
                          </div>
                        </Link>
                      )}
                    </div>

                    {!showDownloadRes ? (
                      <></>
                    ) : (
                      <div
                        style={{
                          margin: "15px",
                          flexDirection: `${mobileNav}`,
                          width: "33%",
                          flexWrap: "wrap",
                          alignItems: "center",
                          alignSelf: "center",
                        }}
                      >
                        <Link
                          style={{ fontSize: `${iconSize}` }}
                          className="nav-item"
                          to="/download"
                        >
                          <div
                            style={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignSelf: "center",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                fontSize: `${fontSize}`,
                              }}
                            >
                              {" "}
                              Resume
                            </p>
                            <NavItem icon={<DownloadSymbol />} />
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2
          style={{
            color: "white",
            fontSize: "large",
            padding: "20px",
          }}
          onClick={() => {
            if (mainMenuToggle === true) {
              setMainMenuToggle(!mainMenuToggle);
            }
          }}
        >
          ☃️*NEW* services special
          <br />
          <a
            style={{
              color: "white",
              fontWeight: "900",
            }}
            href="/#/contact"
          >
            Click here
          </a>
        </h2>

        {/*Routes  */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/dependency+" component={NewSite} />
        <Route exact path="/splinescene" component={StartApp} />
        <Route exact path="/test" component={TestAPI} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cstrack" component={Cstrack} />
        <Route path="/dsa" component={Dsa} />
        <Route path="/spotify" component={Spotify} />


        <Route
          path="/github"
          component={() => {
            window.location.href = githublink;
            return null;
          }}
        />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href = linkedinlink;
            return null;
          }}
        />
        <Route
          path="/download"
          component={() => {
            window.location.href = downloadres;
            return null;
          }}
        />
      </div>
    </HashRouter>
  );
}

//Custom functions for navbar
function Navbar(props) {
  return (
    <div style={{ padding: "2px" }}>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </div>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div className="icon-bg">
        <a
          href="#"
          className="icon-button"
          onClick={() => setOpen(!open) & window.scrollTo(0, 0)}
        >
          {props.icon}
        </a>
      </div>
      {open && props.children}
    </li>
  );
}
function UnderNav(props) {
  return (
    <div style={{ padding: "2px" }}>
      <nav className="navbar-2">
        <ul className="navbar-nav">
          <li className="nav-item-li" style={{ lineHeight: "50px" }}>
            {props.children}
          </li>
        </ul>
      </nav>
    </div>
  );
}
function UnderText(props) {
  return <h6 className="navbar-nav-under-text">{props.children}</h6>;
}

export default OldSite; //Export the component to index.js
