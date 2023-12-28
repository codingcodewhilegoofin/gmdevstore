//Standard imports
import React, { useState, useEffect } from "react";
import "../PageCss/chat.css";

const ProjectCard = (props) => {
  const [cardToggle, setCardToggle] = useState(true);
  const [toggleMenu, setToggleMenu] = useState("CLOSE");

  const menuHandle = () => {
    var x = document.getElementById(props.cardToggleID);
    if (x.style.display === "none") {
      x.style.display = "block";
      setCardToggle(!cardToggle);
      setToggleMenu("CLOSE");
    } else {
      x.style.display = "none";
      setToggleMenu("OPEN");
    }
  };

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
  let buttonWidth;

  if (windowSize) {
    FontSizeLarge = "60px";
    FontSizeMedium = "large";
    ProjectCardWidth = "100%";
    buttonWidth = "66%"
  } else {
    FontSizeLarge = "100px";
    FontSizeMedium = "x-large";
    ProjectCardWidth = "100%";
    buttonWidth = "95%"
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#101730ff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: `${buttonWidth}`,
          borderRadius: "20px",
          padding: "0px",
          margin: "10px",
          border: "none",
        }}
      >
        <div className="chatbotBar">
          <button
            style={{
              color: "#025B79ff",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: `${FontSizeMedium}`,
            }}
            onClick={menuHandle}
          >
            {toggleMenu} {props.title}
          </button>
        </div>
      </div>

      <div
        className="choicediv"
        style={{
          background: "rgb(36, 42, 54)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          id={props.cardToggleID}
          className="choicediv"
          style={{
            background: "#19819Fff",
            textAlign: "center",
            width: "100%",
            border: ".5px solid #101730ff",
            borderRadius: "5px",
          }}
        >
          <h1
            style={{
              color: "#AEBEBEff",
              backgroundColor: "#025B79ff",
              marginTop: "0px",
              border: "1px solid #242a36 ",
              borderRadius: "5px",
              fontSize: "x-large",
              fontWeight: "900",
              margin: "0px",
            }}
          >
            {props.subtitle}
          </h1>

          <h3
            style={{
              color: "#AEBEBEff",
              fontSize: `${FontSizeMedium}`,
              fontWeight: "900",
              textAlign:"left"
            }}
          >
            {props.description}
          </h3>

          <h2
            style={{
              color: "#AEBEBEff",
              fontSize: `${FontSizeMedium}`,
              fontWeight: "900",
              textAlign:"left"
            }}
          >
            {props.link}
          </h2>

          {props.children}
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
