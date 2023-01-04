//Standard imports 
import React, { Component, useState, useEffect } from 'react';

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
import Coinlib from '../src/icons/CStracklogo/Coiblib.PNG';



function App() {

  //console.log(window.location.href);
  //console.log(typeof(window.location.href));

  const [siteVersion, setSiteVersion] = useState("");
  const [startScene, setStartScene] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [modal, setModal] = useState(true);
  const [modalToggle, setModalToggle] = useState("modalbtn");
  const [modalbg, setModalbg] = useState("modalOff");

  const modalHandle = () => {
    var x = document.getElementById("modalsection");
    if (x.style.display === "none") {
      setModalToggle("modalbtnspecial");
      setModalbg("modalOn");
      window.scrollTo(0, 0);
      x.style.display = "block";
      setModal(!modal);
    }
    else {
      x.style.display = "none";
      setModalToggle("modalbtn");
      setModalbg("modalOff");
    }

  }

  const specialHanlde = () => {
    setStartScene(false);
  }

  const menuTurnOffScene = () => {
    setStartScene(true);
  }

  //Add drawer to hide return button 

  const pull_data = (data) => {
    setSiteVersion(data);
  }

  const sceneChange = (data) => {
    setStartScene(data);
  }

  const pull_data2 = (data) => {
    setStartScene(data);
    setSiteVersion("dependecy+");
  }

  let theme = false;

  /* let songChoice;

  if( Math.floor(Math.random() * 100) > 66 ){
    songChoice = SpookyMusic1;
  }
  else if (Math.floor(Math.random() * 100) > 33){
    songChoice = SpookyMusic2;
  }
  else{
    songChoice = SpookyMusic3;
  } */

  const loadingScreenSequence = () => {
    setLoadingScreen(true);
    setTimeout(() => { setLoadingScreen(false);}, 3000);
  }




  return (
    <div className={modalbg} style={{ /* backgroundColor: "#1C2222" */ backgroundColor: "white", textAlign: 'center', padding: '1px' }}>

      {loadingScreen ?

        <><div style={{ width: '100%', height: '100%', background: 'black'}}><h2 style={{ color: 'white', fontSize: 'xx-large'}}> Loading.... Scroll to fix resize bug </h2></div></>
        :
        <></>
      }

      <h3 style={{ color: 'black' }}>🎄 Jingle Bells , Batman smells  🦇</h3>

      {/*      <audio 
        src={songChoice}
        type="audio/ogg"
        controls="true"
        autoplay="true"
        loop="true"
        class="audio-1"
        style={{
          backgroundColor: "purple",
          border: "3px dashed orange",
          color: "red",
          padding: "5px",
          margin: "20px",
          borderRadius: "50px"
        }}
      /> */}

      <div className="end-div5" style={{ padding: '5px', width: '100%', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
        <button onClick={modalHandle} class={modalToggle}>☰</button>
      </div>

      <div id="modalsection" class="modal">
        <div class="modal-content">
          <button onClick={modalHandle} class="modalbtninner" style={{ textAlign: 'center', width: '33%', }}> ❄️ </button>
          <h2 style={{ color: 'white', fontSize: 'x-large', textALign: 'center', marginTop: '5px' }}> ☃️ Christmas time !</h2>
          <h1 className="modalTitle" style={{ textAlign: 'left', color: 'white' }}>Menu </h1>

          <div className="modalBox" style={{ textAlign: 'left' }}>
            <ul>
              <li onClick={()=>{menuTurnOffScene(); loadingScreenSequence();}} className='listmodal'> <a onClick={modalHandle} href='/#/' className='listmodal'> Home 🏠</a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/dependency+' className='listmodal'> 3JS / R3F <img style={{ backgroundColor: '#FFFFFF', padding: '2px' }} width='25px' height='25px' src={BoxIcon} /></a> </li>
              <li onClick={specialHanlde} className='listmodal'> <a onClick={modalHandle} className='listmodal'> 3DSplineScene <img style={{ backgroundColor: '#FFFFFF', padding: '1px', marginLeft: '10px', marginTop: '5px' }} width='100px' height='100px' src={SplineIcon} /></a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/projects' className='listmodal'> Projects </a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/Spotify' className='listmodal'> Spotify <img width='25px' height='25px' src={Spootify} /></a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/Dsa' className='listmodal' > DSA </a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/cstrack' className='listmodal'> Stock&Crypto <img style={{ backgroundColor: '#FFFFFF', padding: '1px', marginLeft: '10px', marginTop: '5px' }} width='100px' height='100px' src={Coinlib} /></a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/about' className='listmodal' > About </a> </li>
              <li onClick={menuTurnOffScene} className='listmodal'> <a onClick={modalHandle} href='/#/contact' className='listmodal' > Contact </a> </li>
            </ul>
          </div>

        </div>
      </div>

      {(startScene === true) ? <Start func={sceneChange} /> : <></>}
      {((startScene === false)) ? <></> : <ChoiceSite func={pull_data} func2={pull_data2} />}
      {(startScene === false) ? <></> : ((siteVersion === "vanilla") ? <NewSite /> : <OldSite />)}
    </div>


  );
}
export default App;//Export the component to index.js 
