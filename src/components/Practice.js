import React, { useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'

const Practice = () => {
    const [change,funchange]=useState("posts")
    const [items,setitems]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${change}`)
        .then(response => response.json())
        .then(json => setitems(json))
    },[change])
        
    
    return (
        <>
        <div style={{justifyContent:"center" , height:"80vh", display:"flex",alignItems:"center" ,flexDirection:"column", padding:"1rem" }} >
            <div style={{display:"flex",marginRight:"10px",justifyContent:"center"}} >
            <Button variant="text" color="default" onClick={()=>funchange("posts")} >
              Hello
            </Button>
            <Button variant="text" color="default" onClick={()=>funchange("users")} >
              Social
            </Button>
            <Button variant="text" color="default" onClick={()=>funchange("comments")} >
              Income
            </Button>
            </div>
            <div>
            
               <h4>{change}</h4>
                </div>

        </div>

        <ul>
            {

            items.map(item=>{

                return  <li> {JSON.stringify(item)}</li>
            }
            )
        }
      
      </ul>
      </>     
    )
 
}

export default Practice
