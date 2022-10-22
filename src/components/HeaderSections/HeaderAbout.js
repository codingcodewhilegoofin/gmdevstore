import React from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';

import '../../icons/gio.jpg';
import co from '../../icons/CO.png';


function HeaderAbout() {
  return (
    <div className='gio-main' style={{ borderRadius: '20px', marginTop: '20px' }} >

      <h2 style={{ color: 'white', fontSize: 'x-large' }}>Gio Moscato.com</h2>

      <div className='subheader7' style={{ borderRadius: '20px', marginTop: '20px' }} >
        <h4 style={{ color: 'white', fontSize: '50px', fontWeight: '900' }}>ABOUT ME</h4>

        <p style={{ color: 'white', background: 'rgba(0,0,0, 0.8)', margin: '10px', borderRadius: '20px' }}>
          Graduate BS of Computer Science from Northern Illinois University
        </p>

        <div className='spacer2'>
        </div>

        <p style={{ color: 'white', background: 'rgba(0,0,0, 0.8)', backgroundColor: '#242a36', margin: '10px', borderRadius: '20px' }}>
          Emphasis in Computational Software and
          <em><a href="#minor" style={{ color: '#19819Fff', padding: '5px' }}>
            minor in Mathematics
          </a></em>
        </p>

        <div className='spacer2'>
        </div>

        <p style={{ color: 'white', background: 'rgba(0,0,0, 0.8)', backgroundColor: '#242a36', margin: '10px', borderRadius: '20px' }}>
          I have a range of experience in all listed languages and technologies.
        </p>



        <div className='spacer2'>
        </div>

        <h4 style={{ color: 'white', fontSize: '50px', fontWeight: '900' }}> List of my current CS knowledge and skills</h4>
      </div>

      <div className='spacer'>
      </div>



      <div className='gio-container-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', }}>

        <h4 id="languages" name="languages" style={{ borderRadius: '20px', fontWeight: '900' }}>LANGUAGES & ENV's: </h4>


        <ul style={{ background: 'rgba(0,0,0,.8)' }}>
          <div className="end-div2" style={{ backgroundColor: 'black' }} >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: 'rgba(0, 0, 0, 0.56)' }}> Programming Languages - Compiled</h3>
          </div>

          <div >
            <li style={{ margin: '10px' }}>C / C++ / C# :</li>
            <ul>
              <li> My first programming language</li>
            </ul>

            <label></label>
            <li style={{ margin: '10px' }}>JAVA / LaTeX :
              <ul>

                <li>Some experience</li>
              </ul>
            </li>

            <br></br>
            <li style={{ margin: '10px' }}>ASSIST ASSEMBLY ( INTEL ):
              <ul>
                <li>Some experience </li>
              </ul>
            </li>

            <br></br>
            <li style={{ margin: '10px' }}>Julia:
              <ul>
                <li>Some experience </li>
              </ul>
            </li>

          </div>


          <div className="end-div3" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900' }}> Scripting Languages - Interpreted</h3>
          </div>

          <div  >
            <li style={{ margin: '10px' }}>JS, JSX, Python, Ruby, PHP, Bash, PShell:
              <ul>
                <li>Some experience</li>
              </ul>
            </li>

          </div>

          <br></br>

          <div className="end-div2" style={{ background: 'white' }} >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900' }}> Markdown Languages </h3>
          </div>

          <div  >
            <li style={{ margin: '10px' }}>HTML, CSS, Markdown:
              <ul>
                <li>Some experience</li>
              </ul>
            </li>
          </div>

          <br />

          <div className="end-div3" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900' }}> Declaritive / Domain Specific</h3>
          </div>

          <div  >
            <li style={{ margin: '10px' }}> MySQL / SQL:</li>
            <ul>
              <li>Some experience</li>
            </ul>
          </div>

          <br></br>

          <div className="end-div2" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: 'rgba(0, 0, 0, 0.56)' }}> Environments</h3>
          </div>

          <div  >
            <li style={{ margin: '10px' }}> NodeJS </li>
            <li style={{ margin: '10px' }}> Jupyter Notebook </li>
            <li style={{ margin: '10px' }}> Vim </li>

          </div>

          <div className="end-div2" style={{ background: 'white' }} >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900', }}> OS / LOW LEVEL</h3>
          </div>

          <div  >
            <li style={{ margin: '10px' }}> Some experience with Linux / Unix </li>
            <li style={{ margin: '10px' }}> Some experience with Syscalls </li>
            <li style={{ margin: '10px' }}> Some experience with CLI & scripts </li>

          </div>
        </ul>
      </div>

      <div className='spacer'>
      </div>

      <div className='gio-container-3' style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', }}>
        <h4 style={{ borderRadius: '20px', fontWeight: '900' }}> Web Dev Experience </h4>

        <ul style={{ background: 'rgba(0,0,0,.8)' }}>

          <div className="end-div3" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900' }}> FRONTEND TECHNOLOGIES / FRAMEWORKS</h3>
          </div>


          <ul style={{ margin: '10px' }}>
            <li>ReactJS</li>
            <li>RubyonRails</li>
            <li>Standard Markdown</li>
          </ul>


          <br></br>

          <div className="end-div2" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: 'rgba(0, 0, 0, 0.56)' }}> BACKEND TECHNOLOGIES</h3>
          </div>


          <ul style={{ margin: '10px' }}>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Springboot</li>
            <li>Postman</li>
          </ul>


          <br />

          <div className="end-div3" >
            <h3 style={{ color: '#AEBEBEff', fontWeight: '900' }}> DATABASE / CLOUD SERVICES</h3>
          </div>

          <ul style={{ margin: '10px' }}>
            <li>MongoDB</li>
            <li>H2Hibernate</li>
            <li>AWS</li>
            <li>PCF</li>
            <li>Cloud Functions</li>
          </ul>
        </ul>
      </div>

      <div className='spacer'>
      </div>

      <div className='gio-container-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', }}>
        <h4 style={{ borderRadius: '20px', fontWeight: '900' }}>CODE/PACKAGE MANAGMMENT</h4>
        <ul style={{ background: 'rgba(0,0,0,.8)' }}>
          <div className="end-div2" style={{ background: 'white' }} >
            <li >GITHUB/GIT:</li>
          </div>

          <ol style={{ margin: '10px' }}>
            <li>Git add, commit , push cycle</li>
            <label></label>

            <li>Branch management / Issue handling / AGILE methodology </li>
            <label></label>

            <li>Deployment with CI / CD</li>
          </ol>
        </ul>
        <ul style={{ background: 'rgba(0,0,0,.8)' }}>
          <br />

          <div className="end-div3" >
            <li>Package managers / Bundlers</li>
          </div>

          <ol style={{ margin: '10px' }}>
            <li>NPM</li>
            <label></label>

            <li>Webpack </li>
          </ol>
        </ul>

        <ul style={{ background: 'rgba(0,0,0,.8)' }}>
          <div className="end-div2" >
            <li style={{ backgroundColor: 'rgba(0, 0, 0, 0.56)' }}>DOCKER:</li>
          </div>

          <ul>
            <li style={{ margin: '10px' }}>Adding a dockerfile, to containerize a project</li>
          </ul>
        </ul>
      </div>

      <div className='spacer'>
      </div>

      <div className='gio-container' style={{ background: 'rgba(0,0,0,.8)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '10px', }}>

        <h4 style={{ backgroundColor: 'black' }}>What was code orange ( DFS ): </h4>

        <div className="gio-container" style={{ padding: '10px', }} >
          <p >
            Tech-savvy juniors and seniors were hired by.
            Discover and are being paid to work on and help develop new Discover technologies in the areas of mobile-software development,
            web-application coding, blue-tooth development and person-to-person payment systems
          </p>


          <p>
            During the summer of 2020 I participated in the code_orange program at NIU.
            I was on a team tasked with developing a Full -stack website to host a user statistics dash board for the program. Unfortunately the program was cancelled due to COVID-19.
            Since DFS is a financial company we were not allowed to save any work from this internship  and all I have to show is a few articles referring to it. ( link bellow )
          </p>
        </div>

        <div className="gio-container" style={{ border: 'none', }} >
          <a style={{ borderRadius: '20px', }} href="https://newsroom.niu.edu/2018/11/01/niu-discover-mark-launch-of-on-campus-code_orange-program/">
            <h4 style={{ color: 'white', backgroundColor: '#242a36', padding: '10px', margin: '10px' }}><i> NIU code_orange program description </i></h4>
          </a>


          <a href="https://www.mystateline.com/news/niu-students-get-real-world-experience-developing-technology-for-discover/1495852453/">

            <h4 style={{ color: 'white', backgroundColor: '#242a36', padding: '10px', margin: '10px' }}><i> Article about the program </i></h4>
          </a>

          <img style={{ color: 'white', backgroundColor: '#242a36', padding: '10px', margin: '10px' }} src={co} alt={"Code Orange logo"} />

        </div>
      </div>

      <div className='spacer'>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className='gio-container-2' style={{ width: '99%', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', }}>
          <h4 style={{ borderRadius: '20px', fontWeight: '900' }}>Additional Experience </h4>

          <ul style={{ background: 'rgba(0,0,0,.8)' }}>
            <div className="end-div2" style={{ background: 'white' }} >
              <li >Advanced Programming:</li>
            </div>


            <ul style={{ margin: '10px' }}>
              <li>Some experience in <br />Multi-Threading,<br />Concurrent programs,<br />
                Andriod applications,<br /> Semaphores/Deadlock solutions.</li>
            </ul>




            <div className="end-div3" >
              <li>MLH - MajorLeaugeHacking</li>
            </div>


            <ul style={{ margin: '10px' }}>
              <li>Attended 5 hackathons.<br /> Joined 1 international team ( India )</li>
            </ul>



            <div className="end-div2" >
              <li style={{ backgroundColor: 'rgba(0, 0, 0, 0.56)' }}>Game Dev</li>
            </div>


            <ul>
              <li style={{ margin: '10px' }}>Some experience in<br /> game design & development in Unity,<br /> OpenGL Api,<br /> and Google Cardboard VR  </li>
            </ul>


            <div className="end-div3" >
              <li >Theoretical Experience</li>
            </div>


            <ul>
              <li style={{ marginTop: '10px' }}>Some experience with<br /> Chomsky's Hierarchy/PDA/TuringMachines,<br /> Normalization & FloatingPointError,<br /> Efficiency & Runtime</li>
            </ul>


            <div className="end-div3" >
              <li>Paradigms</li>
            </div>


            <ul style={{ marginTop: '10px' }}>
              <li> Experience in Imperative:  OOP, Scripts, Procedural Languages   </li>
              <li> Experience in Declarative: Database   </li>
            </ul>


            <div className="end-div2" style={{ background: 'white' }} >
              <li>Crypto - Web3</li>
            </div>

            <ul style={{ marginTop: '10px' }}>
              <li> Understanding of theoretical basics of blockchain technology  </li>
            </ul>


            <div className="end-div3" >
              <li>More to come...</li>
            </div>
            <ul>

            </ul>

          </ul>
          <br />
        </div>
      </div>

      <div className='spacer'>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className='gio-container-4' style={{ width: '85%', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', }}>
          <h4 style={{ borderRadius: '20px', fontWeight: '900' }}>Minor in mathematics </h4>
          <ul style={{ background: 'rgba(0,0,0,.8)' }}>
            <br />
            <div className="end-div3" >
              <a style={{ color: 'white' }} id="minor"><li>GENERAL MATH EXPERIENCE</li></a>
            </div>
            <ol style={{ marginTop: '10px' }}>
              <li>Calculus 1, 2, & 3</li>
              <label></label>

              <li>Discrete mathematics, Statistics, Model building</li>
              <label></label>

              <li>Numerical Linear Algebra & Linear Programming </li>
            </ol>
          </ul>
        </div>
      </div>

      <div className='spacer'>
      </div>

      <div >
        <div className="end-div" style={{ margin: '30px' }} >
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
            <h2 style={{
              color: 'white'
            }}> My website technology pipeline / stack ? ✨ </h2>

            <ol style={{
              color: 'white'
            }}>
              <li> Bash/Linux/Windows( CLI/OS )</li>
              <li> VScode( IDE )</li>
              <li> ReactJS </li>
              <li> NPM</li>
              <li> HTML/CSS/JS/JSX </li>
              <li> Githubpages(Host server) </li>
              <li> GoogleDomains(DNS)</li>
              <li> React Router & Few other standard libraries</li>
              <li> Github ( source control ) </li>
            </ol>
            <h3 style={{
              color: 'white'
            }}> Please consider collaborating
              <br /> or donating!
              <br></br>🔥

            </h3>
          </a>
        </div>

        <div className="end-div" style={{ margin: '30px' }}>
          <a href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/">
            <h2 style={{
              color: 'white'
            }}> Having trouble viewing my website ? 💔 </h2>

            <h5 style={{
              color: 'white'
            }}> I tried to make my website desktop and mobile friendly as possible</h5>

            <h3 style={{
              color: 'white'
            }}> If you're having issues on mobile try switching to desktop view!
              <br></br>I'm currently working to fix these bugs sorry!

            </h3>
          </a>
        </div>
      </div>

    </div>
  );
}

export default HeaderAbout;