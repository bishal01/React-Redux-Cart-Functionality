import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft:"5rem",
      flexGrow: 0.9,
      textDecoration:"none",
      color:"#fff"
    },
  }));
  

const Header = () => {
    const classes = useStyles();
    const {totalQuantities}=useSelector(state=>state.CartReducer)
    console.log("total",totalQuantities)

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component={Link} to="/" className={classes.title}>
              Ecommerce Website
            </Typography>
                
                
              <IconButton component={Link} to="/cart" >
                <ShoppingCartIcon style={{color:"red",fontSize:"2.5rem"}} />
                <Avatar style={{width:"20px" ,height:"20px",color:"purple",marginBottom:"25px",marginRight:"15px" }}  >{totalQuantities}</Avatar>
          
              </IconButton>
           
           </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header
