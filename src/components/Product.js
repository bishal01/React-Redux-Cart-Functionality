import React from 'react'
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


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 340,
      marginBottom:"1.5rem",
      
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
    const [items,setItems]=React.useState(products);
    

    const filterItem=(item)=>{
      const updatedItem=products.filter((product)=>{
        return product.availableSizes.indexOf(item)>=0;
      });
      setItems(updatedItem)
      }

    const sortItem=item=>{
      const sorted=[...items].sort((a,b)=>
      a[item].toLowerCase()>b[item].toLowerCase() ? 1:-1)
      setItems(sorted);
    }    
    
      
 
    return (
        <>
  <div  > 
   
  <Filter filterItem={filterItem} setItems={setItems} sortItem={sortItem} />


    <Grid style={{overflow:"hidden"}}  container>

        {
            items.map((prod)=>(
                <Grid  item xs={12} sm={12} md={6} >
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
  Buy Now
      </Button>
    <Button style={{marginRight:".6rem"}} variant="contained" color="secondary">
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
