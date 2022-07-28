import React, { useState, useEffect } from 'react';
import { Drawer, Button, Card, Switch, Space, notification } from 'antd';
import { store, useGlobalState } from 'state-pool';

import 'antd/dist/antd.css';
import '../../choice.css';
import { ReactComponent as LinkedinSymbol } from '../../icons/linkedin.svg';
import { ReactComponent as GithubSymbol } from '../../icons/github.svg';




const DrawerMenu2 = (props) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [startScene, setStartScene] = useState(true);
  const [fancyMode, setFancyMode] = useState(false);

  //props.func(startScene);



  const showDrawer = () => {
    setVisible(true);
  };
  const showDrawer2 = () => {
    setVisible2(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClose2 = () => {
    setVisible2(false);
  };
  const SkipScene = () => {
    setStartScene(false);
    window.location.reload();
  }

  let menuResize;
  let cardResize;
  let spaceResize;
  let skipButton;
  let headerMessage;
  let tophat;
  let party;
  let fancyguy;
  let tuxguy;
  let fancyoptions;
  let fancymssg;

  if(fancyMode == true){
    tophat = <>🎩</>;
    party = <>・❥・ 🎉 .·:*¨¨* ≈☆≈ *¨¨*:·.</>;
    fancyguy = <>🧐</>;
    tuxguy = <>🤵</>;
    fancyoptions = <> ╰┈➤  Options ::::: 🧡 ━━━━━━━━━━━━━━ 🧡 :::::</>;
    fancymssg= "Why hello there, how do you do.";
  }
  else{
    tophat = <></>;
    party = <></>;
    fancyguy = <></>;
    tuxguy = <></>;
    fancyoptions= <>Options</>;
    fancymssg = <></>;
  }

  if (window.innerWidth < 700) {
    menuResize = 210;
    cardResize = 210;
    spaceResize = 'vertical';
    skipButton = <></>;
    headerMessage= "Check the menu to skip 3D scene 🙃";
     
  }
  else {
    menuResize = 500;
    cardResize = 300;
    spaceResize = 'horizontal';
    skipButton = <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={SkipScene}>SKIP THIS SCENE ↪️</Button>;
    headerMessage= "Welcome to giomoscato.com take a look around and explore there is a ton of information and easter eggs! 😁";
  }

  const [lightTheme, setLightTheme] = useState("false");

  function onChange(checked) {
    setFancyMode(!fancyMode);
  }

  const openNotification = () => {

    const args = {
      message: 'Please wait...',
      description:
        '🔄 Loading 3D environment, sorry for the wait this can take a few mintutes due to having to load assets...',
      duration: 20,
      style: {
        width: 500,
        backgroundColor: '#19819Fff',
        color: '#101730ff',
      },

    };
    const args2 = {

      message: 'How do I move? 🤔',
      description:
        'If you are on mobile just pinch and touch the screen. If you are on PC hold the left button to rotate, hold right button to move in the scene, and the scroll wheel to zoom in/out',
      duration: 90,
      onClose: setToggle(true),
      style: {
        width: 500,
        backgroundColor: '#19819Fff',
        color: '#101730ff',
      },
   
    };
    const args3 = {
      
      message: 'Can I just skip this? 🙃',
      description:
        'Yes in case its unclear click or press " SKIP THIS SCENE " button ',
      duration: 15,
      onClose: setToggle(true),
      style: {
        width: 500,
        backgroundColor: '#19819Fff',
        color: '#101730ff',
      },
      placement: 'bottom',
      bottom: 0,
    };
    notification.open(args);
    notification.open(args2);
    notification.open(args3);
  };

  useEffect(() => {
    if (toggle) {

    }
    else {
      if(props.load){
        openNotification();
      }
     
    }

  }, [])


  return (
    <>
      <Space direction="horizontal" size="small" style={{ display: 'flex' }}>
        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff', padding: '1px' }} onClick={showDrawer}>
          MENU {tuxguy}
        </Button>

        {skipButton}

        <h4 style={{ color: '#19819Fff', fontSize: 'smaller', }}>{headerMessage}</h4>

      </Space>
    <Drawer title={fancyoptions} placement="bottom" onClose={onClose} visible={visible} >
        
        <Card size="small" hoverable bordered={true} style={{ width: { menuResize }, backgroundColor: '#101730ff' }}>
          {tophat}
          <h4 style={{ color: '#19819Fff' }}>😄 Thank you for exploring my website{party}  </h4>
          {tophat}
          <h4 style={{ color: '#19819Fff' }}>😕 Press/Click HELP if you're still confused ! </h4>

          <Space direction={spaceResize} size="small" style={{ display: 'flex' }}>
            <div className="site-card-border-less-wrapper">
              <h4 style={{ color: '#AEBEBEff' }}>Go to main website </h4>
              <Card size="small" hoverable bordered={true} style={{ width: { cardResize }, backgroundColor: '#19819Fff' }}>

                <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff', padding: '1px' }} onClick={SkipScene} >
                  SKIP THIS SCENE ↪️
                </Button>

              </Card>
            </div>


            <div className="site-card-border-less-wrapper">
              <h4 style={{ color: '#19819Fff' }}>{tophat}Fancy Mode </h4>
              <Card size="small" hoverable bordered={true} style={{ width: { cardResize }, backgroundColor: '#025B79ff' }}>
                <Switch  onChange={onChange} />
              </Card>
            </div>

            <div className="site-card-border-less-wrapper">
              <h4 style={{ color: '#AEBEBEff' }}>Help options </h4>
              <Card size="small" hoverable bordered={true} style={{ width: { cardResize }, backgroundColor: '#19819Fff' }}>

                <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={showDrawer2}>
                  help me! 💔
                </Button>
              </Card>
            </div>

            <div className="site-card-border-less-wrapper">
              <h4 style={{ color: '#19819Fff' }}>Links! </h4>
              <Card size="small" hoverable bordered={true} style={{ width: { cardResize }, backgroundColor: '#19819Fff' }}>
                <Space direction="horizontal" size="small" style={{ display: 'flex' }}>

                  <a href="https://github.com/codingcodewhilegoofin">
                    <Card size="small" hoverable style={{ width: 50, backgroundColor: '#AEBEBEff' }}>
                      <GithubSymbol />
                    </Card>
                  </a>
                  {fancyguy} {fancymssg}
                  <a href="https://www.linkedin.com/in/giovanni-moscato-4a19a71b1/">
                    <Card size="small" hoverable style={{ width: 60, height: 60, backgroundColor: '#243232ff' }}>
                      <LinkedinSymbol />
                    </Card>
                  </a>

                </Space>
              </Card>
            </div>

            <div className="site-card-border-less-wrapper">

              <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={onClose}>
                CLOSE MENU
              </Button>

            </div>
          </Space>
        </Card>
      </Drawer>

      <Drawer title="Help Menu" placement="top" onClose={onClose2} visible={visible2} >
        <ol>
          <h4>Menu</h4>
          <li><a href="#3D">3D</a>  </li>
          <li><a href="#SiteNav">SiteNav</a> </li>
          <li><a href="#Spline">Spline</a> </li>
        </ol>

        <h4 id="3D">Exporing the 3D scene</h4>
        <ul>
          <li><a href="#SiteNav">Follow the instructions in Site Navigation to learn how to move</a></li>
          <li>You can click on the door to enter my special 3D version of my portfolio </li>
          <li>You can click the trash can to see my regular portfolio </li>
          <li>There are special easter eggs in the scene for fun 😉</li>
        </ul>

        <h4 id="SiteNav">Site Navigation</h4>
        <ul>
          <li>The website will load a 3D scene that you can explore.</li>
          <li>To explore this scene follow these instructions: </li>
          <ol>
            <li>If you are on mobile just pinch and touch the screen. </li>
            <li>If you are on PC hold the left button to rotate, hold right button to move in the scene, and the scroll wheel to zoom in/out</li>
          </ol>
          <li>You can view my regular dev portfolio or 3D version of it.</li>
          <li>My dev portfolio is split into a JSX/HTML/CSS version and a 3D react-three-fiber version.</li>
          <h4><a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" >REACT THREE FIBER</a></h4>
          <iframe src="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" width="100%" height="300">

          </iframe>
          <li>This portfolio showcases my web dev and other dev skills.</li>
        </ul>

        <h4 id="Spline">Spline</h4>
        <ul>
          <li>This 3D scene was assisted by Spliner3f a library that helps with 3D rendering</li>
          <li>The UI was created with Antd UI  </li>

          <h4><a href="https://codesandbox.io/examples/package/@splinetool/r3f-spline" >Spline</a></h4>
          <iframe src="https://codesandbox.io/examples/package/@splinetool/r3f-spline" width="100%" height="500" />

          <h4><a href="https://ant.design/" >Antd UI</a></h4>
          <iframe src="https://ant.design/" width="100%" height="500" />


        </ul>

        <h1 style={{ color: 'white', backgroundColor: 'black' }}> If you still need help after this, bruh 🤦‍♂️ </h1>

        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={SkipScene} >
          SKIP THIS SCENE ↪️
        </Button>

        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={onClose2}>
          BACK
        </Button>

      </Drawer>


    </>
  );
};
export default DrawerMenu2;

