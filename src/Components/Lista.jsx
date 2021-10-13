import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Toolbar
} from '@mui/material';
import Box from '@mui/material/Box';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';


export const drawerWidth = 240;

const Lista = () => {
    return (
        <Box sx={{ width:drawerWidth }}>
            <Toolbar sx={{ width:drawerWidth }}/>
                <Divider />
                <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />    
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingBagIcon />    
                        </ListItemIcon>
                        <ListItemText primary="Tienda" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                                <ContactsIcon />    
                        </ListItemIcon>
                        <ListItemText primary="Contacto" />
                    </ListItem>
                    <Divider />
                </List>

        </Box>
    )
}

export default Lista;




/* <Router>
      <div>
        <h1>Titulo</h1>
        
          <RouterLink to="/pepe">Este es un link</RouterLink>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        
      </div>
    </Router> */