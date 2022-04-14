import React, { useState } from 'react';
import { Drawer, Button,Card } from 'antd';
import 'antd/dist/antd.css';
import '../../choice.css';

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open Menu
      </Button>
      <Drawer title="Options" placement="bottom" onClose={onClose} visible={visible}>
        <div className="site-card-border-less-wrapper">
          <Card size="small" hoverable title="Back to Vanilla JS version!" bordered={true} style={{ width: 200 }}>
            <a href="/">
              <Button type="primary">
                VanillaJS
              </Button> 
            </a>
          </Card>
        </div>
        <p>Other...</p>
      </Drawer>
    </>
  );
};
export default DrawerMenu;