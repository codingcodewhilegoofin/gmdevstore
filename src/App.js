//Standard imports 
import React, { Component , useState} from 'react';

//MUI imports
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme, } from '@mui/material/styles';

// Local imports
import './App.css';
import OldSite from './OldSite.js';
import NewSite from './NewSite.js';
import ChoiceSite from './ChoiceSite.js';
import DrawerMenu from '../src/components/Drawer/DrawerMenu';
import Start from './Start';

function App() {

  const [siteVersion, setSiteVersion] = useState("");
  const [startScene, setStartScene] = useState(true);
  
  //Add drawer to hide return button 
  
  const pull_data = (data) => {
    setSiteVersion(data);
  }

  const sceneChange = (data) => {
    setStartScene(data);
  }

  let theme = false;

  //onClick={() =>  setSiteVersion("depedency")} style={{fontSize:'20px'}}
  //<Button variant="outlined" color="error">Error</Button>
  return (
   
    <div style={{backgroundColor:"#1C2222"}}>
      { ( !startScene  === true)    ? <></> : <Start func={sceneChange} />}
      { ( ( !startScene  === false)) ? <></> : <ChoiceSite func={pull_data}/>  }
      { ( !startScene  === false) ? <></> : (( siteVersion === "vanilla")   ? <NewSite/> : <OldSite/>) }
    </div>
    
  );
}
export default App;//Export the component to index.js 
