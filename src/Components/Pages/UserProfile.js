import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Avatar,Grid,Button,Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const drawerWidth = 240;

export default function UserProfile(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigateOrder = () => {
    navigate(`/myorders/${id}`)
  }
  const navigateWallet= () => {
    navigate(`/wallet/${id}`)
  }
  const navigateAboutUs= () => {
    navigate(`/aboutus`)
  }
  const drawer = (
    <div>
      <Grid container justifyContent="center" pt={2} pb={2}>
        <Avatar>P</Avatar>
      </Grid>
      <Divider />
      <List>
        

        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <ManageAccountsIcon/>
                </ListItemIcon>
                <ListItemText primary="My Profile"/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton onClick={navigateOrder}>
                <ListItemIcon>
                    <ShoppingBagIcon/>
                </ListItemIcon>
                <ListItemText primary="My Orders"/>
            </ListItemButton>
        </ListItem>

        <ListItem onClick={navigateWallet}>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBalanceWalletIcon/>
                </ListItemIcon>
                <ListItemText primary="My Wallet"/>
            </ListItemButton>
        </ListItem>        

      </List>
      <Divider />
      <List>

      <ListItem onClick={navigateAboutUs}>
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="About Us"/>
            </ListItemButton>
        </ListItem>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate()
  const {id} =useParams()
  const navigateto = () => {
    navigate(`/savecprofile/${id}`)
  }
  //http://127.0.0.1:8000/getuser/1/
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/getuser/${id}/`
    );
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    
    fetchData();
    
  
  }, []);
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid item xs = {11}>
            <Typography variant="h6" noWrap component="div">
           {data.length===0? "<usrname>": data[0]?.Username}
          </Typography>
            </Grid>
            <Grid item xs = {1}>
              <Link href='/album' underline='none'>
                <Button variant='contained' color="success">Home</Button>
              </Link>
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        pl = {2}
        pt= {2}
      >
        <Toolbar />
        <Button variant="contained" onClick={navigateto}> Edit Profile </Button>
        
        <br></br>

        <Typography paragraph pt={3}>
          Welcome to Foody Web, 
          
        </Typography>
        <Typography paragraph>
          This is a page that contains your public details.
        </Typography>
         
          <br></br>

        <Typography variant='h5'>
          Details :
        </Typography>

         <Typography variant='body2' pl={3}>
          <h4>Name: {data.length===0? "null": data[0]?.Name}</h4>
          </Typography>

        <Typography variant='body2' pl={3}>
          <h4>Address: {data.length===0? "null": data[0]?.Addr}</h4>
        </Typography>
        
        <Typography variant='body2' pl={3}> 
         <h4>Phone Number: {data.length===0? "null": data[0]?.Mobile}</h4>
        </Typography>
       
      </Box>
    </Box>
  );
}

UserProfile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
