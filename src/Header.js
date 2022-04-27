import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@mui/material';


const Header= () =>{
    return(
        <Box sx={{ flexGrow: 1, }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link component={RouterLink} to="/">Home</Link>
                <Link component={RouterLink} to="/gallery">Gallery</Link>
                <Link component={RouterLink} to="/contact">Contact</Link>
              </Typography> */}
              <Button color="inherit">Gene</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact Me</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default Header

