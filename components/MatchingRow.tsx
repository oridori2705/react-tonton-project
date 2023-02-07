import React, {useEffect, useState}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { ProdInfo } from '../pages/matchingPages/MatchingTypesPage';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import imgLogo from '../public/1.jpg';

type MyCompProps = {
   
    title: string,
    id: string;
 }

function Row(props:MyCompProps) {
    
    
    


    const [upLoadImage, setupLoadImage] = useState([])
    const [TonInResult, setTonInResult] = useState<ProdInfo[]>([
        {
            id: "1fs",
            productBName : "토피",
            productName : "와이드 데님 팬츠 (LIGHT BLUE)",
            productPrice : 38000,
            productRating : 5,  
            productLike : 153789,
            productImg : "https://image.msscdn.net/images/goods_img/20180914/858911/858911_6_500.jpg?t=20220628150414",
            productViews : 5677002
            },
            
            {
            id: "1f",
            productBName : "수아레",
            productName : "데일리 코듀로이 밴딩 팬츠 - 4 COLOR",
            productPrice : 38000,
            productRating : 4.8,  
            productLike : 121234,
            productImg : "https://image.msscdn.net/images/goods_img/20221013/2861160/2861160_2_500.png?t=20221026131316",
            productViews : 864567
            },
            {
            id: "2f",
            productBName: "무신사 스탠다드",
            productName : "스트레이트 데님 팬츠 [라이트 인디고] ",
            productPrice : 42390,
            productRating : 4.8,  
            productLike : 145213,
            productImg : "https://image.msscdn.net/images/goods_img/20210714/2028327/2028327_2_500.jpg?t=20210818115711",
            productViews : 344675
            },
            {
            id:"3f",
            productBName : "낫포너드",
            productName : "Banding One Tuck Wide Denim Pants - Deep Blue",
            productPrice : 32900,
            productRating : 4.7,  
            productLike : 124555,
            productImg : "https://image.msscdn.net/images/goods_img/20211018/2184087/2184087_3_500.jpg?t=20211028071454",
            productViews : 625433
            },
            {
            id:"4f",
            productBName : "브랜디드",
            productName : "1968 HIMALAYA JEANS [WIDE STRAIGHT]",
            productPrice : 62200,
            productRating : 4.2,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20200819/1555407/1555407_1_500.jpg?t=20220628154114",
            productViews : 926353
            },
            {
            id:"5f",
            productBName : "무신사 스탠다드",
            productName : "와이드 치노 팬츠 [베이지]",
            productPrice : 43900,
            productRating : 4.6,  
            productLike : 156673,
            productImg : "https://image.msscdn.net/images/goods_img/20190809/1115290/1115290_1_500.jpg?t=20190812132316",
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
    ])
    const [TonOnResult, setTonOnResult] = useState<ProdInfo[]>([
      {
          id: "1fs",
          productBName : "GAKKAI UNIONS",
          productName : "원턱 와이드 스웨트팬츠 그레이",
          productPrice : 36400,
          productRating : 4.7,  
          productLike : 153789,
          productImg : "https://image.msscdn.net/images/goods_img/20210906/2112059/2112059_1_500.jpg?t=20210909113606",
          productViews : 5677002
          },
          
          {
          id: "1f",
          productBName : "무신사 스탠다드",
          productName : "[유아인 착용 상품] 테이퍼드 히든 밴딩 크롭 슬랙스 [블랙]",
          productPrice : 39900,
          productRating : 4.9,  
          productLike : 121134,
          productImg : "https://image.msscdn.net/images/goods_img/20190910/1149328/1149328_10_500.jpg?t=20220125143718",
          productViews : 866433
          },
          {
          id: "2f",
          productBName: "굿라이프웍스",
          productName : "[기모선택] 이지 와이드 데님 팬츠 그레이 ",
          productPrice : 38430,
          productRating : 4.8,  
          productLike : 145213,
          productImg : "https://image.msscdn.net/images/goods_img/20210826/2092852/2092852_4_500.jpg?t=20221012160640",
          productViews : 344675
          },
          {
          id:"3f",
          productBName : "토피",
          productName : " 와이드 데님 팬츠 (DEEP GREY) ",
          productPrice : 32900,
          productRating : 4.7,  
          productLike : 124555,
          productImg : "https://image.msscdn.net/images/goods_img/20181025/890338/890338_8_500.jpg?t=20220628150451",
          productViews : 625433
          },
          {
          id:"4f",
          productBName : "ARCHIVE BOLD",
          productName : "939 LOGO SWEAT PANTS (BLACK)",
          productPrice : 79000,
          productRating : 4.2,  
          productLike : 156673,
          productImg : "https://image.msscdn.net/images/goods_img/20210304/1826978/1826978_1_500.jpg?t=20210304180630",
          productViews : 926353
          },
          {
          id:"5f",
          productBName : "어널리코드",
          productName : "사계절 쓰리턱 트레이닝팬츠 (2color) ",
          productPrice : 59250,
          productRating : 4.2,  
          productLike : 156673,
          productImg : "https://image.msscdn.net/images/goods_img/20220825/2744549/2744549_1_500.jpg?t=20220913175925",
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
  ])

    const [SearchResult, setSearchResult] = useState<ProdInfo[]>([
          { 
            id: "1fs",
            productBName : "",
            productName : "환절기 투웨이 후드집업 코디♥",
            productPrice : undefined,
            productRating : undefined,  
            productLike : undefined,
            productImg : "data:image/jpeg;base64,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",
            productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "",
              productName : "4계절활용가능한 훈남 후드 코디♥",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "https://static.lookpin.co.kr/20200323172138-41e3/09e0fb93e22253f95a5874eacef709ad.jpg?resize=880",
              productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "",
              productName : "남자 후드집업 코디 레이어드 최강 아이템",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDlfMjM5/MDAxNTY4MDI2NjA1Njk3.BAhRCQZMvPOy4S8tglPecvUkCe1MST1WNFWzIj2FyQYg.IOrR4yKsapExk5ePlyDnujd5bEtDMKg8tb35J7jgkgcg.JPEG.darigile/%EB%82%A8%EC%9E%90_%ED%9B%84%EB%93%9C%EC%A7%91%EC%97%85_%EC%BD%94%EB%94%94.jpg?type=w800",
              productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "",
              productName : "코디가 손쉬운 데일리 후드집업",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "https://static.lookpin.co.kr/20210124230108-7687/730150ae1770aac6237b2bffcc2e3b24.jpg?resize=880",
              productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "",
              productName : "남자 회색 후드집업 간편하게 코디하기",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMTJfMTUg/MDAxNDg0MjE5MjY4MTEw.2M422XRKHmPL3JT48UuOYUFRZoES18YYhZjY9gI3ZIIg.R52ROVmxLcdd86mPNWT56hGdZT4lJpNKkJOoMsEwtFsg.JPEG.realmainpark/KakaoTalk_20170112_183707797.jpg?type=w2",
              productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "",
              productName : "썸남- 블랙 후드집업 코디!... |FaceBook",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjNc662CutfNk98Nzz23eOgEmM8Bgo_v8J27jDqN-uErITkC_TOlFMf2MiP9BfmvE__o&usqp=CAU",
              productViews : 5677002
            },
            
    ])
    const [CommunityResult, setCommunityResult] = useState<ProdInfo[]>([
        {
            id: "1fs",
            productBName : "사용자 추천 코디",
            productName : "오늘의 룩은?",
            productPrice : undefined,
            productRating : undefined,  
            productLike : undefined,
            productImg :  "/img/1.JPG",
            productViews : 5677002
            },
            
            {
              id: "1fs",
              productBName : "사용자 추천 코디",
              productName : "손쉽게 꾸미는 법",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "/img/2.JPG",
              productViews : 5677002
              },
            {
                id: "1fs",
                productBName : "사용자 추천 코디",
                productName : "편하게 즐겨",
                productPrice : undefined,
                productRating : undefined,  
                productLike : undefined,
                productImg : "/img/3.JPG",
                productViews : 5677002
            },
            {
              id: "1fs",
              productBName : "사용자 추천 코디",
              productName : "꾸안꾸로 완성",
              productPrice : undefined,
              productRating : undefined,  
              productLike : undefined,
              productImg : "/img/4.JPG",
              productViews : 5677002
          },
          {
            id: "1fs",
            productBName : "사용자 추천 코디",
            productName : "매력적인 코디",
            productPrice : undefined,
            productRating : undefined,  
            productLike : undefined,
            productImg : "/img/5.JPG",
            productViews : 5677002
        },
        {
          id: "1fs",
          productBName : "사용자 추천 코디",
          productName : "가볍게 입자",
          productPrice : undefined,
          productRating : undefined,  
          productLike : undefined,
          productImg : "/img/7.JPG",
          productViews : 5677002
      },

    ])
    const [SimularResult, setSimularResult] = useState<ProdInfo[]>([
        {
            id: "1fs",
            productBName : "토피",
            productName : "2WAY 스웻 후드집업(MELANGE GREY)",
            productPrice : 37000,
            productRating : 4.7,  
            productLike : 13789,
            productImg : "https://image.msscdn.net/images/goods_img/20210204/1778404/1778404_1_500.jpg?t=20220628160331",
            productViews : 5677002
            },
            
            {
            id: "1f",
            productBName : "무신사스탠다드",
            productName : "후디드 스웨트 집업[멜란지 그레이]",
            productPrice : 43900,
            productRating : 4.5,  
            productLike : 12134,
            productImg : "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productViews : 866433
            },
            {
            id: "2f",
            productBName: "토피",
            productName : "2WAY 스웻 후드집업(Black)",
            productPrice : 37000,
            productRating : 4.8,  
            productLike : 14513,
            productImg : "https://image.msscdn.net/images/goods_img/20210204/1778408/1778408_1_500.jpg?t=20220628160331",
            productViews : 344675
            },
            {
            id:"3f",
            productBName : "SPAO",
            productName : "[프렌치테리]루즈핏 2-WAY 후드집업",
            productPrice : 32900,
            productRating : 4.7,  
            productLike : 12455,
            productImg : "https://image.msscdn.net/images/goods_img/20220718/2668986/2668986_70_500.jpg?t=20221108102949",
            productViews : 625433
            },
            {
            id:"4f",
            productBName : "와릿이즌",
            productName : "엔젤 와펜 집업 후드 그레이",
            productPrice : 59250,
            productRating : 4.2,  
            productLike : 51983,
            productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
            productViews : 926353
            },
            {
            id:"5f",
            productBName : "라퍼지스토어",
            productName : "에센셜 오버핏 후드집업_Melange Gray ",
            productPrice : 32900,
            productRating : 4.2,  
            productLike : 3946,
            productImg : "https://image.msscdn.net/images/goods_img/20220823/2735191/2735191_1_500.jpg?t=20220829234325",
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
    ])
   
    
    const [MainSwiper, setMainSwiper] = useState<ProdInfo[]>([]);

    useEffect(() => {
        if(props.id=="tonOn")
        {
            setMainSwiper(TonOnResult);
        }
        else if(props.id=="tonIn")
        {
            setMainSwiper(TonInResult);
        }
        else if(props.id=="OOTD")
        {
            setMainSwiper(SearchResult);
        }
        else if(props.id=="Community")
        {
            setMainSwiper(CommunityResult);
        }
        else if(props.id=="Simular")
        {
            setMainSwiper(SimularResult);
        }
        }, []);

  return (
        <section className="ml-20">
        <div className='text-3xl font-bold text-white m-5'>
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
          <div id={props.id} className="flex overflow-x-scroll overflow-y-hidden scroll-smooth ">
            {MainSwiper.map((pro,index) => (
              <SwiperSlide>
                <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[16rem] h-[28rem] bg-white rounded-3xl shadow-lg shadow-gray-300'>
                    <div className='absolute left-2 top-4 w-5 text-center border border-red-400 bg-black text-white'>
                        {index+1}
                    </div>
                    
                    <img
                    key={pro.id}
                    style={{ padding: "10px 0" }}
                    className=" w-full max-h-80 transition-transform rounded-3xl "
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