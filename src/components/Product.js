import React,{useEffect} from 'react'
import {products} from '../data'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Filter from './Filter';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useDispatch} from 'react-redux';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 340,
      marginBottom:"1.5rem",
      marginLeft:"auto",
      marginRight:"auto",
      
      paddingBottom:"1.5rem"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    avatar: {
      backgroundColor: red[500],
    },
    button:{
        display:"flex",
        justifyContent:"center",
        marginTop:"2rem"

    }
  }));



const H = () => {

    const classes = useStyles();
    const dispatch=useDispatch()
  const state=useSelector(state=>state.productReducer.products)
    const [items,setItems]=React.useState(state);
 
   

    

    const filterItem=(item)=>{
      const updatedItem=products.filter((product)=>{
        return product.availableSizes.indexOf(item)>=0;
      });
      setItems(updatedItem)
      }

      const ascendingSort = () => {
        const sorted = [...products].sort((a, b) => {
          return a.Price - b.Price;
        });
        setItems(sorted);
      }

      const descendingSort = () => {
        const sorted = [...products].sort((a, b) => {
          return b.Price - a.Price;
        });
        setItems(sorted);
      }

  
    
  console.log(items)
      
 
    return (
        <>
  <div  > 
   
  <Filter filterItem={filterItem} setItems={setItems} ascendingSort={ascendingSort} descendingSort={descendingSort}  />


    <Grid container  
   style={{width:"90%",margin:"0 auto" ,padding:"4px" }} justifyContent="center" >

        {
            items.map((prod)=>(
                <Grid  item xs={12} sm={6} md={4} >
                       <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {prod.Price}
          </Avatar>
        }
       
        title={prod.title}
        
      />
      <CardMedia
        className={classes.media}
        image={prod.image}
        title="Paella dish"
      />
     
      <div className={classes.button} >
 
      <Button style={{marginRight:".6rem"}} variant="contained" color="secondary">
     View Details
      </Button>
    <Button style={{marginRight:".6rem"}}  to={`/details/${prod.id}`} component={Link} variant="contained" color="secondary">
   Add To Cart
   </Button>

          </div>
  
   
       
    </Card>

                    </Grid>
            ))
        }

      

        </Grid>

      </div>
    </>
    )


}

export default H
