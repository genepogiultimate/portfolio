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
          <AppBar position="static" sx={{backgroundColor:"#81fca4"}}>
            <Toolbar sx={{gap:2}}>
            <Link component={RouterLink} to="/">Resume</Link>
            <Link component={RouterLink} to="/projects">Projects</Link>
            <Link component={RouterLink} to="/contact">Contact</Link>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }

export default Header

