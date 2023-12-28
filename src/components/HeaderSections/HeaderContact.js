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
        <a
          style={{
            cursor: "pointer",
            color: "white",
            fontWeight: "600",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(255, 255, 255, 0.9) 0px 7px 13px -3px, rgba(255, 255, 255, 0.9) 0px -3px 0px inset",
            fontSize: `${FontSizeLarge}`,
          }}
          href="https://linktr.ee/codedumpsterfire"
        >
          linktr.ee/codedumpsterfire
        </a>
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

              <br/>

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
    </div>
  );
}

export default HeaderContact;
