import React, { useCallback, useDebugValue, useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, where, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase/client";
import { DocumentData } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

type MyCompProps = {
   
  title: string,
  id: string;
}

const Main_Rank_Card = (props:MyCompProps) => {
  type clothType = {
    detail_tag: string;
    major_tag: string;
    name: string;
    picture_URL: string;
    price: number;
    site_URL: string;
    site_name: string;
    views: number;
  };

  const [MusinsaClothes, setMusinsaClothes] = useState<clothType[]>([]);
  const [HiverClothes, setHiverClothes]=useState<clothType[]>([]);
  const [LookPinClothes, setLookPinClothes]=useState<clothType[]>([]);
  const [CMClothes, setCMClothes]=useState<clothType[]>([]);

  const arr: clothType[] = [];
  const usersCollectionRef = collection(db, "의류");

  const formatter = new Intl.NumberFormat('ko',{
    style: 'currency',
    currency: 'krw'
  })

  useEffect(() => {
    fetchData();
  }, []);

  const inputDaata =  async (q: any) => {
    const data = await getDocs(q);
    data.forEach((doc: DocumentData) => {
      arr.push(doc.data());
    });
    setMusinsaClothes(arr);
  }

  const fetchData = async () => {  
    switch(props.id) {
      case "MusinsaN":
        const Muq  = query(
          usersCollectionRef,
          where("site_name", "==", "musinsa"),
          //orderBy("price", "asc"),
          limit(10)
        );
        await inputDaata(Muq)

      case "HiverN":
        const Hiq  = query(
          usersCollectionRef,
          where("site_name", "==", "hiver"),
          //orderBy("price", "asc"),
          limit(10)
        );
        await inputDaata(Hiq)

      case "LookpinN":
        const Loq  = query(
          usersCollectionRef,
          where("site_name", "==", "lookpin"),
          //orderBy("price", "asc"),
          limit(10)
        );
        await inputDaata(Loq)
    }

    // if(props.id=="MusinsaN")
    // {
      
    //   const data = await getDocs(Muq);
    //   data.forEach((doc: DocumentData) => {
    //     arr.push(doc.data());
    //   });
    //   setMusinsaClothes(arr);
    // }
    // else if(props.id=="HiverN"){
    
      
    //   const data = await getDocs(Hiq);
    //   data.forEach((doc: DocumentData) => {
    //     arr.push(doc.data());
    //   });
    //   setMusinsaClothes(arr);
    // }
    // else if(props.id=="LookpinN"){
    // }
    
  };

  return (

    <section className="ml-20 font-Pretendard">
        <div className='text-xl font-bold mb-5'>
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
            {MusinsaClothes.map((pro,index) => (
              <SwiperSlide>
                <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[16rem] h-[28rem] bg-white rounded-3xl shadow-lg shadow-gray-300'>
                    <div className='absolute left-2 top-4 w-5 text-center border border-red-400 bg-black text-white'>
                        {index+1}
                    </div>
                    <img
                    className="w-[16rem]"
                    src={pro.picture_URL}/>
                   
                    <div className='flex flex-col mx-2 my-2'>
                        <span className='font-bold text-sm'>
                            {pro.name}
                        </span>
                        <span className='text-xl'>
                            {formatter.format(pro.price)}
                        </span>
                          <Link className="text-blue-400" href={`${pro.site_URL}`}>
                            자세히 보기
                          </Link>
                    </div>
                </div>
                
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
  
        
      </section>

  );
};

export default Main_Rank_Card;
