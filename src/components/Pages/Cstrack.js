//Basic imports
import React, { Component , useState} from 'react';

//Custom IMPORTS: 

//Menu import
import MenuButton from '../Buttons/MenuButton/MenuButton.js';
import '../PageCss/homepage.css';
import '../PageCss/Cstrack.css';
import '../../icons/gio.jpg';
import HeaderSection from'../HeaderSections/HeaderSection.js'
import { ReactComponent as Bitcoinsymb} from '../../icons/Bitcoin.svg';

//Custom Package import?








const Cstrack = () => {

    
    return (

        <div className="CStrack">
            <h1> Traditional Stock & Crypto  <br></br><br></br> Market Analysis </h1>
            <h2> Instantly compare the most important financial information all on one page </h2>
            <p> Bitcoin, Market Index, and NFT tracker are a great instant look into market health </p>
            
            <div className="Outter">
                <div className="Inner">
                    <iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" className="I">
                    </iframe>
                </div>
                    <div className="Bottom">
                        <a href="https://coinlib.io" target="_blank" className="Tag">Cryptocurrency Prices
                        </a>
                        &nbsp;by Coinlib
                    </div>
            </div>

          
          
  
           
            
  
          
          


        </div>
        
        
    )

};



export default Cstrack;