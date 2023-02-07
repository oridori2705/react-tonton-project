import React,{useState,useEffect} from 'react'

const SearchKindOf=()=> {

    type Tag = {title : string, kindOf: string[]}
    let PT : Tag[] =[
        {title: '상의',kindOf: ["반팔","긴팔티","맨투맨","후드티"]}, 
        {title:'아우터', kindOf: ["코트","점퍼","가디건","재킷","패딩"]},
        {title:'하의', kindOf: ["반바지","슬랙스","청바지","면바지"]},
        {title:'모자', kindOf: ["캡모자","비니","페도라","버킷햇"]},
        {title:'신발', kindOf: ["스니커즈","로퍼","운동화","캔버스화"]}
    ]

    const [ProductTag, setProductTag] = useState<Tag[]>([]);
    
    useEffect(() => {
        setProductTag(PT);
      }, []);
    

  return (
    <div className=' py-10 font-bold'>
        {ProductTag.map((product)=>(
            <div>
                <div className=' text-lg'>
                    <h2>{product.title}</h2>
                </div>
                
                
                <div className='' /*추후에 반복문으로 고쳐야함(어케해야할지 모르겟음*/>
                    <button className=' text-gray-400 text-sm hover:text-black hover:font-bold py-2'>
                        {product.kindOf[0]}
                        
                    </button>
                    <button className=' text-gray-400 text-sm hover:text-black hover:font-bold py-2'>
                        {product.kindOf[1]}
                        
                    </button>
                    <button className=' text-gray-400 text-sm hover:text-black hover:font-bold py-2'>
                        {product.kindOf[2]}
                        
                    </button>
                    <button className=' text-gray-400 text-sm hover:text-black hover:font-bold py-2'>
                        {product.kindOf[3]}
                        
                    </button>
                    <button className=' text-gray-400 text-sm hover:text-black hover:font-bold py-2'>
                        {product.kindOf[4]}
                        
                    </button>
                </div>
                
            
            </div>
           
        ))}
        
    </div>
       

  )
}

export default SearchKindOf