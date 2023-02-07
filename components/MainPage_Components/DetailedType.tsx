import React, { useState,useEffect } from 'react'

interface Ptype{
    type:string
}


function DetailedType({type}:Ptype) {
    const [tagDetailedTypeSelected,settagDetailedTypeSelected]=useState<string>();
    const [selectedType, setSelectedType] = useState<string[]>([])
    console.log(type)
    const outer=["후드집업","코트","자켓","가디건","패딩"]
    const top=["반팔티","셔츠","긴팔티","후드티"]
    const bottom=["반바지","청바지","슬랙스","면바지"]
    const shoes=["스니커즈","구두"]
    const hat=["캡모자","비니"]
    useEffect(() => {
        if(type=="아우터")
        {
            setSelectedType(outer)
        }
        else if(type=="상의")
        {
            setSelectedType(top)
        }
        else if(type=="하의")
        {
            setSelectedType(bottom)
        }
        else if(type=="모자")
        {
            setSelectedType(hat)
        }
        else if(type=="신발")
        {
            setSelectedType(shoes)
        }
    }, [type])
   
    const handleDetailedClickRadioButton=(e:React.ChangeEvent<HTMLInputElement>)=>{
        settagDetailedTypeSelected(e.target.value)
        
      }
  return (
    <div>
        <fieldset className="flex mt-5">
            {selectedType.map((tag, i) => (
            <label className={`${tagDetailedTypeSelected==tag ? 'text-cyan-300 font-bold' : ''}  w-full text-center  mx-2 rounded-lg`}>
                <input
                type="radio"
                value={tag}
                key={i}
                name="type"
                checked={tagDetailedTypeSelected==tag}
                onChange={handleDetailedClickRadioButton}
                className="hidden w-full"
                />
                -{tag}
            </label>
            ))}
            
        </fieldset>
  </div>
  )
}

export default DetailedType