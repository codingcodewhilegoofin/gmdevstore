//Standard imports 
import React, { useState, useEffect } from 'react';
import '../OpenAi/Giobot/chat.css'

const ProjectCard = (props) => {

    const [cardToggle, setCardToggle] = useState(true);
    const [toggleMenu, setToggleMenu] = useState("CLOSE");

    const menuHandle = () => {
        var x = document.getElementById(props.cardToggleID);
        if (x.style.display === "none") {
            x.style.display = "block";
            setCardToggle(!cardToggle);
            setToggleMenu('CLOSE');
        }
        else {
            x.style.display = "none";
            setToggleMenu('OPEN');
        }
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {

        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        //console.log(windowSize[0]);

        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [windowSize])

    let FontSizeLarge;
    let FontSizeMedium;
    let ProjectCardWidth;

    if (windowSize[0] < 500) {
        FontSizeLarge = '60px';
        FontSizeMedium = 'medium';
        ProjectCardWidth = '90%';
    }
    else if (windowSize[0] < 600) {
        FontSizeLarge = '80px';
        FontSizeMedium = 'large';
        ProjectCardWidth = '70%';

    }
    else if (windowSize[0] < 800) {
        FontSizeLarge = '50px';
        FontSizeMedium = 'large';
        ProjectCardWidth = '55%';

    }
    else {
        FontSizeLarge = '100px';
        FontSizeMedium = 'x-large';
        ProjectCardWidth = '50%';

    }


    return (
        <>
            <div style={{
                backgroundColor: '#101730ff',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: `${ProjectCardWidth}`,
                borderRadius: '20px',
                marginBottom: '10px',
                border: 'none'

            }}>

                <div className="chatbotBar" >
                    <button
                        style={{
                            color: '#025B79ff',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontSize: `${FontSizeMedium}`,

                        }}
                        onClick={menuHandle}>
                        {toggleMenu} {props.title}
                    </button>
                </div>

            </div>

            <div className="choicediv" style={{ background: "rgb(36, 42, 54)", textAlign: "center", width: "100%", }}>

                <div id={props.cardToggleID} className="choicediv" style={{ background: "#19819Fff", textAlign: "center", width: '100%', border: ".5px solid #101730ff", borderRadius: "5px", }}>

                    <h1
                        style={{
                            color: "#AEBEBEff",
                            backgroundColor: "#025B79ff",
                            marginTop: "1px",
                            border: "1px solid #242a36 ",
                            borderRadius: "5px",
                            fontSize: `${FontSizeMedium}`,
                            fontWeight: '900',
                            margin: '2px'
                        }}>
                        {props.subtitle}
                    </h1>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: `${FontSizeMedium}`,
                        fontWeight: '900',

                    }}>
                        {props.description}
                    </h3>



                    <h2 style={{
                        color: "#AEBEBEff",
                        fontSize: `${FontSizeMedium}`,
                        fontWeight: '900',
                    }}>
                        {props.link}
                    </h2>

                    {props.children}

                </div>
            </div>
        </>
    );
}
export default ProjectCard;
