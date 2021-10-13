import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'
import { drawerWidth } from './Lista'


const Navbar = () => {

    return (
            <AppBar position="fixed" color="primary" sx={{ width:`calc(100% - ${drawerWidth}px)` }}>
              <Toolbar>
                  <IconButton aria-label="menú" color="inherit" sx={{ mr: 2, display: 'none' }}>
                    <MenuIcon />
                  </IconButton>
                <Typography variant="h6" sx={{ flex: 1 }}>
                  ~CALZADOS ROI~ 
                </Typography>
                <Button variant="text" color="inherit" >
                  Login 
                </Button>
              </Toolbar>
            </AppBar>

    )
}


export default Navbar 
