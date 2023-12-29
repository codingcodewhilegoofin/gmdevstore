import React, { useState, useEffect, useParams } from "react";
import "../../App.css";
import { Button } from "../Buttons/Button.js";
import "../Buttons/Button.css";
import "../PageCss/HeaderSection.css";
import SpotifyAPI from "../Pages/Spotify";

import gtrating from "../../icons/gtrating.png";
import gtadd from "../../icons/gtadditional.png";
import safteycheck from "../../icons/safteycheck.png";
import GioBanner from "../../icons/Giobanner.png";
import GioLogo from "../../icons/GioLogo123.PNG";
import gmdevstorelogo from "../../icons/gmdevstorelogo.jpg";
import gmdevwebsitelogo from "../../icons/gmdevwebsitelogo.jpg";
import gmdevapilogo from "../../icons/gmdevapilogo.jpg";
import haloweenlogo from "../../icons/Haloween.png";
import CashappQR from "../../icons/cashappqr.jpg";
import FSDlogo from "../../icons/FSDlogo.png";
import Info from "../../icons/info1.png";
import bg1 from "../../icons/bg1.png";
import bg5 from "../../icons/bg5.png";
import "../PageCss/Crudtable.css";
import "../PageCss/GioTable.css";
import "../PageCss/NewTable.css";
import DevIcon from "../../icons/devicon1.png";
import DevIcon2 from "../../icons/devicon2.png";
import DevIcon3 from "../../icons/devicon3.png";
import DevIcon4 from "../../icons/devicon4.png";
import DevIconHat from "../../icons/deviconhat.png";
import AiartGif from "../../icons/gifs/Backgroundwave.gif";
import newstorelogo from "../../icons/punkwebapps.png";
import newelectronicslogo from "../../icons/Electronics site.png";
import newapilogo from "../../icons/Api logo.png";
import darkaiart1 from "../../icons/darkaiart.jpg";
import darkaiart2 from "../../icons/darkaiart2.jpg";
import darkaiart3 from "../../icons/darkaiart3.jpg";
import darkaiart4 from "../../icons/darkaiart4.jpg";
import uniLogo from "../../icons/NIU.png";
import uni2Logo from "../../icons/ECClogo.jpg";

