import React, { useCallback, useRef, useState } from "react";
import Head from "next/head";
import Gnb from "../../components/Gnb";
import Headers from "../../components/Headers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dragdrop from "./Dragdrop";
import axios from "axios";
import { useRouter } from "next/router";

function CommunityPostWrite() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string>();
  const [imageBoolean, setImageBoolean] = useState<boolean>(false);
  const [textTitle, settextTitle] = useState("");
  const [textContents, settextContents] = useState("");
  const router = useRouter();
  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImages(URL.createObjectURL(e.target.files[0]));
    setImageBoolean(true);
  };

  const handleCancel = (e: any) => {
    window.location.reload();
    setImageBoolean(false);
  };
  const textTitleHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settextTitle(e.target.value);
  };
  const textContentsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settextContents(e.target.value);
  };

  const handle_TagButtonClock = () => {};

  const writePost = async () => {
    const url = "http://210.125.212.192:8666/api/v1/articles";

    await axios
      .post(url, {
        Headers: "Content-Type : application/json",
        title: textTitle,
        content: textContents,
        imageUrls: ["[의류의 imageUrl값]", "www.naver1.com", "www.naver2.com"],
      })
      .then((response) => {
        console.log(response.data);
        router.push("/CommunityPages/Community");
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
      <div className="absolute h-full w-full pl-[15rem]   ">
        <div className="flex absolute -top-[5rem]">
          <div className="flex-col">
            <div className="flex mx-[3rem] mt-[2rem] w-[50rem] h-[60rem] bg-slate-100 shadow-xl">
              <div className="absolute text-3xl text-white left-10 -top-[2rem]">
                <span>톤톤 커뮤니티</span>
              </div>
              <div>
                <div className="text-center">
                  <span className="text-2xl">꾸며보세요!</span>
                </div>

                <div className="relative -left-[5rem]">
                  <div
                    className=" absolute left-[27rem] top-[10rem] w-[5rem] h-[5rem] rounded-full bg-gray-500" /* 얼굴 */
                  />
                  <div
                    className=" absolute left-[26rem] top-[16rem] w-[7rem] h-[15rem] rounded bg-gray-500" /*몸 */
                  />
                  <div
                    className=" absolute left-[24rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500" /*팔 이음새 */
                  />
                  <div
                    className=" absolute left-[23.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500" /*팔*/
                  />
                  <div
                    className=" absolute left-[32rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500" /*팔 이음새 */
                  />
                  <div
                    className=" absolute left-[33.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500" /*팔*/
                  />
                  <div
                    className=" absolute left-[26rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500" /*왼다리*/
                  />
                  <div
                    className=" absolute left-[30rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500" /*오른다리*/
                  />
                </div>
              </div>
            </div>
            <div className="flex-col mx-[3rem] mt-[2rem] w-[50rem] h-auto mb-[10rem] bg-slate-100 shadow-xl">
              <div className="pt-[2rem] px-10 w-full ">
                <input
                  className="border w-full h-[3rem] text-lg px-7"
                  type="text"
                  value={textTitle}
                  onChange={textTitleHandleChange}
                  placeholder="제목"
                />
              </div>
              <div className="pt-[2rem] px-10 w-full pb-[3rem] ">
                <input
                  className="border w-full h-[20rem] text-lg px-7 text-start"
                  type="text"
                  value={textContents}
                  onChange={textContentsHandleChange}
                  placeholder="내용"
                />
              </div>

              <div className="flex flex-row-reverse m-[2rem] pb-[2rem]">
                <button
                  onClick={writePost}
                  className="bg-slate-500 rounded-lg w-[8rem] text-white"
                >
                  작성하기
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="mt-[2rem] w-[12rem] bg-slate-100 shadow-xl divide-y-2">
              <div className="text-center my-5">
                <span className="font-bold ">찜 목록</span>
              </div>

              <div className="flex">
                <DndProvider backend={HTML5Backend}>
                  <div>
                    <Dragdrop />
                  </div>
                </DndProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPostWrite;
