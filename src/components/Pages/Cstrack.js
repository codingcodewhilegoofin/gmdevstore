//Basic imports
import React, { Component , useState} from 'react';

//Custom IMPORTS: 

const Cstrack = () => {

    
    return (

        <div
            className="CStrack">
            <div  className='gio-container'>
            <h1> Traditional Stock & Crypto Market Analysis </h1>
            <h4> Instantly compare the most important financial information & trends all on one page </h4>
            <h4> Based on the concept of a fear index </h4>
            </div>
            <div 
                className="Outter">
                <div 
                    className="Inner">
                        <iframe 
                        src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" 
                        width="100%" 
                        height="536px" 
                        scrolling="auto" 
                        marginwidth="0" 
                        marginheight="0" 
                        frameborder="0"
                         border="0" 
                         className="I">
                        </iframe>
                </div>
                    <div className="Bottom">
                        <a 
                        href="https://coinlib.io" 
                        target="_blank" 
                        className="Tag">Cryptocurrency Prices
                        </a>
                        &nbsp;by Coinlib
                    </div>
            </div>
        </div>
    )
};
export default Cstrack;