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
    //let date = tempDate.getFullYear() + '-0' + (tempDate.getMonth() + 1) + '-0' + (tempDate.getDate() - 1);
    let currentYear = tempDate.getFullYear();
    //console.log(date);

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    //Stocks
    const [responseStatus, setResponseStatus] = useState(false);
    const [polygonResponse, setPolygonResponse] = useState([]);
    const [userInput, setUserInput] = useState(['GOOGL', '2022-09-08', 'true']);

    //Crypto
    const [responseStatusCrypto, setResponseStatusCrypto] = useState(false);
    const [polygonCrypto, setPolygonCrypto] = useState([]);
    const [cryptoInput, setCryptoInput] = useState(['X:BTCUSD', 'true']);

    //NFT
    const [responseStatusNft, setResponseStatusNft] = useState(false);
    const [polygonNft, setPolygonNft] = useState([]);
    const [nftInput, setNftInput] = useState(['cryptopunks']);

    //Gov
    const [responseStatusGov, setResponseStatusGov] = useState(false);
    const [polygonGov, setPolygonGov] = useState([]);



    //https://gmapps-api-v1.gmdev.workers.dev/api/Stock/GOOGL/2022-08-23/true
    const gmaapiPolyUrl = 'https://gmdevapi.com/api/Stock';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Crypto/:cryptoticker/:adjusted
    const gmaapiPolyCryptoUrl = 'https://gmdevapi.com/api/Crypto';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Nft/cryptopunks
    const gmaapiNftUrl = 'https://gmdevapi.com/api/Nft';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Gov
    const gmaapiGovUrl = 'https://gmdevapi.com/api/Gov';



    let divSection1;
    let divSection2;
    let inputBox;
    let inputBoxOne;
    let inputBoxTwo;
    let inputBoxThree;
    let inputBoxNft = '100%';
    let stockMarket;
    let pictureResize; 

    if (windowSize[0] < 700) {
        stockMarket = 'column';
        pictureResize = '80%';
    }
    else {
        stockMarket = 'row';
        pictureResize = '66.33%';
    }

    if (windowSize[0] < 600) {
        divSection1 = <><img src={OpenSea} width='80%' height='auto' style={{margin:'5px'  }} /><img src={poly} width='80%' height='auto' style={{ margin:'5px' }} /></>;
        divSection2 = <><img src={Coiblib} width='80%' height='auto' style={{margin:'5px'  }} /><img src={GovApi} width='80%' height='auto' style={{margin:'5px'  }} /></>;
        inputBox = '100%';
        inputBoxOne = '45%';
        inputBoxTwo = '40%';
        inputBoxThree = '45%';
    }
    else {
        divSection1 = <div className="gio-container " style={{ margin: '0px', width: '100%', alignItems: 'center', alignSelf: 'center', border: 'none', background: 'none' }}><div className='end-div3' style={{ padding: '1px', width: '80%', background: 'none', border: 'none' }}><img src={OpenSea} width='25%' height='100%' style={{ margin: '5px' }} /><img src={poly} width='25%' height='auto' style={{ margin: '5px' }} /><img src={Coiblib} width='25%' height='auto' style={{ margin: '5px' }} /><img src={GovApi} width='25%' height='auto' style={{ margin: '5px' }} /></div></div>;
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
            const response = await fetch((gmaapiPolyUrl + `/${userInput[0]}` + `/${userInput[1]}` + `/${userInput[2]}`));
            if (!response.ok) {
                console.log("Error in Polygon API response");
               
                setResponseStatus(false);
            }

            const apiResponse = await response.json();
            return apiResponse;
        }

        const cryptoSearch = async (cryptoInput) => {

            const responseCrypto = await fetch((gmaapiPolyCryptoUrl + `/${cryptoInput[0]}` + `/${cryptoInput[1]}`));

            if (!responseCrypto.ok) {
                console.log("Error in Polygon  Crypto API response");
                
                setResponseStatusCrypto(false);
            }

            const apiResponseCrypto = await responseCrypto.json();
            return apiResponseCrypto;
        }

        const nftSearch = async (nftInput) => {

            const responseNft = await fetch((gmaapiNftUrl + `/${nftInput[0]}`));

            if (!responseNft.ok) {
                console.log("Error in Polygon  Crypto API response");
                
                setResponseStatusNft(false);
            }

            const apiResponseNft = await responseNft.json();
            return apiResponseNft;
        }

        const govSearch = async () => {

            const responseGov = await fetch((gmaapiGovUrl));

            if (!responseGov.ok) {
                console.log("Error in gov API response");
               
                setResponseStatusGov(false);
            }

            const apiResponseGov = await responseGov.json();
            console.log(apiResponseGov);
            return apiResponseGov;
        }

        stockSearch(userInput).then(data => {
            setPolygonResponse(data);
            setResponseStatus(true);
        }).catch(error => {
            setResponseStatus(false);
            console.log(error);
            console.log("Error in Polygon API response");
        })

        cryptoSearch(cryptoInput).then(data => {
            setPolygonCrypto(data);
            setResponseStatusCrypto(true);
        }).catch(error => {
            setResponseStatusCrypto(false);
            console.log(error);
            console.log("Error in Polygon  Crypto API response");
        })

        nftSearch(nftInput).then(data => {
            setPolygonNft(data);
            setResponseStatusNft(true);
        }).catch(error => {
            setResponseStatusNft(false);
            console.log(error);
            console.log("Error in Polygon  Nft API response");
        })

        govSearch().then(data => {
            setPolygonGov(data);
            setResponseStatusGov(true);
        }).catch(error => {
            setResponseStatusGov(false);
        })

        return () => {

        }
    }, [userInput, cryptoInput, nftInput]);


    const changeStocks = (e) => {
        e.preventDefault();
        if ((document.getElementById("Sticker").value || document.getElementById("Sdate").value || document.getElementById("Sboolean").value) === null) {
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

    const changeNft = (e) => {
        e.preventDefault();
        const nftInputArray = [document.getElementById("nft-collection").value];
        setNftInput(nftInputArray);
        window.scrollBy(0, -900);
    }

    return (
        <div
            className="CStrack">

            <div className='gio-container-2' style={{ margin: '10px' }}>
                <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: 'x-large',
                    
                }}>
                    Financial Market health comparison from
                </h2>
                <a style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    backgroundColor: 'transparent'
                }} href="https://gmdevapi.com">
                    gmdevapi.com
                </a>
                <h4 style={{ padding: '10px', lineSpacing: '5px', borderRadius: '10px', backgroundColor: '#19819Fff' }}>
                    3rd party API's provided by
                </h4>
            </div>

            <div className='gio-container' style={{ marginBottom: '30px', background: 'none', width: `${pictureResize}`, backgroundColor: '#19819Fff', boxShadow: 'rgba(25, 129, 159, 1) 0px 20px 30px -10px' }}>
                {divSection1}
                {divSection2}
            </div>


            <div className='gio-container' style={{ marginBottom: '10px', background: 'none', width: '66.33%',  }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    🔥 🗑️            📉<br />
                    Current financial information & trends based on important indicators such as stocks, cryptocurrencies, and debt. 
                    Some financial information not available on weekends.
                    <br />🚀          ✨ 🌕
                </h4>

            </div>

            {!responseStatus ? <h2>Loading... </h2> :
                <div className='gio-container' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset', marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ background: 'none', }}>
                        <b>
                            STOCK MARKET {currentYear}
                        </b>
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Ticker: {polygonResponse.symbol}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none', color: 'green' }}>
                        High for {polygonResponse.from} : {polygonResponse.high}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none', color: 'red' }}>
                        Low for {polygonResponse.from} : {polygonResponse.low}
                    </h4>

                </div>
            }

            {!responseStatusCrypto ? <h2>Loading... </h2> :
                <div className='gio-container' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset', marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ background: 'none' }}>
                        <b>
                            CRYPTO MARKET {currentYear}
                        </b>
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Ticker: {polygonCrypto.ticker}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none', color: 'green' }}>
                        High : {polygonCrypto.results[0].h}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none', color: 'red' }}>
                        Low : {polygonCrypto.results[0].l}
                    </h4>

                </div>
            }

            {!responseStatusNft ? <h2>Loading ... </h2> :
                <div className='gio-container' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset', marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        <img src={polygonNft.collection.image_url} width='100%' height='auto' />
                    </h4>

                    <div className='gio-container' style={{ marginBottom: '10px', width: '90%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }} >
                        <h4 style={{ background: 'none' }}>
                            <b>
                                NFT COLLECTION {currentYear}
                            </b>
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Collection Name:<br /> {polygonNft.collection.name}
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none', color: 'lightblue' }}>
                            Twitter Name:<br /> {polygonNft.collection.twitter_username}
                        </h4>
                    </div>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        <img src={polygonNft.collection.banner_image_url} width='100%' height='auto' />
                    </h4>

                    <h4 style={{ margin: '10px', backgroundColor: 'black', color: 'white' }}>
                        About: {polygonNft.collection.description}
                    </h4>

                    <div className='gio-container' style={{boxShadow: 'rgba(25, 129, 159, 0.4) -5px 5px, rgba(25, 129, 159, 0.3) -10px 10px, rgba(25, 129, 159, 0.2) -15px 15px, rgba(25, 129, 159, 0.1) -20px 20px, rgba(25, 129, 159, 0.05) -25px 25px', marginBottom: '50px', width: '90%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }} >

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Volume: {polygonNft.collection.stats.total_volume}
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Avg price : {polygonNft.collection.stats.average_price}
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Seven day change : {polygonNft.collection.stats.seven_day_change}
                        </h4>
                    </div>

                </div>
            }

            {!responseStatusGov ? <h2>Loading... </h2> :
                <div className='gio-container' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset', marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ background: 'none', color: 'red' }}>
                        <b>
                            USA DEBT
                        </b>
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none', color: 'red' }}>
                        Total Debt {currentYear - 1}: {polygonGov.data[0].debt_outstanding_amt}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Total Debt {currentYear - 10}: {polygonGov.data[9].debt_outstanding_amt}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Debt increase {currentYear - 10} - {currentYear - 1}:  {parseInt(polygonGov.data[0].debt_outstanding_amt - polygonGov.data[9].debt_outstanding_amt)}
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

            <div className='gio-container' style={{ margin: '10px', background: 'none' }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Nft market health
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    GMAApi endpoint:  <br />https://gmapps-api-v1.gmdev.workers.dev <br />/api/Nft/collection
                </h4>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    Please enter:  nft collection name
                </h4>

                <form onSubmit={changeNft} >
                    <div className='gio-container' style={{ width: `${inputBox}`, background: 'none', flexDirection: 'row', padding: '5px' }}>
                        <input required style={{ color: "#AEBEBEff", width: `${inputBoxNft}` }} type="text" id="nft-collection" />
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
                    }} type="submit" value="Change NFT" />

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