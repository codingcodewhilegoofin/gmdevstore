import React, { Component, useState, useEffect } from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';
import '../../icons/instagram.svg';


function HeaderContact() {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  let twitterResize;
  let FontSizeLarge;
  let FontSizeMedium;
  let ProjectCardWidth;
  let HeaderCardWidth;
  let CardWidth;
  let cardOrientation;

  if (windowSize[0] < 500) {
    FontSizeLarge = '40px';
    FontSizeMedium = 'medium';
    ProjectCardWidth = '100%';
    HeaderCardWidth = '100%';
    twitterResize = '100%';
    cardOrientation = 'column';
  }
  else if (windowSize[0] < 600) {
    FontSizeLarge = '50px';
    FontSizeMedium = 'large';
    ProjectCardWidth = '100%';
    HeaderCardWidth = '100%';
    twitterResize = '100%';
    cardOrientation = 'column';
  }
  else if (windowSize[0] < 800) {
    FontSizeLarge = '50px';
    FontSizeMedium = 'large';
    ProjectCardWidth = '90%';
    HeaderCardWidth = '90%';
    twitterResize = '40%';
    cardOrientation = 'row';
  }
  else {
    FontSizeLarge = '50px';
    FontSizeMedium = 'x-large';
    ProjectCardWidth = '80%';
    HeaderCardWidth = '95%';
    twitterResize = '40%';
    cardOrientation = 'row';
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

  return (
    <div className='gio-main' >

      <div className='subheader8' style={{ width: `${HeaderCardWidth}`, borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', }}>

        <h1 style={{ color: "white", fontWeight: '900', fontSize: `${FontSizeLarge}` }}>HOW TO CONTACT ME</h1>
        <h4 style={{ color: "#AEBEBEff", fontSize: `${FontSizeMedium}` }}>Contact me anytime CST  </h4>
        <a style={{ color: "white", fontWeight: '600', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(255, 255, 255, 0.9) 0px 7px 13px -3px, rgba(255, 255, 255, 0.9) 0px -3px 0px inset', fontSize: `${FontSizeLarge}` }} href='https://linktr.ee/_GMDev'>linktr.ee/_GMDev</a>
      </div>


      <div className='spacer2'>
      </div>

      <div className='gio-container-2' style={{ border: 'none', margin: '1px', background: 'none' }}>
        <div className='contactCT' style={{ backgroundColor: "#161A1D", border: "1px solid white", paddingTop: "10px", margin: '5px', borderRadius: '10px' }}>
          <h1 style={{ color: "white", fontWeight: '900' }}> Social Media</h1>
          <form action="" >

            <label for="fname" style={{ color: "white", }} >EMAIL:</label>
            <br />

            <input style={{ color: "white", borderRadius: "10px", boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="Yupimaperson101@protonmail.com" id="myInput" size="80vw" />
            <br></br>
            <br />

            <a href="https://www.instagram.com/_gmdev/" class="fa fa-instagram"></a>
            <br />
            <input style={{ color: "white", borderRadius: "10px", boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://www.instagram.com/_gmdev/" id="myInput" size="auto" />
            <br></br>
            <br />

            <a href="https://www.linkedin.com/in/gio-m-4a19a71b1/" class="fa fa-linkedin"></a>
            <br />
            <input style={{ color: "white", borderRadius: "10px", boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://www.linkedin.com/in/gio-m-4a19a71b1/" id="myInput" size="auto" />
            <br></br>
            <br />

            <a href="https://twitter.com/_GmDev" class="fa fa-twitter"></a>
            <br />
            <input style={{ color: "white", borderRadius: "10px", boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://twitter.com/_GmDev" id="myInput" size="auto" />
            <br></br>
            <br />

          </form>
        </div>
      </div>

      <div className='spacer'>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div align="center" className="gio-container-special"  >
          <iframe width={`${twitterResize}`} height='500' srcdoc='<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just published Got a B.S in Computer Science was it worth it for me? <a href="https://t.co/QGXEsVV6Mk">https://t.co/QGXEsVV6Mk</a></p>&mdash; _GMDev (@_GmDev) <a href="https://twitter.com/_GmDev/status/1558184199412137985?ref_src=twsrc%5Etfw">August 12, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ' />
        </div>
      </div>

      <div className='spacer'>
      </div>



      <div className='spacer'>
      </div>

      <div className='gio-container-2' style={{ border: 'none', background: 'none' }}>
        <div className='contactCT' style={{ backgroundColor: "#161A1D", border: "1px solid white", borderRadius: '10px' }}>
          <h1 style={{ color: "white" }}> Developer Media </h1>
          <form action="">

            <label for="fname" style={{ color: "white" }} >Github:</label>
            <br />
            <input style={{ color: "white", borderRadius: '10px', boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://github.com/codingcodewhilegoofin/giowebsite/settings/pages" id="myInput" size="80vw" />
            <br></br>
            <br />

            <label for="pin" style={{ color: "white" }} >StackOF:</label>
            <br />
            <input style={{ color: "white", borderRadius: '10px', boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://stackoverflow.com/users/14115291/gmdev" id="myInput" size="auto" />
            <br></br>
            <br />

            <label for="pin" style={{ color: "white" }} >Devpost:</label>
            <br />
            <input style={{ color: "white", borderRadius: '10px', boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://devpost.com/codingcodewhilegoofin?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" id="myInput" size="auto" />
            <br></br>
            <br />

            <label for="fname" style={{ color: "white" }} >HackerRank:</label>
            <br />
            <input style={{ color: "white", borderRadius: '10px', boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://www.hackerrank.com/Yupimaperson101?hr_r=1" id="myInput" size="auto" />
            <br></br>
            <br />

            <label for="fname" style={{ color: "white" }} >BuyMeACoffe:</label>
            <br />
            <input style={{ color: "white", borderRadius: '10px', boxShadow: 'rgba(25, 129, 159, 1) 0px 2px 4px, rgba(25, 129, 159, .5) 0px 7px 13px -3px, rgba(25, 129, 159, 1) 0px 3px 0px inset' }} type="text" value="https://www.buymeacoffee.com/giomoscato101" id="myInput" size="auto" />
            <br></br>
            <br />

            <br />
          </form>
        </div>
      </div>

      <div className='spacer'>
      </div>

      <div align="center" className="gio-container-special" style={{ border: 'none', }}>
        <iframe className="instaframe" srcdoc='<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CXGIedXFar0/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width: 99vw; min-width:auto; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CXGIedXFar0/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CXGIedXFar0/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Gio Moscato (@giovannimoscato101)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>' />
      </div>

      <div className='spacer'>
      </div>

      <div className='gio-container' style={{ background: 'transparent', flexDirection: `${cardOrientation}`, padding: '2px', width: '100%', alignSelf: 'center', alignItems: 'center', border: 'none' }}>

        <div className="end-div" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', marginTop: '5px', }}>
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
            <h2 style={{
              color: 'white',
              background: 'rgba(0, 0, 0, 0.2)',
              fontWeight: '900',
              marginBottom: '5px',
              borderRadius: ' 50px'
            }}> My website technology pipeline / stack ? ✨ </h2>

            <ol style={{
              color: 'white',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: ' 25px'
            }}>
              <li> Bash/Linux/Windows( CLI/OS )</li>
              <li> VScode</li>
              <li> ReactJS </li>
              <li> NPM</li>
              <li> HTML/CSS/JS/JSX </li>
              <li> Githubpages </li>
              <li> GoogleDomains</li>
              <li> CloudFlare Pages</li>
              <li> Github </li>
            </ol>
            <h3 style={{
              color: 'white',
              fontWeight: '900',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: ' 50px'
            }}> Please consider collaborating
              <br /> or donating!
              <br></br>🔥

            </h3>
          </a>
        </div>

        <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '0px', width: '4%', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        </div>

        <div className="end-div2" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', marginTop: '15px', marginBottom: '100px', padding: '10px' }}>
          <a

            href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
          >
            <h2 style={{
              color: 'white',
              fontWeight: '900',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: ' 50px'
            }}>
              Having trouble viewing my website ? 💔
            </h2>

            <h3
              style={{
                color: 'white',
                background: 'rgba(0, 0, 0, 0.4)',
                fontWeight: '900',
                borderRadius: ' 50px'
              }}>
              Major Update! : New card format
              <br />
              If you find any mobile or platform specific issues, please let me know
              <br />
              <a href="https://www.buymeacoffee.com/giomoscato101">
                <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff" />
              </a>
            </h3>
          </a>
        </div>
      </div>

    </div >

  );
}





export default HeaderContact;