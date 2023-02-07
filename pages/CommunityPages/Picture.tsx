import React from 'react'
import {useDrag} from 'react-dnd'

interface CompProps{
   id:number,
   url:string,
   type:string,
   color:string
}


function Picture({url,id,type,color}:CompProps) {
    const [{isDragging},drag]=useDrag(()=>({
        type: "image",
        item :{id: id,
              type: type},
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <div className='flex flex-col'>
        <img ref={drag} src={url} alt="" width={"150px"} style={{opacity:isDragging? "0%": "100%"}}/>
        <span>종류 : {type}</span>
        <span>색상 : {color}</span>
        
    </div>
  )
}

export default Picture