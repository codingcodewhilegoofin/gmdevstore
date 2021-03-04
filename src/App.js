//Standard imports 
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

//Custom imports 
import MagicButton from './components/Buttons/MagicButton/magicButton.js'
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import './App.css';

//Menu import
import MenuButton from './components/Buttons/MenuButton/MenuButton.js';
import { ReactComponent as DownloadSymbol} from './icons/download.svg';
// Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>
import { ReactComponent as LinkedinSymbol} from './icons/linkedin.svg';



// Main component 
function App() {



  //Send to DOM 
  return (
    
    <HashRouter basename='/'> {/*Hash routing  */ }

    {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */ }
    <div className ="App">

      {/*Custom Menu button */ }
      
     {/*Link pages */ }
     <Navbar>

      <NavItem icon={<DownloadSymbol/>}/> 
      <NavItem icon={<LinkedinSymbol/>}/> 
      <NavItem icon="👀"/>
      <NavItem icon="🧠"/>

      <ul> 

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

      </ul>

     </Navbar>

     

     <hr />{/*Route URL */ }
     <Route exact path="/" component={HomePage} />
     <Route path="/about" component={AboutPage} />

    </div>

   </HashRouter>

  );

  //Endof APP() 
}

function Navbar(props) {

  
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> 
      {props.children}
      </ul>
    </nav>
  );
}


function NavItem(props) {

  
  return (
    <li className="nav-item"> 
    <div className="icon-bg">
      <a href="#" className="icon-button">
        {props.icon}
        

        
      </a>
      </div>
    </li>
  );
}



export default App;//Export the component to index.js 
