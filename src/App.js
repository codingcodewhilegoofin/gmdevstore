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




function App() {

  const [siteVersion, setSiteVersion] = useState("");
  //Add drawer to hide return button 
  
  const pull_data = (data) => {
    setSiteVersion(data);
  }

  //onClick={() =>  setSiteVersion("depedency")} style={{fontSize:'20px'}}
  //<Button variant="outlined" color="error">Error</Button>
  return (
    <div>
      { ( siteVersion === "vanilla") ? <div style={{ padding:'5px', backgroundColor:'#242A36',textAlign:'center'}}> <DrawerMenu/> </div> : <ChoiceSite func={pull_data}/>  }
      { ( siteVersion === "vanilla") ? <NewSite/> : <OldSite/> }
    </div>
    
  );
}
export default App;//Export the component to index.js 
