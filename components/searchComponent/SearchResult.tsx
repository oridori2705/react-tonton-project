import React,{useState,useEffect} from 'react'
import ProductModal from "../ProductModal"
import SiteImage from './SiteImage'


interface resultItem{
    id:number,
    color: string,
    detailTag: string,
    majorTag: string,
    name: string,
    pictureUrl: string,
    price: number,
    saturation: string,
    siteName: string,
    siteUrl: string,
    sold: boolean,
    value: string,
    views: number
}
interface myComp{
    posts:resultItem[]
}//props가 posts={~~~} 이런식이면 이렇게 따로 타입을 만들고 아래와 같이 {posts}:myComp 해야 받을 수 있다.



export const SearchResult = ({posts}:myComp) => {


    const [productSelected, setProductSelected] = useState<resultItem>();
    const [modalOpen,setModalOpen] = useState<boolean>(false);
    const [siteImg, setSiteImg] = useState<string>("")

    const handleClick=(productItem: resultItem)=>{
        setModalOpen(true);
        setProductSelected(productItem);
    }
    

    //Object.values(posts)로 배열로 만듦-> 이게 props로 가져오니까 object타입으로 돼서 map이 안됨 그래서 그 안에 배열으 꺼내옴 <-왜 object로 되는지 알아야할듯
  return (
    <div className=''>
        <ul className='flex flex-wrap h-96 w-full'>
            {Object.values(posts).map((productItem)=>(
                
                <li className='border w-1/5 min-w-max hover:bg-slate-100'>
                    <div className='w-[3rem] h-[1rem] '>
                        <SiteImage
                        site={productItem.siteName}
                        
                    />
                    </div>
                    <div className='mx-1 px-16 my-10 '>
                        <a>
                            <img className='w-40 hover:opacity-50' 
                            src={productItem.pictureUrl}
                            onClick={()=>handleClick(productItem)}
                            />
                        </a>
                    
                        <div className='w-40'>
                            <p className='font-bold'>
                                <a>{productItem.siteName}</a>
                            </p>
                            <p className='text-xs'>
                                <a>{productItem.name}</a>
                            </p>
                            <p className='font-bold border border-white border-b-gray-300'>
                                <a>{productItem.price}원</a>
                            </p>
                            <p className='text-xs font-bold text-orange-400'>
                                <a>{}</a>
                            </p>
                            <p className='text-sm font-bold text-red-500'>
                                <a>❤{productItem.views}</a>
                            </p>
                        </div>

                    </div>
                    
                </li>
            ))}

        </ul> 

        {modalOpen && (
            <ProductModal {...productSelected} setModalOpen={setModalOpen}/>
        )} 
    </div>
  )
}
export default SearchResult