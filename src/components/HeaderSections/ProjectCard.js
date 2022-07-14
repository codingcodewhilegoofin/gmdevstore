//Standard imports 
import React, { useState } from 'react';

const ProjectCard = (props) => {

    const [cardToggle, setCardToggle] = useState(true);
    const [toggleMenu, setToggleMenu] = useState();

    const menuHandle = () => {
        var x = document.getElementById("cardToggle");
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


    return (
        <>
            <div style={{
                backgroundColor: '#101730ff',
                
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>

                <div className="choicediv" style={{ backgroundColor: "#101730ff", textAlign: "center", width: "100%", border: "2px solid #025B79ff", borderRadius: "5px", }}>
                    <button
                        style={{
                            color: '#025B79ff',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontSize: 'smaller',

                        }}
                        onClick={menuHandle}>
                        {toggleMenu} {props.title}
                    </button>
                </div>

            </div>

            <div className="choicediv" style={{ background: "rgb(36, 42, 54)", textAlign: "center", width: "100%",  }}>

                <div id="cardToggle" className="choicediv" style={{ background: "#19819Fff", textAlign: "center", width: '100%', border: "2px solid #101730ff", borderRadius: "5px", }}>

                    <h1
                        style={{
                            color: "#AEBEBEff",
                            backgroundColor: "#025B79ff",
                            marginTop: "5px",
                            border: "2px solid #242a36 ",
                            borderRadius: "5px",
                            fontSize: '15px',
                            fontWeight: '900',
                            margin: '10px'
                        }}>
                        {props.subtitle}
                    </h1>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                        
                    }}>
                        {props.description}
                    </h3>

                   
                    
                    <h2 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
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
