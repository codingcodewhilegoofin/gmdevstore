//Standard imports 
import React, { Component, useState } from 'react';

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
import Spootify from '../src/icons/spootify.png';
import BoxIcon from '../src/icons/3Dicon.svg';
import SplineIcon from '../src/icons/Splinelogo.png';
import Coinlib  from '../src/icons/CStracklogo/Coiblib.PNG';

function App() {

  const [siteVersion, setSiteVersion] = useState("");
  const [startScene, setStartScene] = useState(true);

  const [modal, setModal] = useState(true);

    const modalHandle = () => {
        var x = document.getElementById("modalsection");
        if (x.style.display === "none") {
            x.style.display = "block";
            setModal(!modal);
        }
        else {
            x.style.display = "none";
        }
    }

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

    <div style={{ backgroundColor: "#1C2222" }}>
      <button onClick={modalHandle} class="modalbtn">⁝</button>
      <div id="modalsection" class="modal">
        <div class="modal-content">
          <button onClick={modalHandle} class="modalbtninner">❌</button>
          <h1>Menu</h1>

          <ul>
            <li className='listmodal'> <a href='/#/' className='listmodal'> Home 🏠</a> </li>
            <li className='listmodal'> <a href='/#/dependency+' className='listmodal'> 3JS / R3F <img style={{ backgroundColor: '#FFFFFF', padding: '2px' }} width='25px' height='25px'  src={BoxIcon}/></a> </li>
            <li className='listmodal'> <a href='/#/splinescene' className='listmodal'> 3DSplineScene <img style={{ backgroundColor: '#FFFFFF', padding: '1px', marginLeft: '10px',marginTop:'5px' }} width='100px' height='100px'  src={SplineIcon}/></a> </li>
            <li className='listmodal'> <a href='/#/projects'className='listmodal'> Projects </a> </li>
            <li className='listmodal'> <a href='/#/Spotify' className='listmodal'> Spotify <img width='25px' height='25px'  src={Spootify}/></a> </li>
            <li className='listmodal'> <a href='/#/cstrack' className='listmodal'> Stock&Crypto <img style={{ backgroundColor: '#FFFFFF', padding: '1px', marginLeft: '10px',marginTop:'5px' }} width='100px' height='100px'  src={Coinlib}/></a> </li>
            <li className='listmodal'> <a href='/#/Dsa' className='listmodal' > DSA </a> </li>
            <li className='listmodal'> <a href='/#/about' className='listmodal' > About </a> </li>
            <li className='listmodal'> <a href='/#/contact' className='listmodal' > Contact </a> </li>
          </ul>
        </div>
      </div>
      {(!startScene === true) ? <></> : <Start func={sceneChange} />}
      {((!startScene === false)) ? <></> : <ChoiceSite func={pull_data} />}
      {(!startScene === false) ? <></> : ((siteVersion === "vanilla") ? <NewSite /> : <OldSite />)}
    </div>

  );
}
export default App;//Export the component to index.js 
