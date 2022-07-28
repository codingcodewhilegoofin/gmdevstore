//Standard imports 
import React, { Component, useState, useEffect } from 'react';

import './choice.css';


const ChoiceSite = (props) => {

    const [mainMenu, setMainMenu] = useState(true);
    const [toggleMenu, setToggleMenu] = useState('CLOSE');

    const menuHandle = () => {
        var x = document.getElementById("mainmenu");

        if (x.style.display === "none") {
            x.style.display = "block";
            setMainMenu(!mainMenu);
            setToggleMenu('CLOSE');
        }
        else {
            x.style.display = "none";
            setToggleMenu('OPEN');
        }
    }

    var dependency = false;
    var vanilla = false;
    var toggle = false;

    const [siteVersion, setSiteVersion] = useState("");
    const [changeScene, setChangeScene] = useState();

    const van = () => {

        window.location.href = "/#/";
        window.location.reload();
    }
    const dep = () => {

        window.location.href = "/#/dependency+";
        window.location.reload();
    }


    props.func(siteVersion);
    props.func2(changeScene);

    return (
        <>
            <div style={{
                backgroundColor: '#101730ff',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>
                <div className="chatbotBar" >
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
                        <a>{toggleMenu}</a> 3D options
                    </button>
                </div>
            </div>
            <div className="choicediv" style={{ background: "rgb(36, 42, 54)", textAlign: "center", width: "100%", }}>

                <div id="mainmenu" className="choicediv" style={{ background: "rgb(36, 42, 54)", textAlign: "center", width: '100%', border: "10px solid #101730ff", }}>

                    <h1
                        style={{
                            color: "#AEBEBEff",
                            backgroundColor: "transparent",
                            fontSize: "auto",
                            fontWeight: '900',
                        }}>
                        3D Version
                    </h1>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        <em> 3D version</em> is a web experience to display my personal portfolio in a emerging technology fashion.
                        <br />I hope to build this web experience with <code style={{ color: "#AEBEBEff" }}>Antd UI , three.js, react-three-fiber,</code> and other unique libraries.
                    </h3>
                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        Its purpose is to demonstrate my ability to interface with different dependencies.
                    </h3>
                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        <em> Vanilla / Regular version</em> demonstrates my pure/vanilla <code style={{ color: "#AEBEBEff" }}>HTML , CSS , JS , JSX</code> skills with the
                        react framework. <br />Other than the essential 'react-' libraries all other components and code are made by me from scratch.
                    </h3>
                    <h2 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>  I emphasize that there are no component / css / or other fancy libraries used besides to make some essential API calls.
                    </h2>

                    <a style={{ color: "#AEBEBEff" }} href="https://github.com/codingcodewhilegoofin"> Feel free to contact me</a>
                    <div style={{
                        background: "transparent", padding: "1px",
                        fontSize: "auto"
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                            <button
                                style={{
                                    color: '#AEBEBEff',
                                    backgroundColor: '#1B2524ff',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    width: '50%',
                                    border: '1px solid #3F646Dff'
                                }}
                                onClick={dep}
                            >
                                3D MicroController API
                            </button>

                            <button
                                style={{
                                    color: '#AEBEBEff',
                                    backgroundColor: '#1B2524ff',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    width: '50%',
                                    border: '1px solid #3F646Dff'
                                }}
                                onClick={() => setChangeScene(true)}
                            >
                                3D HomePage
                            </button>


                        </div>

                        <button
                            style={{
                                color: '#AEBEBEff',
                                backgroundColor: '#1B2524ff',
                                cursor: 'pointer',
                                padding: '5px',
                                width: '50%',
                                border: '1px solid #3F646Dff'
                            }}
                            onClick={van}
                        >
                            Regular/Vanilla Version
                        </button>

                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}
export default ChoiceSite;
