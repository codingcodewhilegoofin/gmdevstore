//Basic imports
import React, { Component, useState, useEffect } from 'react';
import alpha from '../../icons/CStracklogo/alpha.PNG'
import Coiblib from '../../icons/CStracklogo/Coiblib.PNG'
import mash from '../../icons/CStracklogo/mash.PNG'
import OpenSea from '../../icons/CStracklogo/OpenSea.PNG'
import poly from '../../icons/CStracklogo/poly.PNG'
import GovApi from '../../icons/govapi.png'

//Custom IMPORTS: 

const Cstrack = () => {

    let tempDate = new Date();
    let date = tempDate.getFullYear() + '-0' + (tempDate.getMonth() + 1) + '-' + (tempDate.getDate() - 1);
    let currentYear = tempDate.getFullYear();
    //console.log(date);

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    //Stocks
    const [responseStatus, setResponseStatus] = useState(false);
    const [polygonResponse, setPolygonResponse] = useState([]);
    const [userInput, setUserInput] = useState(['GOOGL', `${date}`, 'true']);

    //Crypto
    const [responseStatusCrypto, setResponseStatusCrypto] = useState(false);
    const [polygonCrypto, setPolygonCrypto] = useState([]);
    const [cryptoInput, setCryptoInput] = useState(['X:BTCUSD', 'true']);


    //https://gmapps-api-v1.gmdev.workers.dev/api/Stock/GOOGL/2022-08-23/true
    const gmaapiPolyUrl = 'https://gmapps-api-v1.gmdev.workers.dev/api/Stock';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Crypto/:cryptoticker/:adjusted
    const gmaapiPolyCryptoUrl = 'https://gmapps-api-v1.gmdev.workers.dev/api/Crypto';

    let divSection1;
    let divSection2;
    let inputBox;
    let inputBoxOne;
    let inputBoxTwo;
    let inputBoxThree;
    let stockMarket;

    if (windowSize[0] < 700) {
        stockMarket = 'column';
    }
    else {
        stockMarket = 'row';
    }

    if (windowSize[0] < 600) {
        divSection1 = <div className='end-div3' style={{ padding: '10px', margin: '10px' }}><img src={OpenSea} width='50%' height='auto' style={{ margin: '5px' }} /><img src={poly} width='50%' height='auto' style={{ margin: '5px' }} /></div>;
        divSection2 = <div className='end-div3' style={{ padding: '10px', margin: '10px' }}><img src={Coiblib} width='50%' height='auto' style={{ margin: '5px' }} /><img src={GovApi} width='50%' height='auto' style={{ margin: '5px' }} /></div>;
        inputBox = '100%';
        inputBoxOne = '45%';
        inputBoxTwo = '40%';
        inputBoxThree = '45%';
    }
    else {
        divSection1 = <div className="gio-container" style={{ margin: '30px' }}><div className='end-div3' style={{ padding: '1px', width: '60%', background: 'none', border: 'none' }}><img src={OpenSea} width='30%' height='100%' style={{ margin: '5px' }} /><img src={poly} width='30%' height='auto' style={{ margin: '5px' }} /><img src={Coiblib} width='30%' height='auto' style={{ margin: '5px' }} /><img src={GovApi} width='30%' height='auto' style={{ margin: '5px' }} /></div></div>;
        divSection2 = <></>;
        inputBox = '80%';
        inputBoxOne = '30%';
        inputBoxTwo = '60%';
        inputBoxThree = '30%';
    }

    useEffect(() => {

        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        //console.log(windowSize[0]);

        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [windowSize])


    useEffect(() => {

        const stockSearch = async (userInput) => {

            try {
                const response = await fetch((gmaapiPolyUrl + `/${userInput[0]}` + `/${userInput[1]}` + `/${userInput[2]}`));
                if (!response.ok) {
                    console.log("Error in Polygon API response");
                    setPolygonResponse({
                        symbol: 'error',
                    })
                }
               
                const apiResponse = await response.json();

                return apiResponse;

            } catch (error) {
                console.log(error);
            }
        }

        const cryptoSearch = async (cryptoInput) => {
            try {
              
                const responseCrypto = await fetch((gmaapiPolyCryptoUrl + `/${cryptoInput[0]}` + `/${cryptoInput[1]}`));

                if (!responseCrypto.ok) {
                    console.log("Error in Polygon  Crypto API response");
                    setPolygonResponse({
                        symbol: 'error',
                    })
                    setResponseStatusCrypto(false);
                }
                
                const apiResponseCrypto = await responseCrypto.json();
                return apiResponseCrypto;

            } catch (error) {
                console.log(error);
            }
        }

        stockSearch(userInput).then(data => {
            setPolygonResponse(data);
            setResponseStatus(true);
        })
        cryptoSearch(cryptoInput).then(data => {
            setPolygonCrypto(data);
            setResponseStatusCrypto(true);
        })
       

        return () => {

        }
    }, [userInput, cryptoInput]);


    const changeStocks = (e) => {
        e.preventDefault();
        if( (document.getElementById("Sticker").value || document.getElementById("Sdate").value || document.getElementById("Sboolean").value) === null ){
            alert("Please enter every field ya goof");
        }
        const userInputArray = [document.getElementById("Sticker").value, document.getElementById("Sdate").value, document.getElementById("Sboolean").value];
        setUserInput(userInputArray);
        window.scrollBy(0, -300);
    }

    const changeCryptoCurrency = (e) => {
        e.preventDefault();
        const cryptoInputArray = [document.getElementById("Cticker").value, document.getElementById("Cboolean").value];
        setCryptoInput(cryptoInputArray);
        window.scrollBy(0, -600);
    }

    return (

        <div
            className="CStrack">

            <div className='gio-container-2' style={{ margin: '10px' }}>
                <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: '#242a36'
                }}>  Market health comparison from the GMAApi </h2>
                <h4 style={{ padding: '10px', lineSpacing: '5px', borderRadius: '10px' }}> 3rd party API's provided by </h4>
            </div>

            {divSection1}
            {divSection2}


            <div className='gio-container' style={{ margin: '10px', background: 'none' }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    🔥 🗑️            📉<br />
                    Instantly compare the most important financial information & trends all on one page
                    <br />🚀          ✨ 🌕
                </h4>

            </div>

            {!responseStatus ? <h2>Loading... </h2> :
            <div className='gio-container' style={{ marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}` }}>
                
                <h4 style={{ background: 'none' }}>
                    STOCK MARKET {currentYear}
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Ticker: {polygonResponse.symbol}
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    High for {polygonResponse.from } : {polygonResponse.high }
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Low for {polygonResponse.from} : { polygonResponse.low }
                </h4>

            </div>
            }

            {!responseStatusCrypto ? <h2>Loading... </h2> :
            <div className='gio-container' style={{ marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}` }}>

                <h4 style={{ background: 'none' }}>
                    CRYPTO MARKET {currentYear}
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Ticker: {polygonCrypto.ticker}
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    High : {polygonCrypto.results[0].h}
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Low : {polygonCrypto.results[0].l}
                </h4>

            </div>
            }   

            <div className='gio-container' style={{ margin: '10px', background: 'none' }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Stock market health
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    GMAApi endpoint:  <br />https://gmapps-api-v1.gmdev.workers.dev<br />/api/Stock/ticker/date/boolean
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Please enter:  ticker , date, and T/F value
                </h4>

                <form onSubmit={changeStocks} >
                    <div className='gio-container' style={{ width: `${inputBox}`, background: 'none', flexDirection: 'row', padding: '5px' }}>

                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxOne}` }} type="text" id="Sticker" />
                        <label></label>
                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxTwo}`, }} type="date" id="Sdate" />
                        <label></label>
                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxThree}`, }} type="text" id="Sboolean" />
                    </div>


                    <input style={{
                        color: '#AEBEBEff',
                        borderRadius: '10px',
                        margin: '10px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        border: ' 1px solid white'
                    }} type="submit" value="Change Stock" />

                </form>



            </div>

            <div className='gio-container' style={{ margin: '10px', background: 'none' }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Crypto market health
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    GMAApi endpoint:  <br />https://gmapps-api-v1.gmdev.workers.dev/api/<br />Crypto/:cryptoticker/:adjusted
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Please enter:  ticker , and T/F value
                </h4>

                <form onSubmit={changeCryptoCurrency} >
                    <div className='gio-container' style={{ width: `${inputBox}`, background: 'none', flexDirection: 'row', padding: '5px' }}>

                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxTwo}` }} type="text" id="Cticker" />
                        <label></label>
                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxOne}`, }} type="text" id="Cboolean" />
                    </div>


                    <input style={{
                        color: '#AEBEBEff',
                        borderRadius: '10px',
                        margin: '10px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        border: ' 1px solid white'
                    }} type="submit" value="Change Coin" />

                </form>

            </div>

            <div className='gio-container' style={{ margin: '5px', background: 'none' }}>

                <div
                    className="Outter" style={{ width: '100%', }}>
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
        </div>
    )
};
export default Cstrack;