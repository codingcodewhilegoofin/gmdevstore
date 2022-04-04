import * as React from 'react';

import Box from '@mui/material/Box';


import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';


export default function MenuAppBar(props) {

  const [auth, setAuth] = React.useState(true);
 
    

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Dependency+ ON' : 'Dependency+ OFF'}
        />
      </FormGroup>
    </Box>
  );
}