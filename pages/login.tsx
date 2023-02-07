import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";

import axios from "axios"
import { SET_TOKEN } from "../Store/Auth";
import { useRouter } from 'next/router'

const login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(id, password);
    logIn();
  };

  const logIn = async ()=>{
      const url = 'http://3.39.118.175:8080/auth/signin'
      const local_utl = 'http://localhost:8080/auth/signin'
      const server_utl = 'http://210.125.212.192:8666/auth/signin'

      await axios.post(server_utl, {
        loginId: id,
        password: password
    })
    .then(function (response) {
        console.log(response.data);
        axios.defaults.headers.common['Authorization'] ='Bearer '+response.data.data.accessToken
        dispatch(SET_TOKEN(response.data.data));
        router.push('/');
    })
    .catch(function (error) {
        alert("로그인 실패! : "+error.message);
    });
  }

  return (
    <>
      <Head>
        <title>TONTON - 로그인</title>
      </Head>

      <section className="bg-gray-50 dark:bg-gray-900 font-Pretendard">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="/" className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl dark:text-white text-center pb-5">
                코디위키 - TONTON
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    아이디
                  </label>
                  <input
                    type="text"
                    onChange={onChangeId}
                    name="id"
                    id="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="아이디"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    type="password"
                    onChange={onChangePassword}
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  로그인
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  코디위키 톤톤이 처음이신가요?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-blue-400 hover:underline dark:text-primary-500"
                  >
                    회원가입
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;