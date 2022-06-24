//Standard imports 
import React, { Component , useState, useEffect } from 'react';

import './choice.css';


const ChoiceSite = (props) => {

    const [mainMenu, setMainMenu] = useState(true)

    const menuHandle = () => {
        var x = document.getElementById("mainmenu");
        if (x.style.display === "none") 
        {
            x.style.display = "block";
            setMainMenu(!mainMenu)
        }
        else 
        {
            x.style.display = "none";
        }
    }

    var dependency = false;
    var vanilla = false;
    var toggle = false;
    
    const [siteVersion, setSiteVersion] = useState("");
    
    
    props.func(siteVersion);

  return (
   <>
   <div className="choicediv" style={{backgroundColor:"#1C2222" , textAlign:"center", width:"20%", border:"1px solid #025B79ff"}}>
   <button
              style={{
                  color: '#025B79ff',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  fontSize: '10px',
              }}
              onClick={menuHandle}>
              Close/Open tab
          </button>
          </div>
    <div className="choicediv" style={{background:"rgb(36, 42, 54)" , textAlign:"center", width:"100%",}}>
        
    <div  id="mainmenu" className="choicediv" style={{background:"rgb(36, 42, 54)" , textAlign:"center", width:'100%',}}>
          
          <h1
              style={{
                  color: "#AEBEBEff",
                  backgroundColor: "#1B2524ff",
                  fontSize: "auto"
              }}>
              3D Version 
          </h1>
       
        <h3 style={{color:"#AEBEBEff",
                  fontSize: "auto" }}> 
            <em> 3D version</em> is a web experience to display my personal portfolio in a emerging technology fashion.
             <br/>I hope to build this web experience with <code style={{color:"#AEBEBEff"}}>Antd UI , three.js, react-three-fiber,</code> and other unique libraries. 
        </h3>
        <h3 style={{color:"#AEBEBEff",
                  fontSize: "auto" }}> 
            Its purpose is to demonstrate my ability to interface with different dependencies.
        </h3>
        <h3 style={{color:"#AEBEBEff",
                  fontSize: "auto" }}> 
            <em> Vanilla / Regular version</em> demonstrates my pure/vanilla <code style={{color:"#AEBEBEff"}}>HTML , CSS , JS , JSX</code> skills with the 
            react framework. <br/>Other than the essential 'react-' libraries all other components and code are made by me from scratch.
        </h3>
        <h2 style={{color:"#AEBEBEff",
                  fontSize: "auto" }}>  I emphasize that there are no component / css / or other fancy libraries used besides to make some essential API calls.
        </h2>

        <a style={{color:"#AEBEBEff"}} href="https://github.com/codingcodewhilegoofin"> Feel free to contact me</a>
        <div style={{background:"rgb(36, 42, 54)" , padding: "5px",
                  fontSize: "auto"}}>
        
            <button
                style={{
                    color:'#AEBEBEff',
                    backgroundColor: '#101730ff',
                    cursor: 'pointer',
                }} 
                onClick={() =>  setSiteVersion("vanilla")}
            >
                Go to 3D Version 
            </button>

            <button
                style={{
                    color:'#AEBEBEff',
                    backgroundColor: '#101730ff',
                    cursor: 'pointer',
                }} 
                onClick={() =>  setSiteVersion("dependency")}
            >
                Go to Regular/Vanilla Version
            </button>
        
        </div>
        <br/>
    </div>
    </div>
    </>
  );
}
export default ChoiceSite;
