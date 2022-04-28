//Basic imports
import React, { Component, useState , useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css'



const Spotify = () => {


    const [baseUrl, setBaseUrl] = useState("https://api.spotify.com/v1/tracks/7bSpQNOg9UsW530DuXM3X5");
    const [data, setData] = useState([]);
    const [currentStatus, setStatus] = useState(false);

    useEffect(() => {
        fetch(baseUrl,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer edbde34c4fcb4f88953ee62930f06f37`, 
                },
                
            })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error("Response Error!"));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((json) => {
        try {
          setData(json.results);
          setStatus(true);
        }
        catch
        {
          return Promise.reject(new Error(`State Error!: Data: ${data} , Connection:${currentStatus}`));
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }, [baseUrl]);


    return (

        <div >
          
            <div className="gio-container-1" style={{ padding: '20px' }}>
                
                
            <div className="end-div2" style={{ padding: '20px' }}>
                <h2 style={{ color:'#AEBEBEff'}}> TOP SONGS:</h2>
                <iframe style={{borderRadius:'12px'}} 
                 src="https://open.spotify.com/embed/track/5oWulmQXArBhQOTYGhlwN3?utm_source=generator" 
                 width="80%" 
                 height="380" 
                 frameBorder="0" 
                 allowFullScreen="true" 
                 allow="autoplay; 
                 clipboard-write; 
                 encrypted-media; 
                 fullscreen; 
                 picture-in-picture">

                 </iframe>
                 </div>
                 
                 <div className="end-div3" style={{ padding: '20px' }}>
                 <iframe 
                 style={{ borderRadius:'12px' }}
                 src="https://open.spotify.com/embed/album/5xtr1Tn1O99aB6K8HuTfGh?utm_source=generator" 
                 width="100%" 
                 height="90"
                 
                 frameBorder="0" 
                 allowFullScreen="" 
                 allow="autoplay; 
                 clipboard-write; 
                 encrypted-media; 
                 fullscreen; 
                 picture-in-picture">

                 </iframe>
                 </div>
                <div className="gio-container" style={{ padding: '20px' }}>
                <h2 style={{ color:'#AEBEBEff'}}> Other Tracks </h2>

                <iframe 
                style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/artist/7bSpQNOg9UsW530DuXM3X5?utm_source=generator" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen="true" 
                allow="autoplay; 
                clipboard-write; 
                encrypted-media; 
                fullscreen; 
                picture-in-picture"
                />
                </div>

                <div className="gio-container" style={{ padding: '20px' }}>
                    <button id="togglePlay">Toggle Play</button>
                </div>
         
            </div>
        </div>

    )

};



export default Spotify;