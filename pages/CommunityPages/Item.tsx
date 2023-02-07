import React, { useState,useEffect } from 'react'
import Head from 'next/head'

import Gnb from '../../components/Gnb'
import Headers from '../../components/Headers'
import Link from 'next/link'
import { useSelector } from 'react-redux'

interface CommunityPost{
    postLike : number,
    postName : string,
    postTag : string,
    postTime: number,
    postWriter : string,
    postContents:string,
    id :string,

    postImageHat:string,
    postImageTop:string,
    postImageBottom:string,
    postImageShoes:string,
    
}

interface Props{ 
    arr : CommunityPost;
}






function Item({arr}:Props) {
    const [show, setShow] = useState<boolean>(false);
    
    const login_status = useSelector((state) => {
        //@ts-ignore
        return state.authToken.authenticated;
      });
    /*function getData() {
        Axios.get(API_URL).then((res)=>{
            console.log(res.data);
            setList(res.data) =>useState 만들어서 넣기
        });
    } useEffect에 getData();*/

    useEffect(() => {
        window.addEventListener("scroll", () => {
            
            if (window.scrollY > 400) {
              setShow(true);
            } else {
              setShow(false);
            }
          });
      
          return () => {
            window.removeEventListener("scroll", () => {});
          };
    }, [])

  return (
    <div className='font-Pretendard'>
         <Head>
        <title>코디위키 - TONTON</title>
        </Head>
        <Headers />
        <Gnb />
        <div className='flex'>
            <div className='absolute w-full h-[17rem] bg-black bg-opacity-50'>
            
            </div>

            <img
                className='object-cover w-full h-[17rem]'
                src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png" 
            />
        </div>
        <div className='flex relative h-full w-full pl-[20rem]  '>
            <div className='flex absolute -top-[5rem] mx-[3rem] mt-[2rem]'>
                    <div className={`w-[25rem] h-[30rem] bg-slate-100 divide-y-4 divide-slate-400/25 border border-gray-200 shadow-xl ${
                        show && "fixed -top-[1rem]"}`}>
                        <div className='h-[10rem]'>
                        {login_status ? (
              <div className="h-[10rem]">
                <button className="relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl">
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="h-[10rem]">
                <button
                  onClick={() => router.push("/login")}
                  className="relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl"
                >
                  로그인
                </button>
              </div>
            )}
                        </div>
                        <div className='flex-row pl-5'>
                            <div className='text-gray-400 mt-3'>
                                <span>
                                    홈
                                </span> 
                            </div>
                            <div className='pl-5 my-3'>
                                <button>
                                    전체
                                </button>
                            </div>
                            
                        </div>
                        <div className='flex-row pl-5'>
                            <div className='text-gray-400 mt-3'>
                                    <span>
                                        커뮤니티
                                    </span> 
                            </div>
                            <div className='pl-5 my-3'>
                                <button>
                                    사용자 추천 코디
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex-col absolute left-[28rem]'>
                        <div className='w-[55rem] h-full bg-slate-100 border border-gray-200  shadow-xl'>
                            <div className='flex-col'>
                                <div className='text-3xl'>
                                    <p>
                                        {arr?.postName}
                                    </p>
                                   
                                </div>
                                <div className='flex flex-row justify-between m-4 '>
                                    <div className='flex flex-row  divide-x-2'>
                                        <div className='w-[9rem] text-center'>
                                            {arr?.postTag}
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            {arr?.postTime}시간전
                                        </div>
                                        <div className='w-[6rem] text-center'>
                                            {arr?.postWriter}
                                        </div>
                                    </div>
                                    <div className='flex flex-row  divide-x-2'>
                                        <div className='w-[5rem] text-center'>
                                            조회수
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            댓글
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            추천
                                        </div>
                            
                                    </div>    
                                                                  
                                </div>
                            </div>            
                            
                                <div className='relative bg-slate-100 h-[55rem]'>
                                    <div className=' absolute left-[27rem] top-[10rem] w-[5rem] h-[5rem] rounded-full bg-gray-500'/* 얼굴 *//>
                                    <div className=' absolute left-[26rem] top-[16rem] w-[7rem] h-[15rem] rounded bg-gray-500'/*몸 */  />
                                    <div className=' absolute left-[24rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500'/*팔 이음새 */ />
                                    <div className=' absolute left-[23.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500'/*팔*/ />
                                    <div className=' absolute left-[32rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500'/*팔 이음새 */ />
                                    <div className=' absolute left-[33.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500'/*팔*/ />
                                    <div className=' absolute left-[26rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500'/*왼다리*/ />
                                    <div className=' absolute left-[30rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500'/*오른다리*/ />



                                    <div className='absolute left-[44rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <img
                                                src={arr?.postImageHat}
                                            />
                                        </div>
                                    </div>

                                    <div className='absolute left-[44rem] top-[20rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <img
                                                src={arr?.postImageTop}
                                            />
                                            
                                        </div>
                                    </div>

                                    <div className='absolute left-[44rem] top-[40rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <img
                                                src={arr?.postImageBottom}
                                            />
                                        </div>
                                    </div>                                                   


                                
                                    <div className='absolute top-[35rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <img
                                                src={arr?.postImageShoes}
                                            />
                                        </div> 
                                    </div>                                                            


                                </div>
                                <div className='w-full h-full mb-[5rem]'>
                                    <span className='break-words text-xl'>{arr?.postContents}</span>
                                </div>
                                    
                            
                        </div>
                        
                        
                        <div className='bg-slate-100 mt-[3rem] mb-[10rem]'>
                            <div className='p-[2rem]'>
                                <span className=' text-2xl'>댓글</span>
                            </div>
                            <div className='flex flex-row justify-between pl-6 pr-6 border-b-2 border-slate-300'>
                                <div className='relative top-0.5  w-[3rem] h-[3rem] font-bold border-b-4 border-indigo-500'>
                                    <span className=''>최신순</span>
                                </div>
                                <div className='bg-indigo-500 h-[2rem] rounded-lg text-white shadow-md'>
                                    <button>
                                        댓글 작성하기
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col divide-y-2 divide-slate-300' >
                                <div className='p-5'>
                                    <span>우리엄마된장찌개</span>
                                    <div className='p-5'>
                                    와 개이뻥
                                    </div>
                                </div>
                                <div className='p-5'>
                                    <span>우리엄마된장찌개</span>
                                    <div className='p-5'>
                                    와 개이뻥
                                    </div>
                                </div>
                                <div className='p-5'>
                                    <span>우리엄마된장찌개</span>
                                    <div className='p-5'>
                                    와 개이뻥
                                    </div>
                                </div>
                                <div className='p-5'>
                                    <span>우리엄마된장찌개</span>
                                    <div className='p-5'>
                                    와 개이뻥
                                    </div>
                                </div>

                                
                            </div>
                            
                        </div>
                        
                    
                    </div>
                    

            </div>  
        </div>
    </div>
  )
}

export default Item