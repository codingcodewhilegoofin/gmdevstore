import React, { useState } from 'react';
import { Drawer, Button, Card, Switch, Space } from 'antd';
import {store, useGlobalState} from 'state-pool';
import 'antd/dist/antd.css';
import '../../choice.css';



const DrawerMenu = (...arduino) => {
  const [visible, setVisible] = useState(false);

  console.log(arduino);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [lightTheme, setLightTheme] = useState("false");

  function onChange(checked) {
    setLightTheme(true);
  }

  //Arduino Status : {arduino[0].ledStatus.value.toUpperCase()} , {arduino[0].ledStatus.status} , {arduino[0].ledStatus.name} 
    
  return (
    <>
      <Button type="primary" onClick={showDrawer} size="small" >
        Options 👈 
      </Button>
     
      <Drawer title="Options" placement="top" onClose={onClose} visible={visible} >
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <div className="site-card-border-less-wrapper">
          <Card size="small" hoverable title="Back to regular/vanilla version!" bordered={true} style={{ width: 300 }}>
            <a href="/">
              <Button type="primary">
                Go 
              </Button> 
            </a>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card size="small" hoverable title="Light Theme " bordered={true} style={{ width: 200 }}>
            <Switch defaultChecked onChange={onChange} />
          </Card>
        </div>
        </Space>
      </Drawer>
    </>
  );
};
export default DrawerMenu;

