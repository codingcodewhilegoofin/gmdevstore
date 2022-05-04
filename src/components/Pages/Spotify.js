//Basic imports
import React, { Component, useState, useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css'

const Spotify = () => {

  const [baseUrl, setBaseUrl] = useState("https://accounts.spotify.com/api/token");
  const [spotifyArtists, setSpotifyArtists] = useState("https://api.spotify.com/v1/artists/7bSpQNOg9UsW530DuXM3X5");
  const [token, setToken] = useState([]);
  const [spotifyResonse, setspotifyResonse] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  const [currentStatus2, setStatus2] = useState(false);

  const client_id = 'a2e2c898d4cc403cbd5804821c0268cc';
  const client_secret = '8c41dce7a0ca4b9a89aa78f570f0e74c';
 

  useEffect(() => {
      fetch(baseUrl,
      {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => {

        if (!response.ok) {
          return Promise.reject(new Error("Spotify Token Request Error"));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log("First Fetch " + err);
      })
      .then((json) => {
        try {
          console.log("Current token after first fetch: " + json.access_token);
          console.log(": " + json.token_type);
          console.log(": " + json.expires_in);
          setToken(json.access_token);
          setStatus(true);
          console.log("Fetch 2 Requesting data with token: " + json.access_token);
          return fetch(spotifyArtists,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${json.access_token}` ,
              'Content-Type': 'application/json'
            }})
        }
        catch
        {
          return Promise.reject(new Error(`State Error!: Data: ${token} , Connection:${currentStatus}`));
        }
      })
      .then((response) => {

        if (!response.ok) {
          return Promise.reject(new Error("Spotify Data Request with token Error" + response.status));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log("Second Fetch" + err);
      })
      .then((json) => {
        try {
          console.log("After data request: " + json)
          console.log("Token after request" + token);
          setspotifyResonse(json);
          setStatus2(true);
        }
        catch
        {
          return Promise.reject(new Error(`State Error2 !: Data: ${spotifyResonse} , Connection2:${currentStatus2}`));
        }
      })
      .catch((err) => {
        console.log("After 2nd Fetch Error" + err);
      })

  }, [baseUrl, spotifyArtists]);


  return (

    <div >

      <div className="gio-container-1" style={{ padding: '20px' }}>

        <h1 style={{ color: '#AEBEBEff' }}> Spotify API</h1>
        <ul style={{ color: '#AEBEBEff' }}>
        <li>I first registered my website and used the client_secret
        credientials OAuth method to verify it for token recieving</li>
        <li>I then use a fetch request to ask Spotify API for a 
          auth token
        </li>
        <li> Once I have the token I used it to make another series
          of get requests with it
        </li>
        <li> Then I simply display this data by going through
          its nested data
        </li>
        </ul>

        {!currentStatus2 ? <h2>Loading... </h2> : <ul style={{ color: '#AEBEBEff' }}>
          <li> My artists name: {spotifyResonse.name}</li>
          <li>{spotifyResonse.external_urls.spotify}</li>
          <li> Account type: {spotifyResonse.type}</li>
          <li> Current Total Followers: {spotifyResonse.followers.total}</li>
        </ul>}

       

        <div className="end-div2" style={{ padding: '20px' }}>
          <h2 style={{ color: '#AEBEBEff' }}> TOP SONGS:</h2>
          <iframe style={{ borderRadius: '12px' }}
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
            style={{ borderRadius: '12px' }}
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
          <h2 style={{ color: '#AEBEBEff' }}> Other Tracks </h2>

          <iframe
            style={{ borderRadius: '12px' }}
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



      </div>
    </div>

  )

};



export default Spotify;