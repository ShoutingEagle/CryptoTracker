import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';


export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
              <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Home'/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CompareArrowsIcon/>
              </ListItemIcon>
              <ListItemText primary='Compare' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
        </List>
      <List>

          

      </List>
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <ListItemText primary='Theme' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>

        
        <React.Fragment>
          <Button onClick={toggleDrawer('right', true)}><MenuIcon/></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>

    </div>
  );
}