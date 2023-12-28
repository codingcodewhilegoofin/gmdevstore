import React, { useState, useEffect, useParams } from "react";

import "../../App.css";
import { Button } from "../Buttons/Button.js";
import "../Buttons/Button.css";
import "../PageCss/HeaderSection.css";

import co from "../../icons/CO.png";

function HeaderAbout() {
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

  let FontSizeLarge;
  let FontSizeMedium;
  let ProjectCardWidth;
  let HeaderCardWidth;
  let CardWidth;

  if (windowSize) {
    FontSizeLarge = "40px";
    FontSizeMedium = "medium";
    ProjectCardWidth = "100%";
    HeaderCardWidth = "100%";
  } else {
    FontSizeLarge = "50px";
    FontSizeMedium = "x-large";
    ProjectCardWidth = "95%";
    HeaderCardWidth = "99%";
  }

  return (
    <>
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
            border: "none",
            padding: "0px",
            margin: "0px",
            width: `${ProjectCardWidth}`,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="subheader7"
            style={{
              borderRadius: "25px",
              width: `${HeaderCardWidth}`,
            }}
          >
            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                backdropFilter: "blur( 20px )",
                padding: "10px",
                width: "100%",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontSize: `${FontSizeLarge}`,
                  fontWeight: "900",
                }}
              >
                ABOUT ME
              </h4>
            </div>

            <label></label>

            <div
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                backdropFilter: "blur( 5px )",
                padding: "auto",
                width: "100%",
              }}
            >
              <p
                style={{
                  color: "white",
                  background: "rgba(0,0,0, 0.9)",
                  padding: "10px",
                  borderRadius: "20px",
                  fontSize: `${FontSizeMedium}`,
                }}
              >
                Graduate BS of Computer Science from Northern Illinois
                University
              </p>

              <div className="spacer2"></div>

              <p
                style={{
                  color: "white",
                  backgroundColor: "rgba(0,0,0, 0.8)",
                  padding: "30px",
                  borderRadius: "20px",
                  fontSize: `${FontSizeMedium}`,
                }}
              >
                Emphasis in Computational Software and
                <em>
                  <a
                    href="#minor"
                    style={{ color: "#19819Fff", padding: "5px" }}
                  >
                    minor in Mathematics
                  </a>
                </em>
              </p>

              <div className="spacer2"></div>

              <p
                style={{
                  color: "white",
                  backgroundColor: "rgba(0,0,0, 0.9s)",
                  padding: "10px",
                  borderRadius: "20px",
                  fontSize: `${FontSizeMedium}`,
                }}
              >
                I have a range of experience in current and future industry
                trends
              </p>

              <div className="spacer2"></div>
            </div>

            
            <label></label>

            <div
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                boxShadow: `0 8px 32px 0 rgba( 225, 225, 225, 0.37 )`,
                backdropFilter: "blur( 20px )",
                padding: "10vh",
                width: "100%",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontSize: `${FontSizeMedium}`,
                  fontWeight: "900",
                }}
              >
                {" "}
                Here is a list of my current CS knowledge and skills
              </h4>
            </div>
          </div>

          <div className="spacer"></div>

          <div
            className="gio-container-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              border: "none",
              padding: "3px",
              width: `${ProjectCardWidth}`,
            }}
          >
            <h4
              id="languages"
              name="languages"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                borderRadius: "20px",
                fontWeight: "900",
                fontSize: `${FontSizeLarge}`,
                fontWeight: "900",
              }}
            >
              LANGUAGES & ENV's{" "}
            </h4>

            <ul
              style={{
                background: "rgba(0,0,0,.8)",
                width: "95%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3
                  style={{
                    color: "#AEBEBEff",
                    fontWeight: "900",
                    backgroundColor: "rgba(0, 0, 0, 0.56)",
                  }}
                >
                  {" "}
                  Programming Languages - Compiled
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  C / C++ / C# :
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      {" "}
                      Intermediate Experience
                    </li>
                  </ul>
                </li>

                <label></label>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  JAVA / LaTeX :
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      Some experience
                    </li>
                  </ul>
                </li>

                <br></br>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  ASSIST ASSEMBLY ( INTEL ):
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      Some experience{" "}
                    </li>
                  </ul>
                </li>

                <br></br>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  Julia:
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      Some experience{" "}
                    </li>
                  </ul>
                </li>
              </div>

              <div
                className="end-div3"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  marginTop: "30px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  Scripting Languages - Interpreted
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  JS, JSX, Python, Ruby, PHP, Bash, PShell:
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      Intermediate experience
                    </li>
                  </ul>
                </li>
              </div>

              <br></br>

              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  marginTop: "30px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  Markdown Languages{" "}
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  HTML, CSS, Markdown:
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      {" "}
                      Intermediate experience
                    </li>
                  </ul>
                </li>
              </div>

              <br />

              <div
                className="end-div3"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  marginTop: "30px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  Declaritive / Domain Specific
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <li
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  {" "}
                  MySQL / SQL:
                  <ul>
                    <li style={{ margin: "10px", color: "#19819Fff" }}>
                      Some experience
                    </li>
                  </ul>
                </li>
              </div>

              <br></br>

              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  marginTop: "30px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3
                  style={{
                    color: "#AEBEBEff",
                    fontWeight: "900",
                    backgroundColor: "rgba(0, 0, 0, 0.56)",
                  }}
                >
                  {" "}
                  Environments
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li style={{ margin: "10px" }}> NodeJS </li>
                  <li style={{ margin: "10px" }}> Jupyter Notebook </li>
                  <li style={{ margin: "10px" }}> Vim </li>
                </ul>
              </div>

              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  marginTop: "30px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  OS / LOW LEVEL
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li style={{ margin: "10px" }}>
                    {" "}
                    Some experience with Linux / Unix{" "}
                  </li>
                  <li style={{ margin: "10px" }}>
                    {" "}
                    Some experience with Syscalls{" "}
                  </li>
                  <li style={{ margin: "10px" }}>
                    {" "}
                    Some experience with CLI & scripts{" "}
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          <div className="spacer"></div>

          <div
            className="gio-container-3"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              border: "none",
              padding: "3px",
              width: `${ProjectCardWidth}`,
            }}
          >
            <h4
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                borderRadius: "20px",
                fontWeight: "900",
                fontSize: `${FontSizeLarge}`,
                fontWeight: "900",
              }}
            >
              {" "}
              Web Dev Experience{" "}
            </h4>

            <ul
              style={{
                background: "rgba(0,0,0,.8)",
                width: "95%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="end-div3"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  FRONTEND TECHNOLOGIES / FRAMEWORKS
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li>ReactJS</li>
                  <li>RubyonRails</li>
                  <li>Standard Markdown</li>
                </ul>
              </div>

              <br></br>

              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3
                  style={{
                    color: "#AEBEBEff",
                    fontWeight: "900",
                    backgroundColor: "rgba(0, 0, 0, 0.56)",
                  }}
                >
                  {" "}
                  BACKEND TECHNOLOGIES
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Springboot</li>
                  <li>Postman</li>
                </ul>
              </div>

              <br />

              <div
                className="end-div3"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <h3 style={{ color: "#AEBEBEff", fontWeight: "900" }}>
                  {" "}
                  DATABASE / CLOUD SERVICES
                </h3>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li>MongoDB / MySQL</li>
                  <li>H2Hibernate</li>
                  <li>AWS</li>
                  <li>Cloud Functions</li>
                </ul>
              </div>
            </ul>
          </div>

          <div className="spacer"></div>

          <div
            className="gio-container-4"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              border: "none",
              padding: "3px",
              width: `${ProjectCardWidth}`,
            }}
          >
            <h4
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                borderRadius: "20px",
                fontWeight: "900",
                fontSize: `${FontSizeLarge}`,
                fontWeight: "900",
              }}
            >
              CODE/PACKAGE
              <br /> MANAGMMENT
            </h4>

            <ul
              style={{
                background: "rgba(0,0,0,.8)",
                width: "95%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <li>Git: Atlassian / Github</li>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ol
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li>Git add, commit , push cycle</li>
                  <label></label>

                  <li> Jira / Github sprint & agile experience </li>
                  <label></label>

                  <li>Devops CI/CD cycle experience</li>
                </ol>
              </div>
            </ul>
            <ul
              style={{
                background: "rgba(0,0,0,.8)",
                width: "95%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <br />

              <div
                className="end-div3"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <li>Package / Bundlers</li>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ol
                  style={{
                    margin: "10px",
                    color: "white",
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                    borderRadius: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <li>NPM</li>
                  <label></label>

                  <li>Webpack </li>
                </ol>
              </div>
            </ul>

            <ul
              style={{
                background: "rgba(0,0,0,.8)",
                width: "95%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="end-div2"
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: `${ProjectCardWidth}`,
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
                <li style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}>
                  Containerizing
                </li>
              </div>

              <div style={{ width: `${HeaderCardWidth}` }}>
                <ul>
                  <li
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    Docker practice
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          <div className="spacer"></div>

          <div
            className="gio-container"
            style={{
              borderRadius: "20px",
              background: "black",
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              border: "none",
              padding: "20px",
              width: `${ProjectCardWidth}`,
            }}
          >
            <h4
              style={{
                background: "white",
                borderRadius: "5px",
                fontWeight: "900",
                fontSize: `${FontSizeLarge}`,
                color: "orange",
                padding: "20px",
                border: "3px solid orange",
              }}
            >
              Code orange internship
              <br />( DFS ){" "}
            </h4>

            <div
              className="gio-container"
              style={{
                padding: "5px",
                background: "black",
                width: `${HeaderCardWidth}`,
                border: "none",
              }}
            >
              <p
                style={{
                  color: "orange",
                  background: "black",
                  fontSize: `${FontSizeMedium}`,
                  textAlign: "left",
                  border: "1px solid white",
                }}
              >
                Tech-savvy juniors and seniors were hired by. Discover and are
                being paid to work on and help develop new Discover technologies
                in the areas of mobile-software development, web-application
                coding, blue-tooth development and person-to-person payment
                systems
              </p>

              <p
                style={{
                  color: "orange",
                  background: "black",
                  fontSize: `${FontSizeMedium}`,
                  textAlign: "left",
                  border: "1px solid white",
                }}
              >
                During the summer of 2020 I participated in the code_orange
                program at NIU. I was on a team tasked with developing a Full
                -stack website to host a user statistics dash board for the
                program. Unfortunately the program was cancelled due to
                COVID-19. Since DFS is a financial company we were not allowed
                to save any work from this internship and all I have to show is
                a few articles referring to it. ( link bellow )
              </p>
            </div>

            <div
              className="gio-container"
              style={{
                border: "none",
                background: "none",
                width: "100%",
              }}
            >
              <div
                style={{
                  flexDirection:"row",
                  width: "100%",
                }}
              >
                <a
                  style={{ borderRadius: "20px" }}
                  href="https://newsroom.niu.edu/2018/11/01/niu-discover-mark-launch-of-on-campus-code_orange-program/"
                >
                  <h4
                    style={{
                      color: "white",
                      backgroundColor: "orange",
                      padding: "10px",
                      margin: "10px",
                      fontSize: `${FontSizeMedium}`,
                    }}
                  >
                    <i> NIU code_orange program description </i>
                  </h4>
                </a>

                <img
                  style={{
                    padding: "0px",
                    margin: "0px",
                    borderRadius: "50px",
                    width:"50%",
                    height:"auto"
                  }}
                  src={co}
                  alt={"Code Orange logo"}
                />

                <a href="https://www.mystateline.com/news/niu-students-get-real-world-experience-developing-technology-for-discover/1495852453/">
                  <h4
                    style={{
                      color: "white",
                      backgroundColor: "orange",
                      padding: "10px",
                      margin: "10px",
                      fontSize: `${FontSizeMedium}`,
                    }}
                  >
                    <i> Article about the program </i>
                  </h4>
                </a>

                
              </div>

            </div>
          </div>

          <div className="spacer"></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: `${ProjectCardWidth}`,
            }}
          >
            <div
              className="gio-container-2"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                border: "none",
                padding: "3px",
                width: `${ProjectCardWidth}`,
              }}
            >
              <h4
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  borderRadius: "20px",
                  fontWeight: "900",
                  fontSize: `${FontSizeLarge}`,
                  fontWeight: "900",
                }}
              >
                Additional Experience{" "}
              </h4>

              <ul
                style={{
                  background: "rgba(0,0,0,.8)",
                  width: "95%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="end-div2"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>Advanced Programming:</li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li>
                      Some experience in <br />
                      Multi-Threading,
                      <br />
                      Concurrent programs,
                      <br />
                      Andriod applications,
                      <br /> Semaphores/Deadlock solutions.
                    </li>
                  </ul>
                </div>

                <div
                  className="end-div3"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>MLH - MajorLeaugeHacking</li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li>
                      Attended 5 hackathons.
                      <br /> Joined 1 international team ( India )
                    </li>
                  </ul>
                </div>

                <div
                  className="end-div2"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}>
                    Game Dev
                  </li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li style={{ margin: "10px" }}>
                      Some experience in
                      <br /> game design & development in Unity,
                      <br /> OpenGL Api,
                      <br /> and Google Cardboard VR{" "}
                    </li>
                  </ul>
                </div>

                <div
                  className="end-div3"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>Theoretical Experience</li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li style={{ marginTop: "10px" }}>
                      Some experience with
                      <br /> Chomsky's Hierarchy/PDA/TuringMachines,
                      <br /> Normalization & FloatingPointError,
                      <br /> Efficiency & Runtime
                    </li>
                  </ul>
                </div>

                <div
                  className="end-div3"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>Paradigms</li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li>
                      {" "}
                      Experience in Imperative: OOP, Scripts, Procedural
                      Languages{" "}
                    </li>
                    <li> Experience in Declarative: Database </li>
                  </ul>
                </div>

                <div
                  className="end-div2"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>Crypto - Web3</li>
                </div>

                <div style={{ width: `${HeaderCardWidth}` }}>
                  <ul
                    style={{
                      margin: "10px",
                      color: "white",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px",
                      borderRadius: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <li>
                      {" "}
                      Understanding of theoretical basics of blockchain
                      technology{" "}
                    </li>
                  </ul>
                </div>

                <div
                  className="end-div3"
                  style={{
                    background: "black",
                    marginBottom: "20px",
                    width: `${ProjectCardWidth}`,
                    boxShadow:
                      "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                  }}
                >
                  <li>More to come...</li>
                </div>
                <ul></ul>
              </ul>
              <br />
            </div>
          </div>

          <div className="spacer"></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              margin:"0px",
              padding:"0px"
            }}
          >
            <div
              className="gio-container-4"
              style={{
                width: "100%",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                border: "none",
                padding: "20px",
                margin:"0px"
              }}
            >
              <h4
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  borderRadius: "20px",
                  fontWeight: "900",
                  fontSize: `${FontSizeLarge}`,
                  fontWeight: "900",
                }}
              >
                Minor in mathematics{" "}
              </h4>

              <ul
                style={{
                  background: "black",
                  marginBottom: "20px",
                  width: "100%",
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 6px 2px 1px 0px, rgba(25, 129, 159, 0.9) -6px -2px 1px 0px ",
                }}
              >
               
                <div className="end-div3">
                  <a style={{ color: "white" }} id="minor">
                    <li>GENERAL MATH EXPERIENCE</li>
                  </a>
                </div>
                <ol style={{ marginTop: "10px" }}>
                  <li>Calculus 1, 2, & 3</li>
                  <label></label>

                  <li>Discrete mathematics, Statistics, Model building</li>
                  <label></label>

                  <li>Numerical Linear Algebra & Linear Programming </li>
                </ol>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HeaderAbout;
