import React from 'react'
import Header from '../components/Header'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


 




const Cart = () => {
    const classes = useStyles();
    const dispatch=useDispatch()
    const {products}=useSelector(state=>state.CartReducer)
    console.log("prod" ,products)
    return (
        <>
        <Header/>
       
         
         
       
          <>
               
               <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Inc/Dec</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow key={p.id}>
              <TableCell component="th" scope="row">
              <div style={{width:"30px"}} >
                <img style={{width:"200%"}}  src={p.image} alt="img" />
                </div>
              </TableCell>
              <TableCell align="right">{p.title}</TableCell>
              <TableCell align="right">{p.Price}</TableCell>
              <TableCell align="right">
                  
                 
                  <Button onClick={()=>dispatch({type:"Dec",payload:p.id})} > Dec </Button>
                  <Button onClick={()=>dispatch({type:"Inc",payload:p.id})} > Inc </Button>
                 

              </TableCell>
              <TableCell align="right">{p.Price*p.quantity}</TableCell>
              <TableCell align="right">{p.quantity}</TableCell>
              <TableCell align="right">

                  <Button onClick={()=>dispatch({type:"Remove" , payload:p.id })} >Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



             </>

            

        </>
    )
}

export default Cart
