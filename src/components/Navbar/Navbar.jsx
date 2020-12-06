import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation()

    return (
        <>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
           <Toolbar>
               <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                   <img src={logo} alt="Yussifweb E-Commerce" height="25px" className={classes.image} />
                   Yussifweb E-Commerce
               </Typography>
               <div className={classes.grow}></div>
               {location.pathname === '/' && (
               <div className={classes.button}>
                   <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                   </IconButton>
               </div> )}
           </Toolbar>
        </AppBar>   
        </>
    )
}

export default Navbar;