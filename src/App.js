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
      <ChoiceSite func={pull_data}/>
      { ( siteVersion == "vanilla") ? <NewSite/> : <OldSite/> }
    </div>
    
  );
}
export default App;//Export the component to index.js 
