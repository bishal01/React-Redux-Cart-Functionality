import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Header from './Header';
import RemoveIcon from '@material-ui/icons/Remove';
import swal from 'sweetalert';







const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0.1),
      minWidth: 110,
      marginLeft:"10px",
      marginTop:"-20px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const Details = () => {
    const classes = useStyles(1);
    const [state, setState] = React.useState({
        age: '',
        name: '',
      });
    
    const [quantity, setquantity] = useState(0)
    const {id}=useParams();
    const dispatch=useDispatch()
    const {product}=useSelector(state=>state. productReducer)
    console.log(product)
    console.log(id)
    useEffect(() => {
        
        dispatch({type:"Product",id})
        
    }, [id])

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
       
      const Add=()=>{
    
        setquantity(quantity+1)
        if (quantity>=5){
          setquantity(quantity)
          swal("Sorry No More Than 5 Items !");
        }
      }

      const Minus=()=>{

        if(quantity>0){
          setquantity(quantity-1)
        }

      }
      
    return (
        <>
         
         <Header />

        <div>
       
         <Grid container style={{flexGrow:1}}  justifyContent="space-between"
 >

         <Grid item xs={6} sm={6} md={6}>
             <div style={{width:"100%"}} >
          <img style={{width:"600px",height:"90vh",objectFit:"cover"}}  src={product.image} alt="" />
          </div>
          </Grid>

          <Grid item xs={6} sm={6} md={4}   style={{margin:"0 auto", height:"80vh" , display:"flex",alignItems:"center" }} >

              <Card style={{padding:"50px 20px "}} >
                  <h2 style={{textAlign:"center"}} > {product.title} </h2>
                  <br/>

                  <Divider/>
                  <br/>

                  <Typography varient="body2" >{product.description}</Typography>
                  <br/>

                    <Typography variant="body1" color="secondary"> Price: {product.Price} </Typography>   

                    <div  style={{display:"flex",justifyContent:"center",paddingBottom:"10px"}} >
                      <Button style={{color:"#e91e63"}} onClick={()=>Minus()}>
                      <RemoveIcon/>
                      </Button>
                      <Typography style={{paddingTop:"5px",paddingLeft:"5px",paddingRight:"5px"}} variant="body1" color="initial">{quantity}</Typography>
                      <Button style={{color:"#2196f3"}} onClick={()=>
                        
                      Add()
                      }
                       >
                      <AddIcon/>
                      </Button>
                      </div>      
                      <div style={{display:"flex",justifyContent:"center"}} >
                      <Button style={{color:"#fff",backgroundColor:"#f44336",padding:"5px 20px  "}} onClick={()=>dispatch({type:"ADD_TO_CART",payload:{product,quantity}})} >Add To Cart </Button>
                        </div>           
                  

                  </Card>

              </Grid>


     </Grid>



            
        </div>

        </>
    )
}

export default Details
