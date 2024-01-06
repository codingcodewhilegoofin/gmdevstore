import React, { useState, useEffect, useParams } from "react";

import "../../App.css";
import { Button } from "../Buttons/Button.js";
import "../Buttons/Button.css";
import "../PageCss/HeaderSection.css";

import GioLogo from "../../icons/GioLogo2.png";
import STORE from "../../icons/8XcuzD.png";

import Arrayinfo from "../../icons/Arrayinfo.png";
import Sp from "../../icons/SP.png";

import { Link } from "react-router-dom";
import { ReactComponent as Bitcoinsymb } from "../../icons/Bitcoin.svg";

import STOREmusic from "../../audio/Store.ogg";
import Table from "./Table";
import GioTable from "./GioTable.js";
import CrudTable from "./CrudTable.js";
import ProjectCard from "./ProjectCard.js";

import "../PageCss/Crudtable.css";
import "../PageCss/GioTable.css";
import "../PageCss/NewTable.css";

function HeaderProjects() {
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

  const [baseUrl, setBaseUrl] = useState("https://swapi.tech/api/starships");
  const [data, setData] = useState([]);
  const [currentStatus, setStatus] = useState(false);

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

  let specialheader;
  let specialheader2;
  let specialheader3;
  let logoSection;
  let youtubesub;
  let musicToggle = false;
  let Toggle;
  let urlToggle = false;
  let ProjectsBanner;
  let CardMarginTop;
  let FontSizeLarge;
  let FontSizeMedium;
  let FlexDirectionFooter;
  let FooterSize;
  let FooterSpacer;
  let cardHeaderBanner;

  if (windowSize) {
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
    specialheader3 = (
      <iframe
        padding="auto"
        width="99%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    );
    logoSection = <></>;
    youtubesub = <></>;
    ProjectsBanner = "100%";
    CardMarginTop = "5px";
    FontSizeLarge = "60px";
    FontSizeMedium = "medium";
    FlexDirectionFooter = "column";
    FooterSize = "100%";
    FooterSpacer = "0%";
    cardHeaderBanner = "100%";
  } else {
    ProjectsBanner = "95%";
    CardMarginTop = "40px";
    FontSizeLarge = "150px";
    FontSizeMedium = "xx-large";
    FooterSize = "45%";
    FooterSpacer = "10%";
    specialheader = (
      <h2 style={{ color: "white" }}>Feel free to join my discord</h2>
    );
    specialheader2 = (
      <iframe
        src="https://fullstackingdevelopment.com/"
        padding="10px"
        width="100%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    );
    specialheader3 = (
      <iframe
        src="https://gmdevapi.com"
        padding="10px"
        width="100%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    );
    youtubesub = <h2 style={{ color: "white" }}>SUB TO MY YOUTUBE?</h2>;
    logoSection = (
      <div className="end-div">
        <img
          src={GioLogo}
          width="50%"
          height="auto"
          style={{ padding: "5px" }}
        />
      </div>
    );
    FlexDirectionFooter = "row";
    cardHeaderBanner = "100%";
  }

  function globalMusic() {}
  function urlChange() {
    urlToggle = !urlToggle;
    if (urlToggle) {
      setBaseUrl("https://swapi.tech/api/people");
    } else {
      setBaseUrl("https://pokeapi.co/api/v2/berry");
    }
  }

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error("Response Error!"));
        } else {
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
        } catch {
          return Promise.reject(
            new Error(
              `State Error!: Data: ${data} , Connection:${currentStatus}`
            )
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "5px",
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
            fontSize: "medium",
            textTransform: "uppercase",
          }}
          onClick={mainBodyHandle}
        >
          CLOSE
        </button>
      </div>

      <div id="mainBody" className="gio-main">
        <div
          class="Iam"
          style={{ marginTop: `${CardMarginTop}`, width: `${ProjectsBanner}` }}
        >
          <h1
            style={{
              color: "#AEBEBEff",
              fontSize: `${FontSizeLarge}`,
              fontWeight: "900",
            }}
          >
            Projects
          </h1>

          {windowSize ? (
            <></>
          ) : (
            <b>
              <div class="innerIam" style={{ backgroundColor: "black" }}>
                Web,VideoGame, Embedded systems development
                <br />
                Spotify, Stock, OpenAi API Integrations
                <br />
                Web, Game, Embedded applications development
                <br />
                React & CloudFlare & Full Stack Web App's
                <br />
                Data Structures & Algorithms <br />
                CLI and Low level based projects
                <br />
              </div>
            </b>
          )}

          <a
            style={{ color: "white", cursor: "pointer" }}
            href="https://giphy.com/ericaofanderson"
          >
            Gifs by : @ericaofanderson & @pislices
          </a>
        </div>

        <div
          className="gio-container"
          style={{
            paddingBottom: "25px",
            boxShadow: "rgba(0, 0, 0, 0.5) 2px 20px 5px",
            background: "transparent",
            flexDirection: "column",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            border: "none",
            paddingTop: "0px",
          }}
        >
          <div
            className="projectFooter"
            style={{
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "50px",
              width: `${ProjectsBanner}`,
            }}
          >
            <h1
              style={{
                color: "#AEBEBEff",
                backgroundColor: "#025B79ff",
                marginTop: "5px",
                border: "2px solid #242a36 ",
                borderRadius: "5px",
                fontSize: "30px",
                fontWeight: "900",
                margin: "0px",
                width: `${cardHeaderBanner}`,
              }}
            >
              PORTFOLIO SHOWCASE
            </h1>

            <div className="spacer"></div>

            <ProjectCard
              title="Other Web App's"
              subtitle="Web Applications"
              description="A web application is application software that is accessed using a web browser. Web applications are delivered on the World Wide Web to users with an active network connection."
              cardToggleID={"IdOne"}
            >
              <div
                className="gio-container"
                style={{ margin: "5px", background: "black" }}
              >
                <div
                  className="gio-container"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    background: "black",
                  }}
                >
                  <h3
                    style={{
                      color: "#AEBEBEff",
                      fontSize: `${FontSizeMedium}`,
                      fontWeight: "900",
                      padding: "5px",
                    }}
                  >
                    Gmdevapi.com is a CloudFlare worker built TailwindCss and
                    React framework. It hosts endpoints for any public
                    application to call via HTTP request. It acts as a
                    middle-layer between my website and 3rd party API's.
                  </h3>

                  <label></label>
                  <a
                    style={{
                      color: "#AEBEBEff",
                      fontSize: "large",
                      fontWeight: "bold",
                      backgroundColor: "#243232ff",
                      padding: "5px",
                    }}
                    href="https://gmdevapi.com"
                  >
                    gmdevapi.com
                  </a>
                  <label></label>
                </div>
              </div>
            </ProjectCard>

            <div className="spacer"></div>

            <ProjectCard
              title="3rd Party API Integrations"
              subtitle="Spotify API"
              description="Spotify API integrated stats and art. Including my personal music."
              cardToggleID={"IdTwo"}
            >
              <div
                class="subheader2body"
                style={{
                  paddingBottom: "20px",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  paddingTop: "20px",
                }}
              >
                <div
                  className="end-div5"
                  style={{
                    marginBottom: "10px",
                    border: "2px solid white",
                    padding: "5px",
                  }}
                >
                  <Link to="/Spotify">
                    <div style={{ paddingBottom: " 5px" }}>
                      <h2
                        style={{
                          color: "#AEBEBEff",
                          fontSize: `${FontSizeMedium}`,
                          backgroundColor: "#242a36",
                          borderRadius: "5px",
                        }}
                      >
                        Click to view
                      </h2>
                    </div>
                    <img
                      src={Sp}
                      width="100%"
                      height="auto"
                      style={{ padding: "2px" }}
                    />
                  </Link>
                </div>

                <div
                  style={{
                    border: "2px solid white",
                    padding: "5px",
                  }}
                >
                  <h1
                    style={{
                      color: "#AEBEBEff",
                      backgroundColor: "#025B79ff",
                      marginTop: "5px",
                      border: "2px solid #242a36 ",
                      borderRadius: "5px",
                      fontSize: "x-large",
                      fontWeight: "900",
                      margin: "5px",
                    }}
                  >
                    Stock and Crypto API
                  </h1>

                  <div
                    style={{
                      paddingBottom: "10px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      paddingTop: "10px",
                    }}
                  >
                    <Link to="/cstrack">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="gio-main"
                          style={{
                            width: "50%",
                            border: "none",
                            backgroundColor: "black",
                            borderRadius: "55px",
                          }}
                        >
                          <Bitcoinsymb
                            style={{
                              backgroundColor: "#AEBEBEff",
                              border: "1px solid black",
                              borderRadius: "50px",
                            }}
                          />
                        </div>

                        <div style={{ paddingTop: "10px", width: "100%" }}>
                          <h2
                            style={{
                              color: "#AEBEBEff",
                              fontSize: `${FontSizeMedium}`,
                              backgroundColor: "#242a36",
                              fontWeight: "900",
                              paddingTop: "5px",
                            }}
                          >
                            Click to view
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: "x-large",
                    fontWeight: "900",
                    margin: "10px",
                  }}
                >
                  CRUD & API call examples
                </h1>

                <div
                  className="gio-container"
                  style={{ background: "none", border: "2px solid white" }}
                >
                  <div
                    className="gio-container-2"
                    style={{ width: "100%", padding: "10px" }}
                  >
                    <h2
                      style={{
                        color: "#AEBEBEff",
                        fontSize: `${FontSizeLarge}`,
                        background: "none",
                        padding: "0px",
                      }}
                    >
                      API call example
                    </h2>
                    <h2
                      style={{ color: "white", fontSize: `${FontSizeMedium}` }}
                    >
                      Endpoint request using vanilla JS displayed in custom
                      table
                    </h2>
                    <div style={{ backgroundColor: "#243232ff" }}>
                      <h3 style={{ fontSize: `${FontSizeMedium}` }}>
                        You can switch between
                        <em
                          style={{
                            color: "yellow",
                            fontSize: `${FontSizeMedium}`,
                            background: "none",
                            padding: "10px",
                          }}
                        >
                          sw-api
                        </em>
                        &
                        <em
                          style={{
                            color: "lightblue",
                            fontSize: `${FontSizeMedium}`,
                            background: "none",
                            padding: "10px",
                          }}
                        >
                          poke-api
                        </em>
                        endpoints using this button!
                      </h3>
                      <h3>
                        <em style={{ fontSize: "small" }}>
                          It may take some time to load between button presses
                        </em>
                      </h3>
                      <button
                        style={{
                          color: "#AEBEBEff",
                          backgroundColor: "#101730ff",
                          cursor: "pointer",
                        }}
                        onClick={urlChange}
                      >
                        Change API endpoint
                      </button>
                    </div>
                  </div>

                  {!currentStatus ? (
                    <h4>
                      Loading...If loading does not stop after 5 seconds check
                      your internet connection. Or website is down try again
                      later.
                    </h4>
                  ) : (
                    <Table data={data} />
                  )}
                </div>

                <div
                  className="gio-container"
                  style={{
                    background: "black",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <h2
                    style={{
                      color: "#AEBEBEff",
                      fontSize: `${FontSizeLarge}`,
                    }}
                  >
                    <b style={{ color: "green" }}>Mongo DB</b> CRUD
                  </h2>
                  <h2
                    style={{
                      color: "white",
                      fontSize: `${FontSizeMedium}`,
                      textAlign: "left",
                    }}
                  >
                    Demonstration of CRUD properties. The data is created or
                    altered in gmdevapi.com via HTTPS requests, and sent to a{" "}
                    <b style={{ color: "green" }}>Mongo DB cluster.</b>
                  </h2>
                  <h2
                    style={{
                      color: "white",
                      fontSize: `${FontSizeMedium}`,
                      textAlign: "left",
                    }}
                  >
                    This means you "the user" can <b>create</b> ,{" "}
                    <b style={{ color: "lightgreen" }}>edit</b>, or{" "}
                    <b style={{ color: "red" }}>delete</b> data in the database
                    with below buttons! Feel free to leave your public media and
                    dev project links here.
                  </h2>
                  {!currentStatus ? (
                    <h2>Loading... Might be connection issue </h2>
                  ) : (
                    <CrudTable />
                  )}
                  <h2 style={{ color: "white", fontSize: `${FontSizeMedium}` }}>
                    This table and HTTP connections are made from scratch and
                    can be found documented at gmdevapi.com.
                  </h2>
                </div>
              </div>
            </ProjectCard>

            <div className="spacer"></div>

            <ProjectCard
              title="Data Structures, Algorithms, and more"
              subtitle=" C++ Compiler for IEEE 754 float converter"
              description="I wrote a CLI program in C++ , feel free to try it in this code editor!"
              cardToggleID={"IdThree"}
            >
              <div className="spacer2"></div>

              <div class="subheader3body">
                <div className="end-div5">
                  <div
                    className="gio-container-4"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <iframe
                      height="600px"
                      width="100%"
                      src="https://replit.com/@codingcodewhile/IntelligentBurdensomeAdaware?lite=true"
                      scrolling="yes"
                      frameborder="yes"
                      allowtransparency="true"
                      allowfullscreen="true"
                      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
                    ></iframe>

                    <p
                      style={{
                        backgroundColor: "#243232ff",
                        textAlign: "left",
                        padding: "10px",
                        margin: "0px",
                      }}
                    >
                      I created a IEEE 754 standard converter to convert
                      hexadecimal (and decimal) numbers into floating point.
                    </p>
                    <p
                      style={{
                        backgroundColor: "#243232ff",
                        textAlign: "left",
                        padding: "10px",
                        margin: "0px",
                      }}
                    >
                      This is my original code and It does have a few errors
                      here and there discussed in DOC. Just press the green RUN
                      arrow and then click next to the orange arrow when
                      prompted. You may enter a hexadecimal number or decimal.
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
                    fontSize: "x-large",
                    fontWeight: "900",
                    margin: "5px",
                  }}
                >
                  DSA
                </h1>

                <div
                  className="end-div5"
                  style={{
                    paddingBottom: "10px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    paddingTop: "10px",
                  }}
                >
                  <Link to="/Dsa">
                    <h2
                      style={{
                        color: "#AEBEBEff",
                        fontSize: `large`,
                        backgroundColor: "#242a36",
                        margin: "5px",
                      }}
                    >
                      Data structure & algorithm practice
                    </h2>
                    <img
                      src={Arrayinfo}
                      width="100%"
                      height="auto"
                      style={{ padding: "2px" }}
                    />
                  </Link>
                </div>
              </div>
            </ProjectCard>

            <div className="spacer"></div>

            <ProjectCard
              title="Video game dev/design , Music, and more"
              subtitle=" Pink Balls created with Unity & C#"
              description="I created a small ball physics based game with Unity. Sadly it only works on Desktop"
              cardToggleID={"IdFour"}
            >
              <div
                class="subheader4body"
                style={{ padding: "none", margin: "none" }}
              >
                <div
                  className="gio-container"
                  style={{
                    background: "none",
                    padding: "none",
                    margin: "none",
                  }}
                >
                  <p style={{ backgroundColor: "#243232ff" }}>
                    The game is based on velocity.
                    <br></br>
                    <br></br>You have to keep pressing the move keys to gain
                    enough momentum to reach the end zone! Watch out for cubes
                    they will slow you down.
                  </p>
                  <iframe
                    src="https://itch.io/embed-upload/2795508?color=EEEEEE"
                    allowfullscreen=""
                    width="100%"
                    height="1000px"
                    frameborder="0"
                  >
                    <a href="https://yupimaperson101.itch.io/pink-balls">
                      Play Pink Balls on itch.io
                    </a>
                  </iframe>
                  <p
                    style={{ backgroundColor: "#243232ff", textAlign: "left" }}
                  >
                    I designed and developed this game completely on my own with
                    some inspiration.<br></br>
                    <br></br> I was going for a "monkey ball" type game. This
                    game although simple at first glance was extremely hard to
                    make and has many, many bugs that I had to fix. <br></br>
                    <br></br>
                    The game is finished however and beatable.<br></br>
                    <br></br> There is a menu, main game play loop, and end goal.
                    Please reach out to me if you find a bug.<br></br> Also, I
                    plan to make more levels at some point.
                  </p>
                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: "x-large",
                    fontWeight: "900",
                    margin: "5px",
                  }}
                >
                  STORE video game (Musical Credits)
                </h1>

                <div className="gio-container-2">
                  <h2
                    style={{
                      color: "#AEBEBEff",
                      fontSize: "xx-large",

                      fontWeight: "900",
                      padding: "5px",
                    }}
                  >
                    STORE (the game)
                  </h2>
                  <p
                    style={{
                      backgroundColor: "#19819Fff",
                      fontSize: `${FontSizeMedium}`,
                    }}
                  >
                    I created the soundtrack for the demo game
                    <em> STORE</em> created by
                    <em> FellHawk Studios </em>
                  </p>

                  <a
                    style={{
                      color: "white",
                      fontFamily: "Exo",
                      fontSize: "large",
                    }}
                    href="https://fell-hawk.itch.io/store"
                  >
                    FellHawk-Itch.io
                  </a>

                  <img src={STORE} width="99%" height="auto" />
                  <span></span>
                  <div>
                    <audio
                      src={STOREmusic}
                      type="audio/wav"
                      controls="true"
                      class="audio-1"
                      style={{
                        backgroundColor: "#19819Fff",
                        border: "5px solid #19819Fff",
                        color: "red",
                        padding: "5px",
                        margin: "20px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </ProjectCard>
          </div>
        </div>

        <div className="spacer"></div>

        <div
          className="gio-container"
          style={{
            paddingBottom: "25px",
            boxShadow: "rgba(0, 0, 0, 0.5) 2px 20px 5px",
            background: "transparent",
            flexDirection: "column",
            width: `${ProjectsBanner}`,
            alignSelf: "center",
            alignItems: "center",
            border: "none",
            paddingTop: "5px",
          }}
        >
          <div
            className="projectHeader"
            style={{
              boxShadow:
                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: `${CardMarginTop}`,
              width: `${ProjectsBanner}`,
              background: "white",
            }}
          >
            <h1
              style={{
                color: "#AEBEBEff",
                backgroundColor: "#025B79ff",
                marginTop: "5px",
                border: "2px solid #242a36 ",
                borderRadius: "5px",
                fontSize: "xx-large",
                fontWeight: "900",
                margin: "5px",
                width: `${ProjectsBanner}`,
              }}
            >
              PORTFOLIO DIRECTORY AND Q&A
            </h1>

            <div className="spacer"></div>

            <ProjectCard
              title="Directory"
              subtitle="Project Directory"
              description="List of all projects I have made available to the public that involve coding or programming"
              cardToggleID={"IdZero"}
            >
              <>
                <ol
                  style={{
                    backgroundColor: "#025B79ff",
                    fontWeight: "900",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Web dev / fullstack based projects
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid #19819Fff",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li
                      style={{
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                        margin: "5px",
                        borderRadius: "20px",
                      }}
                    >
                      gmdevstore.com
                      <br /> <a style={{ color: "white" }}>(React web app)</a>
                    </li>

                    <label></label>
                    <li
                      style={{
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                        margin: "5px",
                        borderRadius: "20px",
                      }}
                    >
                      gmdevapi.com
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        (CloudFlare Worker API JS)
                      </a>
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    API integrated projects
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid #19819Fff",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li
                      style={{
                        margin: "2px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      Spotify API
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        (called from gmdevapi.com)
                      </p>
                      <br />
                      <a href="/#/Spotify" style={{ color: "#19819Fff" }}>
                        /Spotify
                      </a>
                    </li>

                    <label></label>
                    <li
                      style={{
                        margin: "2px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        fontWeight: "900",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      Financial API's
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        (called from gmdevstore.com)
                      </p>
                      <br />
                      <p style={{ color: "white" }}>
                        Used to display financial data
                      </p>
                      <br />
                      <a href="/#/cstrack" style={{ color: "#19819Fff" }}>
                        /cstrack
                      </a>
                    </li>
                    <label></label>
                    <li
                      style={{
                        margin: "2px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        fontWeight: "900",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      Arduino Cloud IOT API
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        (called from gmdevapi.com)
                      </p>
                      <br />
                      <a style={{ color: "white" }}>
                        Used in 3D render of Arduino Project
                      </a>
                      <br />
                      <a href="/#/dependency+" style={{ color: "#19819Fff" }}>
                        /dependency+
                      </a>
                    </li>
                    <label></label>
                    <li
                      style={{
                        margin: "2px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        fontWeight: "900",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      Polygon.io API
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        (called from gmdevstore.com)
                      </p>
                      <br />
                      <p style={{ color: "white" }}>
                        Displays financial information
                      </p>
                      <br />
                      <a href="/#/cstrack+" style={{ color: "#19819Fff" }}>
                        /cstrack
                      </a>
                    </li>
                    <label></label>
                    <li
                      style={{
                        margin: "2px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        fontWeight: "900",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      SW & Poke API's
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        (called from gmdevstore.com)
                      </p>
                      <p style={{ color: "white" }}>Used for table</p>
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    3D based projects
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid #19819Fff",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li
                      style={{
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                        margin: "5px",
                        borderRadius: "20px",
                      }}
                    >
                      3D version of gmdevstore.com
                      <br />{" "}
                      <a style={{ color: "white" }}>(Uses ThreeJS and R3F)</a>
                    </li>
                    <label></label>
                    <li
                      style={{
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                        margin: "5px",
                        borderRadius: "20px",
                      }}
                    >
                      3D Introduction Scene & Menu
                      <br /> <a style={{ color: "white" }}>(Uses SplineJS)</a>
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Data structure & Algorithm based projects
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid #19819Fff",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li
                      style={{
                        padding: "5px",
                        margin: "5px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      C++ Compiler for IEEE 754 float converter
                      <br /> <p style={{ color: "white" }}>(Written in C++)</p>
                    </li>
                    <label></label>
                    <li
                      style={{
                        margin: "5px",
                        borderRadius: "20px",
                        color: "#19819Fff",
                        fontWeight: "700",
                        border: "2px solid #19819Fff",
                      }}
                    >
                      DSA showcase
                      <br />
                      <p style={{ color: "white" }}>
                        (Written in pure JS & JSX)
                      </p>
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Video Games
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid #19819Fff",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li
                      style={{
                        color: "#19819Fff",
                        fontWeight: "700",
                        fontWeight: "900",
                        border: "2px solid #19819Fff",
                        margin: "5px",
                        borderRadius: "20px",
                      }}
                    >
                      Pink Balls
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        (Used Unity, written in C#)
                      </a>
                    </li>
                    <label></label>
                  </ul>
                </ol>
              </>
            </ProjectCard>

            <div className="spacer"></div>

            <ProjectCard
              title="Q & A"
              subtitle="Questions and answers"
              description="More information about these projects, where to find them, and what they do."
              cardToggleID={"Id"}
            >
              <div className="end-div5">
                <ol
                  style={{
                    backgroundColor: "#025B79ff",
                    fontWeight: "900",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: How can I navigate this website better, i'm lost ?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      There is a glowing menu button to click on at the bottom
                      of your screen,
                      <br /> or a custom menu at the top
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: What the heck is this website ?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      My personal portfolio to showcase my coding projects
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        This website itself is also a project so it can get
                        confusing.
                      </a>
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: How may projects are there total
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      4 technically
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        Some of the projects I am working on are nested INTO
                        this website.
                        <br /> I know it can be a bit confusing which is why I
                        made this Q&A.
                      </a>
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: Okay, which projects are part of the website ?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      Any 3D scene, API call, or pure JS / JSX is built from
                      scratch into this website
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        The 3D scenes do use libraries but I only used them to
                        set up the environment's necessary.
                      </a>{" "}
                      <br />
                      If you're still on gmdevstore.com <br /> it's probably a
                      project built into the site or using an Iframe
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: What is that 3D scene when I load this website?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      A 3D scene created with Spline.js
                      <br />{" "}
                      <a style={{ color: "white" }}>
                        I wanted the introduction to my portfolio to be
                        interesting
                        <br /> That scene is a menu basically but has some
                        easter eggs.
                      </a>
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: How can I see your projects without having to go to other
                    websites
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      Check "Project Showcase" to see them live on this website
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: Are all your projects code - based?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      Any projects mentioned in "Project Directory" are coded by
                      me or with a team
                      <br />{" "}
                      <p style={{ color: "white" }}>
                        I do have non-code projects on here but they are not
                        mentioned in the directory
                      </p>
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: How can I find a specific project ?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      Check "Project Directory"
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: Most impressive project ?{" "}
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      gmdevstore.com
                    </li>
                    <label></label>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: Favorite project?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      Pink balls was my first super silly game I ever made, but
                      it was really fun
                      <br /> It was also my first experience with 3D worlds
                    </li>
                  </ul>

                  <li
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "5px",
                    }}
                  >
                    Q: Can you help me code / build a website?
                  </li>
                  <ul
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "black",
                      fontWeight: "900",
                      border: "2px solid black",
                      margin: "10px",
                    }}
                  >
                    <label></label>
                    <li style={{ color: "white", fontWeight: "700" }}>
                      {" "}
                      Yes contact me !{" "}
                    </li>
                  </ul>
                </ol>
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "transparent",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <button
          style={{
            color: "#025B79ff",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: `${FontSizeMedium}`,
            textTransform: "uppercase",
          }}
          onClick={mainBodyHandle}
        >
          OPEN
        </button>
      </div>
    </div>
  );
}
export default HeaderProjects;
