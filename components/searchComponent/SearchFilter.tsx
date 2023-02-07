import React,{useState,useEffect} from 'react'

function SearchFilter() {


    type ProFilter= {filterName : string}
    let ProductFilter: ProFilter [] =[
        {filterName : '인기순'},
        {filterName :'낮은 가격순'},
        {filterName :'높은 가격순'},
        {filterName :'좋아요순'},
        {filterName :'찜순'},

    ]
    const [ProductTag, setProductTag] = useState<ProFilter[]>([]);
    useEffect(() => {
        setProductTag(ProductFilter);
      }, []);
    
  return (
    <div className='flex h-16 border w-full justify-between min-w-max '>
        <div className='flex'>
            {ProductTag.map((filterTag)=>(
                <div>
                    <button className='text-sm m-5 font-bold text-gray-400 hover:text-gray-900 hover:font-blod'>
                        {filterTag.filterName}
                    </button>
                    <a>
                        <span className=' text-gray-400'>|</span>
                    </a>
                    
                </div>
                
            ))}
        </div>
        
        <div className='flex'>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-red-600 rounded-full hover:bg-red-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-orange-400 rounded-full hover:bg-orange-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-yellow-400 rounded-full hover:bg-yellow-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-green-400 rounded-full hover:bg-green-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-blue-400 rounded-full hover:bg-blue-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-indigo-700 rounded-full hover:bg-indigo-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-purple-600 rounded-full hover:bg-purple-500'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-black rounded-full hover:bg-gray-700'></button>
             <button className='border border-black  w-8 h-8 mx-1 my-2 bg-white rounded-full hover:bg-gray-300'></button>
             
             
        </div>
        

    </div>
  )
}

export default SearchFilter
