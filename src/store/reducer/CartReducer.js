const initState={
    products:[],
    totalPrice:0,
    totalQuantities:0
}

const CartReducer=(state=initState,action)=>{
    let index;
    let findprod;

    switch (action.type){
       
        case 'ADD_TO_CART':
            const {product,quantity}=action.payload
            const Tprice=state.totalPrice+parseInt(product.Price)*quantity
            const Tquantities=state.totalQuantities+quantity;
            const check=state.products.find(pr=>pr.id===product.id)
            console.log("TotalPrice",Tprice)
            if (check){
                return state
                

                
            }

            else{
               const Tprice=state.totalPrice+product.Price*quantity
               console.log(Tprice)
               const Tquantities=state.totalQuantities+quantity;
               product.quantity=quantity;
               return{
                   ...state,products:[...state.products,product],totalPrice:Tprice,totalQuantities:Tquantities
               }
            }
            

            case "Inc":
                findprod=state.products.find(product=>product.id===action.payload);
                index=state.products.findIndex(product=>product.id===action.payload);
                findprod.quantity+=1;
                state.products[index]=findprod;

                return{
                    ...state,
                    totalPrice:state.totalPrice+findprod.Price,
                    totalQuantities:state.totalQuantities+1
                }

                case "Dec":
                    console.log("kkk")
                  findprod=state.products.find(product=>product.id===action.payload);
                 index=state.products.findIndex(product=>product.id===action.payload);
                 if (findprod.quantity>1){
                    findprod.quantity-=1;
                    state.products[index]=findprod;
                    return{
                        
                        ...state,totalPrice:state.totalPrice - findprod.Price,
                        totalQuantities:state.totalQuantities-1
                    }

                }
                    else {
                            
                        const filtered=state.products.filter(product=>product.id!==action.payload)
                          return {
                        
                            products:filtered,
                            totalPrice:state.totalPrice-findprod.Price*findprod.quantity,
                            totalQuantities:state.totalQuantities-findprod.quantity 


                          }
                
                        }
                case "Remove":
                    findprod=state.products.find(product=>product.id===action.payload);
                    const filtered=state.products.filter(product=>product.id!==action.payload)
                    return{
                        ...state,
                        products:filtered,
                        totalPrice:state.totalPrice-findprod.Price*findprod.quantity,
                        totalQuantities:state.totalQuantities-findprod.quantity
                    }




                





        default:
            return state
    }

  

 
 

 


}

export default CartReducer