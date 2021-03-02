//Standard imports 
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

//Custom imports 
import MagicButton from './components/Buttons/MagicButton/magicButton.js'
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';

//Menu import
import MenuButton from './components/Buttons/MenuButton/MenuButton.js';


// Main component 
function App() {



  //Send to DOM 
  return (
    
    <HashRouter basename='/'> {/*Hash routing  */ }

    {/* ALL CODE HERE WILL RENDER ON EVERY PAGE */ }
    <div>

      {/*Custom Menu button */ }
      <MenuButton/>


     <ul>{/*Link pages */ }

      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>

     </ul>

     <hr />{/*Route URL */ }
     <Route exact path="/" component={HomePage} />
     <Route path="/about" component={AboutPage} />

    </div>

   </HashRouter>

  );

  //Endof APP() 
}


export default App;//Export the component to index.js 
