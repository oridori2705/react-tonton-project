import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from 'react-redux';
import MatchingTypesPage from "../../pages/matchingPages/MatchingTypesPage";
import { DOWNLOAD_IMAGE } from "../../Store/Auth"
import { SELECT_MAJORTAG } from "../../Store/Auth"
import { FETCH_COLOR_C } from "../../Store/Auth"
import { FETCH_COLOR_S } from "../../Store/Auth"
import { FETCH_COLOR_V } from "../../Store/Auth"
/*
import ColorFilter from "./ColorFilter";
<div className="mt-10">
              <span>업로드한 의류의 색상을 선택해주세요.</span>
              <fieldset className="flex ">
                {TagButtonColorName.map((tagButton2, i) => (
                  <label className={`${tagColorSelected==tagButton2 ? 'border-2 border-black' : ''} w-[3rem]  mx-2 `}>
                    <input
                    type="radio"
                    value={tagButton2}
                    key={i}
                    name="color"
                    checked={tagColorSelected==tagButton2}
                    onChange={handleClickRadioButton2}
                    className="hidden"
                    />
                    <ColorFilter
                    color={tagButton2}/>
                  </label>
                  ))}
                
              </fieldset>
            </div> */

/*ColorFilter.tsx
import React,{useState, useEffect} from 'react'

interface Ptype{
    color:string
}

function ColorFilter({color}:Ptype) {
    const [Cshape, setCshape] = useState<string>("")
    useEffect(() => {
        if(color=="검정색")
        {
            setCshape("bg-black")
        }
        else if(color=="빨강색")
        {
            setCshape("bg-red-600")
        }
        else if(color=="주황색")
        {
            setCshape("bg-orange-600")   
        }
        else if(color=="노랑색")
        {
            setCshape("bg-yellow-700")   
        }
        else if(color=="초록색")
        {
            setCshape("bg-green-600")   
        }
        else if(color=="파랑색")
        {
            setCshape("bg-blue-600")   
        }
        else if(color=="남색")
        {
            setCshape("bg-slate-600")   
        }
        else if(color=="보라색")
        {
            setCshape("bg-purple-600")   
        }
        else if(color=="흰색")
        {
            setCshape("bg-white")   
        }
        else if(color=="회색")
        {
            setCshape("bg-gray-400")   
        }

    }, [])
  return (
    <div>
        <p className={`border border-black  w-[2rem] h-[2rem] mx-1 my-2 ${Cshape} rounded-full hover:opacity-70 `}></p>
    </div>
  )
}

export default ColorFilter

*/
import DetailedType from "./DetailedType";

const ImageInput = () => {
  const cookie = new Cookies();
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string>();
  const [uploadImages, setUploadImages] = useState<File>();
  const [base64image, setbase64image] = useState<any>();
  const [imageBoolean, setImageBoolean] = useState<boolean>(false);
  const [tagTypeSelected, settagTypeSelected] = useState<string>();
  const [tagColorSelected, settagColorSelected] = useState<string>();
  const [tagColorClicked, setTagColorClicked] = useState<boolean>(false);
  const [downloadImage, setDownloadImage] = useState<any>();
  const TagButtonTypeName: string[] = [
    "모자",
    "하의",
    "상의",
    "신발",
    "아우터",
  ];
  const TagButtonColorName: string[] = [
    "흰색",
    "회색",
    "검정색",
    "빨강색",
    "주황색",
    "노랑색",
    "초록색",
    "파랑색",
    "남색",
    "보라색",
  ];

  const router = useRouter()
  const dispatch = useDispatch();

  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImages(URL.createObjectURL(e.target.files[0]));
    const files = (e.target.files as FileList)[0];
    const files2 = e.target.files[0];
    const reader = new FileReader();
    
    if (files2 === undefined) {
      return;
    }
    setUploadImages(files2);

    try {
      reader.readAsDataURL(files2);
      reader.onloadend = () => {
        const base64data = reader.result;
        setbase64image(base64data);
        console.log(base64image)
      };
    } catch (e) {
      console.log(e);
    }

    setImageBoolean(true);
  };

  const handleCancel = (e: any) => {
    window.location.reload();
    setImageBoolean(false);
  };

  const handleClickRadioButton2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagColorClicked(true);
    settagColorSelected(e.target.value);
  };

  const handleClickRadioButton1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    settagTypeSelected(e.target.value);
  };

  const encodeFileToBase64 = async () => {
    const url = "http://210.125.212.192:8999/image_post";
    await axios.post(url, {
      img: base64image,
      Headers: "Content-Type : application/json",
    }).then(response => {
      console.log(response.data);
      setDownloadImage("data:image/;base64,"+response.data.img);
      router.push('/matchingPages/MatchingTypesPage')
      dispatch(DOWNLOAD_IMAGE("data:image/;base64,"+response.data.img));
      dispatch(SELECT_MAJORTAG(tagTypeSelected));
      dispatch(FETCH_COLOR_C(response.data.color))
      dispatch(FETCH_COLOR_S(response.data.saturation))
      dispatch(FETCH_COLOR_V(response.data.value))
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div className="font-Pretendard ">
      <div
        className={`${imageBoolean ? "hidden" : ""} text-center mt-6 text-2xl`}
      >
        <span className="font-bold">코디</span>
        <span> 아직도 망설이시나요?</span>
        <br />
        <span className="font-bold">이미지 업로드</span>
        <span>를 클릭해 코디를 원하는</span>
        <br />
        <span>옷 이미지를 업로드 해 보세요.</span>
      </div>
      <div className="flex items-center justify-center flex-row m-2">
        <div className="">
          <input
            ref={fileRef}
            name="file"
            type="file"
            id="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleChange}
            className="hidden"
          />

          <button
            className={`${
              imageBoolean ? "hidden" : ""
            } text-2xl my-5 w-[600px] h-[600px] border-dashed border-2 rounded border-slate-900`}
            onClick={handleClick}
          >
            이미지 업로드
          </button>
          {images && (
            <Image
              alt="test"
              src={images}
              width={600}
              height={600}
              className="my-10 object-cover"
            />
          )}
        </div>
        <div
          className={`${
            imageBoolean ? "" : "hidden"
          } flex flex-col h-[600px] justify-center items-center ml-5`}
        >
          <div className="text-3xl py-5">
            업로드한 의류의 태그를 선택해 주세요.
          </div>
          <div className="flex flex-col">
            <div>
              <span>업로드한 의류의 종류를 선택해주세요.</span>
              <fieldset className="flex mt-5  ">
                {TagButtonTypeName.map((tagButton1, i) => (
                  <label
                    className={`${
                      tagTypeSelected == tagButton1
                        ? "text-cyan-400 font-bold"
                        : ""
                    }  w-[3rem] text-center  mx-2 `}
                  >
                    <input
                      type="radio"
                      value={tagButton1}
                      key={i}
                      name="type"
                      checked={tagTypeSelected == tagButton1}
                      onChange={handleClickRadioButton1}
                      onClick={() => settagTypeSelected(tagButton1)}
                      className="hidden"
                    />

                    {tagButton1}
                  </label>
                ))}
              </fieldset>
              <DetailedType type={tagTypeSelected} />
            </div>
          </div>

          <div className="w-full font-bold mt-auto"> 
            <button
              className="bg-slate-800 text-white w-full p-2 rounded"
              onClick={() => encodeFileToBase64()}
            >
              메칭하기
            </button>
            <button
              onClick={handleCancel}
              className="bg-rose-700 text-white w-full p-2 rounded"
            >
              취소하기
            </button>
            <img src={downloadImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
