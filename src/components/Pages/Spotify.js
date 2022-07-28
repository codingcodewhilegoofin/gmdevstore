//Basic imports
import React, { Component, useState, useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css'

const Spotify = () => {

  const [spotifyArtists, setSpotifyArtists] = useState("");
  const [gmaaUrl, setgmaaUrl] = useState("https://us-central1-gmappsapi.cloudfunctions.net/gmaapi/v1/Spotify");
  const [spotifyResonse, setspotifyResonse] = useState([]);
  const [currentStatus2, setStatus2] = useState(false);
  const [gioDataToggle, setGioDataToggle] = useState(true);

  /**
   *  React class lifecycle methods 
   *  useEffect Hook:  
   *    componentDidMount, 
   *    componentDidUpdate, and 
   *    componentWillUnmount combined.
   * 
   *  By using this Hook, you tell React that your component needs to do something after render.
   *  
   *  By default, it runs both after the first render and after every update.
   * 
   *  Just like you can use the State Hook more than once, you can also use several effects. 
   *  This lets us separate unrelated logic into different effects.
   * 
   *  You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
   *  To do so, pass an array as an optional second argument to useEffect.
   *  React will re-run the effect even if just one of them is different.
   * 
   *  If you use this optimization, make sure the array includes all values from the component scope 
   *  (such as props and state) that CHANGE OVER TIME and that are used by the effect.
   * 
   *  Otherwise, your code will reference STALE values from previous renders!
   */
  useEffect(() => {

    async function getSpotifyAPI() {
      try {
        const response = await fetch((gmaaUrl + spotifyArtists));

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        console.log(response);
        
        const data =  await response.json();
        return data;

      } catch (error) {
        console.log("GetSpotifAPI() failed: " + error);
      }
    }

    getSpotifyAPI().catch(error => {
      console.log("Error" + error.message);
    });

    getSpotifyAPI().then(data => {
      setspotifyResonse(data);
      setStatus2(true);
    })


  }, [spotifyArtists]);


  const showData = () => {
    setGioDataToggle(!gioDataToggle);
  }

  const changeArtists = (e) => {
    e.preventDefault();
    if (document.getElementById('D').checked) {
      setSpotifyArtists(document.getElementById("D").value);
    }
    else if (document.getElementById('G').checked) {
      setSpotifyArtists(document.getElementById("G").value);
    }
    else if (document.getElementById('C').checked) {
      setSpotifyArtists(document.getElementById("C").value);
    }
    else if (document.getElementById('A').checked) {
      setSpotifyArtists(document.getElementById("A").value);
    }
    else if (document.getElementById('B').checked) {
      setSpotifyArtists(document.getElementById("B").value);
    }
    else if (document.getElementById('M').checked) {
      setSpotifyArtists(document.getElementById("M").value);
    }
    else {
      alert("No artist selected ")
    }
  }

  return (

    <div >
      <div className="gio-container-1" style={{ padding: '20px' }}>

        <h1 style={{ color: '#AEBEBEff', fontWeight: '900', border: '2px solid #AEBEBEff', margin: '10px' }}> Spotify API</h1>
        <ul style={{ color: '#AEBEBEff' }}>
          <li>I first registered my website and used the client_secret
            credientials OAuth method to verify it for token recieving</li>
          <label></label>
          <li>I then use a fetch request to ask Spotify API for a
            auth token
          </li>
          <label></label>
          <li> Once I have the token I used it to make another series
            of get requests with it
          </li>
          <label></label>
          <li> Then I simply display this data by going through
            its nested data
          </li>
        </ul>

        <div style={{ border: '1px solid #AEBEBEff', borderRadius: '5px', margin: '10px', backgroundColor: '#1B2524ff' }}>
          <h1 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: '#1B2524ff' }}> Live data</h1>
          <h1 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: '#1B2524ff' }}> From my GMApps API</h1>
          {!currentStatus2 ? <h2>Loading... </h2> : <><ul style={{ color: '#AEBEBEff', padding: '4px' }}>
            <li style={{ margin: '4px' }}> Artists name: {spotifyResonse.name}</li>
            <li style={{ margin: '4px' }}> Account type: {spotifyResonse.type}</li>
            <li style={{ margin: '4px' }}> Current Total Followers: {spotifyResonse.followers.total}</li> 
            <li style={{ margin: '4px' }}> Genres: {spotifyResonse.genres[0]} ,{spotifyResonse.genres[1]} ,{spotifyResonse.genres[2]}</li>
          </ul>
           <img style={{ marginBottom: '5px' }} src={spotifyResonse.images[0].url} height='auto' width='95%' /> 
          </>
          }
        </div>

        <form onSubmit={changeArtists} >
          <ul style={{ margin: '0px', alignItems: 'left' }}>

            <li>
              <input type="radio" id="D" name="fav_language" value="?id=5cj0lLjcoR7YOSnhnX0Po5" />
              <label style={{ color: '#AEBEBEff' }} for="html" >Doja Cat</label>
            </li>

            <li>
              <input type="radio" id="G" name="fav_language" value="?id=6PfSUFtkMVoDkx4MQkzOi3" />
              <label style={{ color: '#AEBEBEff' }} for="css" >100 Gecs</label>
            </li>

            <li>
              <input type="radio" id="C" name="fav_language" value="?id=56dO9zeHKuU5Gvfc2kxHNw" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Chevelle</label>
            </li>

            <li>
              <input type="radio" id="A" name="fav_language" value="?id=3hOdow4ZPmrby7Q1wfPLEy" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Aries</label>
            </li>

            <li>
              <input type="radio" id="B" name="fav_language" value="?id=3Ri4H12KFyu98LMjSoij5V" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Bad Omens</label>
            </li>

            <li>
              <input type="radio" id="M" name="fav_language" value="?id=7bSpQNOg9UsW530DuXM3X5" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Memes 2</label>
            </li>

          </ul>


          <input
            style={{
              color: '#AEBEBEff',
              borderRadius: '10px',
              margin: '10px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              border: ' 1px solid white'
            }} type="submit" value="Change artist">
          </input>
        </form>

        <form style={{ margin: '30px' }}>
          <label style={{ color: '#AEBEBEff' }}>Show my spotify data</label>
          <input style={{ backgroundColor: "red" }} onClick={showData} type="checkbox" name="gioBox"></input>
        </form>

        {gioDataToggle ? <></> :
          <div style={{ backgroundColor: '#101730ff', border: '1px solid #AEBEBEff', margin: '5px' }}>
            <h2 style={{ color: '#AEBEBEff', fontWeight: '900', margin: '2px' }}> MY TOP SONG</h2>
            <iframe style={{ border: '1px solid #AEBEBEff', marginBottom: '10px' }}
              src="https://open.spotify.com/embed/track/5oWulmQXArBhQOTYGhlwN3?utm_source=generator"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; 
                 clipboard-write; 
                 encrypted-media; 
                 fullscreen; 
                 picture-in-picture">

            </iframe>
          </div>
        }

        {gioDataToggle ? <></> :
          <div style={{ margin: '20px' }}>
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
        }

        {gioDataToggle ? <></> :
          <div className="gio-container" style={{ margin: '10px', backgroundColor: '#101730ff', }}>
            <h2 style={{ color: '#AEBEBEff', fontWeight: '900', margin: '2px' }}> MORE TRACKS</h2>

            <iframe
              style={{ borderRadius: '12px', padding: '5px' }}
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
        }

      </div>
    </div>
  )
};
export default Spotify;