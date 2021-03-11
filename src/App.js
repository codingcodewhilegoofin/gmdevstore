//Standard imports 
import React, { Component , useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';


//Custom imports 
import MagicButton from './components/Buttons/MagicButton/magicButton.js'
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import './App.css';

//Menu import
import MenuButton from './components/Buttons/MenuButton/MenuButton.js';

//Icons
import { ReactComponent as DownloadSymbol} from './icons/download.svg';
// Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>
import { ReactComponent as LinkedinSymbol} from './icons/linkedin.svg';
import { ReactComponent as GithubSymbol} from './icons/github.svg';


// Main component 
function App() {

  var githublink = 'https://github.com/codingcodewhilegoofin';
  var linkedinlink = 'https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/';


  //Send to DOM 
  return (
    
    <HashRouter basename='/'> {/*Hash routing  */ }

    {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */ }
    <div className ="App">

      {/*Custom Menu button */ }
      
     {/*Link pages */ }
     <Navbar>

  
      <Link className="nav-item" to="/github">
        <NavItem icon={<GithubSymbol/>} />
      </Link>

      <Link className="nav-item" to="/linkedin">
        <NavItem icon={<LinkedinSymbol/>}/> 
      </Link>

      <Link className="nav-item" to="/">
        <NavItem icon="💻" />
      </Link>

      <Link className="nav-item" to="/about">
        <NavItem icon="🧠" />
      </Link>
    
      <Link className="nav-item" to="/contact">
        <NavItem icon="✉️" />
      </Link>
    
      <Link className="nav-item" to="/download">
        <NavItem icon={<DownloadSymbol/>}/> 
      </Link>
      
      {/*
      <NavItem icon={<DownloadSymbol/>}>
        
        <Dropdown/>

      </NavItem>
      */}
      
     </Navbar>

     <UnderNav>
      
      
      


      <Link className="nav-item" to="/github">
        <UnderText> Github </UnderText>
      </Link>

      <Link className="nav-item" to="/linkedin">
        <UnderText> Linkedin </UnderText> 
      </Link>

      <Link className="nav-item" to="/">
        <UnderText> Home </UnderText>
      </Link>

      <Link className="nav-item" to="/about">
        <UnderText> Skills & Information </UnderText>
      </Link>
    
      <Link className="nav-item" to="/contact">
        <UnderText> Contact </UnderText>
      </Link>
    
      <Link className="nav-item" to="/download">
        <UnderText> Download Resume </UnderText> 
      </Link>

     </UnderNav>
     

     

     <hr />{/*Route URL */ }
     <Route exact path="/" component={HomePage} />
     <Route path="/about" component={AboutPage} />
     <Route path='/github' component={() => { 
     window.location.href = githublink; 
     return null;
     }}/>
     <Route path='/linkedin' component={() => { 
     window.location.href = linkedinlink; 
     return null;
     }}/>

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

  //    value function            default = false
  const[open, setOpen] = useState(false);
  
  return (
    <li className="nav-item"> 
    <div className="icon-bg">
      <a href="#" className="icon-button" onClick={ () => setOpen(!open)}>
        {props.icon}
      </a>
      </div>
      {open && props.children}
    </li>
  );
}

function Dropdown() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu ==='main'} unmountOnExit timeout={500} classNmaes="menu-primary" onEnter={calcHeight}>
        
        <div className="menu">

        <DropdownItem> Hello </DropdownItem>
        <DropdownItem
          leftIcon={<DownloadSymbol/>}
          rightIcon={<DownloadSymbol/>}
          goToMenu="settings">
        </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu ==='settings'} unmountOnExit timeout={500} classNmaes="menu-secondary">
        
        <div className="menu">

        <DropdownItem> menu2 </DropdownItem>
        <DropdownItem goToMenu="main"> Hello </DropdownItem>
     
     
        </div>
      </CSSTransition>
    </div>
  );
}

function UnderNav(props) {

  
  return (
    <nav className="navbar-2">
      <ul className="navbar-nav"> 
        <li className="nav-item-li">
          {props.children}
        </li>
      </ul>
    </nav>
  );
}

function UnderText(props) {

  
  return (
   
    <h6 className="navbar-nav-under-text">
      {props.children}
    </h6>
    
    
  );
}


export default App;//Export the component to index.js 
