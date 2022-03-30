//Standard imports 
import React, { Component , useState} from 'react';

// Local imports
import './App.css';
import OldSite from './OldSite.js';
import NewSite from './NewSite.js';
import ChoiceSite from './ChoiceSite.js';

function App() {

  const [siteVersion, setSiteVersion] = useState("");
  
  const pull_data = (data) => {
    setSiteVersion(data);
  }

  return (
    <div>
     
      { ( siteVersion == "vanilla") ? <div><h2>Dependency + </h2><button  onClick={() =>  setSiteVersion("depedency")} style={{fontSize:'20px'}}>Back</button></div> : <ChoiceSite func={pull_data}/>  }
      { ( siteVersion == "vanilla") ? <NewSite/> : <OldSite/> }
    </div>
    
  );
}
export default App;//Export the component to index.js 