function HeaderSection() {
  const [mainBody, setMainBody] = useState(true);

  const mainBodyHandle = () => {
    var x = document.getElementById("mainBody");
    if (x.style.display === "none") {
      x.style.display = "block";
      setMainBody(!mainBody);
    } else {
      x.style.display = "none";
    }
  };

  const [baseUrl, setBaseUrl] = useState("https://swapi.dev/api/starships");
  const [data, setData] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const [tutoringToggle, setTutoringToggle] = useState(true);
  const [webdevToggle, setWebevToggle] = useState(true);

  const [tutoringList, setTutoringList] = useState(false);
  const [webdevList, setWebdevList] = useState(false);
  const [tutoringForm, setTutoringForm] = useState(false);
  const [webdevForm, setWebdevForm] = useState(false);

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

  let specialheader;
  let specialheader2;
  let logoSection;
  let logoSection2;
  let gmdevstorevar;
  let gmdevapivar;
  let gmdevwebsitelogovar;
  let haloweenlogovar;
  let qrwidth;
  let youtubesub;
  let urlToggle = false;
  let infoWidth;
  let cardOrientation;
  let cardWidth;
  let cardPadding;
  let linkTreeWidth;
  let cardWidthSupport;
  let homepageSVGWidth;
  let cardMargin;
  let fontMobile;
  let artSectionWidth;
  let ProjectCardWidth;
  let HeaderCardWidth;
  let FontSizeLarge;
  let FontSizeMedium;
  let StatsCard;
  let StatsCardHeader;
  let buttonPadding;
  let cardOrientationCardSet2;
  let statsCardSize;
  let tutorWidth;
  let gapWidth;
  let developerWidth;

  if (windowSize) {
    tutorWidth = "100%";
    gapWidth = "0%";
    developerWidth = "100%";
    statsCardSize = "66%";
    buttonPadding = "25vw";
    specialheader = <></>;
    specialheader2 = (
      <iframe
        src="https://fullstackingdevelopment.com/"
        padding="auto"
        width="99%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    );
    logoSection = <></>;
    logoSection2 = <></>;
    gmdevstorevar = <></>;
    gmdevapivar = <></>;
    gmdevwebsitelogovar = <></>;
    haloweenlogovar = <></>;
    youtubesub = <></>;
    let infoWidth = "100%";
    qrwidth = "100%";
    cardOrientation = "column";
    cardOrientationCardSet2 = "row";
    cardWidth = "100%";
    cardWidthSupport = "%";
    cardPadding = "0px";
    linkTreeWidth = "100%";
    homepageSVGWidth = "100%";
    cardMargin = "10px";
    fontMobile = "medium";
    artSectionWidth = "100%";
    ProjectCardWidth = "100%";
    HeaderCardWidth = "100%";
    FontSizeLarge = "60px";
    FontSizeMedium = "medium";
    StatsCard = "100%";
    StatsCardHeader = "100%";
  } else {
    tutorWidth = "35%";
    gapWidth = "6%";
    developerWidth = "59%";
    statsCardSize = "50%";
    buttonPadding = "10vw";
    specialheader = <h2 style={{ color: "white" }}>Join my free discord</h2>;
    specialheader2 = (
      <iframe
        src="https://fullstackingdevelopment.com/"
        padding="auto"
        width="100%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    );
    youtubesub = <h2 style={{ color: "white" }}>SUB TO MY YOUTUBE?</h2>;
    logoSection = (
      <img src={GioLogo} width="20%" height="auto" style={{ padding: "5px" }} />
    );
    logoSection2 = (
      <img
        src={newelectronicslogo}
        width="50%"
        height="auto"
        style={{ padding: "5px", margin: "5px" }}
      />
    );
    let infoWidth = "80%";
    qrwidth = "30%";
    cardOrientation = "row";
    cardOrientationCardSet2 = "column";

    cardWidth = "48%";
    cardPadding = "50px";
    linkTreeWidth = "33%";
    cardWidthSupport = "100%";
    homepageSVGWidth = "60%";
    cardMargin = "20px";
    fontMobile = "x-large";
    artSectionWidth = "80%";
    FontSizeLarge = "100px";
    FontSizeMedium = "x-large";
    StatsCard = "33%";
    StatsCardHeader = "50%";

    gmdevstorevar = (
      <img
        src={newstorelogo}
        style={{ width: "50%", height: "auto", margin: "10px", padding: "5px" }}
      />
    );
    gmdevwebsitelogovar = (
      <img
        src={gmdevstorelogo}
        width="50%"
        height="auto"
        style={{ padding: "5px" }}
      />
    );
    haloweenlogovar = <img src={newstorelogo} width="50%" height="auto" />;
    gmdevapivar = (
      <img
        src={newapilogo}
        width="50%"
        height="auto"
        style={{ padding: "5px" }}
      />
    );

    ProjectCardWidth = "80%";
    HeaderCardWidth = "95%";
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "#242a36",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <button
          style={{
            color: "#025B79ff",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "smaller",
            textTransform: "uppercase",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "medium",
          }}
          onClick={mainBodyHandle}
        >
          {mainBodyHandle ? <>CLOSE PAGE</> : <></>}
        </button>
      </div>

      <div
        id="mainBody"
        className="gio-main"
        style={{
          width: "100%",
        }}
      >
        {/*   <img src={Info} height='auto' style={{ padding: '0px', marginBottom: '0px', border: '2px solid #19819Fff', borderRadius: '30px', width: `${homepageSVGWidth}`, marginTop: '5px' }} /> */}

        <div
          className="end-div5"
          style={{
            background: "transparent",
            padding: `${cardPadding}`,
            marginLeft: `${cardMargin}`,
            marginRight: `${cardMargin}`,
            marginBottom: "50px",
            marginTop: "5px",
            width: `${infoWidth}`,
            flexDirection: `${cardOrientation}`,
            textAlign: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <div
            className="end-div5"
            style={{
              backgroundImage: `url(${darkaiart1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              marginTop: "1em",
              padding: "0px",
              marginBottom: "10px",
              marginTop: "0px",
              width: `${cardWidth}`,
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                opacity: "1",
                borderRadius: "20px",
                background: "rgba(175, 191, 200, 0.2)",
                boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                backdropFilter: "blur( 5px )",
                border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              }}
            >
              <p
                style={{
                  color: "#AEBEBEff",
                  fontWeight: "bold",
                  margin: "20px",
                  fontSize: "x-large",
                  background: "rgba(0, 0, 0, 0.3)",
                  boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                  backdropFilter: "blur( 20px )",
                  whiteSpace: "break-spaces",
                }}
              >
                Social media handle
                <br/>
               
                <b style={{ fontSize: "xx-large", fontFamily: "monospace" }}>
                  @codedumpsterfire🔥
                </b>
              </p>

              <p
                style={{
                  color: "#AEBEBEff",
                  fontWeight: "bold",
                  margin: "20px",
                  fontSize: "x-large",
                  background: "rgba(0, 0, 0, 0.3)",
                  boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                  backdropFilter: "blur( 20px )",
                  whiteSpace: "break-spaces",
                }}
              >
                I have been coding for over 5 years 2 professionally. Experience
                includes creating web sites, games, and art! You can find more
                of my projects bellow.
                <br />
              </p>

              <button
                style={{
                  border: "3px solid #787170ff",
                  borderRadius: "25px",
                  background: "rgba(0, 0, 0, 0.2)",
                  boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                  backdropFilter: "blur( 20px )",
                  opacity: ".9",
                  paddingLeft: `${buttonPadding}`,
                  paddingRight: `${buttonPadding}`,
                }}
              >
                <a
                  style={{
                    color: "#AEBEBEff",
                    fontWeight: "900",
                  }}
                  href="/#/projects"
                >
                  <em>Projects</em>
                </a>
              </button>

              <div
                className="gio-container"
                style={{
                  background: "none",
                  boxShadow: "none",
                  borderRadius: "10px",
                  border: "none",
                  width: "90%",
                  flexDirection: "row",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                {gmdevwebsitelogovar}
                {gmdevstorevar}
              </div>
            </div>
          </div>

          <div
            className="end-div5"
            style={{
              padding: "0px",
              marginBottom: "35px",
              marginRight: "0px",
              width: "3%",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              background: "black",
            }}
          ></div>

          <div
            className="end-div5"
            style={{
              backgroundImage: `url(${darkaiart2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "25px",
              padding: "0px",
              marginBottom: "0px",
              marginRight: "0px",
              width: `${cardWidth}`,
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                borderRadius: "25px",
                background: "rgba(238, 5, 39, 0.15)",
                boxShadow: `0 8px 32px 0 rgba( 238, 5, 39, 0.37 )`,
                backdropFilter: "blur( 20px )",
                border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              }}
            >
              <div
                style={{
                  margin: "10px",

                  borderRadius: "25px",
                  background: "rgba(238, 5, 39, 0.15)",
                  boxShadow: `0 8px 32px 0 rgba( 238, 5, 39, 0.37 )`,
                  backdropFilter: "blur( 20px )",
                  border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                }}
              >
                <p
                  style={{
                    color: "#AEBEBEff",
                    fontWeight: 900,
                    margin: "20px",
                    fontSize: "x-large",
                  }}
                >
                  _gmdevstore.com gets 3rd party data from my custom built API
                  as part of its tech stack.
                  <br />
                </p>

                <button
                  style={{
                    border: "3px solid #1B2524ff",
                    borderRadius: "20px",
                    opacity: ".9",
                    background: "rgba(0, 0, 0, 0.2)",
                    boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                    backdropFilter: "blur( 20px )",
                    paddingLeft: `${buttonPadding}`,
                    paddingRight: `${buttonPadding}`,
                  }}
                >
                  <a
                    style={{ color: "#AEBEBEff", fontWeight: "700" }}
                    href="https://gmdevapi.com/"
                  >
                    <em> gmdevapi.com </em>
                  </a>
                </button>

                <div
                  className="gio-container"
                  style={{
                    background: "none",
                    boxShadow: "none",
                    borderRadius: "10px",
                    border: "none",
                    width: "90%",
                    flexDirection: "row",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  {gmdevapivar}
                  {logoSection2}
                </div>

                <p
                  style={{
                    color: "#AEBEBEff",
                    margin: "20px",
                    fontSize: "x-large",
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsism",
                  }}
                >
                  _gmdevstore.com hosts a 3D UI for an Arduino Nano 33 IOT
                  device that interacts with gmdevapi.
                  <br />
                </p>

                <button
                  style={{
                    border: "1px solid #243232ff",
                    borderRadius: "20px",
                    opacity: ".5",
                  }}
                >
                  <a
                    style={{ color: "#AEBEBEff", fontWeight: "700" }}
                    href="https://gmdevelectronics.wixsite.com/blog"
                  >
                    <em> gmdevelectronics.wixsite.com/blog </em>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Services  tab*/}
        <div
          className="end-div5"
          style={{
            backgroundImage: `url(${darkaiart2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "20px",
            padding: "10px",
            marginBottom: "10px",
            marginTop: "20px",
            width: "100%",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontWeight: 900,
              padding: "10px",
              fontSize: "xxx-large",
              border: "2px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "5px",
              }}
              onClick={() => {
                setWebevToggle(!webdevToggle);
                setTutoringToggle(!tutoringToggle);
                setTutoringList(!tutoringList);
                setWebdevList(!webdevList);
              }}
            >
              {webdevToggle && tutoringToggle ? <>🔼</> : <>🔽</>}
            </button>
            Services
          </h1>
          {/*Services tab */}

          <div>
            <div
              style={{
                color: "white",
                fontSize: `x-large`,
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
                Each tutoring session or website is unique and will vary in
                cost, time, and complexity. Please see information about
                consultation prices and how to request/pay below.
              </h2>
              Tutoring
              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "5px",
                }}
                onClick={() => {
                  setTutoringList(!tutoringList);
                }}
              >
                {tutoringList ? <>🔼</> : <>🔽</>}
              </button>
              {tutoringList ? (
                <ul
                  style={{
                    color: "white",
                    fontSize: `x-large`,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    border: "3px solid white",
                    padding: "20px",
                    borderRadius: "0px",
                    opacity: "1",
                    background: "rgba(0, 0, 0, 0.5 )",
                  }}
                >
                  <li> ☁️ Cloud services</li>
                  <li> 📚 C.S Fundamentals </li>
                  <li> Advanced mathematics </li>
                  <li> 💻 Web development/design📱</li>
                  <li> Embeded systems & electronics</li>
                  <li> 🔓 Ethical "hacking"</li>
                  <li> 🕹️ Video games & more!</li>
                </ul>
              ) : (
                <></>
              )}
              Development
              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "5px",
                }}
                onClick={() => {
                  setWebdevList(!webdevList);
                }}
              >
                {webdevList ? <>🔼</> : <>🔽</>}
              </button>
              {webdevList ? (
                <ul
                  style={{
                    color: "white",
                    fontSize: `x-large`,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    border: "3px solid white",
                    padding: "20px",
                    borderRadius: "0px",
                    opacity: "1",
                    background: "rgba(0, 0, 0, 0.5 )",
                  }}
                >
                  <li> ☁️ Cloud services</li>
                  <li> 💻 Web & Mobile development/design📱</li>
                  <li> 🛡️ Security</li>
                  <li> 🤖 AI/ML</li>
                  <li> 🌐 Networking</li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div
            className="end-div5"
            style={{
              padding: "10px",
              marginBottom: "10px",
              marginTop: "20px",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <div
              className="end-div5"
              style={{
                padding: "5px",
                width: "100%",
                flexDirection: `${cardOrientation}`,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {/*1 on 1 tutoring tab */}

              <div
                style={{
                  margin: "0px",
                  width: `${tutorWidth}`,
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize: "xx-large",
                    fontWeight: "bold",
                    border: "1px solid white",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "transparent",
                      padding: "5px",
                    }}
                    onClick={() => {
                      setTutoringToggle(!tutoringToggle);
                    }}
                  >
                    {tutoringToggle ? <>🔼</> : <>🔽</>}
                  </button>
                  1 on 1 Tutoring
                </h2>

                {tutoringToggle ? (
                  <>
                    <p
                      style={{
                        color: "white",
                        padding: "0px",
                        margin: "0px",
                        fontSize: "medium",
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                        backdropFilter: "blur( 20px )",
                      }}
                    >
                      <h3
                        style={{
                          border: "2px solid black",
                          color: "white",
                          padding: "5px",
                          fontSize: "x-large",
                          backgroundColor: "black",
                        }}
                      >
                        Tutoring qualifications
                      </h3>

                      <ol
                        style={{
                          color: "#aebebeff",
                          background: "rgba(0, 0, 0, 0.7)",
                          boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                          backdropFilter: "blur( 20px )",
                        }}
                      >
                        <li
                          style={{
                            padding: "5px",
                          }}
                        >
                          Graduated with a B.S in computer science & advanced
                          mathematics.
                        </li>
                        <li
                          style={{
                            padding: "5px",
                          }}
                        >
                          Employed at large corporate fin tech banks such as
                          <b style={{ color: "lightblue", padding: "10px" }}>
                            BMO Financial Corporation
                          </b>
                          &
                          <b style={{ color: "orange", padding: "10px" }}>
                            Discover Financial Services
                          </b>
                        </li>
                        <li
                          style={{
                            padding: "5px",
                          }}
                        >
                          Knowledge on maintaining large projects, complex
                          coding concepts, and agile teams.
                        </li>
                      </ol>

                      <h3
                        style={{
                          border: "2px solid black",
                          color: "white",
                          padding: "5px",
                          fontSize: "x-large",
                          backgroundColor: "black",
                          margin: "10px",
                        }}
                      >
                        Consultation
                      </h3>

                      <button
                        style={{
                          border: "3px solid #263434ff",
                          background: "rgba(255, 255, 255, 0.4)",
                          boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                          backdropFilter: "blur( 20px )",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "900" }}
                          href="https://gmdevstore.com/"
                        >
                          <em>
                            $<b style={{ color: "lightgreen" }}>50</b> 1hr
                            consultation deposit for tutoring. If you are
                            interested in tutoring please find more details
                            here.
                          </em>
                        </a>
                      </button>
                    </p>

                    <h3
                      style={{
                        border: "2px solid black",
                        color: "white",
                        padding: "5px",
                        fontSize: "x-large",
                        backgroundColor: "black",
                      }}
                    >
                      Comparison
                    </h3>

                    <ol
                      style={{
                        color: "#aebebeff",
                        background: "rgba(0, 0, 0, 0.7)",
                        boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                        backdropFilter: "blur( 20px )",
                      }}
                    >
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        Intermediate Tutors: Tutors with a moderate level of
                        experience and proficiency may charge between $40 to $60
                        per hour.
                      </li>
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        Experienced Tutors: Tutors with several years of
                        experience, possibly with a strong background in
                        teaching, may charge $60 to $100 or more per hour.
                      </li>
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        Specialized Tutors: Tutors who specialize in in-demand
                        technologies or niche areas may command higher rates.
                        Rates for tutors with expertise in popular programming
                        languages, frameworks, or emerging technologies could
                        range from $80 to $150 per hour or more.
                      </li>
                    </ol>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div
                className="end-div5"
                style={{
                  padding: "0px",
                  marginBottom: "35px",
                  marginRight: "0px",
                  width: `${gapWidth}`,
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  background: "black",
                }}
              ></div>

              {/*Web dev tutor tab */}
              <div
                style={{
                  margin: "0px",
                  width: `${developerWidth}`,
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize: "xx-large",
                    fontWeight: "bold",
                    border: "1px solid white",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "transparent",
                      padding: "5px",
                    }}
                    onClick={() => {
                      setWebevToggle(!webdevToggle);
                    }}
                  >
                    {webdevToggle ? <>🔼</> : <>🔽</>}
                  </button>
                  Web development & design
                </h2>

                {webdevToggle ? (
                  <>
                    <h3
                      style={{
                        border: "2px solid black",
                        color: "white",
                        padding: "5px",
                        fontSize: "x-large",
                        backgroundColor: "black",
                      }}
                    >
                      Why hire a developer or designer?
                    </h3>

                    <ol
                      style={{
                        color: "#aebebeff",
                        background: "rgba(0, 0, 0, 0.7)",
                        boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                        backdropFilter: "blur( 20px )",
                      }}
                    >
                      <li style={{ padding: "5px" }}>
                        <b>Align your brand identity</b>. This includes choosing
                        appropriate colors, fonts, and imagery to create a
                        consistent and memorable brand experience for your
                        audience.
                      </li>
                      <li style={{ padding: "5px" }}>
                        <b>Saves you time </b>and allows you to focus on your
                        core business activities. Rely on experts to handle the
                        technical aspects.
                      </li>
                      <li style={{ padding: "5px" }}>
                        Will implement{" "}
                        <b>latest technologies and design trends</b>.
                      </li>
                      <li style={{ padding: "5px" }}>
                        Ongoing <b>support</b> & bug fixes
                      </li>
                      <li style={{ padding: "5px" }}>
                        While there are DIY website-building tools available,
                        hiring a professional can make a significant difference
                        in the quality, functionality, and success of your
                        online presence.
                      </li>
                    </ol>

                    <h3
                      style={{
                        border: "2px solid black",
                        color: "white",
                        padding: "5px",
                        fontSize: "x-large",
                        backgroundColor: "black",
                      }}
                    >
                      Qualifications
                    </h3>

                    <p
                      style={{
                        color: "white",
                        padding: "1px",
                        margin: "0px",
                        fontSize: "medium",
                        background: "rgba(255, 255, 255, 0.1)",
                        boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                        backdropFilter: "blur( 20px )",
                      }}
                    >
                      <ol
                        style={{
                          color: "#aebebeff",
                          background: "rgba(0, 0, 0, 0.7)",
                          boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                          backdropFilter: "blur( 20px )",
                        }}
                      >
                        <li style={{ padding: "5px" }}>
                          Experience in complex web & cloud based sites.
                          Including a large book of records modernization
                          project.
                        </li>
                        <li style={{ padding: "5px" }}>
                          Over 2 years professional experience with building
                          full stack web sites.
                        </li>
                        <li style={{ padding: "5px" }}>
                          Created unique UI's and brand materials for various
                          web sites. Websites remained user friendly and
                          followed accessibility standards.
                        </li>
                      </ol>

                      <button
                        style={{
                          border: "3px solid #263434ff",
                          background: "rgba(255, 255, 255, 0.4)",
                          boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                          backdropFilter: "blur( 20px )",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "900" }}
                          href="https://gmdevstore.com/"
                        >
                          <em>
                            $<b style={{ color: "lightgreen" }}>200</b> 2hr
                            consultation deposit for web sites/apps. Find more
                            detials here.
                          </em>
                        </a>
                      </button>
                    </p>
                    <h3
                      style={{
                        border: "2px solid black",
                        color: "white",
                        padding: "5px",
                        fontSize: "x-large",
                        backgroundColor: "black",
                      }}
                    >
                      Comparison
                    </h3>

                    <ol
                      style={{
                        color: "#aebebeff",
                        background: "rgba(0, 0, 0, 0.7)",
                        boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                        backdropFilter: "blur( 20px )",
                      }}
                    >
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        For simpler projects, a freelance web developer may
                        charge a fixed fee, which can range from a few hundred
                        to several thousand dollars.
                      </li>
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        Development agencies typically charge higher rates
                        compared to individual freelancers due to the collective
                        expertise they bring to a project. Agency rates can
                        range from $100 to $200 or more per hour.
                      </li>
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        <div>
                          <h2
                            style={{
                              color: "white",
                            }}
                          >
                            <b> Building a Website Yourself</b>
                          </h2>
                          <ol>
                            <li>
                              Pros: Cost Savings, personal control, learning
                              opportunities, Quick Start.
                            </li>

                            <br />

                            <li>
                              Cons: Limited Customization, Time-Consuming,
                              Quality Concerns.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        style={{
                          padding: "5px",
                        }}
                      >
                        <div>
                          <h2
                            style={{
                              color: "white",
                            }}
                          >
                            <b> Hiring a Web Developer:</b>
                          </h2>

                          <ol>
                            <li>
                              Pros: Professional Quality, Time Efficiency,
                              Customization,Technical Expertise.
                            </li>

                            <li>Cons: Cost, Dependency.</li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*Services tab */}

        {/**Cashapp tab */}
        <div
          className="end-div5"
          style={{
            backgroundImage: `url(${darkaiart4})`,
            padding: "0px",
            margin: "5px",
            marginBottom: "50px",
            marginTop: "50px",
            width: `${infoWidth}`,
            flexDirection: `${cardOrientation}`,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              opacity: "1",
              borderRadius: "15px",
              background: "rgba(238, 5, 39, 0.15)",
              boxShadow: `0 8px 32px 0 rgba( 238, 5, 39, 0.37 )`,
              backdropFilter: "blur( 5px )",
              border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              padding: "0px",
              flexDirection: `${cardOrientation}`,
              textAlign: "center",
              alignItems: "center",
              margin: "5px",
              marginBottom: "20px",
            }}
          >
            <div
              className="end-div5"
              style={{
                margin: "0px",
                padding: "10px",
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                border: "1px solid white",
                opacity: ".9",
                background: "rgba(238, 5, 39, 0.15)",
                boxShadow: `0 8px 32px 0 rgba( 238, 5, 39, 0.37 )`,
                backdropFilter: "blur( 5px )",
                border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              }}
            >
              <a
                style={{
                  color: "white",
                  fontWeight: "900",
                  fontSize: "large",
                }}
                href="https://cash.app/$codedumpsterfire"
              >
                <em> Cashapp @$codedumpsterfire</em>
              </a>
              <h2
                style={{ color: "white", fontSize: "x-large", padding: "10px" }}
              >
                Consultation payments can be made through cashapp
              </h2>

              <img
                src={CashappQR}
                height="auto"
                width="auto"
                style={{
                  border: "5px solid lightgreen",
                }}
              />
              <h2 style={{ color: "white", fontSize: "x-large" }}>
                Find all my information here <br />
              </h2>
              <a
                style={{
                  color: "white",
                  fontWeight: "900",
                  border: "1px solid white",
                  padding: "5px",
                  fontSize: "xx-largeF",
                }}
                href="https://linktr.ee/codedumpsterfire"
              >
                <em> linktr.ee/codedumpsterfire</em>
              </a>
            </div>
          </div>

          <div
            className="end-div5"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.5) 2px 20px 5px",
              padding: "0px",
              marginBottom: "0px",
              marginRight: "0px",
              width: "6%",
              flexDirection: `${cardOrientation}`,
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          ></div>
          {/** Intake form  */}
          <div
            style={{
              opacity: "1",
              borderRadius: "10px",
              boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
              backdropFilter: "blur( 10.5px )",
              border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              padding: "0px",
              marginBottom: "15px",
            }}
          >
            <div
              className="end-div5"
              style={{
                margin: "0px",
                padding: "0px",
                width: `${cardWidthSupport}`,
                flexDirection: `${cardOrientation}`,
                textAlign: "center",
                alignItems: "center",
                border: "1px solid white",
                opacity: ".9",
                borderRadius: "10px",
                background: "rgba(175, 191, 200, 0.2)",
                backdropFilter: "blur( 5px )",
              }}
            >
              <h2
                style={{ color: "white", fontSize: "large", fontWeight: "900" }}
              >
                Services intake form
              </h2>

              <form
                action="https://formsubmit.co/gmdevstore@protonmail.com"
                method="POST"
                style={{
                  padding: "0px",
                  border: "1px solid white",
                  borderRadius: "10px",
                  background: "transparent",
                  opacity: ".8",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    padding: "5px",
                  }}
                >
                  <h2
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                    }}
                  >
                    Send your contact information and service request details.
                  </h2>

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                    }}
                  >
                    Firstname
                  </label>
                  <input
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      margin: "5px",
                      width: "90%",
                    }}
                    type="text"
                    name="Firstname"
                    required
                  />

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                    }}
                  >
                    Lastname
                  </label>
                  <input
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      margin: "5px",
                      width: "90%",
                    }}
                    type="text"
                    name="LastName"
                    required
                  />

                  <div>
                    <label
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                      }}
                    >
                      Email
                    </label>
                    <input
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        margin: "10px",
                        width: "90%",
                      }}
                      type="email"
                      name="email"
                      required
                    />
                  </div>

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                    }}
                  >
                    Choose a consultation service
                  </label>

                  <div
                    style={{
                      flexDirection: "column",
                      border: "1px solid white",
                      padding: "5px",
                      margin: "10px",
                    }}
                  >
                    <label
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                      }}
                    >
                      Tutoring
                    </label>
                    <input
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        margin: "0px",
                      }}
                      type="checkbox"
                      name="Tutoring"
                      onClick={() => {
                        setTutoringForm(!tutoringForm);
                      }}
                    />

                    {tutoringForm ? (
                      <>
                        <div
                          style={{
                            backgroundColor: "black",
                            flexDirection: "column",
                            padding: "50px",
                          }}
                        >
                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Cloud
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_CloudServices"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              C.S Fundamentals
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_CSfundamentals"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Advanced mathematics
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_Math"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              WEB DEVELOPMENT/DESIGN
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_Webdev&design"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              EMBEDED SYSTEMS & ELECTRONICS
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_embededSystems"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              ETHICAL "HACKING"
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_hacking"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              VIDEO GAMES
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Tutor_videogames"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <label
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                      }}
                    >
                      <br />
                      Web development/design
                    </label>
                    <input
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        margin: "0px",
                      }}
                      type="checkbox"
                      name="Webdev"
                      onClick={() => {
                        setWebdevForm(!webdevForm);
                      }}
                    />

                    {webdevForm ? (
                      <>
                        <div
                          style={{
                            backgroundColor: "black",
                            flexDirection: "column",
                            padding: "50px",
                          }}
                        >
                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Cloud services
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Web_cloudServices"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Web & mobile design / development
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Web_websiteDev&Design"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Security
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Web_Security"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              AI/ML
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Web_AI/ML"
                            />
                          </div>

                          <div>
                            <label
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                              }}
                            >
                              Networking
                            </label>
                            <input
                              style={{
                                color: "white",
                                fontSize: "large",
                                fontWeight: "900",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                margin: "0px",
                              }}
                              type="checkbox"
                              name="Web_Networking"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <label
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                      }}
                    >
                      <br />
                      Other....
                    </label>
                    <input
                      style={{
                        color: "white",
                        fontSize: "large",
                        fontWeight: "900",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        margin: "0px",
                      }}
                      type="checkbox"
                      name="Other_services"
                      
                    />
                  </div>

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                    }}
                  >
                    More details
                  </label>
                  <input
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      margin: "5px",
                      width: "90%",
                    }}
                    type="text"
                    name="AdditionalDetails"
                    maxlength="350"
                    required
                  />
                </div>

                <label
                  style={{
                    color: "white",
                    fontSize: "large",
                    fontWeight: "900",
                  }}
                >
                  Best consultation day and time for you
                </label>
                <input
                  style={{
                    color: "white",
                    fontSize: "large",
                    fontWeight: "900",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    margin: "5px",
                    width: "90%",
                  }}
                  type="date"
                  name="UserRequested_ConsultationDate"
                  required
                />
                <input
                  style={{
                    color: "white",
                    fontSize: "large",
                    fontWeight: "900",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    margin: "5px",
                    width: "90%",
                  }}
                  type="time"
                  name="UserRequested_ConsultationTime"
                  required
                />

                <button
                  type="submit"
                  style={{
                    color: "white",
                    fontSize: "large",
                    fontWeight: "900",
                    backgroundColor: "transparent",
                    border: "3px solid black",
                    margin: "5px",
                    cursor: "pointer",
                  }}
                >
                  Send to gmdevstore@protonmail.com
                </button>
              </form>

              {/* <img
                src={CashappQR}
                height="auto"
                width="auto"
                style={{
                  padding: "10px",
                }}
              />  */}
            </div>
          </div>
          {/** Intake form  */}

        </div>
        {/**Cashapp tab */}

        <div
          className="gio-container"
          style={{
            backgroundImage: `url(${darkaiart2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            padding: "0px",
            width: "100%",
            marginTop: "0px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              opacity: "1",
              borderRadius: "5px",
              background: "rgba(0, 0, 0, 0.5)",
              boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
              backdropFilter: "blur( 5px )",
              border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div
              className="end-div2"
              style={{
                borderRadius: "10px",
                background: "black",
                marginBottom: "20px",
                marginTop: "10px",
                width: "98%",
                textAlign: "left",
                boxShadow:
                  "rgba(25, 129, 159, 0.9) 6px 2px 10px 0px, rgba(25, 129, 159, 0.9) -6px -2px 10px 0px ",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontWeight: "900",
                  fontSize: `x-large`,
                }}
              >
                Site information
              </h3>
            </div>

            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    opacity: "1",
                    borderRadius: "10px",
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur( 10px )",
                    border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                    color: "#AEBEBEff",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                  }}
                >
                  <h3 style={{ color: "#AEBEBEff", fontWeight: "bold" }}>
                    All components , files, animations, styling, and code was
                    written by me from scratch using the{" "}
                  </h3>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: `${FontSizeMedium}`,
                      border: "1px solid black",
                      margin: "10px",
                      color: "lightblue",
                      padding: "10px",
                      backgroundColor: "black",
                      borderRadius: "20px",
                    }}
                  >
                    React Framework
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur( 10px )",
                  border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                  display: "flex",
                  flexDirection: "row",

                  margin: "10px",
                  color: "black",
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "#AEBEBEff",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                >
                  All art work , source code, and music was also made from
                  scratch ! Except for some 3D models, gif's, and logos which are cited.
                </div>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur( 10px )",
                  border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                  display: "flex",
                  flexDirection: "row",

                  margin: "10px",
                  color: "black",
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "#AEBEBEff",
                    padding: "10px",

                    borderRadius: "20px",
                  }}
                >
                  This web app integrates to over 6 third party API's managed by
                  my personal gmdevapi project!
                </div>
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    margin: "0px",
                    color: "lightblue",
                    padding: "10px",
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.5)",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Check projects to learn more.
                </div>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur( 10px )",
                  border: `1px solid rgba( 255, 255, 255, 0.18 )`,
                  display: "flex",
                  flexDirection: "row",
                  border: "2px solid #19819Fff",
                  margin: "10px",
                  color: "black",
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "#AEBEBEff",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                >
                  It took me 3 years to finish this website. I started from
                  scratch and barely knew CSS / HTML !{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="gio-container"
          style={{
            backgroundImage: `url(${darkaiart2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            border: "none",
            padding: "0px",
            width: `${ProjectCardWidth}`,
            marginTop: "30px",
            marginBottom: "50px",
            width: "100%",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba( 238, 5, 39, 0.5 )",
              backdropFilter: "blur( 10px )",
              border: `1px solid rgba( 255, 255, 255, 0.18 )`,
              width: "100%",
              padding: "10px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="end-div2"
              style={{
                borderRadius: "5px",
                background: "white",
                marginBottom: "20px",
                width: "98%",
                border: "5px solid #EE0527ff",
              }}
            >
              <h3
                style={{
                  color: "black",
                  fontWeight: "900",
                  fontSize: `xx-large`,
                }}
              >
                <div style={{ animation: "wiggle 10s ease-in-out infinite" }}>
                  📊
                </div>
                Developer credentials
              </h3>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  background: "#EE0527ff",
                  display: "flex",
                  flexDirection: "row",

                  margin: "10px",
                  color: "black",

                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "white",
                    padding: "10px",
                    backgroundColor: "darkred",
                    borderRadius: "20px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={uniLogo}
                    width="35px"
                    height="35px"
                    style={{ marginRight: "25px" }}
                  ></img>
                  B.S In CS from NIU
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "white",
                    padding: "10px",
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={uni2Logo}
                    width="35px"
                    height="35px"
                    style={{ marginRight: "25px" }}
                  ></img>
                  A.S from ECC
                </div>
              </div>

              <label></label>
              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px",
                  color: "black",
                  borderRadius: "20px",
                  border: "3px solid #EE0527ff",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "5px",
                    color: "black",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={DevIcon}
                    width="30px"
                    height="30px"
                    style={{ marginRight: "10px" }}
                  ></img>
                  Developer Title
                </div>
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    margin: "0px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    textAlign: "left",
                  }}
                >
                  
                  Junior Full Stack Developer
                </div>
              </div>

              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "row",
                  border: "3px solid #EE0527ff",
                  margin: "10px",
                  color: "black",

                  borderRadius: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "black",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={DevIcon2}
                    width="30px"
                    height="30px"
                    style={{ marginRight: "10px", background: "none" }}
                  ></img>
                  Specialization
                </div>
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    margin: "0px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Software Developer
                </div>
              </div>

              <label></label>

              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "row",
                  border: "3px solid #EE0527ff",
                  margin: "10px",
                  color: "black",

                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "black",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={DevIcon3}
                    width="30px"
                    height="30px"
                    style={{ marginRight: "10px", background: "none" }}
                  ></img>
                  Active Projects
                </div>
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    margin: "0px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50px",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  gmdevapi.com, gmdevstore.com
                </div>
              </div>

              <div
                style={{
                  background: "black",
                  display: "flex",
                  flexDirection: "row",
                  border: "3px solid #EE0527ff",
                  margin: "10px",
                  color: "black",
                  borderRadius: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    border: "1px solid black",
                    margin: "3px",
                    color: "black",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    width: `${statsCardSize}`,
                  }}
                >
                  <img
                    src={DevIcon4}
                    width="30px"
                    height="30px"
                    style={{ marginRight: "10px" }}
                  ></img>
                  Years Experience
                </div>
                <div
                  style={{
                    fontSize: `${FontSizeMedium}`,
                    margin: "0px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50px",
                    textAlign: "left",
                  }}
                >
                  5 total
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.5) 5px 20px 5px",
            backgroundColor: "lightgreen",
            padding: "5px",
          }}
        >
          <div
            className="subheader9"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                color: "black",
                fontWeight: "900",
                background: "rgba(255, 255, 255, .9)",
                fontSize: "xx-large",
                margin: "10px",
              }}
            >
              🥳 Project Spotlight{" "}
            </h1>

            <a
              style={{ color: "white", fontSize: "small" }}
              href="https://giphy.com/ericaofanderson"
            >
              Gifs by : Erica Anderson
            </a>

            <button
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                background: "transparent",
                marginBottom: "20px",
                width: "66%",
                boxShadow:
                  "rgba(30, 215, 96, 0.9) 6px 2px 10px 0px, rgba(255, 255, 255, 0.9) -6px -2px 10px 0px ",
              }}
            >
              <a
                style={{
                  color: "lightgreen",
                  fontWeight: "700",
                  marginTop: "20px",
                  marginBottom: "10px",
                  background: "transparent",
                }}
                href="/#/Spotify"
              >
                Spotify API intergration
              </a>
            </button>
          </div>

          <div
            className="gio-container-2"
            style={{ marginTop: "10px", padding: "none" }}
          >
            <SpotifyAPI />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              width: "100%",
              margin: "10px",
              boxShadow: "rgba(0, 0, 0, 0.5) -2px 10px 5px",
              padding: "10px",
              paddingTop: "30px",
              paddingBottom: "20px",
            }}
          >
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--med"
            ></Button>
          </div>
        </div>

        <div
          className="gio-container"
          style={{
            background: "none",
            flexDirection: "column",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div
            className="gio-container-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.5) 5px 15px 5px",
              width: "100%",
              background:
                "linear-gradient(12deg, #101730ff, #1b2524ff, #243232ff, #2e5252ff, #242a36, #025b79ff, #19819fff)",
              backgroundSize: "400% 400%",
              animation: "bgchange 30s ease-in-out infinite",
              padding: "2px",
            }}
          >
            {specialheader}
            <iframe
              src="https://discord.com/widget?id=944377004193611817&theme=dark"
              padding="auto"
              width="100%"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </div>
        </div>

        <div
          className="gio-container"
          style={{
            background: "transparent",
            flexDirection: "column",
            padding: `${[cardPadding]}`,
            alignSelf: "center",
            alignItems: "center",
            border: "none",
            width: `${cardWidthSupport}`,
          }}
        ></div>

        <div className="spacer"></div>

        <div
          className="gio-container"
          style={{
            background: "transparent",
            flexDirection: "column",
            padding: "0px",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div
            className="gio-container-2"
            style={{
              padding: "0px",
              marginBottom: "30px",
              width: "100%",
            }}
          >
            <h3
              style={{
                color: "#19819Fff",
                fontWeight: "900",
                fontSize: "auto",
                backgroundColor: "#101730ff",
                margin: "10px",
                borderRadius: "0px",
                border: " 1px solid white",
                width: "98%",
              }}
            >
              My website's theme was inspiried by these beautifull images
              generated by <br />
              <b style={{ color: "white" }}>wombos - "dream"</b>
              <br /> try it yourself here!
              <br />
              <button
                src=" https://app.wombo.art/"
                style={{ backgroundColor: "#2E5252ff", borderRadius: "5px" }}
              >
                <a style={{ color: "white" }}>app.wombo.art.com</a>
              </button>
            </h3>

            <div
              className="gio-container"
              style={{
                backgroundImage: `url(${darkaiart2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "0px",
                border: "none",
                padding: "2px",
                width: "100%",
                flexDirection: "row",
                border: " 1px solid white",
              }}
            >
              <img
                src={bg1}
                style={{
                  width: "25%",
                  height: "50%",
                  padding: "10px",
                  boxShadow: "none",
                }}
              />

              <img
                src={bg5}
                style={{
                  width: "25%",
                  height: "50%",
                  padding: "10px",
                  boxShadow: "none",
                }}
              />

              <img
                src={darkaiart1}
                style={{
                  width: "25%",
                  height: "50%",
                  padding: "10px",
                  boxShadow: "none",
                }}
              />

              <img
                src={darkaiart3}
                style={{
                  width: "25%",
                  height: "50%",
                  padding: "10px",
                  boxShadow: "none",
                }}
              />
            </div>

            <iframe
              src="https://app.wombo.art/"
              allowfullscreen="yes"
              width="100%"
              height="1000px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <button
        style={{
          color: "#025B79ff",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
        onClick={mainBodyHandle}
      >
        {mainBodyHandle ? <>OPEN PAGE</> : <></>}
      </button>

      <div
        className="end-div"
        style={{
          flexDirection: `${cardOrientation}`,
          width: "100%",
          alignItems: "center",
          background: "transparent",
          border: "none",
        }}
      >
        <div
          className="end-div"
          style={{
            marginTop: "5px",
            backgroundImage: `url(${darkaiart1})`,
            width: "90%",
            border: "none",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              padding: "5px",
              width: "100%",
            }}
          >
            <a href="https://github.com/codedumpsterfire">
              <h2
                style={{
                  color: "white",
                  fontWeight: "900",
                  background: "rgba(0, 0, 0, 0.8)",
                  borderRadius: " 0px",
                  width: "59%",
                }}
              >
                Technologies
              </h2>

              <ol
                style={{
                  color: "black",
                  borderRadius: " 0px",
                  fontSize: "auto",
                }}
              >
                <li> Bash/Linux/Windows( CLI/OS )</li>
                <li> VScode</li>
                <li> ReactJS/ThreeJS </li>
                <li> NPM</li>
                <li> HTML/CSS/JS/JSX </li>
                <li> Githubpages </li>
                <li> CloudFlare Pages & workers</li>
                <li> Github </li>
              </ol>

              <h3
                style={{
                  color: "black",
                  fontWeight: "900",
                  borderRadius: " 25px",
                }}
              >
                Please consider collaborating or donating!🔥
              </h3>
            </a>
          </div>
        </div>

        <div
          className="end-div5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.5) 2px 20px 5px",
            padding: "0px",
            width: "4%",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        ></div>

        <div
          className="end-div2"
          style={{
            marginTop: "15px",
            marginBottom: "100px",
            padding: "10px",
            backgroundImage: `url(${darkaiart3})`,
            width: "90%",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <a href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/">
              <h2
                style={{
                  color: "white",
                  fontWeight: "900",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: " 0px",
                  width: "33%",
                }}
              >
                Updates
              </h2>

              <h3
                style={{
                  color: "white",

                  fontWeight: "900",
                  borderRadius: "0px",
                  margin: "5px",
                }}
              >
                Major Update! : Migrating the website and updating look/feel
                <br />
                If you find any issues or bugs let me know!
            
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* <h3 style={{ color: 'black' }}>Happy Holidays! 🎁</h3> */}
    </div>
  );
}
export default HeaderSection;
