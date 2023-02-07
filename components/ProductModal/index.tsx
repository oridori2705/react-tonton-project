import React,{Dispatch,SetStateAction} from 'react'
//"strictNullChecks": false tsconfing에 이거 써서 prosp 작동됨
interface resultItemProps{
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
    setModalOpen : Dispatch<SetStateAction<boolean>>
}


const ProductModal = (product:resultItemProps) => {
  return (
    <div className="z-50 absolute">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50  flex justify-center ">
        <div className="relative left-5 inset-14 w-1/2 h-2/3 max-w-3xl shadow-2xl shadow-indigo-800/50 bg-white border-2 border-indigo-800 overflow-hidden rounded">
          <span onClick={() => product.setModalOpen(false)} 
          className="absolute right-20 top-10 cursor-pointer z-40 w-7 h-7 text-center rounded-full border text-white border-gray-500 bg-black">
            X
          </span>
          <div className='relative left-20 top-10'>
            <div className='w-72'>
              <span className='text-gray-500'>Product Name</span>
              <h2 className='font-bold text-2xl'>
                {product.name}
              </h2>
            </div>
            <img
              className=" w-64 h-auto "
              src={product.pictureUrl}
              alt="modal__poster-img"
            />
          </div>

          <div className='relative left-1/2 bottom-72 '>
            <div className='w-56 font-bold border-2 border-white border-b-gray-300'>
              <span className=''>제품 정보</span>
            </div>
            <div className='my-4 text-sm'>
              <span>브랜드 </span>
              <span className='mx-16 font-bold'>{product.siteName}</span>
            </div>
            <div className='my-4 text-sm '>
              <span>좋아요수</span>
              <span className='mx-12 font-bold  text-red-500'>❤{}</span>
            </div>
            <div className='my-4 text-sm'>
              <span>조회수   </span>
              <span className='mx-14 font-bold'>{product.views} 회</span>
            </div>    
            <div className='my-4 text-sm'>
              <span>평점</span>
              <span className='mx-20 font-bold text-orange-400'>{}</span>
            </div>
            <div>
              <span className='m-1 text-xs font-bold text-gray-500 text-center border rounded'>후드</span>
              <span className='m-1 text-xs font-bold text-gray-500 text-center border rounded'>오버핏</span>
              <span className='m-1 text-xs font-bold text-gray-500 text-center border rounded'>후드집업</span>
              <span className='m-1 text-xs font-bold text-gray-500 text-center border rounded'>2WAY후드집업</span>
            </div>
            <div className='my-16 py-5 w-56 border-2 border-white border-t-gray-300'>
              <span className='mr-5'>판매가   </span>
              <span className='font-bold'>{product.price} 원</span>
            </div>
          </div>
          <div className='relative flex left-[9rem] bottom-64'>
            
            <button className='border-2 rounded w-1/2 h-16 bg-indigo-800 text-white font-bold border-black hover:bg-indigo-500'>
              페이지로 이동하기
            </button>
            <button className='border-2 rounded  w-[5rem] h-[4rem] mx-5 bg-red-600 text-white font-bold border-black hover:bg-red-400'>
              찜하기
            </button>
          </div>

          
          
        </div>
      </div>
    </div>
  )
}
export default ProductModal