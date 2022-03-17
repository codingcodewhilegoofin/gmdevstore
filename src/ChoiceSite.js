//Standard imports 
import React, { Component , useState} from 'react';

import './choice.css';


const ChoiceSite = (props) => {
    var dependency = false;
    var vanilla = false;
    var toggle = false;
    
    
    

    const [siteVersion, setSiteVersion] = useState("");
    

    function vanillaClick(e){
        e.preventDefault();
        if(dependency == false)
        {
            setSiteVersion("vanilla");
            toggle = !vanilla;
            vanilla = toggle;
        }
    }

    function dependencyClick(e){
        e.preventDefault();
        if(vanilla == false)
        {
            toggle = !dependency;
            dependency = toggle;
            setSiteVersion("dependency");
        }
    }

    props.func(siteVersion);

  return (
    <div className="choice">
        <h1> Welcome to Giomoscato.com
        </h1>
        <h3> I have built 2 different web experiences!
        </h3>
        <h3> 
            <em> Dependency+ version</em> is a web experience to display my personal portfolio in a emerging technology fashion.
             <br/>I hope to build this web experience with VR, AR , D3.js, and other unique libraries. Its purpose is to demonstrate
             my ability to work with different dependencies and API's.
        </h3>
        <h3> 
            <em> Vanilla version</em> demonstrates my pure/vanilla <code>HTML , CSS , JS , JSX</code> skills with the 
            react framework. <br/>Other than the basic 'react-' libraries all other components and code are made by me.
            I emphasized that there are no component / css / or other fancy libraries used here.
        </h3>
        <h2> Overall both site versions are meant to demonstrate my web/dev skills.
             If you have a question, critisim, or concern with my code feel free to 
             <a href="https://github.com/codingcodewhilegoofin"> reach out to me.</a>
        </h2>
        <div>
        
            <button 
                onClick={vanillaClick }
            >
                GioMoscato.com Dependency+ Version 
            </button>
        
            <button  
                onClick={dependencyClick}
            >
                GioMoscato.com Vanilla Version
            </button>
        </div>
        <br/>
    </div>
  );
}
export default ChoiceSite;
