const initState={
    products:[
        {
            id:"1",
            image:"/images/p1.jpg",
            title:"Brand Levi WHite Tshirt",
            description:"This impressive paella is a perfect party dish and a fun meal to cook together with yourguests. Add 1 cup of frozen peas along with the mussels, if you like. " ,
            availableSizes:["xs","l","xl"],
            Price:50,
            quantity:1
        },
        {
            id:"2",
            image:"/images/p2.jpg",
            title:"Women's New fashion Jacket",
            description:"This impressive paella is a perfect party dish and a fun meal to cook together with yourguests. Add 1 cup of frozen peas along with the mussels, if you like. ",
            availableSizes:["x","l","xl"],
            Price:90,
            quantity:1
        },
        {
            id:"3",
            image:"/images/p3.jpg",
            title:"Man's Jacket",
            description:"This impressive paella is a perfect party dish and a fun meal to cook together with yourguests. Add 1 cup of frozen peas along with the mussels, if you like.",
            availableSizes:["xs","l","xl"],
            Price:80,
            quantity:1
        },
        {
            id:"4",
            image:"/images/p4.jpg",
            title:"White Tshirt",
            description:"This impressive paella is a perfect party dish and a fun meal to cook together with yourguests. Add 1 cup of frozen peas along with the mussels, if you like.",
            availableSizes:["x","l","xl","xxl"],
            Price:70,
            quantity:1
        },
    
   

    ],
    product:{}
}

const productReducer=(state=initState,action)=>{
    switch(action.type){
       
        case "Product":
            return {...state,product:state.products.find(product=>product.id===action.id)}
        default:
            return state;
    }


}
export default productReducer