import React, { useState, useEffect } from 'react';
import { Drawer, Button, Card, Switch, Space, notification } from 'antd';
import { store, useGlobalState } from 'state-pool';
import 'antd/dist/antd.css';
import '../../choice.css';


const DrawerMenu2 = (props) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [startScene, setStartScene] = useState(true);
    
  props.func(startScene);
  


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
  }

  const [lightTheme, setLightTheme] = useState("false");

  function onChange(checked) {
    setLightTheme(true);
  }

  const openNotification = () => {

    const args = {
      message: 'Please wait...',
      description:
        '🔄 Loading 3D environment, can take a few seconds...',
      duration: 20,
      style: {
        width: 500,
        backgroundColor: '#3F646Dff',
        color: '#AEBEBEff',
      },

    };
    const args2 = {

      message: 'How do I move? 🤔',
      description:
        'If you are on mobile just pinch and touch the screen. If you are on PC hold the left button to rotate, hold right button to move in the scene, and the scroll wheel to zoom in/out',
      duration: 0,
      onClose: setToggle(true),
      style: {
        width: 500,
        backgroundColor: '#3F646Dff',
        color: '#AEBEBEff',
      },
    };
    notification.open(args);
    notification.open(args2);
  };

  useEffect(() => {
    if (toggle) {

    }
    else {
      openNotification();
    }

  }, [])

  
  return (
    <>
      <Space direction="horizontal" size="small" style={{ display: 'flex' }}>
        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={showDrawer}>
          MENU
        </Button>
        <h4 style={{ color: '#19819Fff' }}>If you feel like cheating and skipping this <em>awesome</em> 3D scene, you can skip it in the menu ! 🙃</h4>
      </Space>
      <Drawer title="Options" placement="bottom" onClose={onClose} visible={visible} >

        <h4 style={{ color: '#19819Fff' }}>Thank you for exploring my website 😄 </h4>
        <h4 style={{ color: '#19819Fff' }}>😕 Press/Click HELP if you're still confused ! </h4>

        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
          <div className="site-card-border-less-wrapper">

            <Card size="small" hoverable title="Go to main website" bordered={true} style={{ width: 210, backgroundColor: '#19819Fff' }}>
              
                <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={SkipScene}>
                  SKIP THIS SCENE ↪️
                </Button>
              
            </Card>
          </div>


          <div className="site-card-border-less-wrapper">
            <h4 style={{ color: '#19819Fff' }}>Do Stuff </h4>
            <Card size="small" hoverable bordered={true} style={{ width: 250, backgroundColor: '#025B79ff' }}>
              <Switch defaultChecked onChange={onChange} />
            </Card>
          </div>

          <div className="site-card-border-less-wrapper">

            <Card size="small" hoverable bordered={true} style={{ width: 250, backgroundColor: '#19819Fff' }}>
              <h4 style={{ color: '#AEBEBEff' }}>Help options </h4>
              <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={showDrawer2}>
                help me! 💔
              </Button>
            </Card>
          </div>

          <div className="site-card-border-less-wrapper">

            <Card size="small" hoverable bordered={true} style={{ width: 250, backgroundColor: '#19819Fff' }}>
              <h4 style={{ color: '#AEBEBEff' }}>Links! </h4>
              <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={showDrawer2}>
                
              </Button>
            </Card>
          </div>

        </Space>

        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }} onClick={onClose}>
                  CLOSE MENU
        </Button>
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
          <iframe src="https://codesandbox.io/examples/package/@splinetool/r3f-spline" width="100%" height="500"/>

          <h4><a href="https://ant.design/" >Antd UI</a></h4>
          <iframe src="https://ant.design/" width="100%" height="500"/>
         
          
        </ul>

        <h1 style={{ color: 'white', backgroundColor: 'black' }}> If you still need help after this, bruh 🤦‍♂️ </h1>

        <Button type="primary" style={{ color: '#19819Fff', backgroundColor: '#243232ff', border: '1px solid #2E5252ff' }}  onClick={SkipScene} >
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

