//Basic imports
import React, { Component , useState, useEffect } from 'react';
import alpha from '../../icons/CStracklogo/alpha.PNG'
import Coiblib  from '../../icons/CStracklogo/Coiblib.PNG'
import mash from '../../icons/CStracklogo/mash.PNG'
import OpenSea from '../../icons/CStracklogo/OpenSea.PNG'
import poly from '../../icons/CStracklogo/poly.PNG' 

//Custom IMPORTS: 



const Cstrack = () => {
    
    const [windowSize , setWindowSize] = useState(window.innerWidth)
    let divSection1;
    let divSection2;

    if (windowSize < 600) {
        divSection1 = <div className='end-div3' style={{ padding: '5px' }}><img src={OpenSea} width='50%' height='auto' style={{ padding: '5px' }} /><img src={poly} width='50%' height='auto' style={{ padding: '5px' }} /></div>;
        divSection2 = <div className='end-div' style={{ padding: '5px' }}><img src={alpha} width='33%' height='auto' style={{ padding: '5px' }} /><img src={Coiblib} width='33%' height='auto' style={{ padding: '5px' }} /><img src={mash} width='33%' height='auto' style={{ padding: '5px' }} /></div>;
    }
    else {
        divSection1 = <div className='end-div3' style={{ padding: '10px' }}><img src={OpenSea} width='20%' height='auto' style={{ padding: '10px' }} /><img src={poly} width='20%' height='auto' style={{ padding: '10px' }} /></div>;
        divSection2 = <div className='end-div' style={{ padding: '10px' }}><img src={alpha} width='15%' height='auto' style={{ padding: '10px' }} /><img src={Coiblib} width='15%' height='auto' style={{ padding: '10px' }} /><img src={mash} width='15%' height='auto' style={{ padding: '10px' }} /></div>;
    }

    useEffect(() => {
        setWindowSize(window.innerWidth)
    },[windowSize]);

    return (

        <div
            className="CStrack">

            <div  className='gio-container-2'>
            <h2 style={{
              color: '#E0012Aff',
              fontSize: 'large',
              backgroundColor: '#101730ff'
            }}>  Traditional Stock & Crypto Market Analysis </h2>
            <h4> API's provided by </h4>
           
            </div>

            {divSection1}
            {divSection2}
            
             <div  className='gio-container-2'>
           
            <h4> Instantly compare the most important financial information & trends all on one page </h4>
           
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