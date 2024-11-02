import React from 'react'
import { useState } from 'react'

function StarRating() {
    const [star,setStar]=useState(0)
    const handleAdd=(sta)=>{
        setStar(sta)
    }
  return (
    <div >
      {[1,2,3,4,5].map((item,index)=>(
        
         <div style={{backgroundColor:item <= star ? 'gold': 'lightgray',width:"50%",height:"50px",justifyItems:"center",cursor:"pointer",margin:"16px"}} onClick={()=>handleAdd(item)}  key={index}>{item}</div>
         
      ))}
    </div>
  )
}

export default StarRating