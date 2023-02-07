import React, { useState, useEffect } from "react";
import Head from "next/head";

import Gnb from "../../components/Gnb";
import Headers from "../../components/Headers";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

interface CommunityPost {
  id: number,
  title: string,
  content: string,
  likeCount: number,
  writeDate: string,
  category: string,
  memberInfoDto: {
    name: string,
    nickname: string,
    loginId: string,
  }
}

function Community() {
  const [show, setShow] = useState<boolean>(false);
  const [article, setArticle] = useState<CommunityPost[]>();
  /*function getData() {
        Axios.get(API_URL).then((res)=>{
            console.log(res.data);
            setList(res.data) =>useState 만들어서 넣기
        });
    } useEffect에 getData();*/

  useEffect(() => {
    fetchArticle();
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
  }, []);


  const fetchArticle = async () => {
    const url = "http://210.125.212.192:8666/api/v1/articles";
    axios.get(url).then(response=>{
      setArticle(response.data.data)
      console.log(article)
    }).catch(e => {
       console.log(e);
    })

  }
 
  const login_status = useSelector((state) => {
    //@ts-ignore
    return state.authToken.authenticated;
  });

  const router = useRouter();

  return (
    <div className="font-Pretendard">
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
      <div className="flex">
        <div className="absolute w-full h-[17rem] bg-black bg-opacity-50"></div>

        <img
          className="object-cover w-full h-[17rem]"
          src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
        />
      </div>
      <div className="flex relative h-full w-full pl-[20rem]  ">
        <div className="flex relative -top-[5rem]">
          <div
            className={` mx-[3rem] mt-[2rem] w-[25rem] h-[30rem] bg-slate-100 divide-y-4 divide-slate-400/25 border border-gray-200 shadow-xl ${
              show && "fixed -top-[2rem]"
            }`}
          >
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
            <div className="flex-row pl-5">
              <div className="text-gray-400 mt-3">
                <span>홈</span>
              </div>
              <div className="pl-5 my-3">
                <button>전체</button>
              </div>
            </div>
            <div className="flex-row pl-5">
              <div className="text-gray-400 mt-3">
                <span>커뮤니티</span>
              </div>
              <div className="pl-5 my-3">
                <button>사용자 추천 코디</button>
              </div>
            </div>
          </div>

          <div className="flex-col absolute left-[30rem]">
            <div className="mt-[2rem] w-[55rem] bg-slate-100 border border-gray-200  shadow-xl">
              <div className="flex-col space-y-[1rem]">
                <div className="flex justify-between ">
                  <div className="m-3">
                    <span className="font-bold text-xl">전체</span>
                  </div>
                  {login_status ? (
                    <div className="m-3">
                      <Link href="./CommunityPostWrite">
                        <button className="bg-blue-400 w-[5rem] rounded-2xl">
                          글쓰기
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="m-3">
                      <button
                        onClick={() => alert("먼저 로그인 해 주세요.")}
                        className="bg-blue-400 w-[5rem] rounded-2xl"
                      >
                        글쓰기
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-between px-[10rem] pb-5">
                  <div>인기</div>
                  <div>최신</div>
                  <div>Top</div>
                  <div>10주</div>
                </div>
              </div>
            </div>
            <div className="flex-col mt-[2rem] w-[55rem] h-full bg-slate-100 shadow-xl divide-y-2 border border-gray-200  divide-slate-400/25">
              {article && article.map((post) => (
                <div className="flex w-full h-[10rem]">
                  <div className="w-[6rem] h-[6rem]">
                    <div className="relative left-10 top-10">
                      <p>🔺</p>
                      <p>{post.likeCount}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex-col mt-7 ml-2 w-[40rem]">
                      <div className="my-1 text-lg">
                        <Link href={`./${post.id}`}>
                          <button>{post.title}</button>
                        </Link>
                      </div>
                      <div className="flex divide-x text-sm mt-12 -ml-3 text-gray-400">
                        <div className="w-[9rem] text-center">
                          <span>{post.category}</span>
                        </div>
                        {/* <div className="w-[5rem] text-center">
                          <span>{}시간전</span>
                        </div> */}
                        <div className="w-[5rem] text-center">
                          <span>{post.memberInfoDto.nickname}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 w-[8rem] h-[10rem] bg-white ">
                      <div>
                        <img src={''} />
                      </div>
                      <div>
                        <img src={''} />
                      </div>
                      <div>
                        <img src={''} />
                      </div>
                      <div>
                        <img src={''} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
