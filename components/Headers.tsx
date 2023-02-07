import axios from "axios";
import Link from "next/link";
import React from "react";
import { Cookies, useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN } from "../Store/Auth";

const Headers = () => {
  const login_status = useSelector((state) => {
    //@ts-ignore
    return state.authToken.authenticated;
  });
  const cookie = new Cookies();
  const dispatch = useDispatch();

  const logOut = () => {
    const local_utl = "http://210.125.212.192:8666/auth/signout";
    const token =  cookie.get('TOKEN');

    axios.get(local_utl, { headers: {
      Authorization: `Bearer ${token}`,
    }})
    
    .then((Response) => {
      alert(Response.data.message);
      dispatch(DELETE_TOKEN());
      axios.defaults.headers.common[''];
      cookie.remove('TOKEN');

    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="font-Pretendard">
      <header className="md:ml-auto flex flex-wrap text-gray-600 body-font bg-slate-900 h-[95px]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="font-bold text-xl text-white">TONTON</a>
          </Link>
          {login_status ? (
            <button
              onClick={logOut}
              type="button"
              className="text-white md:ml-auto text-"
            >
              로그아웃
            </button>
          ) : (
            <Link href="/login" legacyBehavior>
              <button type="button" className="text-white md:ml-auto text-">
                로그인
              </button>
            </Link>
          )}
          {/* <Link href="/login" legacyBehavior>
                        <button type="button" className="text-white md:ml-auto text-">로그인</button>
                    </Link> */}
        </div>
      </header>
    </div>
  );
};

export default Headers;
