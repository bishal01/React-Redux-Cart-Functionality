import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {products} from '../data'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1.5),
      minWidth: 110,
      paddingBottom:"10px"
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



const Filter = (props) => {
    const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);}

 





    return (
           <div style={{position:"relative" ,top:"4px",bottom:"20px" }} >
                 
        <Toolbar variant="dense">
        
          <Typography  style={{flexGrow:.3}} variant="h6" color="inherit">
            Total Products : {products.length}
          </Typography>
                
          <div style={{flexGrow:.3}} >
          <FormControl className={classes.formControl}>
          
          <InputLabel id="demo-simple-select-label">Order</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
         
         
        >
          <MenuItem style={{color:"red"}}  value="Lowest" onClick={()=>props.setItems("Price")}  >Lowest</MenuItem>
          <MenuItem style={{color:"red"}}  value="Highest"  >Highest</MenuItem>
        </Select>

        </FormControl>
 
      
</div>

<div style={{flexGrow:.3}} >
          <FormControl className={classes.formControl}>
          
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          

        >
          <MenuItem style={{color:"red"}} value="" onClick={()=>props.setItems(products)}  >All</MenuItem>
          <MenuItem value="XS" onClick={()=>props.filterItem("xs")} >XS</MenuItem>
          <MenuItem value="S" onClick={()=>props.filterItem("s")} >S</MenuItem>
          <MenuItem value="M" onClick={()=>props.filterItem("m")} >M</MenuItem>
          <MenuItem value="L" onClick={()=>props.filterItem("l")} >L</MenuItem>
          <MenuItem value="XL" onClick={()=>props.filterItem("xl")} >XL</MenuItem>



        </Select>

        </FormControl>
 
      
</div>

        </Toolbar>
      
        </div>
    )
}

export default Filter
