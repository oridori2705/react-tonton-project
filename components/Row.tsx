import React, {useEffect, useState}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type MyCompProps = {
   
    title: string,
    id: string;
 }
function Row(props:MyCompProps) {
    
    interface ProdInfo{
        id:string,
        productImg: string,
        productName:string,
        productBName: string,
        productPrice: number,
        productRating : number,
        productLike :number,
        productViews:number
    }
    const productMainResult : ProdInfo []=[
        {
            id: "1fs",
            productBName : "토피",
            productName : "2WAY 스웻 후드집업(MELANGE GREY)",
            productPrice : 37000,
            productRating : 4.7,  
            productLike : 153789,
            productImg : "https://image.msscdn.net/images/goods_img/20210204/1778404/1778404_1_500.jpg?t=20220628160331",
            productViews : 5677002
            },
            
            {
            id: "1f",
            productBName : "무신사스탠다드",
            productName : "후디드 스웨트 집업[멜란지 그레이]",
            productPrice : 43900,
            productRating : 4.5,  
            productLike : 121134,
            productImg : "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productViews : 866433
            },
            {
            id: "2f",
            productBName: "토피",
            productName : "2WAY 스웻 후드집업(Black)",
            productPrice : 37000,
            productRating : 4.8,  
            productLike : 145213,
            productImg : "https://image.msscdn.net/images/goods_img/20210204/1778408/1778408_1_500.jpg?t=20220628160331",
            productViews : 344675
            },
            {
            id:"3f",
            productBName : "SPAO",
            productName : "[프렌치테리]루즈핏 2-WAY 후드집업",
            productPrice : 32900,
            productRating : 4.7,  
            productLike : 124555,
            productImg : "https://image.msscdn.net/images/goods_img/20220718/2668986/2668986_70_500.jpg?t=20221108102949",
            productViews : 625433
            },
            {
            id:"4f",
            productBName : "와릿이즌",
            productName : "엔젤 와펜 집업 후드 그레이",
            productPrice : 59250,
            productRating : 4.2,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
            productViews : 926353
            },
            {
            id:"5f",
            productBName : "와릿이즌",
            productName : "엔젤 와펜 집업 후드 그레이",
            productPrice : 59250,
            productRating : 4.2,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
            productViews : 866433
            },
            {
            id:"6f",
            productBName: "와릿이즌",
            productName : "엔젤 와펜 집업 후드 그레이",
            productPrice : 59250,
            productRating : 4.2,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
            productViews : 866433
            },
            {
            id:"7f",
            productBName: "와릿이즌",
            productName : "엔젤 와펜 집업 후드 그레이",
            productPrice : 59250,
            productRating : 4.2,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
            productViews : 866433
            }
    ]
    const [MainRank, setMainRank] = useState<ProdInfo[]>([]);

    useEffect(() => {
        setMainRank(productMainResult);
        }, []);

  return (
        <section className="ml-20">
        <div className='text-xl font-bold'>
            <h2>{props.title}</h2>
        </div>
        
        <Swiper 
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={false} // loop 기능을 사용할 것인지
          breakpoints={{
            1378: {
              slidesPerView: 6, // 한번에 보이는 슬라이드 개수
              slidesPerGroup: 6, // 몇개씩 슬라이드 할지
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          navigation  // arrow 버튼 사용 유무 
          // pagination={{ clickable: false }}
          className="h-[30rem] "
        >
          <div id={props.id} className="flex overflow-x-scroll overflow-y-hidden scroll-smooth">
            {MainRank.map((pro,index) => (
              <SwiperSlide>
                <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[16rem] h-[28rem] bg-white rounded-3xl shadow-lg shadow-gray-300'>
                    <div className='absolute left-2 top-4 w-5 text-center border border-red-400 bg-black text-white'>
                        {index+1}
                    </div>
                    
                    <img
                    key={pro.id}
                    style={{ padding: "10px 0" }}
                    className=" w-full max-h-80 transition-transform rounded-xl "
                    src={pro.productImg }
                    />
                    <div className='flex flex-col  mx-4'>
                        <span className='font-bold text-sm'>
                            {pro.productBName}
                        </span>
                        <span className='text-xl'>
                            {pro.productName}
                        </span>
                        <span className='font-bold my-1'>
                            {pro.productPrice}
                        </span>
                        <span className=''>
                            {pro.productRating}
                        </span>
                    </div>
                </div>
                
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
  
        
      </section>
  )
}

export default Row