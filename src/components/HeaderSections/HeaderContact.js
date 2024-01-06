import React, { Component, useState, useEffect } from "react";

import "../../App.css";
import { Button } from "../Buttons/Button.js";
import "../Buttons/Button.css";
import "../PageCss/HeaderSection.css";

import "../../icons/instagram.svg";
import "../../icons/gifs/Backgroundwave.gif";

function HeaderContact() {
  const [windowSize, setWindowSize] = useState(false);

  const [tutoringList, setTutoringList] = useState(false);
  const [webdevList, setWebdevList] = useState(false);
  const [tutoringForm, setTutoringForm] = useState(false);
  const [webdevForm, setWebdevForm] = useState(false);

  let twitterResize;
  let FontSizeLarge;
  let FontSizeMedium;
  let ProjectCardWidth;
  let HeaderCardWidth;
  let CardWidth;
  let cardOrientation;
  let cardWidthSupport;

  if (windowSize) {
    FontSizeLarge = "xx-large";
    FontSizeMedium = "small";
    ProjectCardWidth = "100%";
    HeaderCardWidth = "95%";
    twitterResize = "100%";
    cardOrientation = "column";
  } else {
    FontSizeLarge = "xx-large";
    FontSizeMedium = "large";
    ProjectCardWidth = "100%";
    HeaderCardWidth = "80%";
    twitterResize = "50%";
    cardOrientation = "row";
  }

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

  const copyClipboard = (id) => {
    // Get the text field
    var copyText = document.getElementById(id);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  };

  return (
    <div className="gio-main" style={{ padding: "2px", margin: "0px" }}>
      <div
        className="subheader8"
        style={{
          width: `${HeaderCardWidth}`,
          borderRadius: "5px",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          padding: "10px",
        }}
      >
        <h3 style={{ color: "white", fontWeight: "900", padding: "25px" }}>
          Free consultation for tutoring for limited time.
          <br />
          Free custom website development / design with full price consultation.
          <br />
          <br />
          <em style={{fontSize:"small"}}>*Limited to website builders or custom static sites*</em>
        </h3>

        <h3 style={{ color: "white", fontWeight: "900", padding: "5px" }}>
          Learn more here:
          <br />
          <a href="#"> Learn Computer Science </a>
          <br />
          <a href="#"> Service Descriptions </a>
        </h3>

        <div
          style={{
            width: "100%",
            cursor: "pointer",
            color: "white",
            fontWeight: "600",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 5px, rgba(255, 255, 255, 0.9) 0px 7px 13px -3px, rgba(255, 255, 255, 0.9) 0px -3px 0px inset",
            fontSize: `${FontSizeLarge}`,
          }}
        >
          <a
            href="https://linktr.ee/codedumpsterfire"
            style={{ color: "white" }}
          >
            linktr.ee/ <br />
            codedumpsterfire
          </a>
        </div>
      </div>

      <div className="spacer2"></div>

      <div
        className="gio-container-2"
        style={{
          border: "none",
          marginTop: "20px",
          background: "none",
          padding: "2px",
        }}
      >
        <div
          className="contactCT"
          style={{
            backgroundColor: "#161A1D",
            border: "1px solid white",
            paddingTop: "10px",
            margin: "0px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white", fontWeight: "900" }}> Social Media</h1>
          <p style={{ color: "white" }}>click link to copy</p>
          <form action="" style={{ padding: "10px" }}>
            <div
              style={{
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <label for="fname" style={{ color: "white", padding: "0px" }}>
                EMAIL:
              </label>

              <input
                style={{
                  color: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset",
                }}
                type="text"
                value="gmdevstore@protonmail.com"
                id="emailID"
                size="auto"
                onClick={() => {
                  copyClipboard("emailID");
                }}
              />
            </div>

            <div
              style={{
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <a
                href="https://www.instagram.com/codedumpsterfire"
                class="fa fa-instagram"
              ></a>
              <input
                style={{
                  color: "white",
                  borderRadius: "10x",
                  boxShadow:
                    "rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset",
                }}
                type="text"
                value="https://www.instagram.com/codedumpsterfire"
                id="instaID"
                size="auto"
                onClick={() => {
                  copyClipboard("instaID");
                }}
              />
            </div>

            <div
              style={{
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <a
                href="https://twitter.com/codetrashfire"
                class="fa fa-twitter"
              ></a>
              <input
                style={{
                  color: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset",
                }}
                type="text"
                value="https://twitter.com/codetrashfire"
                id="twitterID"
                size="auto"
                onClick={() => {
                  copyClipboard("twitterID");
                }}
              />
            </div>
          </form>
        </div>
      </div>

      <div
        className="gio-container-2"
        style={{
          border: "none",
          marginTop: "20px",
          background: "none",
          padding: "2px",
        }}
      >
        <div
          className="contactCT"
          style={{
            backgroundColor: "#161A1D",
            border: "1px solid white",
            paddingTop: "10px",
            margin: "0px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white", fontWeight: "900" }}>
            {" "}
            Developer Media
          </h1>
          <form action="" style={{ padding: "10px" }}>
            <div
              style={{
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <label for="fname" style={{ color: "white", padding: "0px" }}>
                Github
              </label>
              <input
                style={{
                  color: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset",
                }}
                type="text"
                value="https://github.com/codedumpsterfire"
                id="githubID"
                size="auto"
                onClick={() => {
                  copyClipboard("githubID");
                }}
              />

              <br />
              <br />

              <label for="fname" style={{ color: "white", padding: "0px" }}>
                Youtube
              </label>
              <input
                style={{
                  color: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset",
                }}
                type="text"
                value="@_codedumpsterfire"
                id="youtubeID"
                size="auto"
                onClick={() => {
                  copyClipboard("youtubeID");
                }}
              />
            </div>
          </form>
        </div>

        <div className="spacer2"></div>
        <div className="spacer2"></div>

        {/** Intake form  */}
        <div
          style={{
            opacity: "1",
            backdropFilter: "blur( 20px )",
          }}
        >
          <div
            className="end-div5"
            style={{
              width: `${cardWidthSupport}`,
              height: "100%",
              flexDirection: `${cardOrientation}`,
              textAlign: "center",
              alignItems: "center",
              opacity: ".9",
              background: "rgba(175, 191, 200, 0.2)",
              backdropFilter: "blur( 5px )",
            }}
          >
            <form
              action="https://formsubmit.co/gmdevstore@protonmail.com"
              method="POST"
              style={{
                padding: "0px",
                borderRadius: "0px",
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
                  Send your contact information and request details.
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
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  Choose a consultation type
                </label>

                <div
                  style={{
                    flexDirection: "column",
                    border: "1px solid white",
                    padding: "0px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      marginTop: "10px",
                      margin: "0px",
                    }}
                  >
                    Tutoring
                  </label>
                  <input
                    style={{
                      color: "white",
                      fontSize: "x-large",
                      fontWeight: "900",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      marginTop: "10px",
                      margin: "0px",
                      width: "20px",
                      height: "16px",
                    }}
                    type="checkbox"
                    name="Tutoring"
                    onClick={() => {
                      setTutoringForm(!tutoringForm);
                    }}
                  />

                  {tutoringForm ? (
                    <>
                      <ul
                        style={{
                          backgroundColor: "black",
                          flexDirection: "column",
                          padding: "10px",
                          margin: "5px",
                        }}
                      >
                        <li>
                          <label
                            style={{
                              color: "white",
                              fontSize: "large",
                              fontWeight: "900",
                            }}
                          >
                            CLOUD
                          </label>
                          <input
                            style={{
                              color: "white",
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
                            }}
                            type="checkbox"
                            name="Tutor_CloudServices"
                          />
                        </li>

                        <li>
                          <dl>
                            <dt>
                              <label
                                style={{
                                  color: "white",
                                  fontSize: "large",
                                  fontWeight: "900",
                                }}
                              >
                                C.S FUNDAMENTALS
                              </label>
                              <input
                                style={{
                                  color: "white",
                                  fontSize: "x-large",
                                  fontWeight: "900",
                                  backgroundColor: "transparent",
                                  border: "1px solid white",
                                  marginTop: "20px",
                                  margin: "0px",
                                  width: "20px",
                                  height: "16px",
                                }}
                                type="checkbox"
                                name="Tutor_CSfundamentals"
                              />
                            </dt>
                          </dl>
                        </li>

                        <li>
                          <dl>
                            <dt>
                              <label
                                style={{
                                  color: "white",
                                  fontSize: "large",
                                  fontWeight: "900",
                                }}
                              >
                                ADVANCED MATH
                              </label>
                              <input
                                style={{
                                  color: "white",
                                  fontSize: "x-large",
                                  fontWeight: "900",
                                  backgroundColor: "transparent",
                                  border: "1px solid white",
                                  marginTop: "20px",
                                  margin: "0px",
                                  width: "20px",
                                  height: "16px",
                                }}
                                type="checkbox"
                                name="Tutor_Math"
                              />
                            </dt>
                          </dl>
                        </li>

                        <li>
                          <dl>
                            <dt>
                              <label
                                style={{
                                  color: "white",
                                  fontSize: "large",
                                  fontWeight: "900",
                                  margin: "0px",
                                  padding: "0px",
                                }}
                              >
                                WEB DEVELOPMENT/DESIGN
                              </label>
                              <input
                                style={{
                                  color: "white",
                                  fontSize: "x-large",
                                  fontWeight: "900",
                                  backgroundColor: "transparent",
                                  border: "1px solid white",
                                  marginTop: "20px",
                                  margin: "0px",
                                  width: "30px",
                                  height: "16px",
                                }}
                                type="checkbox"
                                name="Tutor_Webdev&design"
                              />
                            </dt>
                          </dl>
                        </li>

                        <li>
                          <dl>
                            <dt>
                              <label
                                style={{
                                  color: "white",
                                  fontSize: "large",
                                  fontWeight: "900",
                                }}
                              >
                                EMBEDED/ELECTRONICS
                              </label>
                              <input
                                style={{
                                  color: "white",
                                  fontSize: "x-large",
                                  fontWeight: "900",
                                  backgroundColor: "transparent",
                                  border: "1px solid white",
                                  marginTop: "20px",
                                  margin: "0px",
                                  width: "20px",
                                  height: "16px",
                                }}
                                type="checkbox"
                                name="Tutor_embededSystems"
                              />
                            </dt>
                          </dl>
                        </li>

                        <li>
                          <dl>
                            <dt>
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
                                  fontSize: "x-large",
                                  fontWeight: "900",
                                  backgroundColor: "transparent",
                                  border: "1px solid white",
                                  marginTop: "20px",
                                  margin: "0px",
                                  width: "20px",
                                  height: "16px",
                                }}
                                type="checkbox"
                                name="Tutor_hacking"
                              />
                            </dt>
                          </dl>
                        </li>

                        <li>
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
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "20px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
                            }}
                            type="checkbox"
                            name="Tutor_videogames"
                          />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      marginTop: "10px",
                      margin: "0px",
                    }}
                  >
                    <br />
                    Web development/design
                  </label>
                  <input
                    style={{
                      color: "white",
                      fontSize: "x-large",
                      fontWeight: "900",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      marginTop: "10px",
                      margin: "0px",
                      width: "20px",
                      height: "16px",
                    }}
                    type="checkbox"
                    name="Webdev"
                    onClick={() => {
                      setWebdevForm(!webdevForm);
                    }}
                  />

                  {webdevForm ? (
                    <>
                      <ul
                        style={{
                          backgroundColor: "black",
                          flexDirection: "column",
                          padding: "10px",
                          margin: "5px",
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
                            CLOUD
                          </label>
                          <input
                            style={{
                              color: "white",
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
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
                            WEB/MOBILE
                          </label>
                          <input
                            style={{
                              color: "white",
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
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
                            SECURITY
                          </label>
                          <input
                            style={{
                              color: "white",
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
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
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
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
                            NETWORKING
                          </label>
                          <input
                            style={{
                              color: "white",
                              fontSize: "x-large",
                              fontWeight: "900",
                              backgroundColor: "transparent",
                              border: "1px solid white",
                              marginTop: "10px",
                              margin: "0px",
                              width: "20px",
                              height: "16px",
                            }}
                            type="checkbox"
                            name="Web_Networking"
                          />
                        </div>
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}

                  <label
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "900",
                      marginTop: "10px",
                      margin: "0px",
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
                    marginTop: "0px",
                    margin: "0px",
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
                  padding: "0px",
                  margin: "0px",
                }}
              >
                Best consultation <br />
                day & time for you
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
                  backgroundColor: "black",
                  border: "3px solid white",
                  marginTop: "20px",
                  marginBottom: "20px",
                  margin: "0px",
                  cursor: "pointer",
                }}
              >
                Click here to email form to <br /> gmdevstore@protonmail.com
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
    </div>
  );
}

export default HeaderContact;
