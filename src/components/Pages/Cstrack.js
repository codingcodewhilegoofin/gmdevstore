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

    //NFT
    const [responseStatusNft, setResponseStatusNft] = useState(false);
    const [polygonNft, setPolygonNft] = useState([]);
    const [nftInput, setNftInput] = useState(['cryptopunks']);


    //https://gmapps-api-v1.gmdev.workers.dev/api/Stock/GOOGL/2022-08-23/true
    const gmaapiPolyUrl = 'https://gmapps-api-v1.gmdev.workers.dev/api/Stock';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Crypto/:cryptoticker/:adjusted
    const gmaapiPolyCryptoUrl = 'https://gmapps-api-v1.gmdev.workers.dev/api/Crypto';
    //https://gmapps-api-v1.gmdev.workers.dev/api/Nft/cryptopunks
    const gmaapiNftUrl = 'https://gmapps-api-v1.gmdev.workers.dev/api/Nft';


    let divSection1;
    let divSection2;
    let inputBox;
    let inputBoxOne;
    let inputBoxTwo;
    let inputBoxThree;
    let inputBoxNft = '100%';
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
            const response = await fetch((gmaapiPolyUrl + `/${userInput[0]}` + `/${userInput[1]}` + `/${userInput[2]}`));
            if (!response.ok) {
                console.log("Error in Polygon API response");
                alert("Can not find stock , date, or value from API");
                setResponseStatus(false);
            }

            const apiResponse = await response.json();
            return apiResponse;
        }

        const cryptoSearch = async (cryptoInput) => {

            const responseCrypto = await fetch((gmaapiPolyCryptoUrl + `/${cryptoInput[0]}` + `/${cryptoInput[1]}`));

            if (!responseCrypto.ok) {
                console.log("Error in Polygon  Crypto API response");
                alert("Can not find crypto ticker , or value from API");
                setResponseStatusCrypto(false);
            }

            const apiResponseCrypto = await responseCrypto.json();
            return apiResponseCrypto;
        }

        const nftSearch = async (nftInput) => {

            const responseNft = await fetch((gmaapiNftUrl + `/${nftInput[0]}`));

            if (!responseNft.ok) {
                console.log("Error in Polygon  Crypto API response");
                alert("Can not find nft collection from API, bad response");
                setResponseStatusNft(false);
            }

            const apiResponseNft = await responseNft.json();
            return apiResponseNft;
        }



        stockSearch(userInput).then(data => {
            setPolygonResponse(data);
            setResponseStatus(true);
        }).catch(error => {
            setResponseStatus(false);
            console.log(error);
            console.log("Error in Polygon API response");
            alert("Can not find stock , date, or value from API");
            setPolygonResponse([]);
            setUserInput(['GOOGL', `${date}`, 'true']);
            window.location.reload();

        })

        cryptoSearch(cryptoInput).then(data => {
            setPolygonCrypto(data);
            setResponseStatusCrypto(true);
        }).catch(error => {
            setResponseStatusCrypto(false);
            console.log(error);
            console.log("Error in Polygon  Crypto API response");
            alert("Can not find crypto ticker , or value from API");
            setPolygonCrypto([]);
            setCryptoInput(['X:BTCUSD', 'true']);
            window.location.reload();
        })

        nftSearch(nftInput).then(data => {
            setPolygonNft(data);
            setResponseStatusNft(true);
        }).catch(error => {
            setResponseStatusNft(false);
            console.log(error);
            console.log("Error in Polygon  Nft API response");
            alert("Can not find collection from API");
            setPolygonNft([]);
            setNftInput(['cryptopunks']);
            window.location.reload();
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
                    fontSize: 'large',
                    backgroundColor: '#242a36'
                }}>  Market health comparison from the GMAApi </h2>
                <h4 style={{ padding: '10px', lineSpacing: '5px', borderRadius: '10px' }}> 3rd party API's provided by </h4>
            </div>

            {divSection1}
            {divSection2}


            <div className='gio-container' style={{ margin: '10px', background: 'none', width: '100%' }}>

                <h4 style={{ margin: '5px', background: 'none' }}>
                    🔥 🗑️            📉<br />
                    Instantly compare the most important financial information & trends all on one page
                    <br />🚀          ✨ 🌕
                </h4>

            </div>

            {!responseStatus ? <h2>Loading... </h2> :
                <div className='gio-container' style={{ marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ background: 'none' }}>
                        STOCK MARKET {currentYear}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Ticker: {polygonResponse.symbol}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        High for {polygonResponse.from} : {polygonResponse.high}
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        Low for {polygonResponse.from} : {polygonResponse.low}
                    </h4>

                </div>
            }

            {!responseStatusCrypto ? <h2>Loading... </h2> :
                <div className='gio-container' style={{ marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

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

            {!responseStatusNft ? <h2>Loading ... </h2> :
                <div className='gio-container' style={{ marginBottom: '10px', width: '95%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }}>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        <img src={polygonNft.collection.image_url} width='100%' height='auto' />
                    </h4>

                    <div className='gio-container' style={{ marginBottom: '10px', width: '90%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }} >
                        <h4 style={{ background: 'none' }}>
                            NFT COLLECTION {currentYear}
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Collection Name:<br/> {polygonNft.collection.name}
                        </h4>

                        <h4 style={{ margin: '5px', background: 'none' }}>
                            Twitter Name:<br/> {polygonNft.collection.twitter_username}
                        </h4>
                    </div>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        <img src={polygonNft.collection.banner_image_url} width='100%' height='auto' />
                    </h4>

                    <h4 style={{ margin: '5px', background: 'none' }}>
                        About: {polygonNft.collection.description}
                    </h4>

                    <div className='gio-container' style={{ marginBottom: '10px', width: '90%', background: 'none', flexDirection: `${stockMarket}`, flexWrap: 'wrap' }} >

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