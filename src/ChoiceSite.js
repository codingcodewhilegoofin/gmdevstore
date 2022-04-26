//Standard imports 
import React, { Component , useState, useEffect } from 'react';

import './choice.css';


const ChoiceSite = (props) => {
    var dependency = false;
    var vanilla = false;
    var toggle = false;
    
    const [siteVersion, setSiteVersion] = useState("");
    
    
    props.func(siteVersion);

  return (
    <div className="choicediv" style={{background:"rgb(36, 42, 54)" , textAlign:"center"}}>
          <h1
              style={{
                  color: "red",
                  backgroundColor: "black",
                  fontSize: "auto"
              }}>
              Welcome to Giomoscato.com
          </h1>
        <h3 style={{color:"white",
                  fontSize: "auto" }}> I have built 2 different web experiences!
        </h3>
        <h3 style={{color:"white",
                  fontSize: "auto" }}> 
            <em> Dependency+ version</em> is a web experience to display my personal portfolio in a emerging technology fashion.
             <br/>I hope to build this web experience with <code> WebVR/WebGL/ReactVR , three.js, D3.js,</code> and other unique libraries. Its purpose is to demonstrate
             my ability to work with different dependencies and API's.
        </h3>
        <h3 style={{color:"white",
                  fontSize: "auto" }}> 
            <em> Vanilla version</em> demonstrates my pure/vanilla <code>HTML , CSS , JS , JSX</code> skills with the 
            react framework. <br/>Other than the basic 'react-' libraries all other components and code are made by me.
            I emphasized that there are no component / css / or other fancy libraries used here.
        </h3>
        <h2 style={{color:"white",
                  fontSize: "auto" }}> Overall both site versions are meant to demonstrate my web/dev skills.
             If you have a question, critisim, or concern with my code feel free to 
             <a href="https://github.com/codingcodewhilegoofin"> reach out to me.</a>
        </h2>
        <div style={{background:"rgb(36, 42, 54)" , padding: "5px",
                  fontSize: "auto"}}>
        
            <button
                style={{color:'red'}} 
                onClick={() =>  setSiteVersion("vanilla")}
            >
                GioMoscato.com Dependency+ Version 
            </button>
        
        </div>
        <br/>
    </div>
  );
}
export default ChoiceSite;
